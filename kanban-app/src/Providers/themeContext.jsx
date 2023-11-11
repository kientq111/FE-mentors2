import React, { createContext, useState, useContext } from "react";
import ModalContainer from "../modals/ModalContainer";

const ThemeContext = createContext();

const ThemeProvider = ({ children }) => {
  const [modalType, setModalType] = useState();

  const openCloseModalHandle = (type) => {
    setModalType(type);
  };

  return (
    <ThemeContext.Provider value={{ modalType, openCloseModalHandle }}>
      {children}
      {modalType && (
        <ModalContainer
          modalType={modalType}
          openCloseModalHandle={openCloseModalHandle}
        />
      )}
    </ThemeContext.Provider>
  );
};

const useTheme = () => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error("useTheme must be used within a ThemeProvider");
  }
  return context;
};

export { ThemeProvider, useTheme };
