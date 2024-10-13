import { useState, useEffect } from "react";
import PropTypes from "prop-types";

const FetchComponent = ({ setLoading }) => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const fetchPost = async () => {
      try {
        const response = await fetch("https://jsonplaceholder.typicode.com/posts");
        const data = await response.json();
        setPosts(data);
      } catch (error) {
        console.error("Failed to fetch posts:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchPost();
  }, [setLoading]);

  return (
    <section>
      <ul className="text-center space-y-2">
        {posts.map((post) => (
          <li key={post.id}>{post.title}</li>
        ))}
      </ul>
    </section>
  );
};

FetchComponent.propTypes = {
  setLoading: PropTypes.func.isRequired,
};

export default FetchComponent;
