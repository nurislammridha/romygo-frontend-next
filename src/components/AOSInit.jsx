'use client';
import 'aos/dist/aos.css'; // AOS styles
import { useEffect } from 'react';

export default function AOSInit() {
    useEffect(() => {
        import('aos').then(AOS => {
            AOS.init({
                once: true,
                duration: 800,
                easing: 'ease-in-out',
            });
        });
    }, []);

    return null;
}
