import React from "react";

import PageHeader from "./components/PageHeader";
import PageFooter from "./components/PageFooter";
import Layout from "./components/Layout";
import TeamBar from "./components/TeamBar";

function App() {
  return (
    <div className="App">
      <PageHeader></PageHeader>
      <TeamBar></TeamBar>
      <Layout></Layout>
      <PageFooter></PageFooter>
    </div>
  );
}

export default App;
