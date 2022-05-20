import React from 'react'
import Link from "next/link"

const Footer = () => {
  return (
    <div className="flex content-center">  
        <Link href="/contact">
        <button className="text-white bg-gray-800 py-3 px-6 rounded text-sm mt-4 mb-4 mx-auto">Contact Us</button>
        </Link>
    </div>
  )
}

export default Footer