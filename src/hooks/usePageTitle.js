import { useEffect } from 'react'

export function usePageTitle(title, description) {
  useEffect(() => {
    document.title = `${title} | PlayWay Learning`
    const meta = document.querySelector('meta[name="description"]')
    if (meta && description) meta.setAttribute('content', description)
  }, [title, description])
}
