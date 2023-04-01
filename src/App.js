import React, { useState } from "react";
import Menu from "./components/navbar/menu/Menu";
import Navbar from "./components/navbar/Navbar";
import Router from "./router/Router";

function App() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <Navbar isOpen={isOpen} setIsOpen={setIsOpen} />
      {isOpen ? <Menu /> : null}
      <Router />
    </>
  );
}

export default App;
