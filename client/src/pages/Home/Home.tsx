import "./Home.scss";

import Slider from "../../components/Slider";
import FeaturedProducts from "../../components/FeaturedProducts";

function Home() {
  return (
    <div className="home">
      <Slider />
      <FeaturedProducts type="featured" />
    </div>
  );
}

export default Home;
