import { useState } from "react";

function Tooth(props) {
  const [top, setTop] = useState(props.top);
  const [left, setLeft] = useState(props.left);
  const [bottom, setBottom] = useState(props.bottom);
  const [right, setRight] = useState(props.right);
  const [center, setCenter] = useState(props.center);

  const [topClicked, setTopClicked] = useState(false);
  const [leftClicked, setLeftClicked] = useState(false);
  const [bottomClicked, setBottomClicked] = useState(false);
  const [rightClicked, setRightClicked] = useState(false);
  const [centerClicked, setCenterClicked] = useState(false);

  const [colorClick, setColorClick] = useState("#ff6961")

  return (
    <>
      {top ? (
        <div
          className={topClicked ? "top tooth" : "top tooth unselected"}
          style={{
            width: "20px",
            height: "20px",
            outline: "2px solid #000",
            position: "absolute",
            backgroundColor: topClicked ? colorClick : "#fff",
            top: 0,
            left: 0,
            borderTopLeftRadius: "100%",
          }}
          onClick={() => {
            if (!topClicked) {
              setTopClicked(true);
              props.vestibularC();
            } else {
              setTopClicked(false);
              props.vestibularU();
            }
          }}
        ></div>
      ) : left ? (
        <div
          className={leftClicked ? "left tooth" : "left tooth unselected"}
          style={{
            width: "20px",
            height: "20px",
            outline: "2px solid #000",
            position: "absolute",
            bottom: 0,
            left: 0,
            borderBottomLeftRadius: "100%",
            backgroundColor: leftClicked ? colorClick : "#fff",
          }}
          onClick={() => {
            if (!leftClicked) {
              setLeftClicked(true);
              props.distialC();
            } else {
              setLeftClicked(false);
              props.distialU();
            }
          }}
        ></div>
      ) : bottom ? (
        <div
          className={bottomClicked ? "bottom tooth" : "bottom tooth unselected"}
          style={{
            width: "20px",
            height: "20px",
            outline: "2px solid #000",
            position: "absolute",
            bottom: 0,
            right: 0,
            borderBottomRightRadius: "100%",
            backgroundColor: bottomClicked ? colorClick : "#fff",
          }}
          onClick={() => {
            if (!bottomClicked) {
              setBottomClicked(true);
              props.palastinaC();
            } else {
              setBottomClicked(false);
              props.palastinaU();
            }
          }}
        ></div>
      ) : right ? (
        <div
          className={rightClicked ? "right tooth" : "right tooth unselected"}
          style={{
            width: "20px",
            height: "20px",
            outline: "2px solid #000",
            position: "absolute",
            top: 0,
            right: 0,
            borderTopRightRadius: "100%",
            backgroundColor: rightClicked ? colorClick : "#fff",
          }}
          onClick={() => {
            if (!rightClicked) {
              setRightClicked(true);
              props.mastialC();
            } else {
              setRightClicked(false);
              props.mastialU();
            }
          }}
        ></div>
      ) : center ? (
        <div
          className={centerClicked ? "center tooth" : "center tooth unselected"}
          style={{
            width: "20px",
            height: "20px",
            outline: "2px solid #000",
            position: "absolute",
            top: "25%",
            right: "25%",
            borderRadius: "50%",
            backgroundColor: centerClicked ? colorClick : "#fff",
          }}
          onClick={() => {
            if (!centerClicked) {
              setCenterClicked(true);
              props.oclusalC();
            } else {
              setCenterClicked(false);
              props.oclusalU();
            }
          }}
        ></div>
      ) : (
        <p>Selecciona un prop (top, left, bottom, right, center)</p>
      )}
    </>
  );
}

export default Tooth;
