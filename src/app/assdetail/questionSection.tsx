import Image from 'next/image';
import React from 'react';

export const QuestionSection: React.FC = () => {
  return (
    <div className="mt-8">
      <div className="flex justify-between items-center mb-4">
        <span className="px-4 py-1 bg-gray-100 rounded-full text-sm text-gray-700">
          Multiple choice Questions
        </span>
        <button className="text-sm text-gray-600 hover:text-gray-800">+ Add Section</button>
      </div>
      
      <div className="bg-white rounded-lg p-8 border border-gray-200 flex flex-col items-center">
        <Image 
          src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjQiIGhlaWdodD0iMjQiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgZmlsbC1ydWxlPSJldmVub2RkIiBjbGlwLXJ1bGU9ImV2ZW5vZGQiPjxwYXRoIGQ9Ik00IDIyaC0ydi00aDJ2NHptMi0yMGgydjIwaC0ydi0yMHptNCAyMGgtMnYtMTZoMnYxNnptNCAwaC0ydi04aDJ2OHptNCAwaC0ydi0xMmgydjEyem00LTE4djE4aC0ydi0xOGgyeiIvPjwvc3ZnPg=="
          alt="No questions"
          className="w-16 h-16 mb-4 opacity-50"
        />
        <p className="text-gray-500 mb-4">No questions added yet</p>
        <p className="text-gray-400 text-sm mb-6">Choose how you want to add one or more questions below</p>
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