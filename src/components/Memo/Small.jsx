import React from "react";

const Small = React.memo(({ value }) => {
  console.log(' Me volví a llamar :(  ');
  // http?

  return <small> {value} </small>;
});

export default Small;
