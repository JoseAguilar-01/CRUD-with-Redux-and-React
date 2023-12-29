import { Product } from '@models/Product';
import { InitialState, ProductsReducer } from '@models/ProductsReducer';
import { ProductsTypes } from '@models/redux/Types';

// Each reducer has its own state
const initialState: InitialState = {
  products: [],
  error: false,
  loading: false,
};

// The reducers always are functions
export const productsReducer: ProductsReducer = (
  state = initialState,
  action,
) => {
  const { type, payload } = action;

  if (
    type === ProductsTypes.ADD_PRODUCT ||
    type === ProductsTypes.GET_PRODUCTS ||
    type === ProductsTypes.EDIT_PRODUCT ||
    type === ProductsTypes.DELETE_PRODUCT
  ) {
    return { ...state, loading: true, error: false };
  }

  if (type === ProductsTypes.ADD_PRODUCT_SUCCESS) {
    return {
      ...state,
      products: [...state.products, payload as Product],
      loading: false,
    };
  }

  if (
    type === ProductsTypes.GET_PRODUCTS_SUCCESS ||
    type === ProductsTypes.EDIT_PRODUCT_SUCCESS ||
    type === ProductsTypes.DELETE_PRODUCT_SUCCESS
  ) {
    return {
      ...state,
      products: payload as Product[],
      loading: false,
    };
  }

  if (
    type === ProductsTypes.ADD_PRODUCT_ERROR ||
    type === ProductsTypes.GET_PRODUCTS_ERROR ||
    type === ProductsTypes.EDIT_PRODUCT_ERROR ||
    type === ProductsTypes.DELETE_PRODUCT_ERROR
  ) {
    return { ...state, error: true, loading: false };
  }

  return state;
};
