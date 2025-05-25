import React from 'react'
import HomeCategoryCard from './HomeCategoryCard'
import { useAppSelector } from '../../../../Redux Toolkit/Store';

const homeCategory=[
  {
    "name": "Home Décor",
    "categoryId": "home_decor",
    "parentCategoryName": "Furniture",
    "parentCategoryId": "furniture",
    
    "level": 2,
    "section":"SHOP_BY_CATEGORIES",
    image:"https://assets.myntassets.com/h_720,q_90,w_540/v1/assets/images/28460938/2024/3/22/7fb09e9c-86e0-4602-b54e-fa5c0171b50b1711104156746IrregularMirrorHomeDecor1.jpg"
  },
  {
    "name": "Kitchen & Table",
    "categoryId": "kitchen_table",
    "parentCategoryName": "Furniture",
    "parentCategoryId": "furniture",
    
    "level": 2,
    "section":"SHOP_BY_CATEGORIES",
    image:"https://assets.myntassets.com/h_720,q_90,w_540/v1/assets/images/19873492/2022/9/10/fd72939c-c379-4bab-9fd6-918c89172d161662797928387AquarelleBlue100CottonPrintedTableRunner1.jpg"
  },

  {
    "parentCategoryId":"women",
    "level":2,
    "name":"Sports & Active Wear",
    "categoryId": "women_sports_active_wear",
    "section":"SHOP_BY_CATEGORIES",
    image:"https://assets.myntassets.com/h_1440,q_90,w_1080/v1/assets/images/22109480/2023/9/5/06a17ac3-46b0-4f9d-bcb1-2d3582feda041693895310152PumaWomenBrandLogoPrintedPureCottonOutdoorT-shirt1.jpg"
  },
  {
    "parentCategoryId":"women",
    "level":2,
    "name":"Lingerie Sleepwear",
    "categoryId": "women_lingerie_sleepwear",
    "section":"SHOP_BY_CATEGORIES",
    image:"https://assets.myntassets.com/h_720,q_90,w_540/v1/assets/images/362895/2023/10/18/bfb55058-fe1a-45d6-a39d-1b8d421e02001697603774147TriumphShapeSensation33withHighWaistTummyandThighControlMaxi1.jpg"
  },

    {
      "parentCategoryId":"women",
      "level":2,
      "name":"Indian & fusion Wear",
      "categoryId": "women_indian_and_fusion_wear",
      "section":"SHOP_BY_CATEGORIES",
      image:"https://assets.myntassets.com/h_720,q_90,w_540/v1/assets/images/22866694/2023/4/24/98951db4-e0a5-47f8-a1be-353863d24dc01682349679664KaliniOrangeSilkBlendEthnicWovenDesignFestiveSareewithMatchi2.jpg"
    },
    {
      "parentCategoryId":"women",
      "level":2,
      "name":"western wear",
      "categoryId": "women_western_wear",
      "section":"SHOP_BY_CATEGORIES",
      image:"https://assets.myntassets.com/h_720,q_90,w_540/v1/assets/images/22391504/2023/3/17/3259c109-060a-4c39-aba2-e9d32e2068e41679049035856StyleQuotientPeach-ColouredTie-UpNeckPuffSleeveCottonTop1.jpg"
    },
    {
      "parentCategoryId":"women",
      "level":2,
      "name":"Women Footwear",
      "categoryId": "women_footwear",
      "section":"SHOP_BY_CATEGORIES",
      image:"https://assets.myntassets.com/h_720,q_90,w_540/v1/assets/images/28024048/2024/3/5/fca98389-f9d6-4f19-b82a-53c7ee0518ec1709633175836CORSICABlockSandalswithBows1.jpg"
    },
    {
        "name": "Topwere",
        "categoryId": "men_topwear",
        "parentCategoryId":"men",
        "level":2,
        "section":"SHOP_BY_CATEGORIES",
        image:"https://assets.myntassets.com/h_720,q_90,w_540/v1/assets/images/23029834/2023/9/18/96c015ae-1090-4036-954b-d9c80085b1d71695022844653-HRX-by-Hrithik-Roshan-Men-Jackets-6981695022843934-1.jpg"
    },
    {
        "name": "Bottomwere",
        "categoryId": "men_bottomwear",
        "parentCategoryId":"men",
        "level":2,
        "section":"SHOP_BY_CATEGORIES",
        image:"https://assets.myntassets.com/h_720,q_90,w_540/v1/assets/images/20122324/2022/9/22/91c61c45-fe17-4d1d-8e20-0aaaf90186b61663827920015RaymondSlimFitBlueJeansForMen1.jpg"
    },
    {
        "name": "Innerwere And Sleepwere",
        "categoryId": "men_innerwear_and_sleepwear",
        "parentCategoryId":"men",
        "level":2,
        "section":"SHOP_BY_CATEGORIES",
        image:"https://assets.myntassets.com/h_720,q_90,w_540/v1/assets/images/24528350/2023/8/17/d9ee03c9-7e15-49e4-8f15-0b6f38e568121692275415567TrackPants1.jpg"
    },
    {
        "name": "Footwere",
        "categoryId": "men_footwear",
        "parentCategoryId":"men",
        "level":2,
        "section":"SHOP_BY_CATEGORIES",
        image:"https://assets.myntassets.com/h_720,q_90,w_540/v1/assets/images/27107914/2024/1/30/bd09f650-d8a4-4570-8e53-e2cfafc4ea6c1706609911015SparxMenMeshRunningShoes1.jpg"
    },
    {
      "name": "Bed Linen & Furnishing",
      "categoryId": "bed_linen_furnishing",
      "parentCategoryName": "Furniture",
      "parentCategoryId": "furniture",
      
      "level": 2,
      "section":"SHOP_BY_CATEGORIES",
      image:"https://assets.myntassets.com/h_720,q_90,w_540/v1/assets/images/19284508/2022/7/28/92df52de-27dc-4d72-8ab4-fee2c82c85081659003977664DreamscapeUnisexPinkBedsheets1.jpg"
    },
    {
      "name": "Flooring",
      "categoryId": "flooring",
      "parentCategoryName": "Furniture",
      "parentCategoryId": "furniture",
      
      "level": 2,
      "section":"SHOP_BY_CATEGORIES",
      image:"https://assets.myntassets.com/h_720,q_90,w_540/v1/assets/images/27868878/2024/2/25/53b7c07f-24a7-48e2-a791-f63dce4a0c981708844793060SANACARPETMulticolouredFloralAnti-SkidPolyesterCarpet1.jpg"
    },
    {
      "name": "Bath",
      "categoryId": "bath",
      "parentCategoryName": "Furniture",
      "parentCategoryId": "furniture",
      
      "level": 2,
      "section":"SHOP_BY_CATEGORIES",
      image:"https://assets.myntassets.com/h_720,q_90,w_540/v1/assets/images/16719378/2024/7/2/97418bad-8216-494f-a863-9b159aec93cf1719897710069JockeyPackof2CottonTerry500GSMUltrasoftandDurableSolidHandTo1.jpg"
    },
    {
      "name": "Lamps & Lighting",
      "categoryId": "lamps_lighting",
      "parentCategoryName": "Furniture",
      "parentCategoryId": "furniture",
      
      "level": 2,
      "section":"SHOP_BY_CATEGORIES",
      image:"https://assets.myntassets.com/h_720,q_90,w_540/v1/assets/images/productimage/2021/6/10/5be80654-037c-4591-99c9-a403646971981623344562713-1.jpg"
    },
    
    
  
  
]
const HomeCategory = () => {
  const { homePage} = useAppSelector((store) => store);
  return (
    <div className='flex justify-center gap-7 flex-wrap '>
        {homePage.homePageData?.shopByCategories.map((item)=><HomeCategoryCard item={item}/>)}
        
    </div>
  )
}

export default HomeCategory