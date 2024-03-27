//   const [isActive, setIsActive] = useState(false);

import { Link } from "react-router-dom";

//   const handleClick = () => {
//     setIsActive(!isActive);
//   };

// import { useState } from "react";
function BookSimpleDisplay(props: {
  styles: any;
  id: string;
  title: string;
  description: string;
  image: string;
}) {
  return (
    <li style={props.styles}>
      <Link to={"/books/" + props.id}>
        {props.title}
        <img src={props.image} alt={props.title} />
      </Link>
      {/* <p onClick={handleClick} style={{ whiteSpace: "pre-wrap" }}>
        {isActive
          ? props.description
            ? props.description
            : "No description available"
          : "click for description"}
      </p> */}
    </li>
  );
}

export default BookSimpleDisplay;
