import React, { useState, createContext } from "react";
export const DarkMode = createContext<any | null>(null);

export function DarkModeProvider(props:any) {
    const [theme, setTheme] = useState("light");
    /* const value = useMemo(() => ({ usuario, setUsuario, cargando, setCargando }), [usuario, cargando]); */
  return (
    <DarkMode.Provider value={{theme, setTheme}}>{props.children}</DarkMode.Provider>
  );
}

export function useDarkMode() {
  const context = React.useContext(DarkMode);
  if (context === undefined) {
    throw new Error("useDarkMode must be used within a UserContextProvider");
  }
  return context;
}