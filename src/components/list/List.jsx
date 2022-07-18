import {
  ArrowBackIosOutlined,
  ArrowForwardIosOutlined,
} from "@material-ui/icons";
import { useRef, useState } from "react";
import {ListItem} from "../listItem/ListItem.jsx";
import "./list.scss";

export const List = ({ list }) =>{
  const [isMoved, setIsMoved] = useState(false);
  const [slideNumber, setSlideNumber] = useState(0);
  const [clickLimit, setClickLimit] = useState(window.innerWidth / 230);

  const listRef = useRef();
  const handleClick = (direction) => {console.log(slideNumber, " ",list.content.length)
    setIsMoved(true);
    let distance = listRef.current.getBoundingClientRect().x - 50;
    if (direction === "left" && slideNumber > 0) {
      setSlideNumber(list.content.length - 1);
      listRef.current.style.transform = `translateX(${230 + distance}px)`;
    }
    if (direction === "right" && slideNumber < list.content.length - clickLimit) {
      setSlideNumber(list.content.length + 1);
      listRef.current.style.transform = `translateX(${-230 + distance}px)`;
    }
  };
  return (
    <div className="list">
      
      <div className="wrapper">
      <span className="listTitle">{list.title}</span>
        <ArrowBackIosOutlined
          className="sliderArrow Left"
          onClick={() => handleClick("left")}
          style={{ display: !isMoved && "none" }}
        />
        <div className="container" ref={listRef}>
          {list.content.map((item, i) => (
            <ListItem index={i} item={item} />
          ))}
        </div>
        <ArrowForwardIosOutlined
          className="sliderArrow Right"
          onClick={() => handleClick("right")}
        />
      </div>
    </div>
  );
}