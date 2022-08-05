import React, { useEffect, useState } from "react";
import axios from "axios";
import { PostType } from "../../types";
import "./Posts.scss";

const Posts = () => {
  const [posts, setPosts] = useState<PostType[]>([]);
  const [filteredPosts, setFilteredPosts] = useState(posts);
  const [filter, setFilter] = useState("");

  useEffect(() => {
    let updatedFilterPosts = posts.filter((post) =>
      filter ? post.userId === Number(filter) : post,
    );
    setFilteredPosts(updatedFilterPosts);
  }, [filter, posts]);

  useEffect(() => {
    let isMounted = true;
    const fetchPosts = async () => {
      const { data } = await axios.get(
        "https://jsonplaceholder.typicode.com/posts",
      );
      if (isMounted) {
        setPosts(data);
      }
    };

    fetchPosts();
    return () => {
      isMounted = false;
    };
  }, []);

  return (
    <div className="posts">
      <div className="posts_header">
        <h2>Posts</h2>
      </div>
      <div className="posts_card">
        <label>Choose the User:</label>
        <select
          className="posts_card_select"
          onChange={(e) => setFilter(e.target.value)}
        >
          <option value="">All</option>
          <option value="1">Bret</option>
          <option value="2">Antonette</option>
          <option value="3">Samantha</option>
          <option value="4">Karianne</option>
          <option value="5">Kamren</option>
          <option value="9">Delphine</option>
        </select>
      </div>
      <ul className="posts_card">
        {filteredPosts.map((post) => {
          return <li className="posts_card_list">{post.title}</li>;
        })}
      </ul>
    </div>
  );
};

export default Posts;
