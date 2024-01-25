import { RefObject, useEffect } from 'react';

const useOutsideClick = <T extends HTMLElement>(
    ref: RefObject<T>,
    onOutsideClick: () => void
): void => {
    useEffect(() => {
        const handleOutsideClick = (event: MouseEvent | TouchEvent) => {
            if (ref.current && !ref.current.contains(event.target as Node)) {
                onOutsideClick();
            }
        };

        document.addEventListener('mousedown', handleOutsideClick);
        document.addEventListener('touchstart', handleOutsideClick);

        return () => {
            document.removeEventListener('mousedown', handleOutsideClick);
            document.removeEventListener('touchstart', handleOutsideClick);
        };
    }, [ref, onOutsideClick]);
};

export default useOutsideClick;
