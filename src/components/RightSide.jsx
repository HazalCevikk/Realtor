import { Dialog, Transition } from '@headlessui/react'
import { useContext, Fragment, useEffect, useCallback} from 'react'
import { SavedContext } from '../../context/forSavedContenxt'
import styles from "../../styles/Home.module.css"
import Image from 'next/image'
import { useRouter } from 'next/navigation'
import {useAuthState} from "react-firebase-hooks/auth"
import { auth } from '@/firebase'
import { signOut } from 'firebase/auth'

export default function RightSide() {
const [user, isLoading] = useAuthState(auth)

  const router = useRouter()
    const {isOpen, setIsOpen} = useContext(SavedContext)

console.log("user", user)

const handleSubmit = useCallback(() => {
  signOut(auth).then(() => {
    router.push("/signin")
  })
}, [])
  
    return (
        <Transition.Root show={isOpen} as={Fragment}> 
          <Dialog className="absolute z-50" onClose={setIsOpen}>
            <Transition.Child
              as={Fragment}
              enter={`${styles['transition-backdrop']}`}
              enterFrom="opacity-0"
              enterTo="opacity-100"
              leave={`${styles['transition-backdrop']}`}
              leaveFrom="opacity-100"
              leaveTo="opacity-0"
            >
              <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
            </Transition.Child>
    
            <div className="fixed inset-0 overflow-hidden">
              <div className="absolute inset-0 overflow-hidden">
                <div className="pointer-events-none fixed inset-y-0 right-0 flex max-w-full pl-10">
                  <Transition.Child
                    as={Fragment}
                    enter={`${styles['transition-dialog-enter']}`}
                    enterFrom="transform translate-x-full"
                    enterTo="transform translate-x-0"
                    leave={`${styles['transition-dialog-leave']}`}
                    leaveFrom="transform translate-x-0"
                    leaveTo="transform translate-x-full"
                  >
                    <Dialog.Panel className="pointer-events-auto relative w-screen max-w-md">
                      <div className="flex h-full flex-col overflow-y-scroll bg-white py-6 shadow-xl">
                        <div className="px-4 sm:px-6">
                          <Dialog.Title className="text-base font-semibold leading-6">
                            <div className='flex items-center justify-start gap-4'> 
                            <Image src={"/assets/user.png"} alt="user" width={50} height={50}/>
                            <div><p className='font-semibold text-gray-900 text-xl'>{!isLoading && user?.displayName}</p>
                            <p className='font-light text-gray-900 text-xs'>{!isLoading && user?.email}</p></div>
                            </div>
                         
                          </Dialog.Title>
                        </div>
                        <div className="relative mt-6 flex-1 px-4 sm:px-6">
                        <button className='w-full flex items-center gap-2 border-b-[1px] border-gray-300 py-2 outline-none' onClick={() => router.push("/offers") }>
                         <Image src={"/assets/heart.png"} alt="user" width={16} height={16}/>
                          <p>                       
                           Liked advert
                          </p></button>
                       <button className='w-full flex items-center gap-2 border-b-[1px] border-gray-300 py-2 outline-none' onClick={handleSubmit}>
                         <Image src={"/assets/exit.png"} alt="user" width={16} height={16}/>
                          <p>                       
                          Sign out
                          </p></button>
                          </div>
                      </div>
                    </Dialog.Panel>
                  </Transition.Child>
                </div>
              </div>
            </div>
          </Dialog>
        </Transition.Root>
        )
    }