import { TForm } from '@models/Form';
import { Input } from './Input';

export const Form: TForm = props => {
  const { inputs, className, onChange, onSubmit, children } = props;

  return (
    <form
      className={className}
      onSubmit={e => {
        e.preventDefault();
        onSubmit?.();
      }}
    >
      {inputs.length &&
        inputs.map((input, index) => (
          <Input
            key={input.id ?? index}
            {...input}
            onChange={input.onChange ?? onChange}
          />
        ))}

      {children}
    </form>
  );
};
