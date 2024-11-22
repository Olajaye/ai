import React from 'react';
import { EditIcon, TrashIcon, PlusIcon } from '@/component/Icons';
import QuestionList from '@/component/QuestionList';
import { FaPencil } from 'react-icons/fa6';
import { RiDeleteBin6Line } from 'react-icons/ri';
import { StatCard } from '../assdetail/statCard';

const AssessmentDetails: React.FC = () => {
  const assessmentInfo = {
    title: 'Frontend Development assessment',
    level: 'Junior',
    type: 'MCQs',
    stats: [
      { label: 'Questions', value: '10' },
      { label: 'Duration', value: '10mins' },
      { label: 'Passing Grade', value: '75%' },
      { label: 'Attempts', value: '0' },
    ],
  };

  return (
    <div className="min-h-screen p-4 md:p-8">
      <div className="">
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-2xl font-semibold">Assessment Details</h1>
          <button className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors">
            Publish Assessment
          </button>
        </div>

        <div className="bg-white rounded-lg p-6 mb-8">
          <div className="flex justify-between items-start mb-6">
            <div>
              <h2 className="text-xl font-medium mb-2">{assessmentInfo.title}</h2>
              <div className="flex gap-2">
                <span className="text-sm px-3 py-1 bg-blue-100 text-blue-600 rounded-full">
                  {assessmentInfo.level}
                </span>
                <span className="text-sm px-3 py-1 bg-blue-100 text-blue-600 rounded-full">
                  {assessmentInfo.type}
                </span>
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
          <hr  className='my-7'/>

          {/* <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {assessmentInfo.stats.map((stat, index) => (
              <div key={index} className="p-4 bg-gray-50 rounded-lg">
                <p className="text-sm text-gray-600 mb-1">{stat.label}</p>
                <p className="text-xl font-semibold">{stat.value}</p>
              </div>
            ))}
          </div> */}

          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            <StatCard title="Questions" value="0" />
            <StatCard title="Duration" value="10mins" />
            <StatCard title="Passing Grade" value="75%" />
            <StatCard title="Attempts" value="0" />
          </div>
        </div>


        <div className="flex justify-between items-center mb-4">
          <div className="px-1 py-1 bg-white rounded-lg text-sm text-[#2E3031]">
            <button className='border-[#5465FF] border-[1px] p-[1px]'> Multiple choice Questions</button>
          
          </div>
          <button className="text-sm text-gray-600 hover:text-gray-800">+ Add Section</button>
        </div>


        <div className="bg-gray-200 rounded-ss-lg rounded-se-lg p-3">
          <div className="flex justify-between items-center px-3">
            <div className="text-[#000] font-bold rounded-lg text-base">
              10 Questions
            </div>
           
            <div className="px-1 py-1 bg-white rounded-lg text-sm text-[#2E3031]">
              
              <button className='border-[#5465FF] flex items-center gap-2 border-[1px] p-[1px]'>
                <PlusIcon className="w-4 h-4" />
                <p>Add Questions</p>
              </button>
            </div>
          </div>
        </div>

        
        <QuestionList />
      </div>
    </div>
  );
};

export default AssessmentDetails;