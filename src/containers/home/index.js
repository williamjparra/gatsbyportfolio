import React, {useEffect} from 'react'
import Hero from '../../components/Hero'
import Projects from '../../components/ProjectsComponent'

export default function HomeContainer() {

  useEffect(() => {}, [])

  return (
    <>
      <Hero />
      <Projects />
    </>
  )
}
