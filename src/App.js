import React from "react";
import "./App.css";

import PageHeader from "./components/PageHeader";
import PageFooter from "./components/PageFooter";
import Layout from "./components/Layout";

function App() {
  return (
    <div className="App">
      <PageHeader></PageHeader>
      <Layout style={{ minHeight: '80vh' }}></Layout>
      <PageFooter></PageFooter>
    </div>
  );
}

export default App;
