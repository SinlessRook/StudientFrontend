import React from 'react'
import Hero from '../components/LandingPage/Hero'
import Learnmore from '../components/LandingPage/Learnmore'
import Navbar from '../components/LandingPage/Navbar'
import { useRef } from 'react'
const LandingPage = () => {
    const ref=useRef(null)
    return (
        <>
            <Hero scroll={ref} />
            <div ref={ref} />
            <Learnmore />
        </>
    )
}

export default LandingPage