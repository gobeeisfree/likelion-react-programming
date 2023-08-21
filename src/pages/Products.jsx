import useDocumentTitle from '@/hooks/useDocumentTitle';
import useFetchData from '@/hooks/useFetchData';
import Spinner from '@/components/Spinner';
import { getPbImageURL, numberWithComma } from '@/utils';
import { Link } from 'react-router-dom';

// PB → READ / CREATE / UPDATE / DELETE
//HTTP Methods
// CREATE => POST
// READ => GET
// UPDATE => PUT OR PATCH
// DELETE => DELETE

// useState
// useEffect

const endpoint = `${import.meta.env.VITE_PB_API}/collections/products/records`;

function Products() {
  useDocumentTitle('제품 목록');
  const { isLoading, data } = useFetchData(endpoint);
  if (isLoading) {
    return <Spinner size={160} />;
  }

  return (
    <div>
      <h1 className="mb-5 text-2xl text-indigo-950">Products</h1>
      <ul className="grid grid-cols-3 gap-4">
        {data.items?.map((item) => (
          <li key={item.id} className="justify-self-center">
            <Link to={`/product/edit/${item.id}`}>
              <figure>
                <img
                  className="mx-auto h-40 object-cover"
                  src={getPbImageURL(item, 'photo')}
                  alt=""
                />
                <figcaption className="mt-2 flex flex-col items-center gap-1">
                  <span>{item.title}</span>
                  <span className="font-semibold">
                    {numberWithComma(item.price)}
                  </span>
                </figcaption>
              </figure>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Products;
