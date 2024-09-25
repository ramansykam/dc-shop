import { useRouter } from 'next/router';
import ProductDetails from '../../components/ProductDetails';
import api from '../../lib/api';

export default function ProductPage({ product }) {
  return <ProductDetails product={product} />;
}

export async function getServerSideProps({ params }) {
  const res = await api.get(`/api/products/${params.id}`);
  return { props: { product: res.data } };
}
