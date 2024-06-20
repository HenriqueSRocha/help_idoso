import React, { createContext, useContext, useState, useEffect } from 'react';

const ZoomContext = createContext();

export const useFont = () => {
    return useContext(ZoomContext);
};

export const ZoomProvider = ({ children }) => {
    const [tamanhofonte, setTamanhoFonte] = useState(16);

    useEffect(() => {
        document.documentElement.style.fontSize = `${tamanhofonte}px`;
    }, [tamanhofonte]);

    const aumentafonte = () => {
        setTamanhoFonte(tamanhofonte + 2);
    }

    const diminuifonte = () => {
        setTamanhoFonte(tamanhofonte - 2);
    }

    return (
        <ZoomContext.Provider value={{ tamanhofonte, aumentafonte, diminuifonte }}>
            {children}
        </ZoomContext.Provider>
    );
};
