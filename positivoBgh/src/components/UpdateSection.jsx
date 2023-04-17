import React from 'react'

const UpdateSection = () => {
  return (
    <div>
      <div className="text-left pl-[1rem] pt-[1rem] bg-gradient-to-r from-purple-400 to-purple-800 w-full h-screen">
        <h1 className="font-bold">Egreso/Ingreso del Material a Stock</h1>
        <div>
          <ListBoxTool />
          <InsertForm />
        </div>
      </div>
    </div>
  )
}

export default UpdateSection
