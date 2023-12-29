import { UnknownAction } from 'redux';
import { axiosClient } from '@config/axiosClient';
import { Product, ProductWithoutID } from '@models/Product';
import { ProductsTypes } from '@models/redux/Types';
import {
  TCreateProductAction,
  TDeleteProductAction,
  TEditProductAction,
  TGetProductsAction,
} from '@models/redux/actions/products';

export const getProductsAction: TGetProductsAction = props => {
  return async dispatch => {
    const { onError, onSuccess } = props ?? {};

    dispatch(getProducts());

    try {
      const { data } = await axiosClient<Product[]>('/products');

      dispatch(getProductsSuccess(data));

      onSuccess?.();
    } catch (error) {
      console.log(
        '🚀 ~ file: products.ts ~ getProductsAction:TGetProductsAction ~ error:',
        error,
      );

      dispatch(getProductsError());

      onError?.();
    }
  };
};

export const createProductAction: TCreateProductAction = props => {
  return async dispatch => {
    if (!props) return;

    const { product, onError, onSuccess } = props;

    dispatch(addProduct());

    try {
      const { data } = await axiosClient.post<Product>('/products', product);

      dispatch(addProductSuccess(data));

      onSuccess?.();
    } catch (error) {
      console.log(
        '🚀 ~ file: products.ts ~ createProductAction:TCreateProductAction ~ error:',
        error,
      );

      dispatch(addProductError());

      onError?.();
    }
  };
};

export const editProductAction: TEditProductAction = props => {
  return async dispatch => {
    if (!props) return;

    const { product, currentProducts, onError, onSuccess } = props;

    dispatch(editProduct());

    try {
      const { data } = await axiosClient.put(
        `/products/${product?.id}`,
        product,
      );

      const updatedProductList = currentProducts?.map(product =>
        product.id === data.id ? data : product,
      );

      dispatch(editProductSuccess(updatedProductList));

      onSuccess?.();
    } catch (error) {
      console.log(
        '🚀 ~ file: products.ts ~ editProductAction:TEditProductAction ~ error:',
        error,
      );

      dispatch(editProductError());

      onError?.();
    }
  };
};

export const deleteProductAction: TDeleteProductAction = props => {
  return async dispatch => {
    if (!props) return;

    const { productID, currentProducts, onError, onSuccess } = props;

    dispatch(deleteProduct());

    try {
      await axiosClient.delete(`/products/${productID}`);

      const updatedProductList = currentProducts?.filter(
        product => product.id !== productID,
      );

      dispatch(deleteProductSuccess(updatedProductList));

      onSuccess?.();
    } catch (error) {
      console.log(
        '🚀 ~ file: products.ts ~ deleteProductAction:TDeleteProductAction ~ error:',
        error,
      );

      dispatch(deleteProductError());

      onError?.();
    }
  };
};

// Actions for "AddProduct" action

const addProduct = (): UnknownAction => ({ type: ProductsTypes.ADD_PRODUCT });

const addProductSuccess = (product: ProductWithoutID): UnknownAction => {
  return { type: ProductsTypes.ADD_PRODUCT_SUCCESS, payload: product };
};

const addProductError = (): UnknownAction => ({
  type: ProductsTypes.ADD_PRODUCT_ERROR,
});

// Actions for "GetProducts" action

const getProducts = (): UnknownAction => ({
  type: ProductsTypes.GET_PRODUCTS,
});

const getProductsSuccess = (products: Product[]): UnknownAction => ({
  type: ProductsTypes.GET_PRODUCTS_SUCCESS,
  payload: products,
});

const getProductsError = (): UnknownAction => ({
  type: ProductsTypes.GET_PRODUCTS_ERROR,
});

// Actions for "EditProduct" action

const editProduct = (): UnknownAction => ({
  type: ProductsTypes.EDIT_PRODUCT,
});

const editProductSuccess = (updatedProducts: Product[]): UnknownAction => ({
  type: ProductsTypes.EDIT_PRODUCT_SUCCESS,
  payload: updatedProducts,
});

const editProductError = (): UnknownAction => ({
  type: ProductsTypes.EDIT_PRODUCT_ERROR,
});

// Actions fo "DeleteProduct" action

const deleteProduct = (): UnknownAction => ({
  type: ProductsTypes.DELETE_PRODUCT,
});

const deleteProductSuccess = (updatedProducts: Product[]): UnknownAction => ({
  type: ProductsTypes.DELETE_PRODUCT_SUCCESS,
  payload: updatedProducts,
});

const deleteProductError = (): UnknownAction => ({
  type: ProductsTypes.DELETE_PRODUCT_ERROR,
});
