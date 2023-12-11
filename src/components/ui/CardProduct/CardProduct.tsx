import useCartContext from '../../../hooks/useCartContext';
import { CartProduct, Product } from '../../../interface';
import { toast } from "sonner";
import styles from './CardProduct.module.css';

interface Props {
    product: Product
}

export const CardProduct = ({ product }: Props) => {

    const { dispatch } = useCartContext();
    const item: CartProduct = {
        id: product.id,
        name: product.name,
        image: product.image,
        price: product.price,
        quantity: 1
    };

    const addToCart = (item: CartProduct) => {
        dispatch({ type: "ADD_TO_CART", payload: item });
        toast.success("Product Added to cart");
    }

    return (
        <div className={styles.cardContainer}>
            <img className={styles.cardImage} src={product.image} alt={product.name} />
            <div className={styles.cardDetail}>
                <h3 className={styles.cardTitle}>{product.name}</h3>
                <div className={styles.cardBody}>
                    <p className={styles.cardType}>{product.type}</p>
                    <p className={styles.cardPrice}>${product.price} <small>00</small></p>
                </div>
                <button className={styles.cardButton} onClick={() => addToCart(item)}>Add to cart</button>
            </div>
        </div>
    )
}