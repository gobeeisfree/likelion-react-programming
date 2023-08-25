import Spinner from '@/components/Spinner';
import {
  useDelete as useDeleteProduct,
  useUpdate as useUpdateProduct,
} from '@/hooks/products/useProducts';
import useProductItem from '@/hooks/useProductItem';
import debounce from '@/utils/debounce';
import { useEffect, useId, useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { useNavigate, useParams } from 'react-router-dom';

const initialFormState = {
  title: '',
  color: '',
  price: '',
};

function ProductEdit() {
  const titleId = useId();
  const priceId = useId();
  const colorId = useId();

  const { productId } = useParams();
  const navigate = useNavigate();

  const { isLoading, data } = useProductItem(productId);

  const [formState, setFormState] = useState(initialFormState);

  const updateProduct = useUpdateProduct();
  const deleteProduct = useDeleteProduct();

  useEffect(() => {
    if (!isLoading && data) {
      setFormState({
        title: data.title,
        price: data.price,
        color: data.color,
      });
    }
  }, [isLoading, data]);

  const handleChangeInput = ({ target }) => {
    setFormState({
      ...formState,
      [target.name]: target.value,
    });
  };

  const handleDebounceChangeInput = debounce(handleChangeInput, 500);

  const handleEditProduct = (e) => {
    e.preventDefault();

    // client → server(pb)
    // Content-Type: application/json
    updateProduct(productId, formState)
      .then(() => navigate('/products'))
      .catch((error) => console.error(error));
    // fetch(
    //   `${
    //     import.meta.env.VITE_PB_API
    //   }/collections/products/records/${productId}`,
    //   {
    //     method: 'PATCH',
    //     headers: {
    //       'Content-Type': 'application/json',
    //     },
    //     body: JSON.stringify(formState),
    //   }
    // ).catch((error) => console.error(error));
  };

  const handleDeleteProduct = () => {
    const userConfirm = confirm('정말 지우시겠습니까?');
    if (userConfirm) {
      deleteProduct(productId)
        .then(() => navigate('/products'))
        .catch((error) => console.error(error));
      // fetch(
      //   `${
      //     import.meta.env.VITE_PB_API
      //   }/collections/products/records/${productId}`,
      //   {
      //     method: 'DELETE',
      //   }
      // )
      //   .then(() => {
      //     navigate('/products');
      //   })
      //   .catch((error) => console.error(error));
    }
  };

  if (isLoading) {
    return <Spinner size={120} />;
  }

  if (data) {
    return (
      <>
        <Helmet>
          <title>Product Edit - ReactBird</title>
        </Helmet>
        <h2 className="text-center text-2xl">
          {data.title} [{data.color}] 수정 폼
        </h2>
        <form onSubmit={handleEditProduct}>
          {/* title */}
          <div>
            <label htmlFor={titleId}>타이틀</label>
            <input
              type="text"
              name="title"
              id={titleId}
              defaultValue={formState.title}
              onChange={handleDebounceChangeInput}
            />
          </div>
          {/* color */}
          <div>
            <label htmlFor={titleId}>색상</label>
            <input
              type="text"
              name="color"
              id={colorId}
              defaultValue={formState.color}
              onChange={handleDebounceChangeInput}
            />
          </div>
          {/* price */}
          <div>
            <label htmlFor={priceId}>가격</label>
            <input
              type="number"
              name="price"
              id={titleId}
              step={100}
              defaultValue={formState.price}
              onChange={handleDebounceChangeInput}
            />
          </div>
          <div>
            <button type="submit">수정</button>
            <button type="button" onClick={handleDeleteProduct}>
              삭제
            </button>
          </div>
        </form>
      </>
    );
  }
}

export default ProductEdit;
