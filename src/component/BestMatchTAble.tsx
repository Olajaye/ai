import Image from 'next/image';
import React from 'react';

interface Candidate {
  id: number;
  name: string;
  email: string;
  role: string;
  technicalScore: number;
  culturalScore: number;
  overallScore: number;
}

const candidates: Candidate[] = [
  {
    id: 1,
    name: "Olivia Rhye",
    email: "olivia@untitledui.com",
    role: "Product Designer",
    technicalScore: 92,
    culturalScore: 88,
    overallScore: 89
  },
  {
    id: 2,
    name: "Phoenix Baker",
    email: "phoenix@untitledui.com",
    role: "Backend Developer",
    technicalScore: 90,
    culturalScore: 85,
    overallScore: 88
  }
];

export const BestMatchTable: React.FC = () => {
  return (
    <div className="bg-white rounded-lg shadow-sm mt-8">
      <div className="flex justify-between items-center p-4 border-b">
        <h2 className="font-semibold">Best Match</h2>
        <button className="text-gray-600 hover:text-gray-800">View All</button>
      </div>
      <div className="overflow-x-auto">
        <table className="w-full">
          <thead className="bg-gray-50 text-sm text-gray-500">
            <tr>
              <th className="py-3 px-4 text-left">S/N</th>
              <th className="py-3 px-4 text-left">Talents</th>
              <th className="py-3 px-4 text-left">Role</th>
              <th className="py-3 px-4 text-left">Technical/Soft Score</th>
              <th className="py-3 px-4 text-left">Cultural Fit Score</th>
              <th className="py-3 px-4 text-left">Overall Score</th>
              <th className="py-3 px-4 text-left">Actions</th>
            </tr>
          </thead>
          <tbody className="text-sm">
            {candidates.map((candidate) => (
              <tr key={candidate.id} className="border-t">
                <td className="py-3 px-4">{candidate.id}</td>
                <td className="py-3 px-4">
                  <div className='flex space-x-4'>
                  <div className='rounded-full'>
                    <Image src={'/calendar-02.svg'} alt='lol' width={40} height={40} className='rounded-full'/>
                  </div>
                  <div className='ms-4'>
                    <div className="font-medium">{candidate.name}</div>
                    <div className="text-gray-500">{candidate.email}</div>
                  </div>
                  </div>
                </td>
                <td className="py-3 px-4">{candidate.role}</td>
                <td className="py-3 px-4">
                  <div className="w-24 bg-blue-100 rounded-full h-2">
                    <div 
                      className="bg-blue-600 h-2 rounded-full"
                      style={{ width: `${candidate.technicalScore}%` }}
                    ></div>
                  </div>
                </td>
                <td className="py-3 px-4">
                  <div className="w-24 bg-blue-100 rounded-full h-2">
                    <div 
                      className="bg-blue-600 h-2 rounded-full"
                      style={{ width: `${candidate.culturalScore}%` }}
                    ></div>
                  </div>
                </td>
                <td className="py-3 px-4">
                  <span className="text-green-600 font-medium">{candidate.overallScore}%</span>
                </td>
                <td className="py-3 px-4">
                  <button className="text-gray-400 hover:text-gray-600">⋮</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}