import React, { useState } from 'react'
import Section from '../components/ForumPage/Section'
import QuestionList from '../components/ForumPage/QuestionList'

const ForumPage = () => {
  const [submit,setsubmit]=useState(0)
  return (
    <div className="min h-screen bg-gradient-to-tr from-[#7493A8] to-[#fff8ef]  px-10 py-8 text-[#2A2A31]">
      <Section setsubmit={setsubmit}/>
      <QuestionList submit={submit}/>

    </div>
  )
}

export default ForumPage