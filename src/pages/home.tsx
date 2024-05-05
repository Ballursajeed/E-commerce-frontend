import { Link } from "react-router-dom";
import ProductCard from "../components/product-card";
import { useLatestProductsQuery } from "../redux/api/productApi";
import toast from "react-hot-toast";
import Loader from "../components/loader";

const Home = () => {
  const { data, isLoading, isError } = useLatestProductsQuery("");

  const addToCartHandler = () => {};

  if (isError) toast.error("Connont fetch the Products");

  return (
    <div className="home">
      <section> </section>
      <h1>
        Latest Product
        <Link to="/search" className="findmore">
          {" "}
          More
        </Link>
      </h1>

      <main>
        {isLoading ? (
          <Loader />
        ) : (
          data?.products.map((i) => (
            <ProductCard
              key={i._id}
              productId={i._id}
              name={i.name}
              price={i.price}
              photo={i.photo}
              stock={i.stock}
              handler={addToCartHandler}
            />
          ))
        )}
      </main>
    </div>
  );
};

export default Home;
