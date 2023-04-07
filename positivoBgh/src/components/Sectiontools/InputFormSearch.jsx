import React from 'react'

const InputFormSearch = ({ column }) => {
  return (
    <div>
      <div className="md:flex md:items-center mb-6">
        <div className="md:w-1/3">
          <label className="block text-black font-bold md:text-right mb-1 md:mb-0 pr-4">
            {column}{' '}
          </label>
        </div>
        <div className="md:w-2/3">
          <input
            className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
            id="inline-full-name"
            type="text"
          />
        </div>
      </div>
    </div>
  )
}

export default InputFormSearch
