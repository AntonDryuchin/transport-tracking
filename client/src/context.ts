import React, { createContext, useState, useEffect, ReactNode } from "react";

export const TransportContext = createContext<any>(null);

interface TransportContextProviderProps {
  children: ReactNode;
}

export const TransportContextProvider: React.FC<
  TransportContextProviderProps
> = ({ children }) => {
  const [contextValue, setContextValue] = useState<any>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("/db.json");
        const data = await response.json();
        setContextValue(data);
      } catch (error) {
        console.error("Ошибка при загрузке данных:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <TransportContext.Provider value={contextValue}>
      {children}
    </TransportContext.Provider>
  );
};
