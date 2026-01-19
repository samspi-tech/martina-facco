import { useEffect, useState } from 'react';
import type { Galleries } from '@/utils/types.ts';

export const useGalleries = () => {
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState<string | null>('');
    const [galleries, setGalleries] = useState<Galleries | null>(null);

    useEffect(() => {
        const getAllGalleries = async () => {
            setIsLoading(true);
            try {
                const res = await fetch('/galleries.json');
                const data: Galleries = await res.json();

                setGalleries(data);
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
