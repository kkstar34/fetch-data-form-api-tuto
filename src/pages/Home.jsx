import React from "react";
import Header from "../components/Header";
import Banner from "../components/Banner";
import Categories from "../components/Categories";
import QuestionList from "../components/QuestionList";
import CategoryLoader from "../components/loaders/CategoryLoader";
import {useState, useEffect} from "react";
import { useSelector } from 'react-redux'  

function Home() {
  const [categories, setCategories] = useState([{
    _id : 1,
    title: "React js",
    categoryQuestions : [],
  }]);
  const [loading, setLoading] = useState(false);

  
  useEffect(() => {
    
    
  }, []);

  return (
    <>
      <Header />
      <Banner />

      <div className="container my-4">
        <div className="row">
          {loading ? (
            <CategoryLoader />
          ) : (
            <Categories categories={categories} />
          )}
          <QuestionList />
        </div>
      </div>
    </>
  );
}

export default Home;
