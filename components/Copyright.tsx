import Link from 'next/link'
import React from 'react'

const Copyright = ({ isAdmin = false } : {isAdmin: boolean}) => {
  return (
    <>
    {isAdmin ? 
    <div className="text-14-regular mt-20 flex justify-between">
    <p className="justify-items-end text-dark-600 xl:text-left">
    © {new Date().getFullYear()} CarePulse
    </p>
    <Link href="/?admin=true" className="text-green-500">
      Admin
    </Link>
  </div> :   
    <p className="copyright py-12">
        © {new Date().getFullYear()} CarePulse
    </p> 
    }
    </>
  )

}

export default Copyright