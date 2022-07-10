import Teeth from "./teeth";
import { useState } from "react";

function Denture(props) {
  const [top1, setTop1] = useState(props.top_1);
  const [top2, setTop2] = useState(props.top_2);
  const [bottom1, setBottom1] = useState(props.bottom_1);
  const [bottom2, setBottom2] = useState(props.bottom_2);

  return (
    <>
      {top1 ? (
        <div className="dentureTop1">
          <div
            className="1"
            style={{ display: "flex", justifyContent: "center" }}
          >
            <div style={{ display: "flex" }}>
              <div className="18" style={{ padding: 3 }}>
                <p
                  style={{
                    margin: 0,
                    display: "flex",
                    justifyContent: "center",
                  }}
                >
                  18
                </p>
                <Teeth 
                  vestibularC={() => {
                    props.tooth("Vestibular", 18, 1)
                  }}
                  vestibularU={() => {
                    props.Rtooth(1)
                  }}
                  distialC={() => {
                    props.tooth("Distial", 18, 2)
                  }}
                  distialU={() => {
                    props.Rtooth(2)
                  }}
                  mastialC={() => {
                    props.tooth("Mastial", 18, 3)
                  }}
                  mastialU={() => {
                    props.Rtooth(3)
                  }}
                  palastinaC={() => {
                    props.tooth("Palastina", 18, 4)
                  }}
                  palastinaU={() => {
                    props.Rtooth(4)
                  }}
                  oclusalC={() => {
                    props.tooth("Oclusal", 18, 5)
                  }}
                  oclusalU={() => {
                    props.Rtooth(5)
                  }}
                />
              </div>
              <div className="17" style={{ padding: 3 }}>
                <p
                  style={{
                    margin: 0,
                    display: "flex",
                    justifyContent: "center",
                  }}
                >
                  17
                </p>
                <Teeth vestibularC={() => {
                    props.tooth("Vestibular", 17, 6)
                  }}
                  vestibularU={() => {
                    props.Rtooth(6)
                  }}
                  distialC={() => {
                    props.tooth("Distial", 17, 7)
                  }}
                  distialU={() => {
                    props.Rtooth(7)
                  }}
                  mastialC={() => {
                    props.tooth("Mastial", 17, 8)
                  }}
                  mastialU={() => {
                    props.Rtooth(8)
                  }}
                  palastinaC={() => {
                    props.tooth("Palastina", 17, 9)
                  }}
                  palastinaU={() => {
                    props.Rtooth(9)
                  }}
                  oclusalC={() => {
                    props.tooth("Oclusal", 17, 10)
                  }}
                  oclusalU={() => {
                    props.Rtooth(10)
                  }}/>
              </div>
              <div className="16" style={{ padding: 3 }}>
                <p
                  style={{
                    margin: 0,
                    display: "flex",
                    justifyContent: "center",
                  }}
                >
                  16
                </p>
                <Teeth  vestibularC={() => {
                    props.tooth("Vestibular", 16, 11)
                  }}
                  vestibularU={() => {
                    props.Rtooth(11)
                  }}
                  distialC={() => {
                    props.tooth("Distial", 16, 12)
                  }}
                  distialU={() => {
                    props.Rtooth(12)
                  }}
                  mastialC={() => {
                    props.tooth("Mastial", 16, 13)
                  }}
                  mastialU={() => {
                    props.Rtooth(13)
                  }}
                  palastinaC={() => {
                    props.tooth("Palastina", 16, 14)
                  }}
                  palastinaU={() => {
                    props.Rtooth(14)
                  }}
                  oclusalC={() => {
                    props.tooth("Oclusal", 16, 15)
                  }}
                  oclusalU={() => {
                    props.Rtooth(15)
                  }}/>
              </div>
              <div className="15" style={{ padding: 3 }}>
                <p
                  style={{
                    margin: 0,
                    display: "flex",
                    justifyContent: "center",
                  }}
                >
                  15
                </p>
                <Teeth 
                vestibularC={() => {
                  props.tooth("Vestibular", 15, 16)
                }}
                vestibularU={() => {
                  props.Rtooth(16)
                }}
                distialC={() => {
                  props.tooth("Distial", 15, 17)
                }}
                distialU={() => {
                  props.Rtooth(17)
                }}
                mastialC={() => {
                  props.tooth("Mastial", 15, 18)
                }}
                mastialU={() => {
                  props.Rtooth(18)
                }}
                palastinaC={() => {
                  props.tooth("Palastina", 15, 19)
                }}
                palastinaU={() => {
                  props.Rtooth(19)
                }}
                oclusalC={() => {
                  props.tooth("Oclusal", 15, 20)
                }}
                oclusalU={() => {
                  props.Rtooth(20)
                }}
                />
              </div>
              <div className="14" style={{ padding: 3 }}>
                <p
                  style={{
                    margin: 0,
                    display: "flex",
                    justifyContent: "center",
                  }}
                >
                  14
                </p>
                <Teeth
                vestibularC={() => {
                  props.tooth("Vestibular", 14, 21)
                }}
                vestibularU={() => {
                  props.Rtooth(21)
                }}
                distialC={() => {
                  props.tooth("Distial", 14, 22)
                }}
                distialU={() => {
                  props.Rtooth(22)
                }}
                mastialC={() => {
                  props.tooth("Mastial", 14, 23)
                }}
                mastialU={() => {
                  props.Rtooth(23)
                }}
                palastinaC={() => {
                  props.tooth("Palastina", 14, 24)
                }}
                palastinaU={() => {
                  props.Rtooth(24)
                }}
                oclusalC={() => {
                  props.tooth("Oclusal", 14, 25)
                }}
                oclusalU={() => {
                  props.Rtooth(25)
                }}
                />
              </div>
              <div className="13" style={{ padding: 3 }}>
                <p
                  style={{
                    margin: 0,
                    display: "flex",
                    justifyContent: "center",
                  }}
                >
                  13
                </p>
                <Teeth
                vestibularC={() => {
                  props.tooth("Vestibular", 13, 26)
                }}
                vestibularU={() => {
                  props.Rtooth(26)
                }}
                distialC={() => {
                  props.tooth("Distial", 13, 27)
                }}
                distialU={() => {
                  props.Rtooth(27)
                }}
                mastialC={() => {
                  props.tooth("Mastial", 13, 28)
                }}
                mastialU={() => {
                  props.Rtooth(28)
                }}
                palastinaC={() => {
                  props.tooth("Palastina", 13, 29)
                }}
                palastinaU={() => {
                  props.Rtooth(29)
                }}
                oclusalC={() => {
                  props.tooth("Oclusal", 13, 30)
                }}
                oclusalU={() => {
                  props.Rtooth(30)
                }}
                />
              </div>
              <div className="12" style={{ padding: 3 }}>
                <p
                  style={{
                    margin: 0,
                    display: "flex",
                    justifyContent: "center",
                  }}
                >
                  12
                </p>
                <Teeth
                vestibularC={() => {
                  props.tooth("Vestibular", 12, 31)
                }}
                vestibularU={() => {
                  props.Rtooth(31)
                }}
                distialC={() => {
                  props.tooth("Distial", 12, 32)
                }}
                distialU={() => {
                  props.Rtooth(32)
                }}
                mastialC={() => {
                  props.tooth("Mastial", 12, 33)
                }}
                mastialU={() => {
                  props.Rtooth(33)
                }}
                palastinaC={() => {
                  props.tooth("Palastina", 12, 34)
                }}
                palastinaU={() => {
                  props.Rtooth(34)
                }}
                oclusalC={() => {
                  props.tooth("Oclusal", 12, 35)
                }}
                oclusalU={() => {
                  props.Rtooth(35)
                }}
                />
              </div>
              <div className="11" style={{ padding: 3 }}>
                <p
                  style={{
                    margin: 0,
                    display: "flex",
                    justifyContent: "center",
                  }}
                >
                  11
                </p>
                <Teeth
                vestibularC={() => {
                  props.tooth("Vestibular", 11, 36)
                }}
                vestibularU={() => {
                  props.Rtooth(36)
                }}
                distialC={() => {
                  props.tooth("Distial", 11, 37)
                }}
                distialU={() => {
                  props.Rtooth(37)
                }}
                mastialC={() => {
                  props.tooth("Mastial", 11, 38)
                }}
                mastialU={() => {
                  props.Rtooth(38)
                }}
                palastinaC={() => {
                  props.tooth("Palastina", 11, 39)
                }}
                palastinaU={() => {
                  props.Rtooth(39)
                }}
                oclusalC={() => {
                  props.tooth("Oclusal", 11, 40)
                }}
                oclusalU={() => {
                  props.Rtooth(40)
                }}
                />
              </div>
            </div>
            <div style={{ display: "flex" }}>
              <div className="21" style={{ padding: 3 }}>
                <p
                  style={{
                    margin: 0,
                    display: "flex",
                    justifyContent: "center",
                  }}
                >
                  21
                </p>
                <Teeth
                vestibularC={() => {
                  props.tooth("Vestibular", 21, 41)
                }}
                vestibularU={() => {
                  props.Rtooth(41)
                }}
                distialC={() => {
                  props.tooth("Distial", 21, 42)
                }}
                distialU={() => {
                  props.Rtooth(42)
                }}
                mastialC={() => {
                  props.tooth("Mastial", 21, 43)
                }}
                mastialU={() => {
                  props.Rtooth(43)
                }}
                palastinaC={() => {
                  props.tooth("Palastina", 21, 44)
                }}
                palastinaU={() => {
                  props.Rtooth(44)
                }}
                oclusalC={() => {
                  props.tooth("Oclusal", 21, 45)
                }}
                oclusalU={() => {
                  props.Rtooth(45)
                }}
                />
              </div>
              <div className="22" style={{ padding: 3 }}>
                <p
                  style={{
                    margin: 0,
                    display: "flex",
                    justifyContent: "center",
                  }}
                >
                  22
                </p>
                <Teeth
                vestibularC={() => {
                  props.tooth("Vestibular", 22, 46)
                }}
                vestibularU={() => {
                  props.Rtooth(46)
                }}
                distialC={() => {
                  props.tooth("Distial", 22, 47)
                }}
                distialU={() => {
                  props.Rtooth(47)
                }}
                mastialC={() => {
                  props.tooth("Mastial", 22, 48)
                }}
                mastialU={() => {
                  props.Rtooth(48)
                }}
                palastinaC={() => {
                  props.tooth("Palastina", 22, 49)
                }}
                palastinaU={() => {
                  props.Rtooth(49)
                }}
                oclusalC={() => {
                  props.tooth("Oclusal", 22, 50)
                }}
                oclusalU={() => {
                  props.Rtooth(50)
                }}
                />
              </div>
              <div className="23" style={{ padding: 3 }}>
                <p
                  style={{
                    margin: 0,
                    display: "flex",
                    justifyContent: "center",
                  }}
                >
                  23
                </p>
                <Teeth
                vestibularC={() => {
                  props.tooth("Vestibular", 23, 51)
                }}
                vestibularU={() => {
                  props.Rtooth(51)
                }}
                distialC={() => {
                  props.tooth("Distial", 23, 52)
                }}
                distialU={() => {
                  props.Rtooth(52)
                }}
                mastialC={() => {
                  props.tooth("Mastial", 23, 53)
                }}
                mastialU={() => {
                  props.Rtooth(53)
                }}
                palastinaC={() => {
                  props.tooth("Palastina", 23, 54)
                }}
                palastinaU={() => {
                  props.Rtooth(54)
                }}
                oclusalC={() => {
                  props.tooth("Oclusal", 23, 55)
                }}
                oclusalU={() => {
                  props.Rtooth(55)
                }}
                />
              </div>
              <div className="24" style={{ padding: 3 }}>
                <p
                  style={{
                    margin: 0,
                    display: "flex",
                    justifyContent: "center",
                  }}
                >
                  24
                </p>
                <Teeth
                vestibularC={() => {
                  props.tooth("Vestibular", 24, 56)
                }}
                vestibularU={() => {
                  props.Rtooth(56)
                }}
                distialC={() => {
                  props.tooth("Distial", 24, 57)
                }}
                distialU={() => {
                  props.Rtooth(57)
                }}
                mastialC={() => {
                  props.tooth("Mastial", 24, 58)
                }}
                mastialU={() => {
                  props.Rtooth(58)
                }}
                palastinaC={() => {
                  props.tooth("Palastina", 24, 59)
                }}
                palastinaU={() => {
                  props.Rtooth(59)
                }}
                oclusalC={() => {
                  props.tooth("Oclusal", 24, 60)
                }}
                oclusalU={() => {
                  props.Rtooth(60)
                }}
                />
              </div>
              <div className="25" style={{ padding: 3 }}>
                <p
                  style={{
                    margin: 0,
                    display: "flex",
                    justifyContent: "center",
                  }}
                >
                  25
                </p>
                <Teeth
                vestibularC={() => {
                  props.tooth("Vestibular", 25, 61)
                }}
                vestibularU={() => {
                  props.Rtooth(61)
                }}
                distialC={() => {
                  props.tooth("Distial", 25, 62)
                }}
                distialU={() => {
                  props.Rtooth(62)
                }}
                mastialC={() => {
                  props.tooth("Mastial", 25, 63)
                }}
                mastialU={() => {
                  props.Rtooth(63)
                }}
                palastinaC={() => {
                  props.tooth("Palastina", 25, 64)
                }}
                palastinaU={() => {
                  props.Rtooth(64)
                }}
                oclusalC={() => {
                  props.tooth("Oclusal", 25, 65)
                }}
                oclusalU={() => {
                  props.Rtooth(65)
                }}
                />
              </div>
              <div className="26" style={{ padding: 3 }}>
                <p
                  style={{
                    margin: 0,
                    display: "flex",
                    justifyContent: "center",
                  }}
                >
                  26
                </p>
                <Teeth
                vestibularC={() => {
                  props.tooth("Vestibular", 26, 66)
                }}
                vestibularU={() => {
                  props.Rtooth(66)
                }}
                distialC={() => {
                  props.tooth("Distial", 26, 67)
                }}
                distialU={() => {
                  props.Rtooth(67)
                }}
                mastialC={() => {
                  props.tooth("Mastial", 26, 68)
                }}
                mastialU={() => {
                  props.Rtooth(68)
                }}
                palastinaC={() => {
                  props.tooth("Palastina", 26, 69)
                }}
                palastinaU={() => {
                  props.Rtooth(69)
                }}
                oclusalC={() => {
                  props.tooth("Oclusal", 26, 70)
                }}
                oclusalU={() => {
                  props.Rtooth(70)
                }}
                />
              </div>
              <div className="27" style={{ padding: 3 }}>
                <p
                  style={{
                    margin: 0,
                    display: "flex",
                    justifyContent: "center",
                  }}
                >
                  27
                </p>
                <Teeth
                vestibularC={() => {
                  props.tooth("Vestibular", 27, 71)
                }}
                vestibularU={() => {
                  props.Rtooth(71)
                }}
                distialC={() => {
                  props.tooth("Distial", 27, 72)
                }}
                distialU={() => {
                  props.Rtooth(72)
                }}
                mastialC={() => {
                  props.tooth("Mastial", 27, 73)
                }}
                mastialU={() => {
                  props.Rtooth(73)
                }}
                palastinaC={() => {
                  props.tooth("Palastina", 27, 74)
                }}
                palastinaU={() => {
                  props.Rtooth(74)
                }}
                oclusalC={() => {
                  props.tooth("Oclusal", 27, 75)
                }}
                oclusalU={() => {
                  props.Rtooth(75)
                }}
                />
              </div>
              <div className="28" style={{ padding: 3 }}>
                <p
                  style={{
                    margin: 0,
                    display: "flex",
                    justifyContent: "center",
                  }}
                >
                  28
                </p>
                <Teeth
                vestibularC={() => {
                  props.tooth("Vestibular", 28, 76)
                }}
                vestibularU={() => {
                  props.Rtooth(76)
                }}
                distialC={() => {
                  props.tooth("Distial", 28, 77)
                }}
                distialU={() => {
                  props.Rtooth(77)
                }}
                mastialC={() => {
                  props.tooth("Mastial", 28, 78)
                }}
                mastialU={() => {
                  props.Rtooth(78)
                }}
                palastinaC={() => {
                  props.tooth("Palastina", 28, 79)
                }}
                palastinaU={() => {
                  props.Rtooth(79)
                }}
                oclusalC={() => {
                  props.tooth("Oclusal", 28, 80)
                }}
                oclusalU={() => {
                  props.Rtooth(80)
                }}
                />
              </div>
            </div>
          </div>
        </div>
      ) : top2 ? (
        <div className="dentureTop2">
          <div
            className="2"
            style={{ display: "flex", justifyContent: "center" }}
          >
            <div style={{ display: "flex" }}>
              <div className="55" style={{ padding: 3 }}>
                <p
                  style={{
                    margin: 0,
                    display: "flex",
                    justifyContent: "center",
                  }}
                >
                  55
                </p>
                <Teeth
                vestibularC={() => {
                  props.tooth("Vestibular", 55, 81)
                }}
                vestibularU={() => {
                  props.Rtooth(81)
                }}
                distialC={() => {
                  props.tooth("Distial", 55, 82)
                }}
                distialU={() => {
                  props.Rtooth(82)
                }}
                mastialC={() => {
                  props.tooth("Mastial", 55, 83)
                }}
                mastialU={() => {
                  props.Rtooth(83)
                }}
                palastinaC={() => {
                  props.tooth("Palastina", 55, 84)
                }}
                palastinaU={() => {
                  props.Rtooth(84)
                }}
                oclusalC={() => {
                  props.tooth("Oclusal", 55, 85)
                }}
                oclusalU={() => {
                  props.Rtooth(85)
                }}
                />
              </div>
              <div className="54" style={{ padding: 3 }}>
                <p
                  style={{
                    margin: 0,
                    display: "flex",
                    justifyContent: "center",
                  }}
                >
                  54
                </p>
                <Teeth
                vestibularC={() => {
                  props.tooth("Vestibular", 54, 86)
                }}
                vestibularU={() => {
                  props.Rtooth(86)
                }}
                distialC={() => {
                  props.tooth("Distial", 54, 87)
                }}
                distialU={() => {
                  props.Rtooth(87)
                }}
                mastialC={() => {
                  props.tooth("Mastial", 54, 88)
                }}
                mastialU={() => {
                  props.Rtooth(88)
                }}
                palastinaC={() => {
                  props.tooth("Palastina", 54, 89)
                }}
                palastinaU={() => {
                  props.Rtooth(89)
                }}
                oclusalC={() => {
                  props.tooth("Oclusal", 54, 90)
                }}
                oclusalU={() => {
                  props.Rtooth(90)
                }}
                />
              </div>
              <div className="53" style={{ padding: 3 }}>
                <p
                  style={{
                    margin: 0,
                    display: "flex",
                    justifyContent: "center",
                  }}
                >
                  53
                </p>
                <Teeth
                vestibularC={() => {
                  props.tooth("Vestibular", 53, 91)
                }}
                vestibularU={() => {
                  props.Rtooth(91)
                }}
                distialC={() => {
                  props.tooth("Distial", 53, 92)
                }}
                distialU={() => {
                  props.Rtooth(92)
                }}
                mastialC={() => {
                  props.tooth("Mastial", 53, 93)
                }}
                mastialU={() => {
                  props.Rtooth(93)
                }}
                palastinaC={() => {
                  props.tooth("Palastina", 53, 94)
                }}
                palastinaU={() => {
                  props.Rtooth(94)
                }}
                oclusalC={() => {
                  props.tooth("Oclusal", 53, 95)
                }}
                oclusalU={() => {
                  props.Rtooth(95)
                }}
                />
              </div>
              <div className="15" style={{ padding: 3 }}>
                <p
                  style={{
                    margin: 0,
                    display: "flex",
                    justifyContent: "center",
                  }}
                >
                  52
                </p>
                <Teeth
                vestibularC={() => {
                  props.tooth("Vestibular", 52, 96)
                }}
                vestibularU={() => {
                  props.Rtooth(96)
                }}
                distialC={() => {
                  props.tooth("Distial", 52, 97)
                }}
                distialU={() => {
                  props.Rtooth(97)
                }}
                mastialC={() => {
                  props.tooth("Mastial", 52, 98)
                }}
                mastialU={() => {
                  props.Rtooth(98)
                }}
                palastinaC={() => {
                  props.tooth("Palastina", 52, 99)
                }}
                palastinaU={() => {
                  props.Rtooth(99)
                }}
                oclusalC={() => {
                  props.tooth("Oclusal", 52, 100)
                }}
                oclusalU={() => {
                  props.Rtooth(100)
                }}
                />
              </div>
              <div className="14" style={{ padding: 3 }}>
                <p
                  style={{
                    margin: 0,
                    display: "flex",
                    justifyContent: "center",
                  }}
                >
                  51
                </p>
                <Teeth
                vestibularC={() => {
                  props.tooth("Vestibular", 51, 101)
                }}
                vestibularU={() => {
                  props.Rtooth(101)
                }}
                distialC={() => {
                  props.tooth("Distial", 51, 102)
                }}
                distialU={() => {
                  props.Rtooth(102)
                }}
                mastialC={() => {
                  props.tooth("Mastial", 51, 103)
                }}
                mastialU={() => {
                  props.Rtooth(103)
                }}
                palastinaC={() => {
                  props.tooth("Palastina", 51, 104)
                }}
                palastinaU={() => {
                  props.Rtooth(104)
                }}
                oclusalC={() => {
                  props.tooth("Oclusal", 51, 105)
                }}
                oclusalU={() => {
                  props.Rtooth(105)
                }}
                />
              </div>
            </div>
            <div style={{ display: "flex" }}>
              <div className="61" style={{ padding: 3 }}>
                <p
                  style={{
                    margin: 0,
                    display: "flex",
                    justifyContent: "center",
                  }}
                >
                  61
                </p>
                <Teeth
                vestibularC={() => {
                  props.tooth("Vestibular", 61, 106)
                }}
                vestibularU={() => {
                  props.Rtooth(106)
                }}
                distialC={() => {
                  props.tooth("Distial", 61, 107)
                }}
                distialU={() => {
                  props.Rtooth(107)
                }}
                mastialC={() => {
                  props.tooth("Mastial", 61, 108)
                }}
                mastialU={() => {
                  props.Rtooth(108)
                }}
                palastinaC={() => {
                  props.tooth("Palastina", 61, 109)
                }}
                palastinaU={() => {
                  props.Rtooth(109)
                }}
                oclusalC={() => {
                  props.tooth("Oclusal", 61, 110)
                }}
                oclusalU={() => {
                  props.Rtooth(110)
                }}
                />
              </div>
              <div className="62" style={{ padding: 3 }}>
                <p
                  style={{
                    margin: 0,
                    display: "flex",
                    justifyContent: "center",
                  }}
                >
                  62
                </p>
                <Teeth
                vestibularC={() => {
                  props.tooth("Vestibular", 62, 111)
                }}
                vestibularU={() => {
                  props.Rtooth(111)
                }}
                distialC={() => {
                  props.tooth("Distial", 62, 112)
                }}
                distialU={() => {
                  props.Rtooth(112)
                }}
                mastialC={() => {
                  props.tooth("Mastial", 62, 113)
                }}
                mastialU={() => {
                  props.Rtooth(113)
                }}
                palastinaC={() => {
                  props.tooth("Palastina", 62, 114)
                }}
                palastinaU={() => {
                  props.Rtooth(114)
                }}
                oclusalC={() => {
                  props.tooth("Oclusal", 62, 115)
                }}
                oclusalU={() => {
                  props.Rtooth(115)
                }}
                />
              </div>
              <div className="63" style={{ padding: 3 }}>
                <p
                  style={{
                    margin: 0,
                    display: "flex",
                    justifyContent: "center",
                  }}
                >
                  63
                </p>
                <Teeth
                vestibularC={() => {
                  props.tooth("Vestibular", 63, 116)
                }}
                vestibularU={() => {
                  props.Rtooth(116)
                }}
                distialC={() => {
                  props.tooth("Distial", 63, 117)
                }}
                distialU={() => {
                  props.Rtooth(117)
                }}
                mastialC={() => {
                  props.tooth("Mastial", 63, 118)
                }}
                mastialU={() => {
                  props.Rtooth(118)
                }}
                palastinaC={() => {
                  props.tooth("Palastina", 63, 119)
                }}
                palastinaU={() => {
                  props.Rtooth(119)
                }}
                oclusalC={() => {
                  props.tooth("Oclusal", 63, 120)
                }}
                oclusalU={() => {
                  props.Rtooth(120)
                }}
                />
              </div>
              <div className="64" style={{ padding: 3 }}>
                <p
                  style={{
                    margin: 0,
                    display: "flex",
                    justifyContent: "center",
                  }}
                >
                  64
                </p>
                <Teeth
                vestibularC={() => {
                  props.tooth("Vestibular", 64, 121)
                }}
                vestibularU={() => {
                  props.Rtooth(121)
                }}
                distialC={() => {
                  props.tooth("Distial", 64, 122)
                }}
                distialU={() => {
                  props.Rtooth(122)
                }}
                mastialC={() => {
                  props.tooth("Mastial", 64, 123)
                }}
                mastialU={() => {
                  props.Rtooth(123)
                }}
                palastinaC={() => {
                  props.tooth("Palastina", 64, 124)
                }}
                palastinaU={() => {
                  props.Rtooth(124)
                }}
                oclusalC={() => {
                  props.tooth("Oclusal", 64, 125)
                }}
                oclusalU={() => {
                  props.Rtooth(125)
                }}
                />
              </div>
              <div className="65" style={{ padding: 3 }}>
                <p
                  style={{
                    margin: 0,
                    display: "flex",
                    justifyContent: "center",
                  }}
                >
                  65
                </p>
                <Teeth
                vestibularC={() => {
                  props.tooth("Vestibular", 65, 126)
                }}
                vestibularU={() => {
                  props.Rtooth(126)
                }}
                distialC={() => {
                  props.tooth("Distial", 65, 127)
                }}
                distialU={() => {
                  props.Rtooth(127)
                }}
                mastialC={() => {
                  props.tooth("Mastial", 65, 128)
                }}
                mastialU={() => {
                  props.Rtooth(128)
                }}
                palastinaC={() => {
                  props.tooth("Palastina", 65, 129)
                }}
                palastinaU={() => {
                  props.Rtooth(129)
                }}
                oclusalC={() => {
                  props.tooth("Oclusal", 65, 130)
                }}
                oclusalU={() => {
                  props.Rtooth(130)
                }}
                />
              </div>
            </div>
          </div>
        </div>
      ) : bottom1 ? (
        <div className="dentureBottom1">
          <div
            className="3"
            style={{ display: "flex", justifyContent: "center" }}
          >
            <div style={{ display: "flex" }}>
              <div className="55" style={{ padding: 3 }}>
                <p
                  style={{
                    margin: 0,
                    display: "flex",
                    justifyContent: "center",
                  }}
                >
                  85
                </p>
                <Teeth
                vestibularC={() => {
                  props.tooth("Vestibular", 85, 131)
                }}
                vestibularU={() => {
                  props.Rtooth(131)
                }}
                distialC={() => {
                  props.tooth("Distial", 85, 132)
                }}
                distialU={() => {
                  props.Rtooth(132)
                }}
                mastialC={() => {
                  props.tooth("Mastial", 85, 133)
                }}
                mastialU={() => {
                  props.Rtooth(133)
                }}
                palastinaC={() => {
                  props.tooth("Palastina", 85, 134)
                }}
                palastinaU={() => {
                  props.Rtooth(134)
                }}
                oclusalC={() => {
                  props.tooth("Oclusal", 85, 135)
                }}
                oclusalU={() => {
                  props.Rtooth(135)
                }}
                />
              </div>
              <div className="54" style={{ padding: 3 }}>
                <p
                  style={{
                    margin: 0,
                    display: "flex",
                    justifyContent: "center",
                  }}
                >
                  84
                </p>
                <Teeth
                vestibularC={() => {
                  props.tooth("Vestibular", 84, 136)
                }}
                vestibularU={() => {
                  props.Rtooth(136)
                }}
                distialC={() => {
                  props.tooth("Distial", 84, 137)
                }}
                distialU={() => {
                  props.Rtooth(137)
                }}
                mastialC={() => {
                  props.tooth("Mastial", 84, 138)
                }}
                mastialU={() => {
                  props.Rtooth(138)
                }}
                palastinaC={() => {
                  props.tooth("Palastina", 84, 139)
                }}
                palastinaU={() => {
                  props.Rtooth(139)
                }}
                oclusalC={() => {
                  props.tooth("Oclusal", 84, 140)
                }}
                oclusalU={() => {
                  props.Rtooth(140)
                }}
                />
              </div>
              <div className="53" style={{ padding: 3 }}>
                <p
                  style={{
                    margin: 0,
                    display: "flex",
                    justifyContent: "center",
                  }}
                >
                  83
                </p>
                <Teeth
                vestibularC={() => {
                  props.tooth("Vestibular", 83, 141)
                }}
                vestibularU={() => {
                  props.Rtooth(141)
                }}
                distialC={() => {
                  props.tooth("Distial", 83, 142)
                }}
                distialU={() => {
                  props.Rtooth(142)
                }}
                mastialC={() => {
                  props.tooth("Mastial", 83, 143)
                }}
                mastialU={() => {
                  props.Rtooth(143)
                }}
                palastinaC={() => {
                  props.tooth("Palastina", 83, 144)
                }}
                palastinaU={() => {
                  props.Rtooth(144)
                }}
                oclusalC={() => {
                  props.tooth("Oclusal", 83, 145)
                }}
                oclusalU={() => {
                  props.Rtooth(145)
                }}
                />
              </div>
              <div className="15" style={{ padding: 3 }}>
                <p
                  style={{
                    margin: 0,
                    display: "flex",
                    justifyContent: "center",
                  }}
                >
                  82
                </p>
                <Teeth
                vestibularC={() => {
                  props.tooth("Vestibular", 82, 146)
                }}
                vestibularU={() => {
                  props.Rtooth(146)
                }}
                distialC={() => {
                  props.tooth("Distial", 82, 147)
                }}
                distialU={() => {
                  props.Rtooth(147)
                }}
                mastialC={() => {
                  props.tooth("Mastial", 82, 148)
                }}
                mastialU={() => {
                  props.Rtooth(148)
                }}
                palastinaC={() => {
                  props.tooth("Palastina", 82, 149)
                }}
                palastinaU={() => {
                  props.Rtooth(149)
                }}
                oclusalC={() => {
                  props.tooth("Oclusal", 82, 150)
                }}
                oclusalU={() => {
                  props.Rtooth(150)
                }}
                />
              </div>
              <div className="14" style={{ padding: 3 }}>
                <p
                  style={{
                    margin: 0,
                    display: "flex",
                    justifyContent: "center",
                  }}
                >
                  81
                </p>
                <Teeth
                vestibularC={() => {
                  props.tooth("Vestibular", 81, 151)
                }}
                vestibularU={() => {
                  props.Rtooth(151)
                }}
                distialC={() => {
                  props.tooth("Distial", 81, 152)
                }}
                distialU={() => {
                  props.Rtooth(152)
                }}
                mastialC={() => {
                  props.tooth("Mastial", 81, 153)
                }}
                mastialU={() => {
                  props.Rtooth(153)
                }}
                palastinaC={() => {
                  props.tooth("Palastina", 81, 154)
                }}
                palastinaU={() => {
                  props.Rtooth(154)
                }}
                oclusalC={() => {
                  props.tooth("Oclusal", 81, 155)
                }}
                oclusalU={() => {
                  props.Rtooth(155)
                }}
                />
              </div>
            </div>
            <div style={{ display: "flex" }}>
              <div className="61" style={{ padding: 3 }}>
                <p
                  style={{
                    margin: 0,
                    display: "flex",
                    justifyContent: "center",
                  }}
                >
                  71
                </p>
                <Teeth
                vestibularC={() => {
                  props.tooth("Vestibular", 71, 156)
                }}
                vestibularU={() => {
                  props.Rtooth(156)
                }}
                distialC={() => {
                  props.tooth("Distial", 71, 157)
                }}
                distialU={() => {
                  props.Rtooth(157)
                }}
                mastialC={() => {
                  props.tooth("Mastial", 71, 158)
                }}
                mastialU={() => {
                  props.Rtooth(158)
                }}
                palastinaC={() => {
                  props.tooth("Palastina", 71, 159)
                }}
                palastinaU={() => {
                  props.Rtooth(159)
                }}
                oclusalC={() => {
                  props.tooth("Oclusal", 71, 160)
                }}
                oclusalU={() => {
                  props.Rtooth(160)
                }}
                />
              </div>
              <div className="62" style={{ padding: 3 }}>
                <p
                  style={{
                    margin: 0,
                    display: "flex",
                    justifyContent: "center",
                  }}
                >
                  72
                </p>
                <Teeth
                vestibularC={() => {
                  props.tooth("Vestibular", 72, 161)
                }}
                vestibularU={() => {
                  props.Rtooth(161)
                }}
                distialC={() => {
                  props.tooth("Distial", 72, 162)
                }}
                distialU={() => {
                  props.Rtooth(162)
                }}
                mastialC={() => {
                  props.tooth("Mastial", 72, 163)
                }}
                mastialU={() => {
                  props.Rtooth(163)
                }}
                palastinaC={() => {
                  props.tooth("Palastina", 72, 164)
                }}
                palastinaU={() => {
                  props.Rtooth(164)
                }}
                oclusalC={() => {
                  props.tooth("Oclusal", 72, 165)
                }}
                oclusalU={() => {
                  props.Rtooth(165)
                }}
                />
              </div>
              <div className="63" style={{ padding: 3 }}>
                <p
                  style={{
                    margin: 0,
                    display: "flex",
                    justifyContent: "center",
                  }}
                >
                  73
                </p>
                <Teeth
                vestibularC={() => {
                  props.tooth("Vestibular", 73, 166)
                }}
                vestibularU={() => {
                  props.Rtooth(166)
                }}
                distialC={() => {
                  props.tooth("Distial", 73, 167)
                }}
                distialU={() => {
                  props.Rtooth(167)
                }}
                mastialC={() => {
                  props.tooth("Mastial", 73, 168)
                }}
                mastialU={() => {
                  props.Rtooth(168)
                }}
                palastinaC={() => {
                  props.tooth("Palastina", 73, 169)
                }}
                palastinaU={() => {
                  props.Rtooth(169)
                }}
                oclusalC={() => {
                  props.tooth("Oclusal", 73, 170)
                }}
                oclusalU={() => {
                  props.Rtooth(170)
                }}
                />
              </div>
              <div className="64" style={{ padding: 3 }}>
                <p
                  style={{
                    margin: 0,
                    display: "flex",
                    justifyContent: "center",
                  }}
                >
                  74
                </p>
                <Teeth
                vestibularC={() => {
                  props.tooth("Vestibular", 74, 171)
                }}
                vestibularU={() => {
                  props.Rtooth(171)
                }}
                distialC={() => {
                  props.tooth("Distial", 74, 172)
                }}
                distialU={() => {
                  props.Rtooth(172)
                }}
                mastialC={() => {
                  props.tooth("Mastial", 74, 173)
                }}
                mastialU={() => {
                  props.Rtooth(173)
                }}
                palastinaC={() => {
                  props.tooth("Palastina", 74, 174)
                }}
                palastinaU={() => {
                  props.Rtooth(174)
                }}
                oclusalC={() => {
                  props.tooth("Oclusal", 74, 175)
                }}
                oclusalU={() => {
                  props.Rtooth(175)
                }}
                />
              </div>
              <div className="65" style={{ padding: 3 }}>
                <p
                  style={{
                    margin: 0,
                    display: "flex",
                    justifyContent: "center",
                  }}
                >
                  75
                </p>
                <Teeth
                vestibularC={() => {
                  props.tooth("Vestibular", 75, 176)
                }}
                vestibularU={() => {
                  props.Rtooth(176)
                }}
                distialC={() => {
                  props.tooth("Distial", 75, 177)
                }}
                distialU={() => {
                  props.Rtooth(177)
                }}
                mastialC={() => {
                  props.tooth("Mastial", 75, 178)
                }}
                mastialU={() => {
                  props.Rtooth(178)
                }}
                palastinaC={() => {
                  props.tooth("Palastina", 75, 179)
                }}
                palastinaU={() => {
                  props.Rtooth(179)
                }}
                oclusalC={() => {
                  props.tooth("Oclusal", 75, 180)
                }}
                oclusalU={() => {
                  props.Rtooth(180)
                }}
                />
              </div>
            </div>
          </div>
        </div>
      ) : bottom2 ? (
        <div className="dentureBottom2">
          <div
            className="4"
            style={{ display: "flex", justifyContent: "center" }}
          >
            <div style={{ display: "flex" }}>
              <div className="18" style={{ padding: 3 }}>
                <p
                  style={{
                    margin: 0,
                    display: "flex",
                    justifyContent: "center",
                  }}
                >
                  48
                </p>
                <Teeth
                vestibularC={() => {
                  props.tooth("Vestibular", 48, 181)
                }}
                vestibularU={() => {
                  props.Rtooth(181)
                }}
                distialC={() => {
                  props.tooth("Distial", 48, 182)
                }}
                distialU={() => {
                  props.Rtooth(182)
                }}
                mastialC={() => {
                  props.tooth("Mastial", 48, 183)
                }}
                mastialU={() => {
                  props.Rtooth(183)
                }}
                palastinaC={() => {
                  props.tooth("Palastina", 48, 184)
                }}
                palastinaU={() => {
                  props.Rtooth(184)
                }}
                oclusalC={() => {
                  props.tooth("Oclusal", 48, 185)
                }}
                oclusalU={() => {
                  props.Rtooth(185)
                }}
                />
              </div>
              <div className="17" style={{ padding: 3 }}>
                <p
                  style={{
                    margin: 0,
                    display: "flex",
                    justifyContent: "center",
                  }}
                >
                  47
                </p>
                <Teeth
                vestibularC={() => {
                  props.tooth("Vestibular", 47, 186)
                }}
                vestibularU={() => {
                  props.Rtooth(186)
                }}
                distialC={() => {
                  props.tooth("Distial", 47, 187)
                }}
                distialU={() => {
                  props.Rtooth(187)
                }}
                mastialC={() => {
                  props.tooth("Mastial", 47, 188)
                }}
                mastialU={() => {
                  props.Rtooth(188)
                }}
                palastinaC={() => {
                  props.tooth("Palastina", 47, 189)
                }}
                palastinaU={() => {
                  props.Rtooth(189)
                }}
                oclusalC={() => {
                  props.tooth("Oclusal", 47, 190)
                }}
                oclusalU={() => {
                  props.Rtooth(190)
                }}
                />
              </div>
              <div className="16" style={{ padding: 3 }}>
                <p
                  style={{
                    margin: 0,
                    display: "flex",
                    justifyContent: "center",
                  }}
                >
                  46
                </p>
                <Teeth
                vestibularC={() => {
                  props.tooth("Vestibular", 46, 191)
                }}
                vestibularU={() => {
                  props.Rtooth(191)
                }}
                distialC={() => {
                  props.tooth("Distial", 46, 192)
                }}
                distialU={() => {
                  props.Rtooth(192)
                }}
                mastialC={() => {
                  props.tooth("Mastial", 46, 193)
                }}
                mastialU={() => {
                  props.Rtooth(193)
                }}
                palastinaC={() => {
                  props.tooth("Palastina", 46, 194)
                }}
                palastinaU={() => {
                  props.Rtooth(194)
                }}
                oclusalC={() => {
                  props.tooth("Oclusal", 46, 195)
                }}
                oclusalU={() => {
                  props.Rtooth(195)
                }}
                />
              </div>
              <div className="15" style={{ padding: 3 }}>
                <p
                  style={{
                    margin: 0,
                    display: "flex",
                    justifyContent: "center",
                  }}
                >
                  45
                </p>
                <Teeth
                vestibularC={() => {
                  props.tooth("Vestibular", 45, 196)
                }}
                vestibularU={() => {
                  props.Rtooth(196)
                }}
                distialC={() => {
                  props.tooth("Distial", 45, 197)
                }}
                distialU={() => {
                  props.Rtooth(197)
                }}
                mastialC={() => {
                  props.tooth("Mastial", 45, 198)
                }}
                mastialU={() => {
                  props.Rtooth(198)
                }}
                palastinaC={() => {
                  props.tooth("Palastina", 45, 199)
                }}
                palastinaU={() => {
                  props.Rtooth(199)
                }}
                oclusalC={() => {
                  props.tooth("Oclusal", 45, 200)
                }}
                oclusalU={() => {
                  props.Rtooth(200)
                }}
                />
              </div>
              <div className="14" style={{ padding: 3 }}>
                <p
                  style={{
                    margin: 0,
                    display: "flex",
                    justifyContent: "center",
                  }}
                >
                  44
                </p>
                <Teeth
                vestibularC={() => {
                  props.tooth("Vestibular", 44, 201)
                }}
                vestibularU={() => {
                  props.Rtooth(201)
                }}
                distialC={() => {
                  props.tooth("Distial", 44, 202)
                }}
                distialU={() => {
                  props.Rtooth(202)
                }}
                mastialC={() => {
                  props.tooth("Mastial", 44, 203)
                }}
                mastialU={() => {
                  props.Rtooth(203)
                }}
                palastinaC={() => {
                  props.tooth("Palastina", 44, 204)
                }}
                palastinaU={() => {
                  props.Rtooth(204)
                }}
                oclusalC={() => {
                  props.tooth("Oclusal", 44, 205)
                }}
                oclusalU={() => {
                  props.Rtooth(205)
                }}
                />
              </div>
              <div className="13" style={{ padding: 3 }}>
                <p
                  style={{
                    margin: 0,
                    display: "flex",
                    justifyContent: "center",
                  }}
                >
                  43
                </p>
                <Teeth
                vestibularC={() => {
                  props.tooth("Vestibular", 43, 206)
                }}
                vestibularU={() => {
                  props.Rtooth(206)
                }}
                distialC={() => {
                  props.tooth("Distial", 43, 207)
                }}
                distialU={() => {
                  props.Rtooth(207)
                }}
                mastialC={() => {
                  props.tooth("Mastial", 43, 208)
                }}
                mastialU={() => {
                  props.Rtooth(208)
                }}
                palastinaC={() => {
                  props.tooth("Palastina", 43, 209)
                }}
                palastinaU={() => {
                  props.Rtooth(209)
                }}
                oclusalC={() => {
                  props.tooth("Oclusal", 43, 210)
                }}
                oclusalU={() => {
                  props.Rtooth(210)
                }}
                />
              </div>
              <div className="12" style={{ padding: 3 }}>
                <p
                  style={{
                    margin: 0,
                    display: "flex",
                    justifyContent: "center",
                  }}
                >
                  42
                </p>
                <Teeth
                vestibularC={() => {
                  props.tooth("Vestibular", 42, 211)
                }}
                vestibularU={() => {
                  props.Rtooth(211)
                }}
                distialC={() => {
                  props.tooth("Distial", 42, 212)
                }}
                distialU={() => {
                  props.Rtooth(212)
                }}
                mastialC={() => {
                  props.tooth("Mastial", 42, 213)
                }}
                mastialU={() => {
                  props.Rtooth(213)
                }}
                palastinaC={() => {
                  props.tooth("Palastina", 42, 214)
                }}
                palastinaU={() => {
                  props.Rtooth(214)
                }}
                oclusalC={() => {
                  props.tooth("Oclusal", 42, 215)
                }}
                oclusalU={() => {
                  props.Rtooth(215)
                }}
                />
              </div>
              <div className="11" style={{ padding: 3 }}>
                <p
                  style={{
                    margin: 0,
                    display: "flex",
                    justifyContent: "center",
                  }}
                >
                  41
                </p>
                <Teeth
                vestibularC={() => {
                  props.tooth("Vestibular", 41, 216)
                }}
                vestibularU={() => {
                  props.Rtooth(216)
                }}
                distialC={() => {
                  props.tooth("Distial", 41, 217)
                }}
                distialU={() => {
                  props.Rtooth(217)
                }}
                mastialC={() => {
                  props.tooth("Mastial", 41, 218)
                }}
                mastialU={() => {
                  props.Rtooth(218)
                }}
                palastinaC={() => {
                  props.tooth("Palastina", 41, 219)
                }}
                palastinaU={() => {
                  props.Rtooth(219)
                }}
                oclusalC={() => {
                  props.tooth("Oclusal", 41, 220)
                }}
                oclusalU={() => {
                  props.Rtooth(220)
                }}
                />
              </div>
            </div>
            <div style={{ display: "flex" }}>
              <div className="21" style={{ padding: 3 }}>
                <p
                  style={{
                    margin: 0,
                    display: "flex",
                    justifyContent: "center",
                  }}
                >
                  31
                </p>
                <Teeth
                vestibularC={() => {
                  props.tooth("Vestibular", 31, 221)
                }}
                vestibularU={() => {
                  props.Rtooth(221)
                }}
                distialC={() => {
                  props.tooth("Distial", 31, 222)
                }}
                distialU={() => {
                  props.Rtooth(222)
                }}
                mastialC={() => {
                  props.tooth("Mastial", 31, 223)
                }}
                mastialU={() => {
                  props.Rtooth(223)
                }}
                palastinaC={() => {
                  props.tooth("Palastina", 31, 224)
                }}
                palastinaU={() => {
                  props.Rtooth(224)
                }}
                oclusalC={() => {
                  props.tooth("Oclusal", 31, 225)
                }}
                oclusalU={() => {
                  props.Rtooth(225)
                }}
                />
              </div>
              <div className="22" style={{ padding: 3 }}>
                <p
                  style={{
                    margin: 0,
                    display: "flex",
                    justifyContent: "center",
                  }}
                >
                  32
                </p>
                <Teeth
                vestibularC={() => {
                  props.tooth("Vestibular", 32, 226)
                }}
                vestibularU={() => {
                  props.Rtooth(226)
                }}
                distialC={() => {
                  props.tooth("Distial", 32, 227)
                }}
                distialU={() => {
                  props.Rtooth(227)
                }}
                mastialC={() => {
                  props.tooth("Mastial", 32, 228)
                }}
                mastialU={() => {
                  props.Rtooth(228)
                }}
                palastinaC={() => {
                  props.tooth("Palastina", 32, 229)
                }}
                palastinaU={() => {
                  props.Rtooth(229)
                }}
                oclusalC={() => {
                  props.tooth("Oclusal", 32, 230)
                }}
                oclusalU={() => {
                  props.Rtooth(230)
                }}
                />
              </div>
              <div className="23" style={{ padding: 3 }}>
                <p
                  style={{
                    margin: 0,
                    display: "flex",
                    justifyContent: "center",
                  }}
                >
                  33
                </p>
                <Teeth
                vestibularC={() => {
                  props.tooth("Vestibular", 33, 231)
                }}
                vestibularU={() => {
                  props.Rtooth(231)
                }}
                distialC={() => {
                  props.tooth("Distial", 33, 232)
                }}
                distialU={() => {
                  props.Rtooth(232)
                }}
                mastialC={() => {
                  props.tooth("Mastial", 33, 233)
                }}
                mastialU={() => {
                  props.Rtooth(233)
                }}
                palastinaC={() => {
                  props.tooth("Palastina", 33, 234)
                }}
                palastinaU={() => {
                  props.Rtooth(234)
                }}
                oclusalC={() => {
                  props.tooth("Oclusal", 33, 235)
                }}
                oclusalU={() => {
                  props.Rtooth(235)
                }}
                />
              </div>
              <div className="24" style={{ padding: 3 }}>
                <p
                  style={{
                    margin: 0,
                    display: "flex",
                    justifyContent: "center",
                  }}
                >
                  34
                </p>
                <Teeth
                vestibularC={() => {
                  props.tooth("Vestibular", 34, 236)
                }}
                vestibularU={() => {
                  props.Rtooth(236)
                }}
                distialC={() => {
                  props.tooth("Distial", 34, 237)
                }}
                distialU={() => {
                  props.Rtooth(237)
                }}
                mastialC={() => {
                  props.tooth("Mastial", 34, 238)
                }}
                mastialU={() => {
                  props.Rtooth(238)
                }}
                palastinaC={() => {
                  props.tooth("Palastina", 34, 239)
                }}
                palastinaU={() => {
                  props.Rtooth(239)
                }}
                oclusalC={() => {
                  props.tooth("Oclusal", 34, 240)
                }}
                oclusalU={() => {
                  props.Rtooth(240)
                }}
                />
              </div>
              <div className="25" style={{ padding: 3 }}>
                <p
                  style={{
                    margin: 0,
                    display: "flex",
                    justifyContent: "center",
                  }}
                >
                  35
                </p>
                <Teeth
                vestibularC={() => {
                  props.tooth("Vestibular", 35, 241)
                }}
                vestibularU={() => {
                  props.Rtooth(241)
                }}
                distialC={() => {
                  props.tooth("Distial", 35, 242)
                }}
                distialU={() => {
                  props.Rtooth(242)
                }}
                mastialC={() => {
                  props.tooth("Mastial", 35, 243)
                }}
                mastialU={() => {
                  props.Rtooth(243)
                }}
                palastinaC={() => {
                  props.tooth("Palastina", 35, 244)
                }}
                palastinaU={() => {
                  props.Rtooth(244)
                }}
                oclusalC={() => {
                  props.tooth("Oclusal", 35, 245)
                }}
                oclusalU={() => {
                  props.Rtooth(245)
                }}
                />
              </div>
              <div className="26" style={{ padding: 3 }}>
                <p
                  style={{
                    margin: 0,
                    display: "flex",
                    justifyContent: "center",
                  }}
                >
                  36
                </p>
                <Teeth
                vestibularC={() => {
                  props.tooth("Vestibular", 36, 246)
                }}
                vestibularU={() => {
                  props.Rtooth(246)
                }}
                distialC={() => {
                  props.tooth("Distial", 36, 247)
                }}
                distialU={() => {
                  props.Rtooth(247)
                }}
                mastialC={() => {
                  props.tooth("Mastial", 36, 248)
                }}
                mastialU={() => {
                  props.Rtooth(248)
                }}
                palastinaC={() => {
                  props.tooth("Palastina", 36, 249)
                }}
                palastinaU={() => {
                  props.Rtooth(249)
                }}
                oclusalC={() => {
                  props.tooth("Oclusal", 36, 250)
                }}
                oclusalU={() => {
                  props.Rtooth(250)
                }}
                />
              </div>
              <div className="27" style={{ padding: 3 }}>
                <p
                  style={{
                    margin: 0,
                    display: "flex",
                    justifyContent: "center",
                  }}
                >
                  37
                </p>
                <Teeth
                vestibularC={() => {
                  props.tooth("Vestibular", 37, 251)
                }}
                vestibularU={() => {
                  props.Rtooth(251)
                }}
                distialC={() => {
                  props.tooth("Distial", 37, 252)
                }}
                distialU={() => {
                  props.Rtooth(252)
                }}
                mastialC={() => {
                  props.tooth("Mastial", 37, 253)
                }}
                mastialU={() => {
                  props.Rtooth(253)
                }}
                palastinaC={() => {
                  props.tooth("Palastina", 37, 254)
                }}
                palastinaU={() => {
                  props.Rtooth(254)
                }}
                oclusalC={() => {
                  props.tooth("Oclusal", 37, 255)
                }}
                oclusalU={() => {
                  props.Rtooth(255)
                }}
                />
              </div>
              <div className="28" style={{ padding: 3 }}>
                <p
                  style={{
                    margin: 0,
                    display: "flex",
                    justifyContent: "center",
                  }}
                >
                  38
                </p>
                <Teeth
                vestibularC={() => {
                  props.tooth("Vestibular", 38, 256)
                }}
                vestibularU={() => {
                  props.Rtooth(256)
                }}
                distialC={() => {
                  props.tooth("Distial", 38, 257)
                }}
                distialU={() => {
                  props.Rtooth(257)
                }}
                mastialC={() => {
                  props.tooth("Mastial", 38, 258)
                }}
                mastialU={() => {
                  props.Rtooth(258)
                }}
                palastinaC={() => {
                  props.tooth("Palastina", 38, 259)
                }}
                palastinaU={() => {
                  props.Rtooth(259)
                }}
                oclusalC={() => {
                  props.tooth("Oclusal", 38, 260)
                }}
                oclusalU={() => {
                  props.Rtooth(260)
                }}
                />
              </div>
            </div>
          </div>
        </div>
      ) : (
        <p>Selecciona un prop (top_1, top_2, bottom_1, bottom_2)</p>
      )}
    </>
  );
}

export default Denture;
