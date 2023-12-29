import { OnChangeProps } from './Form';
import { InputProps } from './Input';

export type TProductForm = React.FC<ProductFormProps>;

export interface ProductFormProps {
  inputs: InputProps[];
  onChange: (props: OnChangeProps) => void;
  onSubmit: () => void;
  loading: boolean;
  error: boolean;
}
