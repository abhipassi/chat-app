import React from 'react'

export default function Dashboard() {
  return (
    <>
      <div className="h-screen flex flex-col overflow-hidden">
        <div className="h-14 w-full border-2 border-double border-colorThree shadow-lg rounded-xl flex justify-center items-center">
          <p className="text-2xl shadow-md font-bold">Chatterbox</p>
        </div>


        <div className="flex-1 grid grid-cols-4 gap-2 overflow-hidden border-2">
          <div className="bg-colorOne rounded-lg">01</div>

          <div className="bg-colorOne rounded-lg col-span-3 flex items-end ">
            <div className="w-full flex items-center gap-2 p-2 border-t border-gray-300 bg-colorOne">
              <input
                type="text"
                placeholder="Type something..."
                className="flex-1 border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-colorThree transition duration-200 shadow-sm"
              />
              <button
                type="button"
                className="bg-colorThree text-white font-medium px-4 py-2 rounded-lg hover:bg-orange-600 transition duration-200"
              >
                Send
              </button>
            </div>


          </div>
        </div>
      </div>

    </>

  )
}
