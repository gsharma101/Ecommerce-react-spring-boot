import { useAppSelector } from "../../../Redux Toolkit/Store";
import HomeCategoryTable from "./HomeCategoryTable";

export default function GridTable() {
  const { homePage} = useAppSelector((store) => store);


  return (
    <>
      <HomeCategoryTable categories={homePage.homePageData?.grid}/>
    </>
  );
}
