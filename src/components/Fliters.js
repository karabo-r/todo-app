import React from "react";

const Fliters = ({handleDisplayStatus, displayStatus}) => {
  return <div className="filters">
  <h1
      onClick={() => handleDisplayStatus("All")}
      style={{
          borderBottom: `${
              displayStatus === "All" ? "3px solid #2F80ED" : ""
          }`,
      }}
  >
      All
  </h1>
  <h1
      onClick={() => handleDisplayStatus("Active")}
      style={{
          borderBottom: `${
              displayStatus === "Active" ? "3px solid #2F80ED" : ""
          }`,
      }}
  >
      Active
  </h1>
  <h1
      onClick={() => handleDisplayStatus("Completed")}
      style={{
          borderBottom: `${
              displayStatus === "Completed" ? "3px solid #2F80ED" : ""
          }`,
      }}
  >
      Completed
  </h1>
</div>;
};

export default Fliters;
