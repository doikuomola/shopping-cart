// @ts-nocheck
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import "./HomeScreen.css";

// components
import Product from "../../components/Product/Product";

//actions
import { getProducts as listProducts } from "../../redux/actions/productActions";

const HomeScreen = () => {
    const getProducts = useSelector((state) => state.getProducts);
    const { products, loading, error } = getProducts;
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(listProducts());
    }, [dispatch]);

    return (
        <div className="homescreen">
            <h2 className="homescreen__title">Latest Products</h2>
            <div className="homescreen__products">
                {loading ? (
                    <h2>Loading ...</h2>
                ) : error ? (
                    <h2>{error}</h2>
                ) : (
                    products.map((product) => (
                        <Product
                            imageUrl={product.imageUrl}
                            name={product.name}
                            price={product.price}
                            description={product.description}
                            productId={product._id}
                            key={product._id}
                        />
                    ))
                )}
            </div>
        </div>
    );
};

export default HomeScreen;
