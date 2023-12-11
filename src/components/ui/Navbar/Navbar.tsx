import Logo from "../../../assets/logo.svg";
import Cart from "../../../assets/cart.svg";
import styles from './Navbar.module.css';
import { useState } from 'react';
import { CartModal } from "../CartModal";
import useCartContext from "../../../hooks/useCartContext";
import { useLocation, useNavigate } from "react-router-dom";

const Navbar = () => {
    const { state: { cartItems } } = useCartContext();
    const [showCartModal, setShowCartModal] = useState(false);
    const navigate = useNavigate();
    const location = useLocation();

    const handleShowCartModal = () => {
        setShowCartModal(!showCartModal)
    }

    const handleNavigateToHome = () => {
        navigate("/");
    }

    return (
        <div className={styles.navbarContainer}>
            <div className={styles.navbarDetail} onClick={handleNavigateToHome}>
                <img src={Logo} alt="Logo de Ecommerce" width={50} height={50} />
                <div>
                    <span>Ecommerce</span>
                </div>
            </div>
            {location.pathname !== "/checkout" &&
                <>
                    <div className={styles.navbarCartContainer}>
                        <p className={styles.navbarTextAmount}>{cartItems.length}</p>
                        <img src={Cart} alt="Cart" onClick={handleShowCartModal} />
                    </div>
                    {
                        showCartModal && <CartModal handleShowCartModal={handleShowCartModal} />
                    }
                </>
            }
        </div >
    )
}

export default Navbar