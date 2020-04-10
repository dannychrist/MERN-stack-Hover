const initialState = {
  products: {},
  status: 'loading',
  error: null,
};

export default function productsReducer(state = initialState, action) {
  switch (action.type) {
    case 'REQUEST_ALL_PRODUCTS': {
      return {
        ...state,
        status: 'loading',
      };
    }

    case 'RECEIVE_ALL_PRODUCTS': {
      return {
        ...state,
        products: action.products,
        status: 'idle',
      };
    }

    case 'RECEIVE_PRODUCTS_ERROR': {
      return {
        ...state,
        status: 'error',
      };
    }
    default: {
      return state;
    }
  }
}

export const getProducts = (state) => state.products.products;
export const getProductsStatus = (state) => state.products.status;
