'use client'
import { Disclosure, Transition } from '@headlessui/react'
import Image from 'next/image'

export default function MyDisclosure({ data }) {
    return (
        <Disclosure as='div' className={'w-[70%]'}>
            {({ open }) => (
                /* Use the `open` state to conditionally change the direction of an icon. */
                <>
                    <Disclosure.Button as='div' className='flex justify-between items-center w-full border-b-[1px] border-black p-3'>
                        <p className='font-bold text-xl'>Property Details</p>
                        <Image src='/assets/chevron-right-solid.svg' className={open ? 'rotate-90 transform' : ''} width={10} height={10} alt='deneme' />
                    </Disclosure.Button>
                    <Transition
                        enter="transition duration-100 ease-out"
                        enterFrom="transform scale-95 opacity-0"
                        enterTo="transform scale-100 opacity-100"
                        leave="transition duration-75 ease-out"
                        leaveFrom="transform scale-100 opacity-100"
                        leaveTo="transform scale-95 opacity-0"
                    >
                        <Disclosure.Panel>
                            <p className='p-3 '> {data.data.description.text}</p>
                        </Disclosure.Panel>
                    </Transition>
                </>
            )}
        </Disclosure>
    )
}