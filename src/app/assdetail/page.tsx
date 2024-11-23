

import React from 'react';
import { AssessmentHeader } from './assessmentHeader';
import { StatCard } from './statCard';
import { QuestionSection } from './questionSection';


function AssessmentDetails() {
  return (
    <div className="min-h-screen p-4 md:p-8">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-xl font-semibold">Assessment Statistics</h1>
        <button className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition-colors">
          Publish Assessment
        </button>
      </div>

      <div className="max-w-6xl bg-white rounded-lg mx-auto p-8">
        <AssessmentHeader 
          title="Frontend Development assessment"
          level="Junior"
          type="MCQs"
        />
        <hr  className='my-7'/>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          <StatCard title="Questions" value="0" />
          <StatCard title="Duration" value="10mins" />
          <StatCard title="Passing Grade" value="75%" />
          <StatCard title="Attempts" value="0" />
        </div>

       
      </div>

      <QuestionSection />
    </div>
  );
}

export default AssessmentDetails;