import useProductList from '@/api/useProductList';
import Spinner from '@/components/Spinner';
import { getPbImageURL, numberWithComma } from '@/utils';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';

// PB → READ / CREATE / UPDATE / DELETE
//HTTP Methods
// CREATE => POST
// READ => GET
// UPDATE => PUT OR PATCH
// DELETE => DELETE

// useState
// useEffect

function Products() {
  const { status, data, error } = useProductList();

  if (status === 'loading') {
    return (
      <div className="grid h-full place-content-center">
        <Spinner size={160} message={'상품 목록을 가져오는 중입니다.'} />
      </div>
    );
  }

  if (status === 'error') {
    return <div role="alert">{error.message}</div>;
  }

  if (status === 'success') {
    return (
      <>
        <Helmet>
          <title>Product List - ReactBird</title>
        </Helmet>
        <div>
          <h1 className="mb-5 text-2xl text-indigo-950">Products</h1>
          <ul className="grid grid-cols-3">
            {data.map((item) => (
              <li key={item.id} className="justify-self-center">
                <Link to={`/product/edit/${item.id}`}>
                  <figure>
                    <img
                      className="mx-auto h-[160px] object-cover"
                      src={getPbImageURL(item, 'photo')}
                      alt=""
                    />
                    <figcaption className="mt-2 flex flex-col items-center gap-1">
                      <span>
                        {item.title}[{item.color}]
                      </span>
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
      </>
    );
  }
}

export default Products;
