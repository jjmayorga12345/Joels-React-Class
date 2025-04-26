import { useEffect, useState } from "react";
import axios from "axios";

const FetchingData = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const getData = async () => {
      try {
        const response = await axios.get("http://localhost:3000/posts");
        console.log("Fetched posts:", response.data);
        setPosts(response.data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
    getData();
  }, []);

  return (
    <>
      <h1>Fetching Data</h1>
      {posts.length > 0 ? (
        posts.map((post) => (
          <div key={post.id}>
            <p><strong>Id:</strong> {post.id}</p>
            <p><strong>Title:</strong> {post.title}</p>
            <p>{post.body}</p>
            <hr />
          </div>
        ))
      ) : (
        <Loading />
      )}
    </>
  );
};

const Loading = () => <p>Loading...</p>;

export default FetchingData;
