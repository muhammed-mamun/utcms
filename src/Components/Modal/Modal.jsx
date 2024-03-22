import { X } from "lucide-react";
import React from "react";
const Modal = ({ onClose }) => {
  return (
    <div className="fixed inset-0 bg-black bg-opacity-30 backdrop-blur-sm flex justify-center items-center">
      <div className="mt-10 flex flex-col gap-5 text-white">
        <button onClick={onClose} className="place-self-end">
          <X size={30} />
        </button>
        <div className="bg-indigo-600 rounded-xl px-20 py-10 flex flex-col gap-5 items-center mx-4">
          <div className="">
            {/* Here will be two card teacher and student to toggle form */}
          
          </div>
        </div>
      </div>
    </div>
  );
};

export default Modal;
