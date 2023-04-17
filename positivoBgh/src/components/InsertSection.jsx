import React, { useEffect, useState } from 'react'
import ListBoxTool from './Sectiontools/ListBoxTool'
import SearchForm from './Sectiontools/SearchForm'
import { useDispatch, useSelector } from 'react-redux'
import { getData } from '../store/slices/data.slice'
import { useForm } from 'react-hook-form'

import InsertForm from './Sectiontools/InsertForm'

const place = [
  { id: 1, name: 'Casa Central', unavailable: false },
  { id: 2, name: 'Spegazzini', unavailable: false },
  { id: 3, name: 'Parque Patricios', unavailable: true },
]

const category = [
  { id: 1, name: 'Materiales', unavailable: false },
  { id: 2, name: 'Consumibles', unavailable: true },
  { id: 3, name: 'Herramental Produccion', unavailable: true },
  { id: 4, name: 'Reparacion', unavailable: true },
]

let columnsArray = []



const InsertSection = () => {
  const dispatch = useDispatch()
  const [isgetted, setisgetted] = useState(false)
  const [isready, setisready] = useState(false)
  let columns = useSelector((state) => state.columns)
  const data = useSelector((state) => state.data)
  const { register, handleSubmit } = useForm()
  const [selectedAtribute, setSelectedAtribute] = useState(columnsArray[0])
  const [selectedPlace, setSelectedPlace] = useState(place[0])
  const [selectedCategory, setSelectedCategory] = useState(category[0])

  useEffect(() => {
    const getAll = async () => {
      await dispatch(getData())
      setisgetted(true)
    }

    if (!isgetted) getAll()

    if (columns) {
      columns?.forEach((column, index) => {
        const object = {
          id: index + 1,
          name: column,
          unavailable: false,
        }

        columnsArray.push(object)
      })
      setisready(true)
    }
  }, [isgetted])

  const handleOnSubmit = (dataInput) => {
    let atributeDataFinded = selectedAtribute.name

    let stringRegex = `${dataInput.dataToFind}`
    let dataRegex = new RegExp(stringRegex, 'gi')

    const objectFinded = data?.filter((object) => {
      if (object[atributeDataFinded].match(dataRegex)) {
        console.log('entre')
        return object
      }
    })
    console.log(objectFinded)
  }

  return (
    <div className="text-left pl-[1rem] pt-[1rem] bg-gradient-to-r from-purple-400 to-purple-800 w-full h-auto">
      <h1 className="font-bold">Ingresa Nuevo Material</h1>
      <div>
        <ListBoxTool
          param={place}
          selectedAtribute={selectedPlace}
          setSelectedAtribute={setSelectedPlace}
        />
        <ListBoxTool
          param={category}
          selectedAtribute={selectedCategory}
          setSelectedAtribute={setSelectedCategory}
        />
        {isready ? (
          <ListBoxTool
            param={columnsArray}
            selectedAtribute={selectedAtribute}
            setSelectedAtribute={setSelectedAtribute}
          />
        ) : (
          ''
        )}
        <InsertForm />
        {/*         
        <form
          className="w-full max-w-sm"
          onSubmit={handleSubmit(handleOnSubmit)}
        >
          <input
            className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
            id="inline-full-name"
            type="text"
            name="dataToFind"
            {...register('dataToFind')}
          />

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
        </form> */}
      </div>
    </div>
  )
}

export default InsertSection
