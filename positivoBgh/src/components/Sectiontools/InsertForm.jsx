
import axios from 'axios'
import React, { useEffect, useState } from 'react'
import InputFormSearch from './InputFormSearch'
import { useForm } from 'react-hook-form'

const InsertForm = () => {
  const [columns, setColumns] = useState([])
  const [allData, setAllData] = useState([])
  const [loading, setLoading] = useState(false)
  const { register, handleSubmit, reset, watch } = useForm()

  // var myHeaders = new Headers()
  // myHeaders.append('Content-Type', 'application/json')

  useEffect(() => {
    // const requestOptions = {
    //   // method: 'get',
    //   // headers: 'info',
    //   // // redirect: 'follow',
    //   // contents: 8,
    // }
    // requestOptions
    const URL =
      'https://script.google.com/macros/s/AKfycbyM7HgadbGylSU4e6yH8DqOThfXFpFFL1jlbdd3y0rvIQwZvz5UkyelO6aX5G1WHCil/exec'

    setLoading(true)

    axios
      .get(URL)
      .then((result) => {
        setColumns(Object.values(result.data.data[0]))
        setAllData(Object.values(result.data.data))
        setLoading(false)
      })
      .catch((err) => {
        setLoading(false)
      })
  }, [])

  const handleOnSubmit = (data) => {
    const arrayData = Object.values(data)

    let indexData = arrayData.map((data, index) => {
      if (data) {
        return index
      }
    })
    indexData = indexData.filter((e) => e)
    let dataToFind = arrayData.filter((e) => e)

    let atributeDataFinded = columns[indexData[0]]
    console.log(atributeDataFinded, 'atributedatafindes')
    console.log(dataToFind[0], 'datato find')

    const objectFinded = allData.filter((object) => {
      if (object[atributeDataFinded] == dataToFind[0]) {
        console.log('entre')
        return object
      }
    })

    reset()
  }

  return (
    <form className="w-full max-w-sm" onSubmit={handleSubmit(handleOnSubmit)}>
      {columns?.map((column) => (
        <InputFormSearch key={column} column={column} register={register} />
      ))}
      <div className="md:flex md:items-center">
        <div className="md:w-1/3"></div>
        <div className="md:w-2/3">
          <button
            className="shadow m-[1rem] bg-purple-600 hover:bg-purple-300 focus:shadow-outline shadow-lg focus:outline-none text-white font-bold py-2 px-4 rounded"
            type="submit"
          >
            Buscar
          </button>
        </div>
      </div>
    </form>
  )
}

export default InsertForm
