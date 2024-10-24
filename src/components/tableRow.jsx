import profile from "../assets/profile.png";
import "./tableRow.css";
import perform from "../assets/performance.jpg";
import React, { useState } from "react";

function TableRow({ datas }) {
  const [isOn, setIsOn] = useState(false);
  const handleToggle = () => {
    setIsOn(!isOn);
  };
  return (
    <tr>
      <td>
        <div className="name">
          <img src={datas.image} className="image" />
          <p>{datas.Name}</p>
        </div>
      </td>

      <td>
        <p>{datas.Role}</p>
      </td>

      <td>
        <p>{datas.Dept}</p>
      </td>

      <td>
        <div className="avatar">
          <div className="avatar-signal1" style={{backgroundColor: datas.color[0]}}>{datas.letters[0]}</div>
          <div className="avatar-signal2" style={{backgroundColor: datas.color[1]}}>{datas.letters[1]}</div>
          <div className="avatar-signal3" style={{backgroundColor: datas.color[2]}}>{datas.letters[2]}</div>
          <div className="avatar-signal4" style={{backgroundColor: datas.color[3]}}>{datas.letters[3]}</div>
          <div className="avatar-signal5" style={{backgroundColor: datas.color[4]}}>{datas.letters[4]}</div>
        </div>
      </td>

      <td>
        <div className="perform-box">
          <img src={perform} className="performance" />
        </div>
      </td>
      <td>
        <div className="assigned-to">
          <img src={datas.image} />
          <p>{datas.ReportingTo}</p>
        </div>
      </td>
      <td>
        <p>{datas.Role}</p>
      </td>
      <td>
        <p>{datas.email}</p>
      </td>
      <td>
        <p>
          {datas.Experience[0]} Yrs {datas.Experience[1]} Mon
        </p>
      </td>

      <td>
        <div className="activeness">
          <div
            className={`toggle-switch ${isOn ? "on" : ""}`}
            onClick={handleToggle}
          >
            <div className="toggle-thumb" />
          </div>
          <p>Active</p>
        </div>
      </td>

    </tr>
  );
}

export default TableRow;
