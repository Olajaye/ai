import { BestMatchTable } from "@/component/BestMatchTAble";
import { JobsTable } from "@/component/JobTable";
import { StatisticsCard } from "@/component/StatisticsCard";

{/*
const applications = [
  {
    id: 1,
    company: 'Coinbase Company',
    // logo: AplicationIMG.Application01,
    role: 'Product Designer',
    assessmentComplete: '50',
    screeningInterview: "14",
    jobType: 'Contract',
    status: 'Active',
  },
  {
    id: 2,
    company: 'Rocket Company',
    // logo: AplicationIMG.Application02,
    role: 'UX Designer',
    assessmentComplete: '30',
    screeningInterview: "12",
    jobType: 'Unpaid - Internship',
    status: 'Completed',
  },
  {
    id: 3,
    company: 'Caprisones Company',
    // logo: AplicationIMG.Application03,
    role: 'UI Designer',
    assessmentComplete: '32',
    screeningInterview: "14",
    jobType: 'Remote',
    status: 'Completed',
  },  
  {
    id: 4,
    company: 'Zedd Company',
    // logo: AplicationIMG.Application04,
    role: 'Web Designer',
    assessmentComplete: '45',
    screeningInterview: "17",
    jobType: 'Part-time',
    status: 'Completed',
  }
]

*/}
export default function Home() {
  return (
    <section className="min-h-screen p-4 md:p-8">

      <div className="flex justify-between items-center mb-8">
        <div className="flex items-center gap-2">
          <h1 className="text-xl font-semibold">Welcome, Jay!</h1>
          <span className="text-2xl">👋</span>
        </div>
        <button className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition-colors">
          + Post a Job
        </button>
      </div>

      
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <StatisticsCard 
          title="Shortlisted Talents" 
          image="/checkmark-circle-01.svg"
          color="text-[#5465FF]"
          value="12"
          unit="talents"
        />
        <StatisticsCard 
          title="Time Saved" 
          image="/time-quarter-pass.svg"
          color="text-[#219150]"
          value="75"
          unit="hours"
        />
        <StatisticsCard 
          title="Hiring Speed" 
          value="14"
          image="/calendar-02.svg"
          color="text-[#B58300]"
          unit="days"
        />
        <StatisticsCard 
          title="Talent Satisfaction" 
          value="85"
          color="text-[#2ECC71]"
          image="/Group1.svg"
          unit="%"
        />
      </div>

      <JobsTable />
      <BestMatchTable />

      {/* <div>
        <div className="flex items-center justify-between bg-slate-500 rounded-ss-lg rounded-se-lg  p-4 mt-8">
          <div className='flex items-center space-x-8'>
            job
          </div>
        </div>

        <div className="bg-white shadow-md overflow-hidden w-[100%]">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  S/N
                </th>
                <th className="px-6 py-3 text-xs font-medium text-gray-500 text-center">
                  Role
                </th>
                <th className="px-6 py-3 text-xs font-medium text-gray-500 text-center ">
                  Interested Talent
                </th>
                <th className="px-6 py-3 text-center text-xs font-medium text-gray-500">
                  Assessment Completed
                </th>
                <th className="px-6 py-3 text-center text-xs font-medium text-gray-500 ">
                  Pre-Screening Interview
                </th>
              </tr>
            </thead>


            <tbody className="bg-white divide-y divide-gray-200">
              {applications.map((app) => (
                <tr key={app.id}>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{app.id}</td>

                  <td className="px-6 py-4 whitespace-nowrap flex items-center">
                    {app.role}
                  </td>

                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 text-center">
                    {app.role}
                  </td>

                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 text-center">
                    {app.assessmentComplete}
                  </td>

                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 text-center">
                    {app.screeningInterview}
                  </td>




                  <td className="px-6 py-4 whitespace-nowrap">
                    <span className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${
                      app.jobType === 'Contract' ? 'bg-green-100 text-green-800' :
                      app.jobType === 'Unpaid - Internship' ? 'bg-purple-100 text-purple-800' :
                      app.jobType === 'Remote' ? 'bg-blue-100 text-blue-800' :
                      app.jobType === 'Part-time' ? 'bg-yellow-100 text-yellow-800' :
                      'bg-orange-100 text-orange-800'
                    }`}>
                      {app.jobType}
                    </span>
                  </td>


                  <td className="px-6 py-4 whitespace-nowrap">
                    <span className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${
                      app.status === 'Active' ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'
                    }`}>
                      {app.status}
                    </span>
                  </td>


                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    <button className="text-indigo-600 hover:text-indigo-900">
                      <FaPencilAlt />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div> */}
    </section>
  );
}
