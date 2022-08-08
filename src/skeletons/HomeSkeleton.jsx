import React from 'react'

const HomeSkeleton = () => {
  return (
	<div className='max-w-5xl mx-auto p-5 pb-24'>
      <div className='grid grid-cols-1 mt-2 md:grid-cols-2 md:max-w-3xl xl:grid-cols-3 xl:max-w-6xl mx-auto gap-8'>
        <div className='h-48 skeleton' />
        <div className='h-48 skeleton' />
        <div className='h-48 skeleton' />
        <div className='h-48 skeleton' />
        <div className='h-48 skeleton' />
        <div className='h-48 skeleton' />
        <div className='h-48 skeleton' />
        <div className='h-48 skeleton' />
        <div className='h-48 skeleton' />
      </div>
    </div>
  )
}

export default HomeSkeleton