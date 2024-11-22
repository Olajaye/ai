"use client"
import React, { useState } from 'react';
import { BsPlus } from 'react-icons/bs';

interface FormData {
  title: string;
  skillSet: string;
  description: string;
  difficultyLevel: string;
  duration: string;
  questionType: string;
  passingGrade: string;
  reviewResponses: boolean;
  displayFeedback: boolean;
  shuffleQuestions: boolean;
  usePublicLink: boolean;
  setDateTime: boolean;
}

const AddAssessment: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({
    title: '',
    skillSet: '',
    description: '',
    difficultyLevel: '',
    duration: '',
    questionType:'',
    passingGrade: '',
    reviewResponses: false,
    displayFeedback: false,
    shuffleQuestions: false,
    usePublicLink: false,
    setDateTime: false,
  });

  const [descriptionLength, setDescriptionLength] = useState(0);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    
    if (name === 'description') {
      setDescriptionLength(value.length);
    }
  };

  const handleCheckboxChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, checked } = e.target;
    setFormData(prev => ({ ...prev, [name]: checked }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log(formData);
    // Handle form submission
  };

  return (
    <div className="min-h-screen bg-gray-100 p-8">
      <div className=" ">
        <h1 className="text-2xl font-semibold mb-8">Add Assessment</h1>
        
        <form onSubmit={handleSubmit} className="space-y-8">
          {/* Basic Details Section */}
          <div className="bg-white p-6 rounded-lg shadow-sm">
            <h2 className="text-lg font-bold mb-2">Basic Details</h2>
            <hr  className='mb-2'/>
            <div className='flex justify-end items-end mb-5'>
              <div className='flex items-center'>
                <BsPlus/>
                <p>Add option</p>
              </div>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Assessment Title
                </label>
                <input
                  type="text"
                  name="title"
                  value={formData.title}
                  onChange={handleInputChange}
                  className="w-full px-3 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Difficulty Level
                </label>
                <select
                  name="difficultyLevel"
                  value={formData.difficultyLevel}
                  onChange={handleInputChange}
                  className="w-full px-3 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                >
                  <option value="">Select level</option>
                  <option value="junior">Junior</option>
                  <option value="intermediate">Intermediate</option>
                  <option value="senior">Senior</option>
                </select>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Skill Set
                </label>
                <select
                  name="skillSet"
                  value={formData.skillSet}
                  onChange={handleInputChange}
                  className="w-full px-3 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                >
                  <option value="">Select skill</option>
                  <option value="frontend">Frontend Development</option>
                  <option value="backend">Backend Development</option>
                  <option value="design">UI/UX Design</option>
                </select>
              </div>


              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Question Type <span className='text-[#5465FF]'>(optional)</span>
                </label>
                <select
                  name="questionType"
                  value={formData.questionType}
                  onChange={handleInputChange}
                  className="w-full px-3 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                >
                  <option value="">Coding</option>
                  <option value="junior">Project based</option>
                  
                </select>
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Description
              </label>
              <textarea
                name="description"
                value={formData.description}
                onChange={handleInputChange}
                maxLength={150}
                rows={4}
                className="w-full px-3 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              />
              <p className="text-sm text-gray-500 text-right">{descriptionLength}/150</p>
            </div>
          </div>

          {/* Assessment Section */}
          <div className="bg-white p-6 rounded-lg shadow-sm">
            <h2 className="text-lg font-medium mb-6">Assessment</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Duration (minutes)
                </label>
                <input
                  type="number"
                  name="duration"
                  value={formData.duration}
                  onChange={handleInputChange}
                  className="w-full px-3 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Passing Grade (%)
                </label>
                <input
                  type="number"
                  name="passingGrade"
                  value={formData.passingGrade}
                  onChange={handleInputChange}
                  className="w-full px-3 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                />
              </div>
            </div>

            <div className="flex justify-between">
              <div className='space-y-4'>
                <label className="flex justify-start items-start gap-x-3">
                  <input
                    type="checkbox"
                    name="reviewResponses"
                    checked={formData.reviewResponses}
                    onChange={handleCheckboxChange}
                    className="w-4 h-4 mt-1 text-blue-600"
                  />
                  <div>
                    <p className="font-medium">Review and approve responses</p>
                    <p className="text-sm text-gray-500">If turned off, talents will see results without your review and approval</p>
                  </div>
                </label>

                <label className="flex justify-start items-start gap-x-3">
                  <input
                    type="checkbox"
                    name="displayFeedback"
                    checked={formData.displayFeedback}
                    onChange={handleCheckboxChange}
                    className="w-4 h-4 mt-1 text-blue-600"
                  />
                  <div>
                    <p className="font-medium">Display feedback</p>
                    <p className="text-sm text-gray-500">If turned off, talents will not see the reason they fail or pass assessment</p>
                  </div>
                </label>

                <label className="flex justify-start items-start gap-x-3">
                  <input
                    type="checkbox"
                    name="shuffleQuestions"
                    checked={formData.shuffleQuestions}
                    onChange={handleCheckboxChange}
                    className="w-4 h-4 mt-1 text-blue-600"
                  />
                  <div>
                    <p className="font-medium">Shuffle questions</p>
                    <p className="text-sm text-gray-500">Questions will be shuffled at every attempt</p>
                  </div>
                </label>
              </div>

              <div className='space-y-4'>
                <label className="flex justify-start items-start gap-x-3">
                  <input
                    type="checkbox"
                    name="usePublicLink"
                    checked={formData.usePublicLink}
                    onChange={handleCheckboxChange}
                    className="w-4 h-4 mt-1 text-blue-600"
                  />
                  <div>
                    <p className="font-medium">Use public link</p>
                    <p className="text-sm text-gray-500">Use this assessment for external purposes</p>
                  </div>
                </label>

                <label className="flex justify-start items-start gap-x-3">
                  <input
                    type="checkbox"
                    name="setDateTime"
                    checked={formData.setDateTime}
                    onChange={handleCheckboxChange}
                    className="w-4 h-4 mt-1 text-blue-600"
                  />
                  <div>
                    <p className="font-medium">Start and end date/time</p>
                    <p className="text-sm text-gray-500">Set start and end date/time for your assessment</p>
                  </div>
                </label>
              </div>
            </div>
          </div>

          <div className="flex justify-end">
            <button
              type="submit"
              className="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
            >
              Add Assessment
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddAssessment;