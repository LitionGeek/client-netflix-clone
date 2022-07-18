import "./featured.scss"
import { InfoOutlined, PlayArrow  } from "@material-ui/icons";
import { useEffect, useState } from "react";
import axios from "axios";

export const Featured = ({type}) => {
    const [content,setContent] = useState({})
    console.log(content)
    useEffect(() => {
        const getRandom = async ()=>{
            try {
                const res = await axios.get(`http://localhost:8800/api/movies/random?type=${type}`,{
                    headers:{
                      token:"Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYyY2Y2ZTAzMjY5MTRjMmJiZjliZjU4YyIsImlzQWRtaW4iOnRydWUsImlhdCI6MTY1Nzc5NzAzMSwiZXhwIjoxNjU4MDU2MjMxfQ.YWL_TcwZwZAFSB9VbfppouHBVXEwChc_KuucYvVGiec"
                    }
                })
                console.log(content)
                setContent(res.data[0]);
            } catch (error) {
                console.log(error)
            }
        }
        getRandom();
    }, [type])
    
  return (
    <div className="featured">
        {type && (
            <div className="category">
                <span>{type === "movie" ? "Movies" : "Series"}</span>
                <select name="genre" id="genre">
                    <option>Genre</option>
                    <option value="adventure">Adventure</option>
                    <option value="comedy">Comedy</option>
                    <option value="crime">Crime</option>
                    <option value="fantasy">Fantasy</option>
                    <option value="historical">Historical</option>
                    <option value="horror">Horror</option>
                    <option value="romance">Romance</option>
                    <option value="sci-fi">Sci-fi</option>
                    <option value="thriller">Thriller</option>
                    <option value="western">Western</option>
                    <option value="animation">Animation</option>
                    <option value="drama">Drama</option>
                    <option value="documentary">Documentary</option>
                </select>
            </div>
        )}
        <img
            src={content.imgTitle}
            alt=""
            className="img-portada"
        />
        <div className="info">
            <img
            src={content.img}
            alt=""
            />
            <span className="desc">
                {content.desc}
            </span>
            <div className="buttons">
                <button className="play">
                    <PlayArrow />
                    <span>Play</span>
                </button>
                <button className="more">
                    <InfoOutlined/>
                    <span>Info</span>
                </button>
            </div>
        </div>

    </div>
  )
}
