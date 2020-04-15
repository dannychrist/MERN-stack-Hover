import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';

// Import the spinner
import SpinnerSrc from './spinner.gif';

const ProductsList = ({ products }) => {
  const state = useSelector((state) => state.products);

  return (
    <>
      {state.status === 'idle' && state.status !== 'error'
        ? Object.values(products).map((product) => {
            return (
              <PlaceholderItem key={product.id} to={`/product/${product.id}`}>
                <ProductPicture
                  key={product.id}
                  src={product.imageSrc}
                  alt={product.name}
                ></ProductPicture>
                <Test>
                  <ProductPrice>{product.price}</ProductPrice>
                  {product.name}
                </Test>
              </PlaceholderItem>
            );
          })
        : state.status !== 'error' && (
            <Spinner src={SpinnerSrc} alt='spinner'></Spinner>
          )}
    </>
  );
};

const PlaceholderItem = styled(Link)`
  width: 100%;
  height: 350px;
  text-align: center;
  background-color: white;
  color: #000;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  position: relative;
<<<<<<< HEAD
=======
  font-size: 14px;
>>>>>>> 0a15ca4c396f8d3ca17f51588b69ff714cf99b6a
`;

const ProductPicture = styled.img`
  transition: 400ms ease-in-out;
  &:hover {
<<<<<<< HEAD
    transform: scale(1.2);
=======
    transform: scale(1.05);
>>>>>>> 0a15ca4c396f8d3ca17f51588b69ff714cf99b6a
  }
`;

const Test = styled.div`
<<<<<<< HEAD
  border: 2px solid #000;
=======
  /* border: 2px solid #000; */
>>>>>>> 0a15ca4c396f8d3ca17f51588b69ff714cf99b6a
  max-width: 80%;
  min-height: 50px;
  margin-top: 10px;
  padding: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  padding: 0px 10px;
  position: absolute;
  bottom: 0;
`;

const ProductPrice = styled.span`
  font-weight: bold;
  margin-bottom: 5px;
`;

const Spinner = styled.img`
  height: 70px;
  width: 70px;
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
`;

export default ProductsList;
