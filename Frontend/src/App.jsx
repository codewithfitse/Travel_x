import React from "react";
import { Landing } from "./pages/Landing";
import LiveChat from "./components/LiveChat ";

const App = () => {
  return (
    <>
      <LiveChat>
        <Landing />
      </LiveChat>
    </>
  );
};

export default App;
