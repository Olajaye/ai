const AssessementModel = ()=>{
  return (
    <>
      <div className='w-[100%] h-2 rounded-xl bg-[#BDC3C7]'>
        <div className={`bg-blue-600 w-[60%] h-2 rounded-lg`}></div>
      </div>


      <h1 className='mt-5 font-bold text-2xl'>Resume</h1>
      <p className='text-[#BDC3C7] text-base mt-2'>Please check to see if all information details are correct to avoid wrong processing</p>

      <hr className='my-4'/>

      <div className='p-3'>
        <div className='border-[1px] border-[#dbdee0] p-3 rounded-lg flex'>
          <div>
            {/* <Image src={assets.PDF} alt='PDf' width={50}/> */}
          </div>
          <div className='ms-3'>
            <h3 className='font-semibold text-sm font-poppins text-[#2E3031]'>Joshua inioluwa&apos;s resume.pdf</h3>
            <h6 className='font-inter font-normal text-sm text-[#6C757D]'>Added 1 July 2024</h6>
            <p className='mt-2 font-poppins font-normal text-xs text-[#6C757D]'>Downloadable</p>
          </div>
        </div>

        <p className='mt-6 font-semibold font-poppins text-xs text-[#3444054]'>Or Update your Resume</p>
        <input type="file" name="" id="" className='hidden'/>
        <div className='border-[1px] border-[#dbdee0] p-3 rounded-lg flex justify-center items-center'>
          <div className='w-[70%]'>
            <div className='flex justify-center items-center'>
              {/* <Image src={'/'} alt='img'width={50}/> */}
            </div>
            <h3 className='text-center font-poppins text-sm text-[#131316] font-normal'><span className='text-primary'>Click to upload</span> or drag and drop pdf or Doc (max. 10mb)</h3>
          </div>
        </div>


        <button 
         className='bg-blue-600 w-[100%] py-2 px-10 rounded-lg mt-7 text-white'>
          Countinue
        </button>
      </div>
    </>
  )
}


export default AssessementModel