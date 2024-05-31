import clsx from 'clsx';
import React, { useState } from 'react'
import { Listbox, ListboxButton, ListboxOption, ListboxOptions, Transition } from '@headlessui/react'
import { Icon } from '@iconify/react/dist/iconify.js';


const SelectField = ({ listItems, selected, setSelected, fieldStyle = '' }) => {

    return (
        <React.Fragment>
            <Listbox value={selected} onChange={setSelected}>
                <ListboxButton
                    className={clsx(fieldStyle,
                        'relative z-30 block w-full h-full bg-white/5 py-1.5 pr-8 pl-3 text-left text-sm/6',
                        'focus:outline-none data-[focus]:outline-2 data-[focus]:-outline-offset-2 data-[focus]:outline-white/25'
                    )}
                >
                    {selected.name}
                    <Icon
                        icon='flowbite:chevron-down-outline'
                        className="group pointer-events-none absolute text-3xl top-2 right-2.5 text-gray-400"
                        aria-hidden="true"
                    />
                </ListboxButton>
                <Transition leave="transition ease-in duration-100" leaveFrom="opacity-100" leaveTo="opacity-0">
                    <ListboxOptions
                        anchor="bottom"
                        className="w-[var(--button-width)] z-30 rounded-xl border border-gray-300 shadow-md bg-white p-1 [--anchor-gap:var(--spacing-1)] focus:outline-none"
                    >
                        {listItems.map((item) => (
                            <ListboxOption
                                key={item.name}
                                value={item}
                                className="group flex cursor-default items-center gap-2 rounded-lg py-1.5 px-3 select-none data-[focus]:bg-white/10"
                            >
                                <Icon icon="material-symbols:check" className='invisible group-data-[selected]:visible' />
                                <div className="text-sm/6">{item.name}</div>
                            </ListboxOption>
                        ))}
                    </ListboxOptions>
                </Transition>
            </Listbox>
        </React.Fragment>
    )
}

export default SelectField