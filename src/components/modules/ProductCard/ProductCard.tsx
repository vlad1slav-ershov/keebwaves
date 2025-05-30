import Link from 'next/link';
import styles from './productCard.module.scss';
import { Product } from '@/types';
import { useCart } from '@/contexts/CartContext';

interface ProductCardProps {
    product: Product;
}

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
    const { addToCart } = useCart();
    return (
        <div className={styles.productCard}>
            <Link
                href={`/products/${product.slug}`}
                scroll={false}
            >
                <img
                    src={product.image}
                    alt={product.name}
                    className={styles.image}
                />
            </Link>
            <h3 className={styles.title}>{product.name}</h3>

            <div className={styles.priceAndCart}>
                <p className={styles.price}>{product.price.toLocaleString('ru-RU')} ₽</p>
                <button
                    className={styles.addButton}
                    onClick={() => addToCart(product)}
                >
                    <img src="/assets/cart.svg" alt="Корзина" />
                </button>
            </div>
        </div>
    );
}

export default ProductCard;