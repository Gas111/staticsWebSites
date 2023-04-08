import { FaceSmileIcon } from '@heroicons/react/24/outline'
import axios from 'axios'
import React, { useEffect, useState } from 'react'
import InputFormSearch from './InputFormSearch'

const SearchForm = () => {
  const [columns, setColumns] = useState([])
  const [loading, setLoading] = useState(false)
  var myHeaders = new Headers()
  myHeaders.append('Content-Type', 'application/json')

  useEffect(() => {
    const requestOptions = {
      // method: 'get',
      // headers: myHeaders,
      // redirect: 'follow',
    }

    const URL =
      'https://script.google.com/macros/s/AKfycbxHvbdpu77KjlusOKBI5lDoYHZzE7R3MgQz8yBDp9vSZQIcB-DSKtegEr6-LaCL6niE/exec'

    setLoading(true)

    axios
      .get(URL, requestOptions)
      .then((result) => {
        setColumns(Object.values(result.data.data[0]))
        setLoading(false)
      })
      .catch((err) => {
        setLoading(false)
      })
  }, [])

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log(e.text)

    return
  }

  return (
    <form className="w-full max-w-sm" onSubmit={handleSubmit}>
      {columns?.map((column) => (
        <InputFormSearch key={column} column={column} />
      ))}
      <div className="md:flex md:items-center">
        <div className="md:w-1/3"></div>
        <div className="md:w-2/3">
          <button
            className="shadow bg-purple-600 hover:bg-purple-300 focus:shadow-outline shadow-lg focus:outline-none text-white font-bold py-2 px-4 rounded"
            type="button"
          >
            Buscar
          </button>
        </div>
      </div>
    </form>
  )
}

export default SearchForm
