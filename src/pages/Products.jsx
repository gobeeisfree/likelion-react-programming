import useDocumentTitle from '@/hooks/useDocumentTitle';

function Products() {
  useDocumentTitle('제품');

  return (
    <div>
      <h2 className="text-indigo-950">Products</h2>
    </div>
  );
}

export default Products;
