import pb from './pocketbase';
import { useState } from 'react';

export function useProducts() {
  const [data, setData] = useState(null);
  const [status, setStatus] = useState('pending');

  async function getProductList(query = {}) {
    setStatus('loading');
    try {
      const productItems = await pb.collection('products').getFullList(query);
      setData(productItems);
      setStatus('success');
      console.log(status);
    } catch (error) {
      setStatus('error');
    }
  }

  return { data, status, getProductList };
}
