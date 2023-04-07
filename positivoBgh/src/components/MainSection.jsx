import React from 'react'
import ListBoxTool from './Sectiontools/ListBoxTool'
import SearchForm from './Sectiontools/SearchForm'

const MainSection = () => {
  return (
    <div className="text-left pl-[1rem] pt-[1rem] bg-gradient-to-r from-purple-400 to-purple-800 w-full h-screen">
      <h1 className="bold">Busqueda</h1>
      <div>
        <ListBoxTool />
        <SearchForm/>
      </div>
    </div>
  )
}

export default MainSection
