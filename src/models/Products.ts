import { Product } from './Product';

export type TProducts = React.FC<ProductsProps>;

export interface ProductsProps {
  products: Product[];
  loading: boolean;
}
