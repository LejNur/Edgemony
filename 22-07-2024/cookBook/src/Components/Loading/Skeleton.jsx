function Skeleton() {
  return (
    <div className="relative isolate overflow-hidden bg-white px-6 py-24 sm:py-32 lg:overflow-visible lg:px-0">
      <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 lg:mx-0 lg:max-w-none lg:grid-cols-2 lg:items-start lg:gap-y-10">
        <div className="lg:col-span-2 lg:col-start-1 lg:row-start-1 lg:mx-auto lg:grid lg:w-full lg:max-w-7xl lg:grid-cols-2 lg:gap-x-8 lg:px-8">
          <div className="lg:pr-4">
            <div className="lg:max-w-lg">
              <div className="h-4 bg-gray-300 rounded w-1/4 mb-2 animate-pulse"></div>
              <div className="h-8 bg-gray-300 rounded w-3/4 mb-6 animate-pulse"></div>
              <div className="h-6 bg-gray-300 rounded w-full mb-4 animate-pulse"></div>
              <div className="h-6 bg-gray-300 rounded w-full mb-4 animate-pulse"></div>
              <div className="h-6 bg-gray-300 rounded w-full mb-4 animate-pulse"></div>
            </div>
          </div>
        </div>
        <div className="-ml-12 -mt-12 p-12 lg:sticky lg:top-4 lg:col-start-2 lg:row-span-2 lg:row-start-1 lg:overflow-hidden">
          <div className="w-full h-64 bg-gray-300 rounded-xl animate-pulse"></div>
        </div>
      </div>
    </div>
  );
}

export default Skeleton;
