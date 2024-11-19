import React from 'react';
import { EditIcon, TrashIcon } from './Icons';

const questions = [
  {
    id: 1,
    question: 'Which of the following is the primary purpose of Tailwind CSS?',
    correctOption: 'To provide a set of predefined themes and components',
    points: 1,
  },
  {
    id: 2,
    question: 'Which attribute should you use to improve accessibility on images in HTML5?',
    correctOption: 'alt',
    points: 1,
  },
  {
    id: 3,
    question: 'What is the main difference between state and props in React?',
    correctOption: 'state is used to manage data within a component, while props are used to pass data to child components.',
    points: 2,
  },
  // Add more questions as needed
];

const QuestionList: React.FC = () => {
  return (
    <div>
      <div className="flex items-center gap-4 text-sm text-gray-600 px-4 py-2 border-b">
        <div className="w-8"></div>
        <div className="flex-1">Question</div>
        <div className="w-96">Correct Option</div>
        <div className="w-16 text-center">Points</div>
        <div className="w-20"></div>
      </div>

      {questions.map((question) => (
        <div key={question.id} className="flex items-center gap-4 px-4 py-4 border-b hover:bg-gray-50">
          <div className="w-8">
            <input type="checkbox" className="w-4 h-4 text-blue-600" />
          </div>
          <div className="flex-1">
            <p className="text-sm">{question.question}</p>
          </div>
          <div className="w-96">
            <p className="text-sm text-gray-600">{question.correctOption}</p>
          </div>
          <div className="w-16 text-center">
            <span className="text-sm">{question.points}</span>
          </div>
          <div className="w-20 flex justify-end gap-2">
            <button className="p-1 text-gray-400 hover:text-blue-600">
              <EditIcon className="w-4 h-4" />
            </button>
            <button className="p-1 text-gray-400 hover:text-red-600">
              <TrashIcon className="w-4 h-4" />
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default QuestionList;