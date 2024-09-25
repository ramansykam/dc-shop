import ProductCard from '../components/ProductCard';
import api from '../lib/api';

export default function Home({ products }) {
  return (
    <div className="product-list">
      {products.map((product) => (
        <ProductCard key={product._id} product={product} />
      ))}
    </div>
  );
}

export async function getServerSideProps() {
  const res = await api.get('/api/products');
  return { props: { products: res.data } };
}
