import React from 'react';
import { ClockIcon, DocumentIcon, DotsVerticalIcon } from './Icons';

interface AssessmentCardProps {
  title: string;
  tags: string[];
  description: string;
  duration: string;
  questions: string;
  icon?: string;
  iconBg?: string;
}

const AssessmentCard: React.FC<AssessmentCardProps> = ({
  title,
  tags,
  description,
  duration,
  questions,
}) => {
  return (
    <div className="border rounded-lg p-6 hover:shadow-md transition-shadow">
      <div className="flex justify-between items-start mb-4">
        <div className="flex gap-4">
          <div>
            <h3 className="font-medium mb-2">{title}</h3>
            <div className="flex gap-2 flex-wrap">
              {tags.map((tag, index) => (
                <span
                  key={index}
                  className={`text-xs px-2 py-1  ${
                    tag === 'Published'
                      ? 'bg-green-100 text-green-600 rounded-lg'
                      : tag === 'Unpublished'
                      ? 'bg-red-100 text-red-600 rounded-lg'
                      : 'bg-blue-100 text-blue-600 rounded-lg'
                  }`}
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </div>
        <button className="text-gray-400 hover:text-gray-600">
          <DotsVerticalIcon className="w-5 h-5" />
        </button>
      </div>

      <p className="text-gray-500 text-sm mb-4">{description}</p>

      <div className="flex items-center gap-4 text-sm text-gray-500">
        <div className="flex items-center gap-1">
          <ClockIcon className="w-4 h-4" />
          <span>{duration}</span>
        </div>
        <div className="flex items-center gap-1">
          <DocumentIcon className="w-4 h-4" />
          <span>{questions} Questions</span>
        </div>
      </div>
    </div>
  );
};

export default AssessmentCard;