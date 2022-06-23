import React from "react";
import Question from "./Question";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import QuestionLoader from './loaders/QuestionLoader';
import { useSelector, useDispatch } from 'react-redux';
import { fetchPosts } from './../slices/posts';



function QuestionList() {
    const data = useSelector(state => state.posts);
    const dispatch = useDispatch();

    useEffect(() =>
    {
      dispatch(fetchPosts())
    }, [dispatch]);
  return (
    <>
      <div className="col-lg-9 col-md-12">
        <div className="d-flex justify-content-between">
          <span>{data.posts &&  data.posts.length } question(s)</span>
          <Link className="btn btn-primary" to="/add-question">
            Poser une question <i className="la la-arrow-right"></i>
          </Link>
        </div>
        {data.loading ? (<QuestionLoader />) : data.posts.map(post => <Question post={post} key={post._id} />) }

      </div>
    </>
  );
}

export default QuestionList;
