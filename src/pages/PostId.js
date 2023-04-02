import React, { useEffect, useState } from "react";
import Footer from "../components/footer/Footer";
import Sidebar from "../components/Sidebar/Sidebar";
import imageBlog from "../assets/images/blogger-to-WordPress.jpeg";
import axios from "axios";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import Loading from "../components/loading/Loading";

const PostId = () => {
  const { theme } = useSelector((state) => state.themeReducer);
  const [isLoading, setIsLoading] = useState(false);
  const [postId, setPostId] = useState({});
  const { id } = useParams();
  const getPostId = async () => {
    setIsLoading(true);
    try {
      const { data } = await axios.get(
        `https://jsonplaceholder.typicode.com/posts/${id ? `${id}` : ""}`
      );
      setPostId(data);
      setIsLoading(false);
    } catch (error) {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    getPostId();
  }, []);

  return (
    <div>
      <div
        className="App"
        style={{ background: theme == "light" ? "#e6e9ee" : "#100720" }}
      >
        {isLoading ? (
          <Loading />
        ) : (
          <div className="box">
            <div
              className="content main"
              style={{ background: theme == "light" ? "#e6e9ee" : "#100720" }}
            >
              <div>
                <div>
                  <div className="blogHeader">
                    <h1
                      style={{
                        color: theme == "light" ? "#000" : "#fff",
                        textAlign: "center",
                        paddingBottom: "20px",
                      }}
                    >
                      {postId.title}
                    </h1>
                    <p className="entry-meta">
                      <time className="entry-time">March 18, 2023</time>{" "}
                      <span className="entry-author">
                        <a className="entry-link">
                          <span className="entry-author-name">
                            Colin Newcomer
                          </span>
                        </a>
                      </span>
                      <span>
                        <a className="entry-link">Comments</a>
                      </span>
                    </p>
                  </div>

                  <img src={imageBlog} alt="blog" />
                  <p
                    className="postDec"
                    style={{
                      color: theme == "light" ? "#000" : "#fff",
                      marginTop: "20px",
                    }}
                  >
                    {postId.body}.
                  </p>
                </div>
              </div>
            </div>
            <Sidebar />
          </div>
        )}
      </div>

      {!isLoading && <Footer />}
    </div>
  );
};

export default PostId;
