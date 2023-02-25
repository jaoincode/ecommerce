import "./Home.scss";

import Slider from "../../components/Slider";
import FeaturedProducts from "../../components/FeaturedProducts";
import Categories from "../../components/Categories";

function Home() {
  return (
    <div className="home">
      <Slider />
      <FeaturedProducts type="featured" />
      <Categories />
    </div>
  );
}

export default Home;
