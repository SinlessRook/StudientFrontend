import React from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFilter,faSort} from '@fortawesome/free-solid-svg-icons';
const QuestionList = () => {
  return (
    <div className='flex flex-row m-12 justify-center gap-4'>
        <input  className="px-4 rounded-3xl border border-gray-900 w-3/4 " type="text" placeholder='Search Questions' />
        <div className="flex gap-2 items-center">
                        <FontAwesomeIcon  className="px-1 w-5 h-10" icon={faFilter} />
                        <FontAwesomeIcon className="px-1 w-5 h-7" icon={faSort} />
                    </div>
        
    </div>

  )
}

export default QuestionList