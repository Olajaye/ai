import React from 'react';
import { FiShare2 } from 'react-icons/fi';
import { RiDeleteBin6Line } from 'react-icons/ri';

interface AssessmentHeaderProps {
  title: string;
  level: string;
  type: string;
}

export const AssessmentHeader: React.FC<AssessmentHeaderProps> = ({ title, level, type }) => {
  return (
    <div className="flex justify-between items-center mb-8">
      <div>
        <h1 className="text-2xl font-semibold text-gray-800 mb-2">{title}</h1>
        <div className="flex gap-2">
          <span className="text-blue-600 text-sm">{level}</span>
          <span className="text-blue-600 text-sm">{type}</span>
        </div>
      </div>
      <div className="flex gap-4">
        <button className="p-2 hover:bg-gray-100 rounded-full">
          <FiShare2 className="text-gray-600 w-5 h-5" />
        </button>
        <button className="p-2 hover:bg-gray-100 rounded-full">
          <RiDeleteBin6Line className="text-red-500 w-5 h-5" />
        </button>
      </div>
    </div>
  );
}