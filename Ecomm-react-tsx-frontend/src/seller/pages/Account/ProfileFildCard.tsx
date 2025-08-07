/* eslint-disable @typescript-eslint/no-explicit-any */
import { Divider } from '@mui/material'


const ProfileFildCard = ({value,keys}:any) => {
  return (
    <div className='p-5 flex items-center bg-slate-50 '>
          <p className='w-20 lg:w-36 pr-5'>{keys}</p>
          <Divider orientation="vertical" flexItem />
          <p className='pl-4 lg:pl-10 font-semibold lg:text-lg'>{value}</p>
        </div>
  )
}

export default ProfileFildCard