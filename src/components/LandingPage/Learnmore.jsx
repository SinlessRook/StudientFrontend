import React from 'react'
import img from '../../assets/BackgroundLandingPage.jpeg'
import { motion } from 'framer-motion'
import { useState } from 'react'
import { useEffect } from 'react'
const Learnmore = () => {
  const [selectedText, setselectedText] = useState("Consistency Is The KEY")
  const [imgAddress, setimgAddress] = useState("https://img.freepik.com/premium-vector/business-man-pushes-recycling-symbol-up-hill-trying-create-company-help-fight-eco-problems_198530-7404.jpg?uid=R182416792&ga=GA1.1.321317949.1696341147&semt=ais_hybrid")
  const [animationKey, setAnimationKey] = useState(0);
  useEffect(() => {
    setAnimationKey((prevKey) => prevKey + 1);
  }, [selectedText])
  return (
    <div className='flex justify-center p-8 gap-16 flex-col'
      style={{ backgroundImage: `url(${img})`, backgroundSize: 'cover' }}>
      <div className="w-full flex justify-center">
        <motion.h1
          key={animationKey}
          initial={{ opacity: 0, y: 20, scale: 0.8 }}
          whileInView={{ opacity: 1, y: 0, scale: 1, transition: { duration: 1, delay: 0.2, ease: 'easeInOut' } }}
          className="text-5xl font-bold underline">
          {
            selectedText
          }</motion.h1>
      </div>
      <div className="flex mt-4 gap-16 space-x-8 mx-8">
        <div className='min-w-[700px] h-[400px]'>
          <motion.img
            key={animationKey}
            initial={{ opacity: 0, y: 20, scaleX: 0.5 }}
            whileInView={{ opacity: 1, y: 0, scaleX: 1, transition: { duration: 1, delay: 0.2, ease: 'easeInOut' } }}
            className='w-[700px] h-[400px] bg-transparent rounded-3xl'
            src={imgAddress} alt="" />
        </div>

        <div

          className='flex flex-col gap-4 w-full'>
          <motion.div
            onMouseOver={() => { setselectedText("One Step At A Time"); setimgAddress("https://img.freepik.com/free-vector/lovely-hand-drawn-planning-schedule-concept_23-2147956312.jpg?uid=R182416792&ga=GA1.1.321317949.1696341147&semt=ais_hybrid") }}
            onMouseOut={() => { setselectedText("Consistency Is The KEY"); setimgAddress("https://img.freepik.com/premium-vector/business-man-pushes-recycling-symbol-up-hill-trying-create-company-help-fight-eco-problems_198530-7404.jpg?uid=R182416792&ga=GA1.1.321317949.1696341147&semt=ais_hybrid") }}
            initial={{ opacity: 0, y: 20, scale: 0.5, overflow: 'hidden', maxHeight: '90px', transformOrigin: 'left' }}
            whileInView={{ opacity: 1, y: 0, scale: 1, transition: { duration: 0.8, delay: 0.2, ease: 'easeInOut' } }}
            whileHover={{
              scale: 0.9, y: -30, cursor: 'pointer', overflow: 'visible', maxHeight: '400px',
              transition: { duration: 0.5, delay: 0.4, ease: 'easeInOut', reverse: true }
            }}
            className='flex flex-col rounded-3xl bg-[linear-gradient(121deg,rgba(20,131,105,1)4%,rgba(219,226,233,1)87%)] w-full px-8 py-8 '>
            <h3 className="text-lg font-bold"> Prepare a Schedule: Plan Your Day, Week, or Semester</h3>
            <br />
            <motion.p
              initial={{ opacity: 0, y: 20, scale: 0.5 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ amount: 0.8 }}
              transition={{ duration: 0.6, ease: 'easeInOut' }}
            >
              <h6>What It Does:</h6>
              <br />
              <ul className='list-disc pl-5'>
                <li>Input your classes, assignments, and exam dates.</li>
                <li>Automatically generate a study timetable based on your workload.</li>
                <li>Easily adjust schedules to accommodate new tasks or unexpected events.</li>
              </ul>
              <br />
              <h6>How It Helps:</h6>
              <br />
              <ul className='list-disc pl-5'>
                <li>Saves time by automating schedule creation.</li>
                <li>Ensures you allocate time for every subject, avoiding last-minute cramming.</li>
                <li>Promotes consistency and builds habits with a structured routine.</li>
              </ul>
            </motion.p>
            <br />
          </motion.div>

          <motion.div
             onMouseOver={() => { setselectedText("Focus On What Matters"); setimgAddress("https://img.freepik.com/premium-photo/planning-education-people-concept-smiling-young-woman-drawing-scheme-transparent-screen-white-background_380164-66047.jpg?uid=R182416792&ga=GA1.1.321317949.1696341147&semt=ais_hybrid") }}
             onMouseOut={() => { setselectedText("Consistency Is The KEY"); setimgAddress("https://img.freepik.com/premium-vector/business-man-pushes-recycling-symbol-up-hill-trying-create-company-help-fight-eco-problems_198530-7404.jpg?uid=R182416792&ga=GA1.1.321317949.1696341147&semt=ais_hybrid") }}
            initial={{ opacity: 0, y: 20, scale: 0.5, overflow: 'hidden', maxHeight: '90px', transformOrigin: 'left' }}
            whileInView={{ opacity: 1, y: 0, scale: 1, transition: { duration: 0.8, delay: 0.2, ease: 'easeInOut' } }}
            whileHover={{
              scale: 0.9, y: -40, cursor: 'pointer', overflow: 'visible', maxHeight: '400px',
              transition: { duration: 0.5, delay: 0.4, ease: 'easeInOut', reverse: true }
            }}
            className='flex flex-col rounded-3xl bg-[linear-gradient(121deg,rgba(20,131,105,1)4%,rgba(219,226,233,1)87%)] w-full px-8 py-8 '>
            <h3 className="text-lg font-bold">Focus Area: Prioritize Key Topics and Questions</h3>
            <br />
            <motion.p
              initial={{ opacity: 0, y: 20, scale: 0.5 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ amount: 0.8 }}
              transition={{ duration: 0.6, ease: 'easeInOut' }}
            >
              <h6>What It Does:</h6>
              <br />
              <ul className='list-disc pl-5'>
                <li>The app analyzes patterns from previous question papers to highlight critical areas students should focus on. It organizes topics based on their importance, frequency, and relevance to exams.</li>
              </ul>
              <br />
              <h6>How It Helps:</h6>
              <br />
              <ul className='list-disc pl-5'>
                <li>Save Time: Focus on high-priority topics without wasting time on less relevant areas.</li>
                <li>Increase Confidence: Be well-prepared for frequently asked questions.</li>
                <li>Improve Scores: Tackle questions designed to maximize marks.</li>
              </ul>
            </motion.p>
            <br />
          </motion.div>

          <motion.div
            onMouseOver={() => { setselectedText("Be your Own Teacher"); setimgAddress("https://img.freepik.com/free-photo/senior-women-spending-time-together-cafe-talking-working_23-2149260275.jpg?uid=R182416792&ga=GA1.1.321317949.1696341147&semt=ais_hybrid") }}
            onMouseOut={() => { setselectedText("Consistency Is The KEY"); setimgAddress("https://img.freepik.com/premium-vector/business-man-pushes-recycling-symbol-up-hill-trying-create-company-help-fight-eco-problems_198530-7404.jpg?uid=R182416792&ga=GA1.1.321317949.1696341147&semt=ais_hybrid") }}
            
            initial={{ opacity: 0, y: 20, scale: 0.5, overflow: 'hidden', maxHeight: '90px', transformOrigin: 'left' }}
            whileInView={{ opacity: 1, y: 0, scale: 1, transition: { duration: 0.8, delay: 0.2, ease: 'easeInOut' } }}
            whileHover={{
              scale: 0.9, y: -50, cursor: 'pointer', overflow: 'visible', maxHeight: '400px',
              transition: { duration: 0.5, delay: 0.4, ease: 'easeInOut', reverse: true }
            }}
            className='flex flex-col rounded-3xl bg-[linear-gradient(121deg,rgba(20,131,105,1)4%,rgba(219,226,233,1)87%)] w-full px-8 py-8 '>
            <h3 className="text-lg font-bold">Forum: Collaborate and Learn with Peers</h3>
            <br />
            <motion.p
              initial={{ opacity: 0, y: 20, scale: 0.5 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ amount: 0.8 }}
              transition={{ duration: 0.6, ease: 'easeInOut' }}
            >
              <h6>What It Does:</h6>
              <br />
              <ul className='list-disc pl-5'>
                <li>Post questions or share study tips with a community of students.</li>
                <li>Join discussion threads related to specific subjects or exams or assignments.</li>
                <li>Upvote helpful answers and build connections with peers.</li>
              </ul>
              <br />
              <h6>How It Helps:</h6>
              <br />
              <ul className='list-disc pl-5'>
                <li>Creates a sense of community where students support each other.</li>
                <li>Provides quick solutions to academic challenges.</li>
                <li>Helps build confidence by contributing to discussions and learning from others.</li>
              </ul>
            </motion.p>
            <br />
          </motion.div>
        </div>
      </div>
      <div className="flex px-6 gap-4 item-center justify-center">
        <button
          className="flex items-center justify-center w-auto px-6 py-2.5 text-center text-white duration-200 
         bg-black border-2 border-black rounded-full nline-flex hover:bg-transparent px-16
         hover:border-black hover:text-black focus:outline-none focus-visible:outline-black text-3xl focus-visible:ring-black" href="#">
          Sign Up
        </button>
        <button
          className="flex items-center justify-center w-auto px-6 py-2.5 text-center text-white duration-200 
         bg-black border-2 border-black rounded-full nline-flex hover:bg-transparent px-16
         hover:border-black hover:text-black focus:outline-none focus-visible:outline-black text-3xl focus-visible:ring-black" href="#">
          Login
        </button>
      </div>
      <br />
    </div>
  )
}

export default Learnmore