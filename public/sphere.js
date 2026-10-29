// The hero's wireframe sphere: a noise-displaced icosphere drawn as lines.
// Plain WebGL with no dependencies, ported from the three.js version in the
// portfolio (de89438). The page loads it only once it is idle; see
// components/enhancements-script.tsx.
//
// mountSphere(container, options) adds a canvas to `container` and returns a
// function that removes it. Options:
//   detail     subdivisions per icosahedron edge (default 48)
//   frozenTime render one frame at this time and stop (used for snapshots)

const VERTEX_SHADER = `
attribute vec3 position;
uniform mat4 modelView;
uniform mat4 projection;
uniform float time;
varying float vDisplacement;
varying float vFacing;
varying vec2 vUv;

vec3 mod289(vec3 x) { return x - floor(x * (1.0 / 289.0)) * 289.0; }
vec4 mod289(vec4 x) { return x - floor(x * (1.0 / 289.0)) * 289.0; }
vec4 permute(vec4 x) { return mod289(((x * 34.0) + 1.0) * x); }
vec4 taylorInvSqrt(vec4 r) { return 1.79284291400159 - 0.85373472095314 * r; }

float snoise(vec3 v) {
  const vec2 C = vec2(1.0 / 6.0, 1.0 / 3.0);
  const vec4 D = vec4(0.0, 0.5, 1.0, 2.0);
  vec3 i = floor(v + dot(v, C.yyy));
  vec3 x0 = v - i + dot(i, C.xxx);
  vec3 g = step(x0.yzx, x0.xyz);
  vec3 l = 1.0 - g;
  vec3 i1 = min(g.xyz, l.zxy);
  vec3 i2 = max(g.xyz, l.zxy);
  vec3 x1 = x0 - i1 + C.xxx;
  vec3 x2 = x0 - i2 + C.yyy;
  vec3 x3 = x0 - D.yyy;
  i = mod289(i);
  vec4 p = permute(permute(permute(
    i.z + vec4(0.0, i1.z, i2.z, 1.0))
    + i.y + vec4(0.0, i1.y, i2.y, 1.0))
    + i.x + vec4(0.0, i1.x, i2.x, 1.0));
  float n_ = 0.142857142857;
  vec3 ns = n_ * D.wyz - D.xzx;
  vec4 j = p - 49.0 * floor(p * ns.z * ns.z);
  vec4 x_ = floor(j * ns.z);
  vec4 y_ = floor(j - 7.0 * x_);
  vec4 x = x_ * ns.x + ns.yyyy;
  vec4 y = y_ * ns.x + ns.yyyy;
  vec4 h = 1.0 - abs(x) - abs(y);
  vec4 b0 = vec4(x.xy, y.xy);
  vec4 b1 = vec4(x.zw, y.zw);
  vec4 s0 = floor(b0) * 2.0 + 1.0;
  vec4 s1 = floor(b1) * 2.0 + 1.0;
  vec4 sh = -step(h, vec4(0.0));
  vec4 a0 = b0.xzyw + s0.xzyw * sh.xxyy;
  vec4 a1 = b1.xzyw + s1.xzyw * sh.zzww;
  vec3 p0 = vec3(a0.xy, h.x);
  vec3 p1 = vec3(a0.zw, h.y);
  vec3 p2 = vec3(a1.xy, h.z);
  vec3 p3 = vec3(a1.zw, h.w);
  vec4 norm = taylorInvSqrt(vec4(dot(p0, p0), dot(p1, p1), dot(p2, p2), dot(p3, p3)));
  p0 *= norm.x;
  p1 *= norm.y;
  p2 *= norm.z;
  p3 *= norm.w;
  vec4 m = max(0.6 - vec4(dot(x0, x0), dot(x1, x1), dot(x2, x2), dot(x3, x3)), 0.0);
  m = m * m;
  return 42.0 * dot(m * m, vec4(dot(p0, x0), dot(p1, x1), dot(p2, x2), dot(p3, x3)));
}

void main() {
  vec3 normal = normalize(position);
  float displacement = snoise(position * 1.5 + time * 0.15) * 0.15;
  vDisplacement = displacement;
  vUv = vec2(atan(normal.z, normal.x) / 6.2831853 + 0.5, asin(normal.y) / 3.1415927 + 0.5);
  // Facing the camera: +1 at the front of the sphere, -1 at the back
  vFacing = (modelView * vec4(normal, 0.0)).z;
  gl_Position = projection * modelView * vec4(position + normal * displacement, 1.0);
}
`

const FRAGMENT_SHADER = `
precision mediump float;
uniform vec3 ink;
varying float vDisplacement;
varying float vFacing;
varying vec2 vUv;

void main() {
  // Front lines strong, back lines faint, ridges a little brighter
  float alpha = mix(0.04, 0.28, smoothstep(-0.35, 0.6, vFacing));
  alpha *= clamp(0.85 + vDisplacement * 3.0, 0.4, 1.4);
  // A coarse latitude/longitude grid reads through the mesh, as in the original
  float grid = smoothstep(0.0, 0.02, abs(fract(vUv.x * 20.0) - 0.5)) * smoothstep(0.0, 0.02, abs(fract(vUv.y * 20.0) - 0.5));
  alpha *= 1.0 + (1.0 - grid) * 0.6;
  gl_FragColor = vec4(ink * alpha, alpha);
}
`

// Line segments for an icosphere, subdivided like three.js's IcosahedronGeometry.
// Every edge of a triangular grid belongs to exactly one upward-pointing
// triangle, so emitting those triangles' edges draws each interior edge once.
function icosphereLines(radius, detail) {
  const t = (1 + Math.sqrt(5)) / 2
  const base = [
    [-1, t, 0], [1, t, 0], [-1, -t, 0], [1, -t, 0],
    [0, -1, t], [0, 1, t], [0, -1, -t], [0, 1, -t],
    [t, 0, -1], [t, 0, 1], [-t, 0, -1], [-t, 0, 1],
  ]
  const faces = [
    [0, 11, 5], [0, 5, 1], [0, 1, 7], [0, 7, 10], [0, 10, 11],
    [1, 5, 9], [5, 11, 4], [11, 10, 2], [10, 7, 6], [7, 1, 8],
    [3, 9, 4], [3, 4, 2], [3, 2, 6], [3, 6, 8], [3, 8, 9],
    [4, 9, 5], [2, 4, 11], [6, 2, 10], [8, 6, 7], [9, 8, 1],
  ]
  const cols = detail + 1
  const out = new Float32Array(faces.length * ((cols * (cols + 1)) / 2) * 18)
  let n = 0
  const point = (a, b, c, i, j) => {
    const rows = cols - i
    const u = i / cols
    const w = rows === 0 ? 0 : j / rows
    const x = (a[0] + (c[0] - a[0]) * u) * (1 - w) + (b[0] + (c[0] - b[0]) * u) * w
    const y = (a[1] + (c[1] - a[1]) * u) * (1 - w) + (b[1] + (c[1] - b[1]) * u) * w
    const z = (a[2] + (c[2] - a[2]) * u) * (1 - w) + (b[2] + (c[2] - b[2]) * u) * w
    const s = radius / Math.hypot(x, y, z)
    return [x * s, y * s, z * s]
  }
  const push = (p, q) => {
    out[n++] = p[0]; out[n++] = p[1]; out[n++] = p[2]
    out[n++] = q[0]; out[n++] = q[1]; out[n++] = q[2]
  }
  for (const [ia, ib, ic] of faces) {
    const a = base[ia], b = base[ib], c = base[ic]
    for (let i = 0; i < cols; i++) {
      for (let j = 0; j < cols - i; j++) {
        const p0 = point(a, b, c, i, j)
        const p1 = point(a, b, c, i, j + 1)
        const p2 = point(a, b, c, i + 1, j)
        push(p0, p1)
        push(p1, p2)
        push(p2, p0)
      }
    }
  }
  return out.subarray(0, n)
}

function perspective(fovY, aspect, near, far) {
  const f = 1 / Math.tan(fovY / 2)
  const nf = 1 / (near - far)
  return new Float32Array([f / aspect, 0, 0, 0, 0, f, 0, 0, 0, 0, (far + near) * nf, -1, 0, 0, 2 * far * near * nf, 0])
}

// Rotation (x, then y, then z, as three.js's default Euler order) followed by
// moving the sphere `distance` units in front of the camera
function modelView(rx, ry, rz, distance) {
  const [a, b] = [Math.cos(rx), Math.sin(rx)]
  const [c, d] = [Math.cos(ry), Math.sin(ry)]
  const [e, f] = [Math.cos(rz), Math.sin(rz)]
  const ae = a * e, af = a * f, be = b * e, bf = b * f
  // Column-major
  return new Float32Array([
    c * e, af + be * d, bf - ae * d, 0,
    -c * f, ae - bf * d, be + af * d, 0,
    d, -b * c, a * c, 0,
    0, 0, -distance, 1,
  ])
}

function inkColor() {
  const value = getComputedStyle(document.documentElement).getPropertyValue("--ink").trim()
  const hex = value.replace("#", "")
  const full = hex.length === 3 ? [...hex].map((ch) => ch + ch).join("") : hex
  return [0, 2, 4].map((i) => parseInt(full.slice(i, i + 2), 16) / 255)
}

function compile(gl, type, source) {
  const shader = gl.createShader(type)
  gl.shaderSource(shader, source)
  gl.compileShader(shader)
  if (!gl.getShaderParameter(shader, gl.COMPILE_STATUS)) throw new Error(gl.getShaderInfoLog(shader) || "shader")
  return shader
}

export function mountSphere(container, { detail = 48, frozenTime } = {}) {
  const canvas = document.createElement("canvas")
  canvas.style.cssText = "position:absolute;inset:0;width:100%;height:100%"
  const gl = canvas.getContext("webgl", { alpha: true, antialias: true, premultipliedAlpha: true })
  if (!gl) return null

  const program = gl.createProgram()
  gl.attachShader(program, compile(gl, gl.VERTEX_SHADER, VERTEX_SHADER))
  gl.attachShader(program, compile(gl, gl.FRAGMENT_SHADER, FRAGMENT_SHADER))
  gl.linkProgram(program)
  gl.useProgram(program)

  const lines = icosphereLines(1.8, detail)
  gl.bindBuffer(gl.ARRAY_BUFFER, gl.createBuffer())
  gl.bufferData(gl.ARRAY_BUFFER, lines, gl.STATIC_DRAW)
  const position = gl.getAttribLocation(program, "position")
  gl.enableVertexAttribArray(position)
  gl.vertexAttribPointer(position, 3, gl.FLOAT, false, 0, 0)

  const uniform = (name) => gl.getUniformLocation(program, name)
  const u = { modelView: uniform("modelView"), projection: uniform("projection"), time: uniform("time"), ink: uniform("ink") }

  gl.disable(gl.DEPTH_TEST)
  gl.enable(gl.BLEND)
  gl.blendFunc(gl.ONE, gl.ONE_MINUS_SRC_ALPHA)
  gl.clearColor(0, 0, 0, 0)
  gl.uniformMatrix4fv(u.projection, false, perspective((45 * Math.PI) / 180, 1, 0.1, 100))
  gl.uniform3fv(u.ink, inkColor())

  let width = 0
  const resize = () => {
    const dpr = Math.min(window.devicePixelRatio || 1, 2)
    width = Math.round(container.clientWidth * dpr)
    const height = Math.round(container.clientHeight * dpr)
    canvas.width = width
    canvas.height = height
    gl.viewport(0, 0, width, height)
    gl.uniformMatrix4fv(u.projection, false, perspective((45 * Math.PI) / 180, width / Math.max(height, 1), 0.1, 100))
  }

  // Same motion as the original: a slow spin, tilting toward the pointer
  const state = { time: frozenTime ?? 0, rx: 0, ry: 0, rz: 0, px: 0, py: 0 }
  const draw = () => {
    gl.clear(gl.COLOR_BUFFER_BIT)
    gl.uniform1f(u.time, state.time)
    gl.uniformMatrix4fv(u.modelView, false, modelView(state.rx, state.ry, state.rz, 5.6))
    gl.drawArrays(gl.LINES, 0, lines.length / 3)
  }

  container.appendChild(canvas)
  resize()

  if (frozenTime !== undefined) {
    state.ry = frozenTime * 0.05
    draw()
    return () => canvas.remove()
  }

  let frame = 0
  let last = performance.now()
  let visible = true
  const tick = (now) => {
    const dt = Math.min((now - last) / 1000, 0.1)
    last = now
    state.time += dt
    state.ry += dt * 0.05
    state.rx += (state.py * 0.2 - state.rx) * 0.05
    state.rz += (state.px * 0.2 - state.rz) * 0.05
    draw()
    frame = requestAnimationFrame(tick)
  }
  const run = () => {
    cancelAnimationFrame(frame)
    if (visible && !document.hidden) {
      last = performance.now()
      frame = requestAnimationFrame(tick)
    }
  }

  const onPointer = (event) => {
    state.px = (event.clientX / window.innerWidth) * 2 - 1
    state.py = -((event.clientY / window.innerHeight) * 2 - 1)
  }
  const onTheme = new MutationObserver(() => {
    gl.uniform3fv(u.ink, inkColor())
    draw()
  })
  const onScreen = new IntersectionObserver(([entry]) => {
    visible = entry.isIntersecting
    run()
  })
  const onResize = new ResizeObserver(() => {
    resize()
    draw()
  })

  window.addEventListener("pointermove", onPointer, { passive: true })
  document.addEventListener("visibilitychange", run)
  onTheme.observe(document.documentElement, { attributes: true, attributeFilter: ["data-theme"] })
  onScreen.observe(container)
  onResize.observe(container)
  run()

  return () => {
    cancelAnimationFrame(frame)
    window.removeEventListener("pointermove", onPointer)
    document.removeEventListener("visibilitychange", run)
    onTheme.disconnect()
    onScreen.disconnect()
    onResize.disconnect()
    canvas.remove()
  }
}
