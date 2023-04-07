import { useState } from 'react'
import { Listbox, Transition } from '@headlessui/react'
import { VscChevronDown } from 'react-icons/vsc'

const people = [
  { id: 1, name: 'Casa Central', unavailable: false },
  { id: 2, name: 'Spegazzini', unavailable: false },
  { id: 3, name: 'Parque Patricios', unavailable: true },
]

export default function ListBoxTool() {
  const [selectedPerson, setSelectedPerson] = useState(people[0])

  return (
    <section className="w-[60%] flex flex-col m-[1rem]">
      <Listbox value={selectedPerson} onChange={setSelectedPerson}>
        <Listbox.Button className="inline-flex text-purple w-[60%] justify-between rounded-lg bg-slate-200 text-black px-4 py-2 text-sm font-medium hover:bg-white focus:outline-white focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75 shadow-lg shadow-purple-900/50 items-center">
          {selectedPerson.name} <VscChevronDown className="" />
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
            {people.map((person) => (
              <Listbox.Option
                key={person.id}
                value={person}
                disabled={person.unavailable}
                className={`${
                  person.unavailable ? 'cursor-none' : 'cursor-pointer'
                } p-[0.3rem] hover:bg-purple-100`}
              >
                <div>{person.name}</div>
              </Listbox.Option>
            ))}
          </Listbox.Options>
        </Transition>
      </Listbox>
    </section>
  )
}
