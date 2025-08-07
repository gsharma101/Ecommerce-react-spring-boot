import { Box, Divider, List, ListItem, ListItemButton, ListItemText } from '@mui/material'
import React, { useState } from 'react'
import { mainCategory } from '../../../data/category/mainCategory'
import CategorySheet from './CategorySheet';

const DrawerList = ({toggleDrawer}:any) => {
    const [selectedCategory,setSelectedCategory]=useState("");

  return (
    <Box sx={{ width: 250 }} role="presentation" 
    // onClick={toggleDrawer(false)}
    >
    <List>

      <ListItem>
        <ListItemButton>

          <ListItemText primary={<h1 className='logo text-2xl text-[#00927c]'>Shopzy</h1>} />
        </ListItemButton>
      </ListItem>
      <Divider />
     
      {mainCategory.map((item) => <ListItem key={item.name} disablePadding>
        <ListItemButton onClick={()=>setSelectedCategory(item.categoryId)}>
          <ListItemText primary={item.name} />
        </ListItemButton>
      </ListItem>
      )}


    </List>

    {selectedCategory && <div
        // onMouseLeave={() => setShowSheet(false)}
        // onMouseEnter={() => setShowSheet(true)} 
        className='categorySheet absolute top-[4.41rem] left-0 right-0 h-[400px]'>
        <CategorySheet toggleDrawer={toggleDrawer} selectedCategory={selectedCategory}/>
      </div>}

  </Box>
  )
}

export default DrawerList