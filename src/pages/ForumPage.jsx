import React, { useState } from 'react'
import Section from '../components/ForumPage/Section'
import QuestionList from '../components/ForumPage/QuestionList'

const ForumPage = () => {
  const [submit,setsubmit]=useState(0)
  const [flair,setFlair]=useState("general")
  return (
    <div className="min-h-screen bg-gradient-to-tr from-[#7493A8] to-[#fff8ef]  px-10 py-8 text-[#2A2A31]">
      <Section setsubmit={setsubmit} setFlair={setFlair} flair={flair}/>
      <QuestionList submit={submit} flair={flair}/>

    </div>
  )
}

export default ForumPage