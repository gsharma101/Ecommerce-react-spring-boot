import React from "react";
import { Avatar, IconButton } from "@mui/material";
import { Rating, Box, Typography, Grid } from "@mui/material";
import type { Review } from "../../../types/reviewTypes";
import DeleteIcon from '@mui/icons-material/Delete';
import { red } from "@mui/material/colors";
import { useAppDispatch, useAppSelector } from "../../../Redux Toolkit/Store";
import { deleteReview } from "../../../Redux Toolkit/Customer/ReviewSlice";

interface ProductReviewCardProps {
  item: Review;
}

const ProductReviewCard = ({ item }: ProductReviewCardProps) => {
  const [value, setValue] = React.useState(4.5);
  const { auth, user } = useAppSelector(store => store);
  const dispatch = useAppDispatch()
  const handleDeleteReview = () => {
    dispatch(deleteReview({ reviewId: item.id, jwt: localStorage.getItem("jwt") || "" }))
  };
  return (
    <div className="flex justify-between">
      <Grid container spacing={2} gap={3}>
        <Grid item xs={1}>
          <Box>
            <Avatar
              className="text-white"
              sx={{ width: 56, height: 56, bgcolor: "#9155FD" }}
              alt={item.user.fullName}
              src=""
            >
              {item.user.fullName[0].toUpperCase()}
            </Avatar>
          </Box>
        </Grid>
        <Grid item xs={9}>
          <div className="space-y-2">
            <div className="">
              <p className="font-semibold text-lg">{item.user.fullName}</p>
              <p className="opacity-70">{item.createdAt}</p>
            </div>
            <div>


              <Rating
                readOnly
                value={item.rating}
                name="half-rating"
                defaultValue={2.5}
                precision={0.5}
              />

            </div>
            <p>
              {item.reviewText}
            </p>
            <div>
              {item.productImages.map((image) => <img key={image} className="w-24 h-24 object-cover" src={image} alt="" />)}
            </div>
          </div>
        </Grid>
      </Grid>
      {item.user.id === user.user?.id && <div className="">
        <IconButton onClick={handleDeleteReview}>
          <DeleteIcon sx={{ color: red[700] }} />
        </IconButton>
      </div>}
    </div>
  );
};

export default ProductReviewCard;
