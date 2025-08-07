import React, { useState } from 'react'
import PricingCard from '../Cart/PricingCard'
import { Box, Button, FormControlLabel, Modal, Radio, RadioGroup } from '@mui/material'
import { useNavigate } from 'react-router-dom'
import AddressForm from './AddresssForm'
import AddressCard from './AddressCard'
import AddIcon from '@mui/icons-material/Add';
import { createOrder } from '../../../Redux Toolkit/Customer/OrderSlice'
import { useAppDispatch, useAppSelector } from '../../../Redux Toolkit/Store'

const style = {
    position: 'absolute' as 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 450,
    bgcolor: 'background.paper',
    boxShadow: 24,
    p: 4,
};

const paymentGatwayList = [
    {
        value: "RAZORPAY",
        image: "https://razorpay.com/newsroom-content/uploads/2020/12/output-onlinepngtools-1-1.png",
        label: "Razarpay"
    },
    {
        value: "STRIPE",
        image: "/stripe_logo.png",
        label: "Stripe"
    }
]
const AddressPage = () => {
    const navigate = useNavigate()
    const [value, setValue] = React.useState(0);
    const dispatch = useAppDispatch();
    const { user } = useAppSelector(store => store)
    const [paymentGateway, setPaymentGateway] = useState(paymentGatwayList[0].value);

    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    const handleChange = (event: any) => {
        console.log("-----", event.target.value)
        setValue(event.target.value);
    };

    const handleCreateOrder = () => {
        if (user.user?.addresses)
            dispatch(createOrder({
                paymentGateway,
                address: user.user?.addresses[value],
                jwt: localStorage.getItem('jwt') || ""
            }))
    }

    const handlePaymentChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setPaymentGateway((event.target as HTMLInputElement).value);
    };

    return (
        <div className='pt-10 px-5 sm:px-10 md:px-44 lg:px-60 min-h-screen '>
            <div className='space-y-5 lg:space-y-0 lg:grid grid-cols-3 lg:gap-9 '>

                <div className="col-span-2 space-y-5">

                    <div className='flex justify-between items-center'>
                        <span className='font-semibold'>Select Dilivery Address</span>
                        <Button onClick={handleOpen} variant='outlined'>Add New Address</Button>

                    </div>
                    <div className='text-xs font-medium space-y-5'>
                        <p>Saved Addreses</p>
                        <div className='space-y-3'>
                            {user.user?.addresses?.map((item, index) => <AddressCard
                                key={item.id}
                                item={item}
                                selectedValue={value} value={index}
                                handleChange={handleChange} />)}
                        </div>
                    </div>
                    <div className='py-4 px-5 rounded-md border'>

                        <Button onClick={handleOpen} startIcon={<AddIcon />}>Add New Address</Button>

                    </div>
                </div>
                <div className="col-span-1 text-sm space-y-3 ">
                    <section className='space-y-3 border p-5 rounded-md'>
                        <h1 className='text-primary-color font-medium pb-2 text-center'>Chose Payment Gatway</h1>

                        <RadioGroup
                            row
                            aria-labelledby="demo-row-radio-buttons-group-label"
                            name="row-radio-buttons-group"
                            className='flex justify-between pr-0'
                            onChange={handlePaymentChange}
                            value={paymentGateway}
                        >
                            {paymentGatwayList.map((item) => <FormControlLabel className={`border w-[45%] flex justify-center rounded-md pr-2 ${paymentGateway === item.value ? "border-primary-color" : ""}`} value={item.value} control={<Radio />} label={<div>

                                <img
                                    className={`${item.value == "stripe" ? "w-14" : ""} object-cover`}
                                    src={item.image}
                                    alt={item.label}
                                />
                            </div>} />)}


                        </RadioGroup>

                    </section>
                    <section className='border rounded-md'>
                        <PricingCard />
                        <div className='p-5'>
                            <Button
                                onClick={handleCreateOrder} sx={{ py: "11px" }}
                                variant='contained' fullWidth>Checkout</Button>
                        </div>
                    </section>

                </div>

            </div>

            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box sx={style}>
                    <AddressForm paymentGateway={paymentGateway} handleClose={handleClose} />
                </Box>
            </Modal>
        </div>
    )
}

export default AddressPage