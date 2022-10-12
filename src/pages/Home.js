import React from "react";
import Header from "../components/Header";
import Layout from "../components/Layout";
import AddForm from "../components/AddForm";
import TodoListContainer from "../components/TodoListContainer";

const Home = () => {
  return (
    <Layout>
      <Header />
      <AddForm />
      <TodoListContainer />
    </Layout>
  );
};

export default Home;