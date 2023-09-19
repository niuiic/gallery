import { useEffect, useRef } from 'react'

interface Props {
  css?: string
  html?: string
  js?: string
  className?: string
}

export const Frame = (props: Props) => {
  const containerRef = useRef<HTMLDivElement>()
  let shadowRoot: ShadowRoot

  useEffect(() => {
    if (!shadowRoot) {
      const root = containerRef.current?.attachShadow({ mode: 'open' })
      if (!root) {
        return
      }
      shadowRoot = root
    }

    while (shadowRoot.firstChild) {
      shadowRoot.removeChild(shadowRoot.firstChild)
    }

    if (props.html) {
      shadowRoot.innerHTML = props.html
    }
    if (props.css) {
      const style = document.createElement('style')
      style.textContent = props.css
      shadowRoot.appendChild(style)
    }
    if (props.js) {
      const script = document.createElement('script')
      script.textContent = props.js
      shadowRoot.appendChild(script)
    }
  }, [props.js, props.html, props.css])

  return <div ref={containerRef} className={props.className} />
}
