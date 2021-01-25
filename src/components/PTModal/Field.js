import { TextField } from "@material-ui/core";
import React from "react";

const Field = ({ title = "", style = {}, ...rest }) => {
  return (
    <div className="mb-3" style={style}>
      <span>{title}</span>
      <TextField {...rest} />
    </div>
  );
};

export default React.memo(Field);
