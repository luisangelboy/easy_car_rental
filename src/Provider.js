import React, { createContext, useState } from "react";

export const context = createContext();

export const Provider = ({ children }) => {
  const [loading, setLoading] = useState(false);
  const [open, setOpen] = useState(false);

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <context.Provider
      value={{
        loading,
        setLoading,
        open,
        setOpen,
        handleClose,
      }}
    >
      {children}
    </context.Provider>
  );
};
