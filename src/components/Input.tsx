import { TInput } from '@models/Input';

export const Input: TInput = props => {
  const {
    type = 'text',
    label,
    labelHtmlFor,
    labelClassName,
    onChange,
    ...restProps
  } = props;

  const Input = (
    <input
      type={type}
      onChange={e => {
        const { name, value } = e.target;

        onChange?.({ name, value });
      }}
      {...restProps}
    />
  );

  return label ? (
    <div className='form-group'>
      <label htmlFor={labelHtmlFor} className={labelClassName}>
        {label}
      </label>
      {Input}
    </div>
  ) : (
    Input
  );
};
