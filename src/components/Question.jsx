import React from "react";
import { Link } from "react-router-dom";
import Tag from "./Tag";
function Question({ post }) {
  return (
    <>
      <div className="card no-border p-3 my-3">
        <div className="question ">
          <h2 className="question__title">
            <Link
              to={`/question/${post._id}/details`}
              className="question__link"
            >
              {post.name}
            </Link>
          </h2>
          <div className="question__time">
           10:10min
          </div>
          <p className="question__description my-2">{post.description}</p>
          <div className="d-flex justify-content-between">
            <span className="question__answers-count">
             1 reponse(s)
            </span>
            <div>
              {post.categories && post.categories.map((category) => {
                return <Tag tag={category.name} key={category._id} />;
              })}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Question;
