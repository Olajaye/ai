import Link from 'next/link'
import React from 'react'



const Route = () => {
  return (
    <div className='container mx-auto flex justify-between items-center px-9 py-4'>
      <div>
        <Link href="/">home</Link>
      </div>
      <div>
        <Link href="/asstart">Assessment</Link>
      </div>
      <div>
        <Link href="/assdetail">Assessment details</Link>
      </div>
      <div>
        <Link href="/addstart">Add Assessment </Link>
      </div>
      <div>
        <Link href="/asques">Assessment question</Link>
      </div>
    </div>
  )
}

export default Route