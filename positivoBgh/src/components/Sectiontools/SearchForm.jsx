import { FaceSmileIcon } from '@heroicons/react/24/outline'
import axios from 'axios'
import React, { useEffect, useState } from 'react'
import InputFormSearch from './InputFormSearch'
import { useForm } from 'react-hook-form'

const SearchForm = ({ data, selectedParam }) => {
  const [columns, setColumns] = useState([])
  // const [allData, setAllData] = useState([])
  const [loading, setLoading] = useState(false)
  const { register, handleSubmit, reset, watch } = useForm()

  const column = ''

  useEffect(() => {}, [])

  const handleOnSubmit = (data) => {
    const arrayData = Object.values(data)

    let indexData = arrayData.map((data, index) => {
      if (data) {
        return index
      }
    })

    indexData = indexData.filter((e) => e)
    let dataToFind = arrayData.filter((e) => e)

    let atributeDataFinded = selectedParam

    const objectFinded = allData.filter((object) => {
      if (object[atributeDataFinded] == dataToFind[0]) {
        console.log('entre')
        return object
      }
    })
    console.log(objectFinded)

    reset()
  }

  return <div></div>
}

export default SearchForm
