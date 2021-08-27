import { useEffect, useState } from 'react'

const useSections = (selector) => {
  const [sections, setSections] = useState([])

  useEffect(() => {
    const elements = document.querySelectorAll(selector)
    setSections(Object.values(elements))
  }, [selector])

  const getIDs = () => {
    if (sections?.length === 0 || !sections) {
      return []
    }
    return sections.map((section) => section.id)
  }

  const getTitles = () => {
    if (sections?.length === 0 || !sections) {
      return []
    }
    return sections.map((section) => section.dataset.title)
  }

  return { sections, getIDs, getTitles }
}

export default useSections
