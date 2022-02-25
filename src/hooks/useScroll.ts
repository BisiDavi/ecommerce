import { useState, useCallback, useEffect } from "react";

export default function useScroll() {
    const [scroll, setScroll] = useState(window.scrollY);

    const handleNavigation = useCallback(
        (e) => {
            const window = e.currentTarget;
            if (scroll > window.scrollY) {
            } else if (scroll < window.scrollY) {
            }
            setScroll(window.scrollY);
        },
        [scroll],
    );

    useEffect(() => {
        setScroll(window.scrollY);
        window.addEventListener("scroll", handleNavigation);

        return () => {
            window.removeEventListener("scroll", handleNavigation);
        };
    }, [handleNavigation]);

    return {
        scroll,
    };
}
