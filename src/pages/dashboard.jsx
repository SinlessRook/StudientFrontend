import React from 'react'
import ScheduleHeader from '../components/DashboardPage/ScheduleHeader'
import MainContent from '../components/DashboardPage/MainContent'

const Dashboard = () => {
    return (
        <>
            <div className='bg-gradient-to-tr from-[#7493A8] to-[#fff8ef] px-10 py-8 text-[#2A2A31]'>
                <ScheduleHeader />
                <MainContent />
            </div>
        </>
    )
}

export default Dashboard