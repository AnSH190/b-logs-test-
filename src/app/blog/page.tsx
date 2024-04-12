import Loader from '@/components/Loader';
import React, { Suspense } from 'react'
import Blog from '@/components/blog';

const page = () => {
  return (
    <div className="bg-slate-400 text-white border-b-2 border-white ">
      <Suspense fallback={<Loader />}>
        <Blog />
      </Suspense>
    </div>
  );
}

export default page