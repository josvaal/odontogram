import { useState } from "react";
import Denture from "./components/denture";
import "./components/odontogram.scss";

function Odontogram(props) {

  return (
    <div id="root" className="odontogram-graph" style={{ padding: "2rem" }}>
      <Denture
        top_1
        tooth={(labelT, zoneT, idT) => {
          props.tooth(labelT, zoneT, idT)
        }}
        Rtooth={(id) => {
          props.rtooth(id);
        }}
      />
      <Denture
        top_2
        tooth={(labelT, zoneT, idT) => {
          props.tooth(labelT, zoneT, idT)
        }}
        Rtooth={(id) => {
          props.rtooth(id);
        }}
      />
      <Denture bottom_1
      tooth={(labelT, zoneT, idT) => {
        props.tooth(labelT, zoneT, idT)
      }}
      Rtooth={(id) => {
        props.rtooth(id);
      }}
      />
      <Denture bottom_2
      tooth={(labelT, zoneT, idT) => {
        props.tooth(labelT, zoneT, idT)
      }}
      Rtooth={(id) => {
        props.rtooth(id);
      }}
      />
    </div>
  );
}

export default Odontogram;
