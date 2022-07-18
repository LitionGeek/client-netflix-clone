import { Search, Notifications, ArrowDropDown } from "@material-ui/icons";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, Navigate, useNavigate } from "react-router-dom";
import "./navbar.scss";

const Navbar = ({ type }) => {
  const [isScrolled, setisScrolled] = useState(false);
  const [searchHover, setsearchHover] = useState(false);
  /*   const user = useSelector((state) => state.user); */
  const navigate = useNavigate();
  window.onscroll = () => {
    setisScrolled(window.pageYOffset === 0 ? false : true);
    return () => (window.onscroll = null);
  };
  const handleClick = () => {
    setsearchHover(true);
  };

  const closeSearch = () => {
    setsearchHover(false);
  };

  const logOut = (e) => {
    localStorage.removeItem("user");
    navigate("/login");
  };

  return (
    <div className={isScrolled ? "navbar scrolled" : "navbar" }>
      <div className="container-fluid">
    
        {type === "register"? 
          <>
                  <img
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/2560px-Netflix_2015_logo.svg.png"
            alt=""/>
            <Link to="/login"><button className="btn">Iniciar sesion</button></Link>
            
          </> : <>
        
        <div className="left">
        <img
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/2560px-Netflix_2015_logo.svg.png"
            alt=""/>
          <Link to="/" className="link">
            <span>Home page</span>
          </Link>
          <Link to="/series" className="link">
            <span>Series</span>
          </Link>
          <Link to="/movies" className="link">
            <span>Movies</span>
          </Link>
          <span>New and popular</span>
          <span>My list</span>
        </div>
        <div className="right">
          {searchHover && (
            <input
              autoFocus
              placeholder="Nombre de serie o pelicula"
              className="input-search"
              onBlur={closeSearch}
            />
          )}

          <Search className="icon search-icon" onClick={handleClick} />
          <span>KID</span>
          <Notifications className="icon" />
          <p className="username">{/* user !== undefined ?  user.name : */ "Admin"}</p>
          <img
            src="https://images.pexels.com/photos/6899260/pexels-photo-6899260.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
            alt=""
          />
          <div className="profile">
            <ArrowDropDown className="icon" />
            <div className="options">
              <span>Settings</span>
              <span onClick={logOut}>Logout</span>
            </div>
          </div>
        </div>
        </>}
        
      </div>
    </div>
  );
};

export default Navbar;
