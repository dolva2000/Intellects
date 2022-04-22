import TrendingCat from "../components/trending-cat";

import Services from "../components/services";
import Counter_section from "../components/counter-sections";
import Subscribes from "../components/subscribes";
import LastestProduit from "../components/lastestProduit";
import FeaturedLis from "../components/featured-lis";
export default function Home() {
  return (
    <>
      <TrendingCat />
      <LastestProduit />
      <FeaturedLis />

      <Counter_section />
      <Subscribes />
    </>
  );
}
