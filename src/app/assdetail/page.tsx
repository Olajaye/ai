

import React from 'react';
import { AssessmentHeader } from './assessmentHeader';
import { StatCard } from './statCard';
import { QuestionSection } from './questionSection';

function AssessmentDetails() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-6xl mx-auto p-8">
        <AssessmentHeader 
          title="Frontend Development assessment"
          level="Junior"
          type="MCQs"
        />
        
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          <StatCard title="Questions" value="0" />
          <StatCard title="Duration" value="10mins" />
          <StatCard title="Passing Grade" value="75%" />
          <StatCard title="Attempts" value="0" />
        </div>

        <QuestionSection />
      </div>
    </div>
  );
}

export default AssessmentDetails;