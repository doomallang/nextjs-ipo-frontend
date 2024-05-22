'use client'

import { useEffect } from 'react'

export default function App() {
  useEffect(() => {
    window.location.replace('/home')
  }, [])

  return <div></div>
}
