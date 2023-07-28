import React from "react";
import MarkDown from "markdown-to-jsx";
import Paper from "@mui/material/Paper";
import Card from "@mui/material/Card";
import { Typography } from "@mui/material";

//function which is used for the read me details
const Details = ({ details, readMe }) => {
  return (
    <div className="repo-details-right">
      {details ? (
        <Card elevation={3} sx={{ maxWidth: 500 }}>
          <Typography>
            Read Me:
            <MarkDown>{readMe}</MarkDown>
          </Typography>
        </Card>
      ) : (
        ""
      )}
    </div>
  );
};

export default Details;
