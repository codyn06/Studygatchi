import { useState } from "react";
import "./SettingsMenu.css";
import Card from "./Card/Card";

export default function SettingsMenu() {
  const [firstOption, setFirst] = useState(false);
  const [secondOption, setSecond] = useState(false);

  return (
    <Card>
      <div
        style={{
          display: "flex",
          alignItems: "center",
          flexDirection: "row",
        }}
      >
        <button type="button" aria-label="Close"></button>
        <text
          style={{
            fontSize: 12,
            marginTop: "auto",
            marginLeft: "auto",
          }}
        >
          <text>Money</text>
        </text>
      </div>
      <div>
        <h5>General</h5>
        <div>
          <input
            type="checkbox"
            role="switch"
            id="sampleCheckbox1"
            onClick={() => {
              firstOption ? setFirst(false) : setFirst(true);
            }}
          />
          <label htmlFor="sampleCheckbox1">
            This is set to {firstOption ? "true" : "false"}
          </label>
        </div>
        <div>
          <input
            type="checkbox"
            role="switch"
            id="sampleCheckbox2"
            onClick={() => {
              secondOption ? setSecond(false) : setSecond(true);
            }}
          />
          <label htmlFor="sampleCheckbox2">
            This is set to {secondOption ? "true" : "false"}
          </label>
        </div>
        <label htmlFor="range1">Example range</label>
        <input type="range" id="range1"></input>
        <h5 style={{ paddingTop: 10 }}>Themes</h5>
        <div style={{ display: "flex", gap: 10 }}>
          <div
            className="themeChoice"
            style={{ backgroundColor: "#ff8d8d" }}
          ></div>
          <div className="themeChoice"></div>

          <div className="themeChoice"></div>
        </div>
        <h5 style={{ paddingTop: 10 }}>Miscellaneous</h5>
      </div>
    </Card>
  );
}
