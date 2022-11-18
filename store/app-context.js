import { createContext, useState } from "react";

export const AppContext = createContext({
  isFooterOpen: true,
  openFooter: () => {},
});

export default function AppContextProvider({ children }) {
  const [isFooterOpen, setIsFooterOpen] = useState(true);

  const handleOpen = () => {
    setIsFooterOpen(true);
  };

  const handleClose =() => {
    setIsFooterOpen(false)
  }

  const value = {
    isFooterOpen: isFooterOpen,
    openFooter: handleOpen,
    closeFooter: handleClose,
  };

  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
}
