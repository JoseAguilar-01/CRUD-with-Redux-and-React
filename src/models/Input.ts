import { OnChangeProps } from './Form';

export type TInput = React.FC<InputProps>;

export interface InputProps {
  type?: 'text' | 'number';
  name?: string;
  value?: string | number;
  id?: string;
  placeholder?: string;
  className?: string;
  label?: string;
  labelHtmlFor?: string;
  labelClassName?: string;
  onChange?: (props: OnChangeProps) => void;
}
