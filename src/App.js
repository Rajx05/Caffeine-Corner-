import { useState } from "react";
import "./App.css";
import Head from "./components/head";
import Menu from "./components/menu";
import Footer from "./components/footer";
import PageNav from "./components/pageNav";

function App() {
  const [page, setPage] = useState(0);

  // setter function for updating page
  function setter() {
    setPage((p) => p + 1);
  }

  return (
    <>
      <Head />
      <Menu />
      <PageNav setter={setter} page={page} />
      <Footer />
    </>
  );
}

export default App;
