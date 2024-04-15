 
import {createContext, useContext, useState} from 'react';

const MobileMenuContext = createContext({
  open: false,
  toggleMenu: () => {},
  closeMenu: () => {},
});

export function useMobileMenu() {
  return useContext(MobileMenuContext);
}

export function MobileMenuProvider({children}: {children: React.ReactNode}) {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen((prevState) => !prevState);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };

  return (
    <MobileMenuContext.Provider value={{open: isOpen, toggleMenu, closeMenu}}>{children}</MobileMenuContext.Provider>
  );
}
