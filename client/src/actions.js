// products reducers
export const requestAllProducts = () => ({
  type: 'REQUEST_ALL_PRODUCTS', 
});

export const receiveAllProducts = (data) => ({
  type: 'RECEIVE_ALL_PRODUCTS',
  products: data,
});

export const receiveProductsError = () => ({
  type: 'RECEIVE_PRODUCTS_ERROR', 
});

//companies reducers
export const requestAllCompanies = () => ({
  type: 'REQUEST_ALL_COMPANIES', 
});

export const receiveAllCompanies = (data) => ({
  type: 'RECEIVE_ALL_COMPANIES',
  companies: data,
});

export const receiveCompaniesError = () => ({
  type: 'RECEIVE_COMPANIES_ERROR', 
});

// cart reducers
export const addItem = (item) => ({
  type: 'ADD_ITEM',
  item,
});

export const removeItem = (itemId) => ({
  type: 'REMOVE_ITEM',
  itemId,
});

export const updateQuantity = (itemId, newQuantity) => ({
  type: 'UPDATE_QUANTITY',
  itemId,
  newQuantity,
});

export const clearCart = () => ({
  type: 'CLEAR_CART',
});