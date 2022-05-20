import Link from 'next/link'
import React from 'react'

const Navbar = () => {
  return (
    <nav className='bg-gray-700'>
        <div className='mx-auto container p-4 text-4xl font-megh'>
            <Link href={'/'}>
                <button className='group '>
                  <span className='text-white group-hover:text-orange-400'>Movie</span>
                  <span className='text-gray-900 bg-orange-400 rounded px-1 py-0 group-hover:text-white'>Hub</span>
                </button>
            </Link>
        </div>
    </nav>
  )
}

export default Navbar