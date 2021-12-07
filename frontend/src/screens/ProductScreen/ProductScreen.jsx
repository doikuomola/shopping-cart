/* eslint-disable react-hooks/exhaustive-deps */
// @ts-nocheck
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addToCart } from "../../redux/actions/cartActions";
// actions
import { getProductDetails } from "../../redux/actions/productActions";
import "./ProductScreen.css";

const ProductScreen = ({ match, history }) => {
    const [qty, setQty] = useState(1);
    const productDetails = useSelector((state) => state.getProductDetails);
    const { loading, error, product } = productDetails;
    const dispatch = useDispatch();
    useEffect(() => {
        if (product && match.params.id !== product._id) {
            dispatch(getProductDetails(match.params.id));
        }
    }, [dispatch]);

    const addtoCartHandler = () => {
        dispatch(addToCart(product._id, qty));
        history.push("/cart");
    };
    return (
        <div className="productscreen">
            {loading ? (
                <h2>Loading...</h2>
            ) : error ? (
                <h2>{error}</h2>
            ) : (
                <>
                    <div className="productscreen__left">
                        <div className="left__image">
                            <img src={product.imageUrl} alt={product.name} />
                        </div>
                        <div className="left__info">
                            <p className="left__name">{product.name}</p>
                            <p className="left__price">
                                Price: ${product.price}
                            </p>
                            <p className="left__description">
                                {product.description}
                            </p>
                        </div>
                    </div>
                    <div className="productscreen__right">
                        <div className="right__info">
                            <p className="right__price">
                                Price: ${product.price}
                            </p>
                            <p className="right__status">
                                Status:{" "}
                                <span>
                                    {product.countInStock > 0
                                        ? "In stock"
                                        : "Out of Stock"}
                                </span>
                            </p>
                            <p className="right__quantity">Qty:</p>
                            <select
                                value={qty}
                                onChange={(e) => setQty(e.target.value)}
                            >
                                {[...Array(product.countInStock).keys()].map(
                                    (x) => (
                                        <option key={x + 1} value={x + 1}>
                                            {x + 1}
                                        </option>
                                    )
                                )}
                            </select>
                            <p className="right__button">
                                <button
                                    type="button"
                                    onClick={addtoCartHandler}
                                >
                                    Add to Cart
                                </button>
                            </p>
                        </div>
                    </div>
                </>
            )}
        </div>
    );
};

export default ProductScreen;
