import { useState } from "react";
import Navbar from "./components/Navbar";
import PostCard from "./components/PostCard";
import CreatePost from "./components/CreatePost";

function App() {
  const [posts, setPosts] = useState([
    { title: "Welcome!", content: "This is the first post." },
  ]);

  const addPost = (newPost) => {
    setPosts([newPost, ...posts]);
  };

  return (
    <div>
      <Navbar />

      <CreatePost addPost={addPost} />

      <h2>Posts</h2>

      {posts.length === 0 ? (
        <p>No posts yet</p>
      ) : (
        posts.map((post, index) => (
          <PostCard
            key={index}
            title={post.title}
            content={post.content}
          />
        ))
      )}
    </div>
  );
}

export default App;