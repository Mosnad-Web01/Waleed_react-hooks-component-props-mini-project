import React from "react";
import Header from "./Header"; // Adjust the path if necessary
import About from "./About"; // Adjust the path if necessary
import ArticleList from "./ArticleList"; // Adjust the path if necessary
import blogData from "../data/blog"; // Correct path to data file

function App() {
  return (
    <div className="App">
      <Header name={blogData.name} />
      <About image={blogData.image} about={blogData.about} />
      <ArticleList posts={blogData.posts} />
    </div>
  );
}

export default App;
