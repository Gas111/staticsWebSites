import { useEffect, useState } from 'react'
import { Listbox, Transition } from '@headlessui/react'
import { VscChevronDown } from 'react-icons/vsc'

export default function ListBoxTool({
  param,
  selectedAtribute,
  setSelectedAtribute,
}) {
  
  return (
    <section className="w-[60%] flex flex-col m-[1rem]">
      <Listbox value={selectedAtribute} onChange={setSelectedAtribute}>
        <Listbox.Button className="inline-flex text-purple w-[60%] justify-between rounded-lg bg-slate-200 text-black px-4 py-2 text-sm font-medium hover:bg-white focus:outline-white focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75 shadow-lg shadow-purple-900/50 items-center">
          {selectedAtribute?.name} <VscChevronDown className="" />
        </Listbox.Button>
        <Transition
          enter="transition duration-100 ease-out"
          enterFrom="transform scale-95 opacity-0"
          enterTo="transform scale-100 opacity-100"
          leave="transition duration-75 ease-out"
          leaveFrom="transform scale-100 opacity-100"
          leaveTo="transform scale-95 opacity-0"
        >
          <Listbox.Options className="bg-white bg-opacity-30 text-black w-[60%] rounded-b-md pt-[1rem] overflow-hidden">
            {param.map((param) => (
              <Listbox.Option
                key={param.id}
                value={param}
                disabled={param.unavailable}
                className={`${
                  param.unavailable ? '' : 'hover:bg-purple-100'
                } p-[0.3rem] cursor-pointer`}
              >
                <div>{param.name}</div>
              </Listbox.Option>
            ))}
          </Listbox.Options>
        </Transition>
      </Listbox>
    </section>
  )
}
