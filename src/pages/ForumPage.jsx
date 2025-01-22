import React from 'react'
import Section from '../components/ForumPage/Section'
import QuestionList from '../components/ForumPage/QuestionList'
import Card from '../components/ForumPage/Card'

const ForumPage = () => {
  return (
    <div className="min h-screen bg-gradient-to-tr from-[#7493A8] to-[#fff8ef]  px-10 py-8 text-[#2A2A31]">
      <Section />
      <QuestionList />
      <div className='grid grid-cols-4 gap-4'>
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
      </div>

    </div>
  )
}

export default ForumPage