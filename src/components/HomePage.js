import React from "react";
import About from "./About";
import ArticleList from "./ArticleList";
import useDocumentTitle from "../hooks/useDocumentTitle";
import useQuery from "../hooks/useQuery";

function HomePage() {
  // fetch data for posts
const { data, isLoaded } = useQuery()
  

  // set the document title
 useDocumentTitle("Underreacted | Home");

  return (
    <>
      <About />
      {isLoaded ? <ArticleList posts={data} /> : <h3>Loading...</h3>}
    </>
  );
}

export default HomePage;
