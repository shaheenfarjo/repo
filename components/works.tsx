"use client"

import { motion } from "framer-motion"
import { ArrowUpRight } from "lucide-react"
import { projects, type Project } from "@/lib/site"
import { SectionHeader } from "./section-header"

function ProjectRow({ project, index }: { project: Project; index: number }) {
  const content = (
    <div className="grid gap-4 md:grid-cols-12 md:items-baseline">
      {/* Index + year */}
      <div className="md:col-span-2 flex md:flex-col gap-3 md:gap-2 font-mono text-xs text-muted-foreground tracking-widest">
        <span className="text-accent">0{index + 1}</span>
        <span>{project.year}</span>
      </div>

      {/* Title */}
      <div className="md:col-span-5">
        <h3 className="font-sans text-4xl md:text-6xl font-light tracking-tight transition-transform duration-500 ease-out md:group-hover:translate-x-5 flex items-baseline gap-4 flex-wrap">
          {project.title}
          {project.arabic && (
            <span lang="ar" dir="rtl" className="font-arabic text-2xl md:text-3xl text-white/30">
              {project.arabic}
            </span>
          )}
          {project.href && (
            <ArrowUpRight
              aria-hidden="true"
              className="w-6 h-6 md:w-8 md:h-8 self-center text-white/40 transition-all duration-500 group-hover:text-accent group-hover:rotate-45"
            />
          )}
        </h3>
        <p className="mt-2 font-mono text-[10px] tracking-[0.3em] text-muted-foreground uppercase">{project.role}</p>
      </div>

      {/* Description + tags */}
      <div className="md:col-span-5">
        <p className="text-base leading-relaxed text-muted-foreground group-hover:text-foreground transition-colors duration-300">
          {project.description}
        </p>
        <ul className="mt-4 flex gap-2 flex-wrap" aria-label="Tags">
          {project.tags.map((tag) => (
            <li
              key={tag}
              className="font-mono text-[10px] tracking-wider px-3 py-1 border border-white/20 rounded-full text-muted-foreground"
            >
              {tag}
            </li>
          ))}
        </ul>
      </div>
    </div>
  )

  return (
    <motion.li
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8, delay: index * 0.1 }}
      className="relative border-t border-white/10"
    >
      {project.href ? (
        <a
          href={project.href}
          target="_blank"
          rel="noopener noreferrer"
          data-cursor-hover
          className="group block py-10 md:py-14"
        >
          {content}
        </a>
      ) : (
        <div className="group py-10 md:py-14">{content}</div>
      )}
    </motion.li>
  )
}

export function Works() {
  return (
    <section id="work" aria-labelledby="work-title" className="relative py-24 px-6 md:px-12 md:py-32 scroll-mt-20">
      <SectionHeader index="02" label="SELECTED WORK" title="Things I wish existed" id="work-title" />

      <ul>
        {projects.map((project, index) => (
          <ProjectRow key={project.title} project={project} index={index} />
        ))}
      </ul>

      <div className="border-t border-white/10" />
    </section>
  )
}
