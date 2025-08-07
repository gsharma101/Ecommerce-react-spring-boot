import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import DealCard from "./DealCard";
import { useAppSelector } from "../../../../Redux Toolkit/Store";
import type { Deal } from "../../../../types/dealTypes";

export default function DealSlider() {
    const {homePage}=useAppSelector(store=>store)
    var settings = {
        dots: true,
        infinite: true,
        slidesToShow: 6,
        slidesToScroll: 1,
        autoplay: true,
        speed: 2000,
        autoplaySpeed: 2000,
        cssEase: "linear",
        responsive: [
            {
              breakpoint: 1024, // Large screen
              settings: {
                slidesToShow: 4,
                slidesToScroll: 1,
              },
            },
            {
              breakpoint: 768, // Tablet
              settings: {
                slidesToShow: 2,
                slidesToScroll: 1,
              },
            },
            {
              breakpoint: 480, // Mobile
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
              },
            },
          ],

    };
    return (
        <div className=" py-5 lg:px-20">
            <div className="slide-container  ">
                <Slider {...settings}>
                    {homePage.homePageData?.deals?.map((item:Deal) => <div className="border flex flex-col items-center justify-center">
                        <DealCard deal={item}/>
                    </div>)}

                </Slider>
            </div>
        </div>

    );
}