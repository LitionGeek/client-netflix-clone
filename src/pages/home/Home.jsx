import axios from "axios";
import React, { useState, useEffect } from "react";
import { Featured } from "../../components/featured/Featured";
import { Footer } from "../../components/footer/Footer.jsx";
import { List } from "../../components/list/List.jsx";
import Navbar from "../../components/navbar/Navbar";
import "./home.scss";

const Home = ({ type }) => {
  const [lists, setList] = useState([]);
  const [genre, setGenre] = useState(null);
  useEffect(() => {
    const getRandomList = async () => {
      try {
        const res = await axios.get(
          `http://localhost:8800/api/lists${type ? "?type=" + type : ""}${
            genre ? "&genre=" + genre : ""
          }`,
          {
            headers: {
              token:
                "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYyY2Y2ZTAzMjY5MTRjMmJiZjliZjU4YyIsImlzQWRtaW4iOnRydWUsImlhdCI6MTY1Nzc5NzAzMSwiZXhwIjoxNjU4MDU2MjMxfQ.YWL_TcwZwZAFSB9VbfppouHBVXEwChc_KuucYvVGiec",
            },
          }
        );
        setList(res.data);
      } catch (error) {
        console.log(error);
      }
    };
    getRandomList();
  }, [type, genre]);

  return (
    <div className="home">
      <Navbar />
      <Featured type={type} />
      <div className="lists">
        {lists.map((list) => (
          <List list={list} key={list._id} />
        ))}
      </div>
      <Footer />
    </div>
  );
};

export default Home;
