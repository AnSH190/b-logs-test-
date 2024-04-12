"use client"

import React, { useEffect, useState } from 'react'

const Loader = () => {
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        setTimeout(() => {
            setLoading(false)
        }, 2000)
    }, [])

  return (
    <div>
      {loading && (
        <div className="fixed top-0 left-0 z-50 w-screen h-screen flex items-center justify-center bg-black bg-opacity-100">
          {/* <div className="animate-spin rounded-full h-32 w-32 border-t-2 border-b-2 border-white"></div> */}
          <span className="loading loading-spinner text-neutral"></span>
        </div>
      )}
    </div>
  );
}

export default Loader