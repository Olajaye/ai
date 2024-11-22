import Image from 'next/image';
import React from 'react';
import { IconType } from 'react-icons';

interface StatisticsCardProps {
  title: string;
  value: string | number;
  unit?: string;
  image: string;
  color: string
}

export const StatisticsCard: React.FC<StatisticsCardProps> = ({ title, value, unit, image, color }) => {
  return (
    <div className="bg-white p-4 rounded-lg shadow-sm">
     <Image src={image} alt='image' width={50} height={50}className='mb-4' />
      
      <div className='mb-4'>
       <h3 className="text-black text-5xl">{title}</h3>
      </div>
     
        
     
      <div className={`flex items-baseline ${color} `}>
        <span className="text-2xl font-semibold text-gray-900">{value}</span>
        {unit && <span className={`text-2xl ms-3`} >{unit}</span>}
      </div>
    </div>
  );
}