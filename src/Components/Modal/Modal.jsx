import { X } from "lucide-react";
import React, { useState } from "react";
import StudentSignUp from "../SignUp/StudentSignUp";
import TeacherSignUp from "../SignUp/TeacherSignUp";
const Modal = ({ onClose }) => {
    const [isTeacherActive, setIsTeacherActive] = useState(false)
    const [isStudentActive, setIsStudentActive] = useState(false)
    
    const teacherHandleClick = () =>{
        setIsTeacherActive(true)
        setIsStudentActive(false)
    }
    const studentHandleClick = () =>{
        setIsStudentActive(true)
        setIsTeacherActive(false)
    }
  return (
    <div className="fixed inset-0 bg-black bg-opacity-30 backdrop-blur-sm flex justify-center items-center">
      <div className="mt-10 flex flex-col gap-5 text-white">
        <button onClick={onClose} className="place-self-end">
          <X size={30} />
        </button>
        <div className="bg-[#d9d9d9] rounded-xl px-20 py-10 flex flex-col gap-5 items-center mx-4">
          <div className=" flex gap-2">
            {/* Here will be two card teacher and student to toggle form */}
            <button onClick={teacherHandleClick} class={` hover:bg-green-700 text-white py-2 px-2 rounded-xl ${isTeacherActive? 'bg-green-500':'bg-[#0886BC]'}`}>
              Teacher
            </button>
            <button onClick={studentHandleClick} class={`${isStudentActive ? 'bg-green-500': 'bg-[#0886BC]'} hover:bg-green-500 text-white py-2 px-2 rounded-xl`}>
              Student
            </button>
          </div>
          { isTeacherActive ? <TeacherSignUp/> : <StudentSignUp/>}
        </div>
      </div>
    </div>
  );
};

export default Modal;
