import React, { useState } from 'react'
import PopUpExample from './Answer';

const Section = () => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <>

            <header className="flex justify-between items-center border-b-2 border-gray-900 pb-4">
                <h1 className="text-3xl font-bold">Lets Discuss</h1>
                <button
                    onClick={() => { setIsOpen(true) }}
                    className="bg-gray-900 text-amber-50 px-8 py-2 rounded-full hover:bg-amber-50 hover:text-gray-900 border hover:border-gray-900">
                    Ask a Question
                </button>
            </header>
            <div className="flex gap-2 mt-5">
                <button className="border border-black rounded-2xl px-6 py-1">General Discussion</button>
                <button className="border border-black rounded-2xl px-6 py-1">Assignment</button>
                <button className="border border-black rounded-2xl px-6 py-1">Questions</button>
            </div>
            {isOpen && <PopUpExample setIsOpen={setIsOpen} />}
        </>
    )
}

export default Section