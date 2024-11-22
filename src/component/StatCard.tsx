import React from 'react';
import { DotsVerticalIcon } from './Icons';

interface StatCardProps {
  title: string;
  value: string;
}

const StatCard: React.FC<StatCardProps> = ({ title, value }) => {
  return (
    <div className="bg-white p-6 rounded-lg shadow-md">
      <div className="flex justify-between items-start mb-4">
        <h3 className="text-[#2E3031] text-sm font-medium">{title}</h3>
        <button className="text-gray-400 hover:text-gray-600">
          <DotsVerticalIcon className="w-5 h-5" />
        </button>
      </div>
      <p className="text-2xl font-semibold text-blue-600">{value}</p>
    </div>
  );
};

export default StatCard;