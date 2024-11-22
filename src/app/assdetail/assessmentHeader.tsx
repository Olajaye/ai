import React from 'react';
import { FaPencil } from "react-icons/fa6";
import { RiDeleteBin6Line } from 'react-icons/ri';

interface AssessmentHeaderProps {
  title: string;
  level: string;
  type: string;
}

export const AssessmentHeader: React.FC<AssessmentHeaderProps> = ({ title, level, type }) => {
  return (
    <div className="sm:flex justify-between items-center">
      <div>
        <h1 className="md:text-2xl font-semibold text-gray-800 mb-2">{title}</h1>
        <div className="flex gap-2 mt-4 sm:mt-0">
          <span className="text-blue-600 bg-[#F5F6F7] p-[1px] text-sm">{level}</span>
          <span className="text-blue-600 bg-[#F5F6F7] p-[1px] text-sm">{type}</span>
        </div>
      </div>
      <div className="flex gap-4 mt-4 sm:mt-0">
        <button className="p-2 hover:bg-gray-100 rounded-full">
          <FaPencil className="text-[#5465FF] w-5 h-5" />
        </button>
        <button className="p-2 hover:bg-gray-100 rounded-full">
          <RiDeleteBin6Line className="text-red-500 w-5 h-5" />
        </button>
      </div>
    </div>
  );
}