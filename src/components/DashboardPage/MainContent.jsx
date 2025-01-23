import React from "react";
import ScheduleView from "./ScheduleView";
import Sidebar from "./Sidebar";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFilter,faSort} from '@fortawesome/free-solid-svg-icons';
import { motion } from "framer-motion";
const MainContent = () => {
    const [category, setCategory] = React.useState("All");
    return (
        <div className="flex gap-6 mt-6">
            <div className="flex w-3/4 flex-col gap-4">
                <div className="flex justify-between pr-10">
                    <div className="flex gap-2">
                        <motion.button 
                        whileHover={{ scale: 1.1 }}
                        onClick={() => setCategory('All')}
                        className={`border border-black 
                        rounded-2xl px-6 py-1
                        ${category==='All' ? 'bg-black text-white font-bold' : ''}
                        `}>All</motion.button>
                        <button 
                        onClick={() => setCategory('assignment')}
                        className={`border border-black 
                        rounded-2xl px-6 py-1
                        ${category==='assignment' ? 'bg-black text-white font-bold' : ''}
                        `}>Assignment</button>
                        <button 
                        onClick={() => setCategory('subject')}
                        className={`border border-black 
                        rounded-2xl px-6 py-1
                        ${category==='subject' ? 'bg-black text-white font-bold' : ''}
                        `}>Subjects</button>
                    </div>
                    <div className="flex gap-2 items-center">
                        <FontAwesomeIcon  className="px-1 w-5 h-10" icon={faFilter} />
                        <FontAwesomeIcon className="px-1 w-5 h-7" icon={faSort} />
                    </div>

                </div>
                <ScheduleView category={category} />
            </div>
            <div className="flex w-1/4">
                <Sidebar />
            </div>

        </div>
    );
};

export default MainContent;
