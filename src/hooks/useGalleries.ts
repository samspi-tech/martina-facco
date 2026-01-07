import { useEffect, useState } from 'react';
import type { Galleries } from '@/utils/types.ts';

export const useGalleries = () => {
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState('');
    const [galleries, setGalleries] = useState<Galleries | null>(null);

    useEffect(() => {
        const getAllGalleries = async () => {
            const cachedGalleries = sessionStorage.getItem('galleries');

            if (cachedGalleries) {
                const galleries = JSON.parse(cachedGalleries);

                setGalleries(galleries);
                return;
            }

            setIsLoading(true);
            try {
                const res = await fetch('galleries.json');
                const data: Galleries = await res.json();

                setGalleries(data);
                sessionStorage.setItem('galleries', JSON.stringify(data));
            } catch (err) {
                setError('Failed to load galleries');

                if (err instanceof Error) console.error(err);
            } finally {
                setIsLoading(false);
            }
        };
        getAllGalleries();
    }, []);

    return {
        isLoading,
        error,
        galleries,
    };
};
