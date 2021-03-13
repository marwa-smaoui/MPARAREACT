import React from "react";

import Blog from "../Blogs/Blog";
import Footer from "../Footer/Footer";
import Slider from "../Slider/Slider";
import FilterProducts from "../Products/FilterProducts";
import Footer1 from "../Footer/Footer1";
function Home({search}) {
 console.log(search)
  return (
    <div>
      <Slider />
      <h2> -- Produits À La Une -- </h2>
      <FilterProducts search={search} />
      <h2>-- Articles De Blog -- </h2>
      <Blog />
      <Footer1/>
      <Footer />
    </div>
  );
}

export default Home;
