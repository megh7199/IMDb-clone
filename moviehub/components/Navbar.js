import Link from 'next/link'
import React from 'react'

const Navbar = () => {
  return (
    <nav className='bg-gray-700'>
        <div className='mx-auto container p-4 text-4xl font-megh'>
            <Link href={'/'}>
                <a className='text-white font-bold'>Movie<span className='text-gray-900 bg-orange-500 rounded px-1 py-0'>Hub</span></a>
            </Link>
        </div>
    </nav>
  )
}

export default Navbar