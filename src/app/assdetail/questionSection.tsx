import Image from 'next/image';
import React from 'react';

export const QuestionSection: React.FC = () => {
  return (
    <div className="mt-8">
      <div className="flex justify-between items-center mb-4">
        <div className="px-1 py-1 bg-white rounded-lg text-sm text-[#2E3031]">
          <button className='border-[#5465FF] border-[1px] p-[1px]'> Multiple choice Questions</button>
         
        </div>
        <button className="text-sm text-gray-600 hover:text-gray-800">+ Add Section</button>
      </div>
      
      <div className="bg-white rounded-lg p-8 border border-gray-200 flex flex-col items-center">
        <Image 
          src={'/EmptyState.svg'}
          alt="No questions"
          width={200}
          height={200}
          className="mb-4"
        />
        <p className="text-[#2E3031] mb-2 text-base font-bold text-center">No questions added yet</p>
        <p className="text-[#6C757D] text-sm mb-2 font-normal text-center">Choose how you want to add one or more questions below</p>
        <div className="flex gap-4">
          <button className="px-4 py-2 border border-blue-600 text-blue-600 rounded-md hover:bg-blue-50">
            Question Bank
          </button>
          <button className="px-4 py-2 bg-red-50 text-red-500 rounded-md hover:bg-red-100 flex items-center gap-2">
            <span>Generate using AI</span>
          </button>
        </div>
      </div>
    </div>
  );
}