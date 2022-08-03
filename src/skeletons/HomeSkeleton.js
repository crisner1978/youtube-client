import React from 'react'

const HomeSkeleton = () => {
  return (
	<div className='max-w-5xl mx-auto p-5 pb-24'>
      <div className='grid grid-cols-1 md:grid-cols-2 md:max-w-3xl xl:grid-cols-3 xl:max-w-6xl mx-auto gap-8'>
        <div className='h-48 rounded-md bg-gradient-to-tr from-gray-3 to-gray-500 animate-pulse transition-colors transform duration-200 shadow-lg' />
        <div className='h-48 rounded-md bg-gradient-to-tr from-gray-3 to-gray-500 animate-pulse transition-colors transform duration-200 shadow-lg' />
        <div className='h-48 rounded-md bg-gradient-to-tr from-gray-3 to-gray-500 animate-pulse transition-colors transform duration-200 shadow-lg' />
        <div className='h-48 rounded-md bg-gradient-to-tr from-gray-3 to-gray-500 animate-pulse transition-colors transform duration-200 shadow-lg' />
        <div className='h-48 rounded-md bg-gradient-to-tr from-gray-3 to-gray-500 animate-pulse transition-colors transform duration-200 shadow-lg' />
        <div className='h-48 rounded-md bg-gradient-to-tr from-gray-3 to-gray-500 animate-pulse transition-colors transform duration-200 shadow-lg' />
        <div className='h-48 rounded-md bg-gradient-to-tr from-gray-3 to-gray-500 animate-pulse transition-colors transform duration-200 shadow-lg' />
        <div className='h-48 rounded-md bg-gradient-to-tr from-gray-3 to-gray-500 animate-pulse transition-colors transform duration-200 shadow-lg' />
        <div className='h-48 rounded-md bg-gradient-to-tr from-gray-3 to-gray-500 animate-pulse transition-colors transform duration-200 shadow-lg' />
      </div>
    </div>
  )
}

export default HomeSkeleton