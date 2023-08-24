import { shape, string, number } from 'prop-types';

export const ProductType = shape({
  id: string.isRequired,
  photo: number.isRequired,
  price: string.isRequired,
  title: string.isRequired,
  color: string.isRequired,
});
