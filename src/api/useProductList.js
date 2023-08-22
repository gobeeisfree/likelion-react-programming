import { useState, useEffect } from 'react';
import pb from '@/api/pocketbase';

function useProductList() {
  const [state, setState] = useState({
    data: null,
    status: 'pending',
    error: null,
  });

  useEffect(() => {
    setState({
      ...state,
      status: 'loading',
    });

    async function getProducts() {
      try {
        const records = await pb.collection('products').getFullList();

        setState({
          data: records,
          status: 'success',
        });
      } catch (error) {
        setState({
          ...state,
          status: 'error',
          error,
        });
      }
    }

    getProducts();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return state;
}

export default useProductList;
