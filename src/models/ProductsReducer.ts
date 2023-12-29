import { Reducer } from 'redux';
import { Product } from './Product';

export type ProductsReducer = Reducer<InitialState>;

export interface InitialState {
  products: Product[];
  loading: boolean;
  error: boolean;
}
