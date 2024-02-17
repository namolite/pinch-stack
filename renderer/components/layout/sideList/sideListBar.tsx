export default function SideListBar() {
  return (
    <div className="sidelist-bar flex items-center justify-center">
      <div className="flex justify-center items-center py-1">
        <div className="inline-flex rounded-lg border border-gray-200">
          <button className="rounded-lg py-2 px-3 w-1/3 text-sm font-medium text-white bg-blue-500 rounded-l-lg hover:bg-blue-600 focus:ring-4 focus:outline-none focus:ring-blue-300">
            All
          </button>
          <button className="rounded-lg py-2 px-3 w-1/3 text-sm font-medium text-gray-700 bg-white hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-gray-200">
            Page
          </button>
          <button className="rounded-lg py-2 px-3 w-1/3 text-sm font-medium text-gray-700 bg-white rounded-r-lg hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-gray-200">
            Info
          </button>
        </div>
      </div>
    </div>
  )
}

// style btns, btns-active, btns::hover (bg colours & text colours) shadow
