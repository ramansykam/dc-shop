import Link from 'next/link';

export default function ProductCard({ product }) {
  return (
    <div className="product-card">
      <Link href={`/product/${product._id}`}>
        <a>
          <img src={product.imageUrl} alt={product.name} />
          <h3>{product.name}</h3>
          <p>₹{product.price}</p>
        </a>
      </Link>
    </div>
  );
}
