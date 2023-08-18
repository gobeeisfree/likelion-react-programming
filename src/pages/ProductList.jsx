import Spinner from '@/components/Spinner';
import useFetchData from '@/hooks/useFetchData';
import ProductItem from './ProductItem';

const PB_PRODUCTS_ENDPOINT = `http://127.0.0.1:8090/api/collections/products/records`;

function ProductList() {
  const { data, isLoading, error } = useFetchData(PB_PRODUCTS_ENDPOINT);

  if (isLoading) {
    return <Spinner size={160} message="데이터 가져오는 중이에요." />;
  }

  if (error) {
    return (
      <div role="alert">
        <h2>{error.type}</h2>
        <p>{error.message}</p>
      </div>
    );
  }

  return (
    <ul className="m-10 grid grid-cols-3">
      {data.items?.map((item) => (
        <ProductItem key={item.id} item={item} />
      ))}
    </ul>
  );
}

export default ProductList;
