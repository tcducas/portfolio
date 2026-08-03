import { useEffect, useState } from 'react'

const CHAR_DELAY = 22
const LINE_PAUSE = 380

// Digita `lines` (array de {prompt, output}) uma a uma, caractere por caractere.
// Com `skip: true` (prefers-reduced-motion), entrega tudo já pronto de uma vez.
export function useTypewriter(lines, { skip = false } = {}) {
  const [lineIndex, setLineIndex] = useState(skip ? lines.length : 0)
  const [promptText, setPromptText] = useState('')
  const [outputText, setOutputText] = useState('')
  const [completedLines, setCompletedLines] = useState(skip ? lines : [])

  useEffect(() => {
    if (skip || lineIndex >= lines.length) return

    const current = lines[lineIndex]
    let cancelled = false
    let timer

    function typePrompt(i = 0) {
      if (cancelled) return
      if (i <= current.prompt.length) {
        setPromptText(current.prompt.slice(0, i))
        timer = setTimeout(() => typePrompt(i + 1), CHAR_DELAY)
      } else if (current.output) {
        typeOutput(0)
      } else {
        finishLine()
      }
    }

    function typeOutput(i = 0) {
      if (cancelled) return
      if (i <= current.output.length) {
        setOutputText(current.output.slice(0, i))
        timer = setTimeout(() => typeOutput(i + 1), CHAR_DELAY)
      } else {
        finishLine()
      }
    }

    function finishLine() {
      timer = setTimeout(() => {
        if (cancelled) return
        setCompletedLines((prev) => [...prev, current])
        setPromptText('')
        setOutputText('')
        setLineIndex((idx) => idx + 1)
      }, LINE_PAUSE)
    }

    typePrompt(0)

    return () => {
      cancelled = true
      clearTimeout(timer)
    }
  }, [lineIndex, skip, lines])

  return {
    completedLines,
    promptText,
    outputText,
    done: skip || lineIndex >= lines.length,
  }
}
