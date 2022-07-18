import "./listItem.scss";
import {
  PlayArrow,
  Add,
  ThumbUpAltOutlined,
  ThumbDownOutlined,
  Movie,
} from "@material-ui/icons";
import { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

export const ListItem = ({ item,index }) => {
  
  const [isHovered, setisHovered] = useState(false);
  const [movie, setmovie] = useState({})
  useEffect(() => {
    const getMovie = async()=>{
      try{
        const res = await axios.get("http://localhost:8800/api/movies/find/"+item, { 
          headers:{
            token: "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYyY2Y2ZTAzMjY5MTRjMmJiZjliZjU4YyIsImlzQWRtaW4iOnRydWUsImlhdCI6MTY1Nzc5NzAzMSwiZXhwIjoxNjU4MDU2MjMxfQ.YWL_TcwZwZAFSB9VbfppouHBVXEwChc_KuucYvVGiec"
          },
        });
        setmovie(res.data);
      }catch(err){
        console.log(err)
      }
    }
    getMovie();
  }, [item])
  return (
    <Link to="/watch" state={{movie:movie}} >
    
    <div
      className={`listItem ${isHovered ? 'div-hover' : 'div-none'}`}
      onMouseEnter={() => setisHovered(true)}
      onMouseLeave={() => setisHovered(false)}
      
    >
     { console.log(index)}
      <p>{item.title}</p>
      <img
        src={movie.img}
        alt=""
      />
      {isHovered && (
        <>
          <p>{movie.title}</p>
          <video src={movie.video} autoPlay={true} loop />
          <div className="itemInfo">
            <div className="icons">
              <PlayArrow className="icon"/>
              <Add className="icon"/>
              <ThumbUpAltOutlined className="icon"/>
              <ThumbDownOutlined className="icon"/>
            </div>
            <div className="itemInfoTop">
               <span>{movie.duration || "1hs"}</span> 
              <span className="limit"> {movie.limit} </span>
              <span>{movie.year}</span>
            </div>
            <div className="desc">
              <p>{movie.desc}...</p>
            </div>
            <div className="genre">{movie.genre}</div>
          </div>
        </>
      )}
    </div>
    </Link>
  );
};
