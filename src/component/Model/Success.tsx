import Link from "next/link"


const SuccessIcon =()=>(
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={140}
    height={138}
    fill="none"
    
  >
    <rect width={80} height={80} x={30.145} y={36.71} fill="#02BA6D" rx={40} />
    <rect
      width={88}
      height={88}
      x={26.145}
      y={32.71}
      stroke="#00A82D"
      strokeOpacity={0.33}
      strokeWidth={8}
      rx={44}
    />
    <path
      stroke="#fff"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={4}
      d="m57.645 76.71 8.333 8.75 16.666-17.5"
    />
    <path
      stroke="#FB807E"
      strokeWidth={3}
      d="M114.772 44.892s-1.812-6.135 1.615-9.083c4.204-3.616 9.793 2.034 14.679-1.045 5.632-3.55 3.142-12.884 3.142-12.884"
    />
    <path
      stroke="#A3C755"
      strokeWidth={3}
      d="M51.148 28.052s2.507-8.102-.354-11.44c-3.51-4.093-9.527 3.873-13.752.555-4.87-3.824-1.308-16.116-1.308-16.116"
    />
    <path
      stroke="#E5D333"
      strokeWidth={3}
      d="M127.58 136.948s2.487-8.108-.703-11.557c-3.913-4.231-10.201 3.644-14.866.176-5.377-3.997-1.866-16.305-1.866-16.305"
    />
    <path
      stroke="#FB807E"
      strokeWidth={3}
      d="M6.429 124.747s-1.38-4.838 2.038-7.401c4.194-3.144 18.295-5.104 14-1.657-13.569 10.889-7.116-11.871 3.701-10.546"
    />
    <path
      fill="#AB2FE6"
      d="M135.029 67.418a4 4 0 1 1-8 0 4 4 0 0 1 8 0Zm-6.58 0a2.58 2.58 0 1 0 5.16-.001 2.58 2.58 0 0 0-5.16.001Z"
    />
    <path
      fill="#AB2FE6"
      d="M135.029 67.418a4 4 0 1 1-8 0 4 4 0 0 1 8 0Zm-6.58 0a2.58 2.58 0 1 0 5.16-.001 2.58 2.58 0 0 0-5.16.001Z"
    />
    <path
      fill="#E6DF2F"
      d="M8.795 80.71a4 4 0 1 1-8 0 4 4 0 0 1 8 0Zm-6.58 0a2.58 2.58 0 1 0 5.16 0 2.58 2.58 0 0 0-5.16 0Z"
    />
    <path
      fill="#FFD7C1"
      d="M30.096 30.71a6 6 0 1 1-12 0 6 6 0 0 1 12 0Zm-8.838 0a2.838 2.838 0 1 0 5.676 0 2.838 2.838 0 0 0-5.676 0Z"
    />
    <circle cx={15.326} cy={58.71} r={2} fill="#067A6F" />
    <circle cx={98.883} cy={125.426} r={4} fill="#5465FF" />
    <circle cx={99.518} cy={21.994} r={4} fill="#5465FF" />
    <circle cx={84.144} cy={128.426} r={2} fill="#E6702F" />
    <circle cx={84.779} cy={24.994} r={2} fill="#E6702F" />
    <circle cx={123.742} cy={60.892} r={2} fill="#2FDBE6" />
    <circle cx={13.326} cy={72.339} r={2} fill="#E62FB3" />
  </svg>
)


const Success = ()=>{
  return (
    <>
      <div className='p-3 w-[600px]' >
        <div className='flex justify-center items-center flex-col'>
          <SuccessIcon/>
          <div className='text-center mt-3'>
            <h2 className='font-bold font-poppins text-3xl text-[#2E3031]'>Success</h2>
            <p className='text-center font-poppins font-normal text-sm text-[#999999] mb-7'>Your application has been submited</p>
          </div>
        </div>
        

        <button 
         className='bg-blue-600 w-[100%] py-2 px-10 rounded-lg text-white'>
          <Link href={"dashboard"}>
            Go back to dashboard
          </Link>
        </button>
      </div>
    </>
  )
}


export default Success