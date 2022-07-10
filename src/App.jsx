import { useState } from "react";
import Odontogram from "./odontogram";

function App() {

  const [data, setData] = useState([]);

  return (
    <div className="App">
      <Odontogram
      tooth={(labelT, zoneT, idT) => {
        setData((oldArray) => [
          ...oldArray,
          {
            label: labelT,
            zone: zoneT,
            id: idT,
          },
        ]);
      }}
      rtooth={(id) => {
        setData((current) =>
            current.filter((obj) => {
              return obj.id !== id;
            })
          );
      }}
      />
      <div style={{padding: "1rem", display: "flex", justifyContent: "center"}}>
        <button
        
        onClick={() => {
          console.log(data)
        }}

        style={{
          backgroundColor: "#FF6363",
          border: "4px solid #543864",
          width: "10rem",
          borderRadius: "1rem",
          padding: "0.5rem",
          color: "#f1f1f1",
          fontSize: 18,
          cursor: "pointer"
        }}

        >Click for save data (Console.log)</button>
      </div>
    </div>
  );
}

export default App;
