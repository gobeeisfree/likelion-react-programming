import { getPbImageURL, numberWithComma } from '@/utils';
import { shape, string, number } from 'prop-types';

export default function ProductItem({ item }) {
  return (
    <li>
      <figure className="flex flex-col items-center">
        <img
          src={getPbImageURL(item, 'photo')}
          className="h-96 w-auto"
          alt=""
        />
        <figcaption className="flex flex-col">
          <span className="title">
            {item.title} [{item.color}]
          </span>
          <span className="price">KRW {numberWithComma(item.price)}</span>
        </figcaption>
      </figure>
    </li>
  );
}

export const PRODUCT_TYPE = shape({
  id: string.isRequired,
  photo: number.isRequired,
  price: string.isRequired,
  title: string.isRequired,
  color: string.isRequired,
});

ProductItem.propTypes = {
  item: PRODUCT_TYPE,
};
