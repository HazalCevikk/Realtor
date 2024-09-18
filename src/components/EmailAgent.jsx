import React from 'react'

export default function EmailAgent() {
    return (
        <>
            <div className='rounded-xl p-4 border-gray-300 border-[1px] flex flex-col space-y-2 relative'>
                <p className='text-lg font-bold'>More about this property</p>
                <input type='text' placeholder='Full name*' className='p-3 rounded-lg outline-none border-gray-700 border-[1px]'></input>
                <input type='text' placeholder='Email*' className='p-3 rounded-lg outline-none border-gray-700 border-[1px]'></input>
                <input type='text' placeholder='Phone*' className='p-3 rounded-lg outline-none border-gray-700 border-[1px]'></input>
                <textarea className='p-3 rounded-lg outline-none border-[1px] border-gray-700 min-h-[160px]' placeholder='How can an agent help?'></textarea>
                <div className='flex space-x-2'>
                    <input type='checkbox'></input>
                    <label className='text-sm'>I've served in the U.S. military</label></div>
                <button className='p-3 w-full bg-gray-800 text-white rounded-full'>Email agent</button>
                <p className='text-[10px] text-gray-500'>By proceeding, you consent to receive calls and texts at the number you provided,
                    including marketing by autodialer and prerecorded and artificial voice, and email, from realtor.com and others about your
                    inquiry and other home-related matters, but not as a condition of any purchase. You also agree to our Terms of Use ,
                    and to our Privacy Policy regarding the information relating to you. Msg/data rates may apply. This consent applies even if you
                    are on a corporate, state or national Do Not Call list.</p>
            </div>
        </>
    )
}
