import Tooth from "./tooth";

function Teeth(props) {
  return (
    <div
      className="containTeeth"
      style={{
        width: "40px",
        height: "40px",
        border: "2px solid #000",
        transform: "rotate(45deg)",
        borderRadius: "50%",
        position: "relative",
      }}
    >
      <Tooth top
        vestibularC={props.vestibularC}
        vestibularU={props.vestibularU}
      />
      <Tooth left
        distialC={props.distialC}
        distialU={props.distialU}
      />
      <Tooth right
        mastialC={props.mastialC}
        mastialU={props.mastialU}
      />
      <Tooth bottom
        palastinaC={props.palastinaC}
        palastinaU={props.palastinaU}
      />
      <Tooth center
        oclusalC={props.oclusalC}
        oclusalU={props.oclusalU}
      />
    </div>
  );
}

export default Teeth;
