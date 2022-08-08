import React from 'react'

const SuggestionSkeleton = () => {
  return (
    <div className="max-w-3xl mx-auto px-7 pb-24 p-5 space-y-4">
      <div className="h-8 w-[350px] skeleton mb-6 mt-2" />
      <div className="flex items-center">
        <div className="h-[134px] w-[134px] sm:w-64 sm:h-36 skeleton mb-4" />
        <div className="ml-6 space-y-5">
          <div className="h-5 w-[250px] skeleton" />
          <div className="h-5 w-[200px] skeleton" />
        </div>
      </div>
      <div className="flex items-center">
        <div className="h-[134px] w-[134px] sm:w-64 sm:h-36 skeleton mb-4" />
        <div className="ml-6 space-y-5">
          <div className="h-5 w-[250px] skeleton" />
          <div className="h-5 w-[200px] skeleton" />
        </div>
      </div>

      <div className="flex items-center">
        <div className="h-[134px] w-[134px] sm:w-64 sm:h-36 skeleton mb-4" />
        <div className="ml-6 space-y-5">
          <div className="h-5 w-[250px] skeleton" />
          <div className="h-5 w-[200px] skeleton" />
        </div>
      </div>
    </div>
  )
}

export default SuggestionSkeleton