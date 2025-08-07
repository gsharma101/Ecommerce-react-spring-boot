import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { Button, IconButton, Menu, MenuItem, Select, styled } from '@mui/material';
import { useAppDispatch, useAppSelector } from '../../../Redux Toolkit/Store';
import type { Coupon } from '../../../types/couponTypes';
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
import { deleteCoupon } from '../../../Redux Toolkit/Admin/AdminCouponSlice';

const StyledTableCell = styled(TableCell)(({ theme }) => ({
    [`&.${tableCellClasses.head}`]: {
        backgroundColor: theme.palette.common.black,
        color: theme.palette.common.white,
    },
    [`&.${tableCellClasses.body}`]: {
        fontSize: 14,
    },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
    '&:nth-of-type(odd)': {
        backgroundColor: theme.palette.action.hover,
    },
    // hide last border
    '&:last-child td, &:last-child th': {
        border: 0,
    },
}));

const accountStatuses = [
    { status: 'ACTIVE', title: 'Active', description: 'Account is active and in good standing' },
    { status: 'PENDING_VERIFICATION', title: 'Pending Verification', description: 'Account is created but not yet verified' },
    { status: 'SUSPENDED', title: 'Suspended', description: 'Account is temporarily suspended, possibly due to violations' },
    { status: 'DEACTIVATED', title: 'Deactivated', description: 'Account is deactivated, user may have chosen to deactivate it' },
    { status: 'BANNED', title: 'Banned', description: 'Account is permanently banned due to severe violations' },
    { status: 'CLOSED', title: 'Closed', description: 'Account is permanently closed, possibly at user request' }
];

export default function CouponTable() {
    const [page, setPage] = React.useState(0);
    const [status, setStatus] = React.useState(accountStatuses[0].status)
    const { sellers, adminCoupon } = useAppSelector(store => store)
    const dispatch = useAppDispatch();

    const handleDeleteCoupon = (id:number) => {
        dispatch(deleteCoupon({ id, jwt: localStorage.getItem("jwt") || "" }))
    }

    return (
        <>
            <div className='pb-5 w-60'>
                <Select
                    id="demo-simple-select"
                    value={status}
                    color='primary'
                    className='text-primary-color'
                >
                    {accountStatuses.map((status) =>
                        <MenuItem value={status.status}>{status.title}</MenuItem>)}
                </Select>
            </div>

            <TableContainer component={Paper}>
                <Table sx={{ minWidth: 700 }} aria-label="customized table">
                    <TableHead>
                        <TableRow>
                            <StyledTableCell>Coupon Code</StyledTableCell>
                            <StyledTableCell >Start Date</StyledTableCell>
                            <StyledTableCell >End Date</StyledTableCell>
                            <StyledTableCell >Min Order Value</StyledTableCell>
                            <StyledTableCell >Discount %</StyledTableCell>
                            <StyledTableCell align="right">Status</StyledTableCell>
                            <StyledTableCell align="right">Delete</StyledTableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {adminCoupon.coupons?.map((coupon: Coupon) => (
                            <StyledTableRow key={coupon.id}>
                                <StyledTableCell component="th" scope="row">
                                    {coupon.code}
                                </StyledTableCell>
                                <StyledTableCell >{coupon.validityStartDate}</StyledTableCell>
                                <StyledTableCell >{coupon.validityEndDate}</StyledTableCell>
                                <StyledTableCell >{coupon.minimumOrderValue}</StyledTableCell>
                                <StyledTableCell >{coupon.discountPercentage}</StyledTableCell>
                                <StyledTableCell align="right">{coupon.active ? "Active" : "Deactive"}</StyledTableCell>
                                <StyledTableCell align="right">
                                    <IconButton onClick={() => handleDeleteCoupon(coupon.id)}>
                                        <DeleteOutlineIcon className='text-red-700 cursor-pointer' />
                                    </IconButton>
                                </StyledTableCell>
                            </StyledTableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
        </>
    );
}
