import React from 'react';

interface StatCardProps {
  title: string;
  value: string | number;
}

export const StatCard: React.FC<StatCardProps> = ({ title, value }) => {
  return (
    <div className="bg-white rounded-lg p-6 flex flex-col items-center shadow-sm border border-gray-100">
      <span className="text-gray-600 text-sm mb-2">{title}</span>
      <span className="text-xl font-semibold text-gray-800">{value}</span>
    </div>
  );
}