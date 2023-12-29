export type TProduct = React.FC<ProductProps>;

export type TContainerProduct = React.FC<ContainerProductProps>;

export interface ProductProps extends Product {
  handleDelete: () => void;
}

export interface ContainerProductProps extends Product {}

export interface ProductWithoutID extends Omit<Product, 'id'> {}

export interface Product {
  id: number;
  name: string;
  price: string;
}
