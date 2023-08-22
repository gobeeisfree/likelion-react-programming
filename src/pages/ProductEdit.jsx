import { useEffect, useId, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import useProductItem from '@/hooks/useProductItem';
import Spinner from '@/components/Spinner';

const initialFormState = {
  title: '',
  color: '',
  price: 0,
};

function ProductEdit() {
  const titleId = useId();
  const priceId = useId();
  const colorId = useId();

  const { productId } = useParams();
  const navigate = useNavigate();

  const { isLoading, data } = useProductItem(productId);

  const [formState, setFormState] = useState(initialFormState);

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

  const handleEditProduct = (e) => {
    e.preventDefault();

    // client → server(pb)
    // Content-Type: application/json
    fetch(
      `${
        import.meta.env.VITE_PB_API
      }/collections/products/records/${productId}`,
      {
        method: 'PATCH',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formState),
      }
    ).catch((error) => console.error(error));
  };

  const handleDeleteProduct = () => {
    const userConfirm = confirm('정말 지우시겠습니까?');
    if (userConfirm) {
      fetch(
        `${
          import.meta.env.VITE_PB_API
        }/collections/products/records/${productId}`,
        {
          method: 'DELETE',
        }
      )
        .then(() => {
          navigate('/products');
        })
        .catch((error) => console.error(error));
    }
  };

  if (isLoading) {
    return <Spinner size={120} />;
  }

  if (data) {
    return (
      <>
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
              value={formState.title}
              onChange={handleChangeInput}
            />
          </div>
          {/* color */}
          <div>
            <label htmlFor={titleId}>색상</label>
            <input
              type="text"
              name="color"
              id={colorId}
              value={formState.color}
              onChange={handleChangeInput}
            />
          </div>
          {/* price */}
          <div>
            <label htmlFor={priceId}>가격</label>
            <input
              type="number"
              name="price"
              id={titleId}
              value={formState.price}
              onChange={handleChangeInput}
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
