import { keepPreviousData, useQuery } from '@tanstack/react-query';
import { Toaster } from 'sonner';
import { CardProduct } from '../../components/ui/CardProduct';
import { Hero } from '../../components/ui/Hero';
import { getProducts } from '../../service/productsService';
import { useState } from 'react';
import styles from './Home.module.css';

const Home = () => {
    const [page, setPage] = useState(1);

    const { data, isLoading, error } = useQuery({
        queryKey: ['products', page],
        queryFn: () => getProducts(page),
        placeholderData: keepPreviousData,
    });

    return (
        <>
            <Hero />
            <Toaster expand={false} richColors />
            {isLoading && <p>Loading...</p>}
            {error && <p>error</p>}
            <div className={styles.container}>
                {data?.map((product) => (
                    <CardProduct key={product.tail} product={product} />
                ))}
            </div>
            <div className={styles.paginationContainer}>
                <button
                    onClick={() => setPage(page - 1)}
                    disabled={page === 1}
                    className={styles.paginationButton}
                >
                    {' '}
                    previus page{' '}
                </button>
                <div className={styles.paginationActive}>
                    <span>{page}</span>
                </div>
                <button
                    onClick={() => setPage(page + 1)}
                    className={styles.paginationButton}
                >
                    next page
                </button>
            </div>
        </>
    );
};
export default Home;
