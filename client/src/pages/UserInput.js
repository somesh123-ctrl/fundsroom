import React, { useState } from "react";
import Avatar from "./Avatar1";
import axios from "axios";

const UserInput = () => {
  const [username, setUsername] = useState("");
  const [options, setOptions] = useState({
    topType: "ShortHairShortFlat",
    accessoriesType: "Blank",
    hairColor: "BrownDark",
    facialHairType: "Blank",
    clotheType: "GraphicShirt",
    clotheColor: "PastelBlue",
    eyeType: "Default",
    eyebrowType: "Default",
    mouthType: "Default",
    skinColor: "Light",
  });

  const handleOptionChange = (option, value) => {
    setOptions((prevOptions) => ({ ...prevOptions, [option]: value }));
  };

  const handleCreateAvatar = () => {
    axios
      .post("http://localhost:5000/api/createAvatar", { username, options })
      .then((response) => console.log(response.data))
      .catch((error) => console.error("Error creating avatar:", error));

    alert("Avatar created succeefully in Database");
  };

  return (
    <div>
      <h2>Customize Your Avatar</h2>
      <label>
        Username:
        <input
          type="text"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
      </label>
      <br />
      <label>
        topType:
        <select
          value={options.topType}
          onChange={(e) => handleOptionChange("topType", e.target.value)}
        >
          <option value="ShortHairShortFlat">ShortHairShortFlat</option>
          <option value="LongHairFro">LongHairFro</option>
        </select>
      </label>

      <br />
      <label>
        accessoriesType:
        <select
          value={options.accessoriesType}
          onChange={(e) =>
            handleOptionChange("accessoriesType", e.target.value)
          }
        >
          <option value="Round">Round</option>
          <option value="Prescription02">Prescription02</option>
        </select>
      </label>

      <br />
      <label>
        eyeType:
        <select
          value={options.eyeType}
          onChange={(e) => handleOptionChange("eyeType", e.target.value)}
        >
          <option value="Default">Default</option>
          <option value="Happy">Happy</option>
          <option value="Cry">Cry</option>
          <option value="Happy">Happy</option>
        </select>
      </label>

      <br />
      <label>
        skinColor:
        <select
          value={options.skinColor}
          onChange={(e) => handleOptionChange("skinColor", e.target.value)}
        >
          <option value="Brown">Brown</option>
          <option value="Light">Light</option>
        </select>
      </label>

      <br />

      <button onClick={handleCreateAvatar}>Create Avatar</button>
      <Avatar options={options} />
    </div>
  );
};

export default UserInput;
