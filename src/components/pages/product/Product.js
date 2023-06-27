import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getDataToProduct } from "../../../redux/actions/ProductAction";
import Cards from "../../card/Cards";
import { Card } from "antd";
import "./Product.scss";
import ClipLoader from "react-spinners/ClipLoader";
import axios from "axios";

const Product = () => {
  const dispatch = useDispatch();

  const getDataFromStore = useSelector((state) => state.productReducers);

  const { Meta } = Card;

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getData();
  }, []);

  const getData = async () => {
    axios.get("http://localhost:9000/users/findProduct").then((response) => {
      console.log(response.data.data);
      dispatch(getDataToProduct(response.data.data));
      setLoading(false);
    });
  };

  return (
    <>
      {loading ? (
        <ClipLoader
          color={"#D0021B"}
          loading={loading}
          size={100}
          aria-label="Loading Spinner"
          data-testid="loader"
        />
      ) : (
        <div id="Product">
          <h1>Product Page</h1>
          <div className="showCard">
            {getDataFromStore &&
              getDataFromStore.map((item,index) => (
                <Cards item={{ item }} key={index} />
              ))}
          </div>
        </div>
      )}
    </>
  );
};

export default Product;
