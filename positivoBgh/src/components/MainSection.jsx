import React from 'react'
import ListBoxTool from './Sectiontools/ListBoxTool'
import SearchForm from './Sectiontools/SearchForm'

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

const MainSection = () => {
  return (
    <div className="text-left pl-[1rem] pt-[1rem] bg-gradient-to-r from-purple-400 to-purple-800 w-full h-auto">
      <h1 className="font-bold">Busqueda</h1>
      <div>
        <ListBoxTool param={place} />
        <ListBoxTool param={category} />
        <SearchForm />
      </div>
    </div>
  )
}

export default MainSection
