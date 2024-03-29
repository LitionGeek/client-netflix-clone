import { ArrowBackOutlined } from "@material-ui/icons"
import { Link, useLocation } from "react-router-dom"
import "./watch.scss"

export const Watch = () => {
  
  const location = useLocation();
  
  const movie = location.state.movie
  console.log(movie)
  return (
    <div className="watch">
      <Link to="/">
        <div className="back">
          <ArrowBackOutlined />
          Home
        </div>
      </Link>
      <video className="video" src={movie.video} autoPlay progress controls />
    </div>
  );
}
