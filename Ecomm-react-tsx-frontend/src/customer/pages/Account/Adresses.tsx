import React from 'react'
import { useAppSelector } from '../../../Redux Toolkit/Store'
import AddressCard from '../Checkout/AddressCard'
import UserAddressCard from './UserAddressCard'

const Addresses = () => {
    const { user } = useAppSelector(store => store)
    return (
        <>
            <div className='space-y-3'>
                {user.user?.addresses?.map((item, index) =>
                    <UserAddressCard
                        key={item.id}
                        item={item} />)}
            </div>
        </>
    )
}

export default Addresses