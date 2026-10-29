import { Fragment } from "react"

// Renders the *emphasized* phrase of a copy string as <em>. CSS sets it in
// italic for Latin text and weight 600 for Arabic.
export function Rich({ text }: { text: string }) {
  return (
    <>
      {text.split("*").map((part, index) =>
        index % 2 === 1 ? <em key={index}>{part}</em> : <Fragment key={index}>{part}</Fragment>,
      )}
    </>
  )
}
