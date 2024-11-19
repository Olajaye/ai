import React from 'react';
import { EditIcon, TrashIcon, PlusIcon } from '@/component/Icons';
import QuestionList from '@/component/QuestionList';

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
    <div className="min-h-screen bg-gray-50 p-8">
      <div className="max-w-5xl mx-auto">
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
            <div className="flex gap-3">
              <button className="p-2 text-gray-400 hover:text-blue-600">
                <EditIcon className="w-5 h-5" />
              </button>
              <button className="p-2 text-gray-400 hover:text-red-600">
                <TrashIcon className="w-5 h-5" />
              </button>
            </div>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {assessmentInfo.stats.map((stat, index) => (
              <div key={index} className="p-4 bg-gray-50 rounded-lg">
                <p className="text-sm text-gray-600 mb-1">{stat.label}</p>
                <p className="text-xl font-semibold">{stat.value}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-white rounded-lg p-6">
          <div className="flex justify-between items-center mb-6">
            <div className="flex items-center gap-4">
              <span className="px-4 py-2 bg-gray-100 rounded-lg text-sm font-medium">
                Multiple choice Questions
              </span>
              <button className="text-blue-600 text-sm hover:text-blue-700">
                + Add Section
              </button>
            </div>
            <button className="flex items-center gap-2 px-4 py-2 border rounded-lg text-sm hover:bg-gray-50">
              <PlusIcon className="w-4 h-4" />
              Add Questions
            </button>
          </div>

          <QuestionList />
        </div>
      </div>
    </div>
  );
};

export default AssessmentDetails;