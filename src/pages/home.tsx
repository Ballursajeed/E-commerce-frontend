import { Link } from "react-router-dom";
import ProductCard from "../components/product-card";

const Home = () => {
  const addToCartHandler = () => {};

  return (
    <div className="home">
      <section></section>
      <h1>
        Latest Product
        <Link to="/search" className="findmore">
          {" "}
          More
        </Link>
      </h1>

      <main>
        <ProductCard
          productId="ada"
          name="Macbook"
          price={278888}
          photo="https://m.media-amazon.com/images/I/313CFbI-YjL._SY445_SX342_QL70_FMwebp_.jpg"
          stock={434}
          handler={addToCartHandler}
        />
      </main>
    </div>
  );
};

export default Home;
