import React, { useState } from "react";
import { GrFormNext } from "react-icons/gr";
import { GrFormPrevious } from "react-icons/gr";
const slides = [
  {
    img: "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1171&q=80",
    title: "Nature1",
  },
  {
    img: "https://images.unsplash.com/photo-1426604966848-d7adac402bff?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
    title: "Nature2",
  },
  {
    img: "https://images.unsplash.com/photo-1475924156734-496f6cac6ec1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
    title: "Nature3",
  },
  {
    img: "https://images.unsplash.com/photo-1472214103451-9374bd1c798e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
    title: "Nature4",
  },
];

const App = () => {
  const [current, setCurrent] = useState(2);
  return (
    <div>
      <div className="carousel">
        <div
          className="carousel-inner"
          style={{ backgroundImage: `url(${slides[current].img})` }}
        >
          <div className="left">
            <a onClick={() => {
              if(current > 0){
                setCurrent(current - 1);
              }
            }}>
              <GrFormPrevious size={70} />
            </a>
          </div>
          <div className="mid">
            <h1>{slides[current].title}</h1>
          </div>
          <div className="right">
            <a onClick={() =>{
              if(current < slides.length-1){
                setCurrent(current + 1);
              }
            }}>
              <GrFormNext size={70} />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
