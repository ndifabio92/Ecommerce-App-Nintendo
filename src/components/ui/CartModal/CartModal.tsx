import { useNavigate } from 'react-router-dom';
import Close from '../../../assets/close.svg';
import { Table } from '../Table/Table';
import styles from './CartModal.module.css';

interface Props {
    handleShowCartModal: () => void;
}

export const CartModal = ({ handleShowCartModal }: Props) => {

    const navigate = useNavigate();

    const handleNavigate = () => {
        navigate('/checkout');
        handleShowCartModal();
    }

    return (
        <div className={styles.modalContainer}>
            <button className={styles.modalCloseButton} onClick={handleShowCartModal}>
                <img src={Close} alt="close" />
            </button>
            <Table />
            <div className={styles.modalButtonContainer}>
                <button onClick={handleNavigate}>Checkout</button>
            </div>
        </div>
    )
}
