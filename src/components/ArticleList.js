import React from "react";
import Article from "./Article"; // Importing the Article component

function ArticleList({ posts }) {
  return (
    <main>
      {posts.map((post) => (
        <Article
          key={post.id}
          title={post.title}
          date={post.date}
          preview={post.preview}
          minutesToRead={post.minutesToRead}
        />
      ))}
    </main>
  );
}

export default ArticleList;
