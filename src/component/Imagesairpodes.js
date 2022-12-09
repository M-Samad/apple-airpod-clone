import React, { useEffect, useState } from "react";

function Imagesairpodes() {
  const [imageArr, setImageArr] = useState(null);
  const arr = [];
  const set = function () {
    for (let i = 0; i <= 64; i++) {
      arr.push(i);
    }
    setImageArr(arr);
  };
  useEffect(() => {
    set();
  }, []);
  console.log(imageArr);
  return (
    <div>
      {imageArr &&
        imageArr.map((x) => {
          return (
            <img
              key={x}
              style={{
                width: "50px",
                opacity: 0,
              }}
              src={require(`./images/${x.toString().padStart(4, "0")}.png`)}
              alt=""
              className="image-hidden"
            />
          );
        })}
    </div>
  );
}

export default Imagesairpodes;
