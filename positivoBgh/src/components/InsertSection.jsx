import React from 'react'

const InsertSection = () => {
  return (
    <div>
      <div className="text-left pl-[1rem] pt-[1rem] bg-gradient-to-r from-purple-400 to-purple-800 w-full h-screen">
        <h1 className="font-bold">Encontrado</h1>
        <div>
          <ListBoxTool />
          <SearchForm />
        </div>
      </div>
    </div>
  )
}

export default InsertSection
