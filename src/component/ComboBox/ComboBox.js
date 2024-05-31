import { Combobox, ComboboxButton, ComboboxInput, ComboboxOption, ComboboxOptions, Transition } from '@headlessui/react'
import { Icon } from '@iconify/react/dist/iconify.js';
import clsx from 'clsx';
import React from 'react'

const ComboBox = (props) => {
    const { selected, setSelected, setQuery, filteredVal = [] } = props;
    return (
        <React.Fragment>
            <Combobox value={selected} onChange={(value) => setSelected(value)}>
                <div className="relative w-full h-full">
                    <ComboboxInput
                        className={clsx(
                            'w-full h-full rounded-lg border-none bg-white/5 py-1.5 pr-8 pl-3 ',
                            'focus:outline-none data-[focus]:outline-2 data-[focus]:-outline-offset-2 data-[focus]:outline-white/25'
                        )}
                        placeholder='country'
                        displayValue={(person) => person?.name}
                        onChange={(event) => setQuery(event.target.value)}
                    />
                    <ComboboxButton className="group absolute inset-y-0 right-0 px-2.5">
                        <Icon icon='flowbite:chevron-down-outline' className="text-xl text-gray-500 group-data-[hover]:fill-white" />
                    </ComboboxButton>
                </div>
                <Transition
                    leave="transition ease-in duration-100"
                    leaveFrom="opacity-100"
                    leaveTo="opacity-0"
                    afterLeave={() => setQuery('')}
                >
                    <ComboboxOptions
                        anchor="bottom"
                        className="w-[var(--input-width)] rounded-xl border border-white/5 bg-white p-1 [--anchor-gap:var(--spacing-1)] empty:hidden"
                    >
                        {filteredVal.map((person) => (
                            <ComboboxOption
                                key={person.id}
                                value={person}
                                className="group flex cursor-default items-center gap-2 rounded-lg py-1.5 px-3 select-none data-[focus]:bg-white/10"
                            >
                                <Icon icon='tabler:check' className="invisible text-xl text-gray-500 group-data-[selected]:visible" />
                                <div className="text-sm/6 text-gray-500">{person.name}</div>
                            </ComboboxOption>
                        ))}
                    </ComboboxOptions>
                </Transition>
            </Combobox>
        </React.Fragment>
    )
}

export default ComboBox