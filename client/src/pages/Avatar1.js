import React from "react";
import Avatar from "avataaars";

const Avatar1 = ({ options }) => {
  return (
    <div>
      <h2>Generated Avatar</h2>
      <Avatar avatarStyle="Transparent" {...options} />
    </div>
  );
};

export default Avatar1;
