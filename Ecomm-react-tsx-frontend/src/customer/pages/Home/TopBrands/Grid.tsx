import React from "react";
import { useAppSelector } from "../../../../Redux Toolkit/Store";

const grid = [
  {"categoryId":"women_lehenga_cholis",
        "section": "GRID",
        "name": "women lehenga cholis",
    image:
      "https://assets.myntassets.com/h_720,q_90,w_540/v1/assets/images/23807268/2023/6/29/9930b235-5318-4755-abbe-08f99e969e781688026636544LehengaCholi7.jpg",
  },
  {"categoryId":"men_formal_shoes",
        "section": "GRID",
        "name": "men formal shoes",
    image:
      "https://assets.myntassets.com/h_720,q_90,w_540/v1/assets/images/24651572/2023/8/25/4fbf6d8c-d093-46c5-a5a6-7dd67c0c76551692964752597HouseofPataudiMenTanFauxLeatherFormalSlipOnLoafers1.jpg",
  },
  {"categoryId":"women_lehenga_cholis",
        "section": "GRID",
        "name": "women lehenga cholis",
    image:
      "https://images.pexels.com/photos/12730873/pexels-photo-12730873.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  },
  {"categoryId":"men_sherwanis",
        "section": "GRID",
        "name": "men sherwanis",
    image:
      "https://shreeman.in/cdn/shop/files/20_3cfbd5a3-ecb6-482a-b798-7ffd9de1c784.jpg?v=1712061674&width=700",
  },
  {"categoryId":"women_jewellery",
        "section": "GRID",
        "name": "women jewellery",
    image:
      "https://media.istockphoto.com/id/1276740597/photo/indian-traditional-gold-necklace.jpg?b=1&s=612x612&w=0&k=20&c=S-QnNZKqf2u3L-GIaDiIinNRU74GBWQaIDwY7gYJboY=",
  },
  {"categoryId":"women_footwear",
        "section": "GRID",
        "name": "women footwear",
    image:
      "https://assets.myntassets.com/h_720,q_90,w_540/v1/assets/images/13837166/2021/8/19/04e40e02-4c56-4705-94d0-f444b29973aa1629373611707-House-of-Pataudi-Women-Maroon-Embellished-Handcrafted-Wedges-1.jpg",
  },
];
const TopBrand = () => {
  const {homePage}=useAppSelector(store=>store)
  return (
    <div className="grid gap-4 grid-rows-12 grid-cols-12 lg:h-[600px] px-5 lg:px-20">
      <div className=" col-span-3 row-span-12  text-white  rounded ">
        <img
          className="w-full h-full object-cover border-fuchsia-800 lg:border-[9px]s rounded-md"
          src={homePage.homePageData?.grid[0].image}
          alt=""
        />
      </div>

      <div className="col-span-2 row-span-6  text-white rounded">
        <img
          className="w-full h-full object-cover border-fuchsia-800 lg:border-[9px]s rounded-md"
          src={homePage.homePageData?.grid[1].image}
          alt=""
        />
      </div>

      <div className="col-span-4 row-span-6  text-white  rounded ">
        <img
          className="w-full h-full object-cover object-top border-fuchsia-800 lg:border-[9px]s rounded-md"
          src={homePage.homePageData?.grid[2].image}
          alt=""
        />
      </div>

      <div className="col-span-3 row-span-12  text-white  rounded ">
        <img
          className="w-full h-full object-cover object-top border-fuchsia-800 lg:border-[9px]s rounded-md"
          src={homePage.homePageData?.grid[3].image}
          alt=""
        />
      </div>

      <div className="col-span-4 row-span-6  text-white  rounded ">
        <img
          className="w-full h-full object-cover object-top border-fuchsia-800 lg:border-[9px]s rounded-md"
          src={homePage.homePageData?.grid[4].image}
          alt=""
        />
      </div>
      <div className="col-span-2 row-span-6  text-white rounded ">
        <img
          className="w-full h-full object-cover border-fuchsia-800 lg:border-[9px]s rounded-md"
          src={homePage.homePageData?.grid[5].image}
          alt=""
        />
      </div>

      {/* https://tristenwallace.com/wp-content/uploads/2022/06/wed-7.jpg */}
    </div>
  );
};

export default TopBrand;
