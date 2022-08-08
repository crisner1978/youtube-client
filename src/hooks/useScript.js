import React, { useEffect } from 'react'

const useScript = (url, onload) => {
  useEffect(() => {
    let script = document.createElement("script")

    script.src = url

    script.onload = onload

    document.head.appendChild(script)

    return () => document.head.removeChild(script)
  },[onload, url])
}

export default useScript