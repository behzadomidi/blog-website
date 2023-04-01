import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import imageBlog from "../assets/images/blogger-to-WordPress.jpeg";
import Footer from "../components/footer/Footer";
import Sidebar from "../components/Sidebar/Sidebar";
import { useSelector, useDispatch } from "react-redux";

const Home = () => {
  const navigate = useNavigate();
  const { theme } = useSelector((state) => state.themeReducer);
  const dispatch = useDispatch();

  const [posts, setPosts] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const getData = async () => {
    setIsLoading(true);
    try {
      const { data } = await axios.get(
        "https://jsonplaceholder.typicode.com/posts"
      );
      setPosts([...data]);
      setIsLoading(false);
    } catch (error) {
      setIsLoading(false);
    }
  };

  const renderLoading = () => {
    <div
      style={{
        alignItems: "center",
        height: "100vh",
      }}
    >
      <h1>loading...</h1>
    </div>;
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <>
      <div
        className="App"
        style={{ background: theme == "light" ? "#e6e9ee" : "#100720" }}
      >
        {isLoading ? (
          renderLoading()
        ) : (
          <div className="box">
            <div
              className="content main"
              style={{ background: theme == "light" ? "#fff" : "#2c3644" }}
            >
              <div>
                {posts &&
                  posts.slice(0, 5).map((post) => (
                    <div key={post.id}>
                      <div
                        className="blogHeader"
                        onClick={() => navigate(`/posts/${post.id.toString()}`)}
                      >
                        <span className="buttonBlog">
                          <a href="#">WordPress Tutorials</a>
                        </span>
                        <h1
                          style={{
                            color: theme == "light" ? "#000" : "#fff",
                          }}
                        >
                          {post.title}
                        </h1>
                        <p className="entry-meta">
                          <time className="entry-time">March 18, 2023</time>{" "}
                          <span className="entry-author">
                            <a href="#" className="entry-link">
                              <span className="entry-author-name">
                                Colin Newcomer
                              </span>
                            </a>
                          </span>
                          <span>
                            <a href="#" className="entry-link">
                              Comments
                            </a>
                          </span>
                        </p>
                      </div>
                      <img src={imageBlog} alt="blog" />
                      <p
                        className="postDec"
                        style={{
                          color: theme == "light" ? "#000" : "#fff",
                        }}
                      >
                        {post.body}….
                        <a
                          className="blogDetails"
                          href="#"
                          onClick={() =>
                            navigate(`/posts/${post.id.toString()}`)
                          }
                        >
                          Continue Reading
                        </a>
                      </p>
                      <hr />
                    </div>
                  ))}
              </div>
            </div>
            <Sidebar />
          </div>
        )}
      </div>
      {!isLoading && <Footer />}
    </>
  );
};

export default Home;
