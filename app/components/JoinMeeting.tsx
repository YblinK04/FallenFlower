'use client'
import Link from 'next/link'
import React from 'react'

const JoinMeeting = () => {
  const [roomId, setRoomId] = React.useState<string>('');
  return (
    <div className='flex gap-2 item-center mt-4 w-full'>
        <input 
        type='text' 
        placeholder='Enter metting code' 
        className='w-full px-4 py-2 border-pink-400 rounded-md' 
        value={roomId} 
        onChange={(e) => 
        setRoomId(e.target.value)} 
        />
   
    <Link href={`/room/${roomId}`}>
    
    <button className='px-4 py-2 bg-pink-700 text-black rounded-md'>
      Join

    </button>
    
    </Link>
    </div>
  )
}

export default JoinMeeting