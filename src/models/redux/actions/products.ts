import { Product, ProductWithoutID } from '@models/Product';
import { BaseAction } from './ReduxAction';

export type TGetProductsAction = BaseAction<GetProductsActionProps>;

export type TCreateProductAction = BaseAction<CreateProductActionProps>;

export type TEditProductAction = BaseAction<EditProductActionProps>;

export type TDeleteProductAction = BaseAction<DeleteProductActionProps>;

export interface GetProductsActionProps
  extends Omit<CreateProductActionProps, 'product'> {}

export interface CreateProductActionProps {
  product: ProductWithoutID;
  onSuccess?: () => void;
  onError?: () => void;
}

export interface EditProductActionProps extends GetProductsActionProps {
  product: Product;
  currentProducts: Product[];
}

export interface DeleteProductActionProps
  extends Omit<EditProductActionProps, 'product'> {
  productID: number;
}
