import React from 'react';
import StatCard from '@/component/StatCard';
import AssessmentCard from '@/component/AssessmentCard';
import { PlusIcon, FilterIcon } from '@/component/Icons';
import { CiCalendarDate } from "react-icons/ci";

function Assessmaent() {
  const stats = [
    { title: 'Total Number of Assessment', value: '12' },
    { title: 'Number of completed Assessment', value: '12' },
    { title: 'Number of ongoing Assessment', value: '0' },
    { title: 'Average time on Assessment', value: '12m 30s' },
  ];

  const assessments = [
    {
      title: 'UI/UX Design Assessment',
      tags: ['MCQs', 'Published'],
      description: 'This is to test the foundation...',
      duration: '60m',
      questions: '12',
      icon: 'F',
      iconBg: 'bg-blue-500',
    },
    {
      title: 'Frontend Dev Assessment',
      tags: ['MCQs', 'Coding Task', 'Published'],
      description: 'A test of frontend framework...',
      duration: '60m',
      questions: '12',
    },
    {
      title: 'Backend Dev Assessment',
      tags: ['MCQs', 'Coding Task', 'Published'],
      description: 'An exploration of database...',
      duration: '45m',
      questions: '13',
    },
    {
      title: 'UI/UX Design Assessment',
      tags: ['MCQs', 'Published'],
      description: 'This is to test the foundation...',
      duration: '60m',
      questions: '12',
      icon: 'F',
      iconBg: 'bg-blue-500',
    },
    {
      title: 'Frontend Dev Assessment',
      tags: ['MCQs', 'Coding Task', 'Published'],
      description: 'A test of frontend framework...',
      duration: '60m',
      questions: '12',
    },
    {
      title: 'Backend Dev Assessment',
      tags: ['MCQs', 'Coding Task', 'Published'],
      description: 'An exploration of database...',
      duration: '45m',
      questions: '13',
    },
    {
      title: 'UI/UX Design Assessment',
      tags: ['MCQs', 'Unpublished'],
      description: 'This is to test the foundation...',
      duration: '60m',
      questions: '12',
      icon: 'F',
      iconBg: 'bg-blue-500',
    },
    {
      title: 'Frontend Dev Assessment',
      tags: ['MCQs', 'Coding Task', 'Unpublished'],
      description: 'A test of frontend framework...',
      duration: '60m',
      questions: '12',
    },
    {
      title: 'Backend Dev Assessment',
      tags: ['MCQs', 'Coding Task', 'Published'],
      description: 'An exploration of database...',
      duration: '45m',
      questions: '13',
    },
    {
      title: 'UI/UX Design Assessment',
      tags: ['MCQs', 'Published'],
      description: 'This is to test the foundation...',
      duration: '60m',
      questions: '12',
      icon: 'F',
      iconBg: 'bg-blue-500',
    },
    {
      title: 'Frontend Dev Assessment',
      tags: ['MCQs', 'Coding Task', 'Published'],
      description: 'A test of frontend framework...',
      duration: '60m',
      questions: '12',
    },
    {
      title: 'Backend Dev Assessment',
      tags: ['MCQs', 'Coding Task', 'Published'],
      description: 'An exploration of database...',
      duration: '45m',
      questions: '13',
    },
    // Add more assessments as needed
  ];

  return (
    <div className="min-h-screen bg-gray-50 p-8">
      <div className="max-w-7xl mx-auto">
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-xl font-semibold">Assessment Statistics</h1>
          <button className="flex items-center gap-2 px-4 py-2 border rounded-lg bg-white">
            <CiCalendarDate />
            <span>Date</span>
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {stats.map((stat, index) => (
            <StatCard key={index} title={stat.title} value={stat.value} />
          ))}
        </div>

        <div className="bg-white rounded-lg p-6">
          <div className="flex justify-between items-center mb-6">
            <div>
              <h2 className="text-xl font-semibold">Assessment</h2>
              <p className="text-gray-500 text-sm">Add, edit, duplicate and archive assessments</p>
            </div>
            <div className="flex gap-4">
              <button className="flex items-center gap-2 px-4 py-2 border rounded-lg">
                <FilterIcon />
                <span>Filter</span>
              </button>
              <button className="flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-lg">
                <PlusIcon />
                <span>Add Assessment</span>
              </button>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="border-2 border-dashed rounded-lg p-6 flex flex-col items-center justify-center text-gray-500 cursor-pointer hover:border-blue-500 transition-colors">
              <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mb-4">
                <PlusIcon className="w-6 h-6 text-blue-600" />
              </div>
              <p className="font-medium">Add Assessment</p>
              <p className="text-sm">Click the button below to add a new assessment</p>
            </div>

            {assessments.map((assessment, index) => (
              <AssessmentCard key={index} {...assessment} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Assessmaent;