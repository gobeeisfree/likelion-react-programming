import { ProductType } from '@/@types/global.d';
import { getPbImageURL, numberWithComma } from '@/utils';

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

ProductItem.propTypes = {
  item: ProductType.isRequired,
};
