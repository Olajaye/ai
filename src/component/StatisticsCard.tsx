import React from 'react';
import { IconType } from 'react-icons';

interface StatisticsCardProps {
  title: string;
  value: string | number;
  unit?: string;
  icon?: IconType;
}

export const StatisticsCard: React.FC<StatisticsCardProps> = ({ title, value, unit, icon: Icon }) => {
  return (
    <div className="bg-white p-6 rounded-lg shadow-sm">
      <div className="flex justify-between items-start mb-4">
        <span className="text-gray-600 text-sm">{title}</span>
        {Icon && <Icon className="text-gray-400 w-5 h-5" />}
      </div>
      <div className="flex items-baseline">
        <span className="text-2xl font-semibold text-gray-900">{value}</span>
        {unit && <span className="ml-1 text-gray-600">{unit}</span>}
      </div>
    </div>
  );
}