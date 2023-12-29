import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { toast } from 'react-toastify';
import { ProductForm } from '@components/ProductForm';
import { OnChangeProps } from '@models/Form';
import { InputProps } from '@models/Input';
import { ProductWithoutID } from '@models/Product';
import { createProductAction } from '@redux/actions';
import { GlobalStates } from '@models/redux/States';
import { ProductFormProps } from '@models/ProductForm';
import { useNavigate, useParams } from 'react-router-dom';
import { editProductAction } from '@redux/actions/products';

export const ContainerProductForm = () => {
  const [formData, setformData] = useState<ProductWithoutID>({
    name: '',
    price: '0',
  });

  const dispatch = useDispatch();

  const navigate = useNavigate();

  const { id } = useParams();

  const { products, loading, error } = useSelector<GlobalStates>(
    state => state.products,
  ) as GlobalStates['products'];

  useEffect(() => {
    if (id) {
      const currentProject = products.find(
        product => product.id === Number(id),
      );

      if (!currentProject) return;

      const { name, price } = currentProject;

      setformData({
        name,
        price,
      });
    }
  }, [id]);

  const handleChange = (props: OnChangeProps) => {
    const { name, value } = props;

    if (name === 'price' && typeof value === 'string') {
      const newValue =
        value.startsWith('0') && value.length > 1 ? value.substring(1) : value;

      return setformData({ ...formData, [name]: newValue });
    }

    setformData({ ...formData, [name]: value });
  };

  const handleSubmit = () => {
    if (Object.values(formData).includes('')) {
      toast.warning('Todos los campos son obligatorios', {
        hideProgressBar: true,
        theme: 'colored',
      });

      return;
    }

    const data: ProductWithoutID = {
      name: formData.name.trim(),
      price: formData.price.trim(),
    };

    if (id) {
      dispatch<any>(
        editProductAction({
          product: { id: Number(id), ...data },
          currentProducts: products,
          onSuccess: handleSuccess,
          onError: handleError,
        }),
      );

      return;
    }

    dispatch<any>(
      createProductAction({
        product: formData,
        onSuccess: handleSuccess,
        onError: handleError,
      }),
    );
  };

  const handleSuccess = () => {
    let notificationMessage = 'Producto agregado exitosamente';

    if (id) {
      notificationMessage = 'Producto actualizado exitosamente';
    }

    toast.success(notificationMessage, {
      hideProgressBar: true,
    });

    navigate('/');

    resetForm();
  };

  const handleError = () => {
    toast.error('Ocurrió un error al agregar el producto', {
      hideProgressBar: true,
      theme: 'colored',
    });
  };

  const resetForm = () => {
    setformData({
      name: '',
      price: '0',
    });
  };

  const inputs: InputProps[] = [
    {
      id: 'name',
      name: 'name',
      value: formData.name,
      placeholder: 'Nombre',
      className: 'form-control',
      label: 'Nombre del producto',
      labelHtmlFor: 'name',
    },
    {
      id: 'price',
      name: 'price',
      type: 'number',
      value: formData.price,
      placeholder: 'Precio',
      className: 'form-control',
      label: 'Precio del producto',
      labelHtmlFor: 'price',
    },
  ];

  const productFormProps: ProductFormProps = {
    inputs,
    loading,
    error,
    onChange: handleChange,
    onSubmit: handleSubmit,
  };

  return <ProductForm {...productFormProps} />;
};
