import {
  Avatar,
  Button,
  Badge,
  useTheme,
  useMediaQuery
} from "@mui/material";

import { useState } from "react";

import { Box, IconButton } from '@mui/material'
import MenuIcon from "@mui/icons-material/Menu";
import SearchIcon from "@mui/icons-material/Search";
import { FavoriteBorder } from "@mui/icons-material";
import StorefrontIcon from "@mui/icons-material/Storefront";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import { mainCategory } from "../../../data/category/mainCategory";


export default function Navbar() {
  const theme = useTheme();
  const [showSheet, setShowSheet] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState("men");
  const isLarge = useMediaQuery(theme.breakpoints.up("lg"));

  return (
    <>
      <Box
        sx={{ zIndex: 2 }}
        className="sticky top-0 left-0 right-0 bg-white blur-bg bg-opacity-80 "
      >
        <div className="flex items-center justify-between px-5 lg:px-20 h-[70px] border-b">
          <div className="flex items-center gap-9">
            <div className="flex items-center gap-2">
              <div className='flex gap-1 lg:gap-6 items-center'>
                {!isLarge && <IconButton>
                  <MenuIcon />
                </IconButton>}
                <h1 className='logo cursor-pointer text-lg md:text-2xl  text-[#00927c]'>
                  Shopzy
                </h1>
              </div>
            </div>
            {isLarge && (
              <ul
                className="flex it
          ems-center font-medium text-gray-800 "
              >
                {mainCategory.map((item) => (
                  <li
                    onMouseLeave={() => {
                      // setSelectedCategory("")
                      setShowSheet(false);
                    }}
                    onMouseEnter={() => {
                      setSelectedCategory(item.categoryId);
                      setShowSheet(true);
                    }}
                    className="mainCategory hover:text-[#00927c] cursor-pointer hover:border-b-2 h-[70px] px-4 border-[#00927c] flex items-center"
                  >
                    {item.name}
                  </li>
                ))}
              </ul>
            )}
          </div>

          <div className='flex gap-1 lg:gap-6 items-center'>
            <IconButton>
              <SearchIcon className="text-gray-700" sx={{ fontSize: 29 }} />
            </IconButton>

            {
              false ? <Button className="flex items-center gap-2">
                <Avatar
                  sx={{ width: 29, height: 29 }}
                  src="https://cdn.pixabay.com/photo/2015/04/15/09/28/head-723540_640.jpg"
                // src="https://www.tanishq.co.in/dw/image/v2/BKCK_PRD/on/demandware.static/-/Library-Sites-TanishqSharedLibrary/default/dwc0abe627/homepage/ShopByGender/Woman.jpg"
                />
                <h1 className="font-semibold hidden lg:block">
                  Gaurav
                </h1>
              </Button> : <Button
                variant="contained"
                startIcon={<AccountCircleIcon sx={{ fontSize: "12px" }} />}
              >
                Login
              </Button>
            }

            <IconButton>
              <FavoriteBorder sx={{ fontSize: 29 }}
                className="text-gray-700" />
            </IconButton>

            <IconButton>
              <Badge color="primary">
                <AddShoppingCartIcon
                  sx={{ fontSize: 29 }}
                  className="text-gray-700"
                />
              </Badge>
            </IconButton>

            {isLarge && (
              <Button
                startIcon={<StorefrontIcon />}
                variant="outlined"
              >
                Become Seller
              </Button>
            )}
          </div>
        </div>
      </Box>
    </>
  )
}
