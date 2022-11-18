import { useRouter } from "next/router";
import { createContext, useEffect, useState } from "react";

export const AppContext = createContext({
  isFooterOpen: true,
  openFooter: () => {},
  closeFooter: () => {},
});

export default function AppContextProvider({ children }) {
  const [isFooterOpen, setIsFooterOpen] = useState(false);

  //   const router = useRouter();

  //   useEffect(() => {
  //     setIsFooterOpen(true);
  //   }, [router.asPath]);

  const handleOpen = () => {
    setIsFooterOpen(true);
  };

  const handleClose = () => {
    setIsFooterOpen(false);
  };

  const value = {
    isFooterOpen: isFooterOpen,
    openFooter: handleOpen,
    closeFooter: handleClose,
  };

  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
}
