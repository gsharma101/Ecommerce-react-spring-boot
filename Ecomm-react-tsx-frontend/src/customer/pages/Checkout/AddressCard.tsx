import { FormControl, FormControlLabel, FormLabel, Radio, RadioGroup } from '@mui/material'
import React from 'react'
import type { Address } from '../../../types/userTypes';

interface AddressCardProps {
    value: number;
    selectedValue: number;
    handleChange: (e: any) => void;
    item: Address
}
const AddressCard: React.FC<AddressCardProps> = ({ value, selectedValue, handleChange, item }) => {


    return (
        <div className='p-5 border rounded-md flex '>
            <div>
                <Radio
                    checked={value == selectedValue}
                    onChange={handleChange}
                    value={value}
                    name="radio-buttons"
                    inputProps={{ 'aria-label': 'B' }}
                />
            </div>

            <div className='space-y-3 pt-3'>
                <h1>{item.name}</h1>
                <p className='w-[320px]'>
                    {item.address},
                    {item.locality},
                    {item.city},
                    {item.state} - {item.pinCode}</p>
                <p><strong>Mobile : </strong> {item.mobile}</p>
            </div>
        </div>
    )
}

export default AddressCard