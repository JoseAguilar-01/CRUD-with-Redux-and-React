import { InputProps } from './Input';

export type TForm = React.FC<FormProps>;

export interface FormProps {
  inputs: InputProps[];
  className?: string;
  onChange?: (props: OnChangeProps) => void;
  onSubmit?: () => void;
  children?: React.ReactNode;
}

export interface OnChangeProps {
  name: string;
  value: string | number | boolean;
}
