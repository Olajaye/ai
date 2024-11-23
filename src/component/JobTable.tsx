import React from 'react';
import { LuArrowDownUp } from "react-icons/lu";
import { IoCalendarOutline } from "react-icons/io5";

interface Job {
  id: number;
  role: string;
  talentsApplied: {
    count: number;
    color: string;
  };
  assessmentCompleted: number;
  preScreening: number;
  finalInterview: number;
}

const jobs: Job[] = [
  {
    id: 1,
    role: "UX/UX Designer",
    talentsApplied: { count: 100, color: "text-blue-500" },
    assessmentCompleted: 50,
    preScreening: 14,
    finalInterview: 4
  },
  {
    id: 2,
    role: "Frontend Developer",
    talentsApplied: { count: 68, color: "text-green-500" },
    assessmentCompleted: 32,
    preScreening: 12,
    finalInterview: 5
  },
  {
    id: 3,
    role: "Project Manager",
    talentsApplied: { count: 74, color: "text-blue-500" },
    assessmentCompleted: 45,
    preScreening: 14,
    finalInterview: 6
  }
];

export const JobsTable: React.FC = () => {
  return (
    <div className="bg-white rounded-lg shadow-sm mt-8">


      <div className=" bg-[#EBECEE] rounded-ss-lg rounded-se-lg  p-2 border-b flex justify-between">

        <div className=''>
         <h2 className="font-semibold">Jobs</h2>
        </div>

    
        <div className='flex justify-between items-center space-x-4 '>

          <div className='bg-white p-1 border-black border-[1px] rounded-2xl me-4'>
            <div><LuArrowDownUp /></div>
          </div>


          <div className="bg-white p-2 border-black border-[1px] rounded-2xl text-sm ms-5">
            <h2>View All</h2>
          </div>

        </div>
        
      </div>


      <div className="overflow-x-auto">
        <table className="w-full">
          <thead className="bg-gray-50 text-sm text-gray-500">
            <tr>
              <th className="py-3 px-4 text-left">S/N</th>
              <th className="py-3 px-4 text-left">Role</th>
              <th className="py-3 px-4 text-left">Interested Talent</th>
              <th className="py-3 px-4 text-left">Assessment Completed</th>
              <th className="py-3 px-4 text-left">Pre-Screening Interview</th>
              <th className="py-3 px-4 text-left">Final Interview</th>
            </tr>
          </thead>
          <tbody className="text-sm">
            {jobs.map((job) => (
              <>
              <tr key={job.id} className="border-t">
                <td className="py-3 px-4">{job.id}</td>
                <td className="py-3 px-4 font-medium">{job.role}</td>
                
                <td className="py-3 px-4">
                  <span className={job.talentsApplied.color}>
                    {job.talentsApplied.count} talents applied
                  </span>
                </td>
                <td className="py-3 px-4">{job.assessmentCompleted}</td>
                <td className="py-3 px-4">{job.preScreening}</td>
                <td className="py-3 px-4">
                  <div className="flex items-center gap-2">
                    <span>{job.finalInterview}</span>
                    <button className="bg-[#3580B5] text-[#3580B5] flex items-center space-x-3"> <IoCalendarOutline /> Interview</button>
                  </div>
                </td>
              </tr>
             
              </>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}