import React from "react";
import AddQuestionForm from "./QuestionForm";

const PopUpExample = (props) => {
  const setIsOpen = props.setIsOpen;
  const setsubmit = props.setsubmit;
  return (
    <>
    <div className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-50 flex items-center justify-center z-50 p-10">
      <AddQuestionForm setIsOpen={setIsOpen} setsubmit={setsubmit}/>
    </div>
    </>
  );
};

export default PopUpExample;


