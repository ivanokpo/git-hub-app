import axios from "axios";
import React, { useEffect, useState } from "react";
import MarkDown from "markdown-to-jsx";
import { DataGrid, GridToolbar } from "@mui/x-data-grid";
import Details from "./Details";
import styled from "styled-components";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { Typography } from "@mui/material";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";

const Results = ({ repos, filter }) => {
  //the following variable use useState for internal component state, holding the data for repo details
  //such as fork, stars, issues, branch, and readMe data
  const [showDetails, setShowDetails] = useState(false);
  const [id, setId] = useState(0);
  const [forks, setForks] = useState();
  const [stars, setStars] = useState();
  const [issues, setIssues] = useState();
  const [branch, setBranch] = useState("");
  const [readMe, setReadme] = useState();

  //clears the readme details and showdetails state every time the filter state changes
  useEffect(() => {
    setShowDetails(false);
    setReadme("");
  }, [filter]);

  //fetches the details of the repo for forks, stars, issues and readme
  const repoDetail = async (repo) => {
    setShowDetails(true);
    setId(repo.id);
    setForks(repo.forks);
    setStars(repo.stargazers_count);
    setIssues(repo.open_issues_count);
    

    axios({
      method: "get",
      url: `https://api.github.com/repos/${repos[0].owner.login}/${repo.name}/branches`,
    }).then((res) => {
      setBranch(res.data[0].name);
    });

    axios({
      method: "get",
      url: `https://raw.githubusercontent.com/${repos[0].owner.login}/${repo.name}/${branch}/README.md`,
    })
      .then((res) => {
        setReadme(res.data);
      })
      .catch(alert("Repository does not contain read me document"));
  };

  //function which retrieves the main github users information such as author and image
  const GitHubInfo = ({ github }) => {
    return (
      <>
        <Avatar
          alt="avatar"
          sx={{ width: 100, height: 100 }}
          src={repos.length > 0 ? github[0].owner.avatar_url : ""}
        />

        <div>
          <Typography>
            <h2>{repos.length > 0 ? github[0].owner.login : ""}</h2>
          </Typography>
        </div>
      </>
    );
  };

  return (
    <>
      <GitHubInfoContainer>
        <GitHubInfo github={repos} />
      </GitHubInfoContainer>
      <ResultsPage>
        {repos.length > 0 ? (
          <>
            <TableContainer component={Paper}>
              <Table sx={{ minWidth: 550 }} aria-label="simple table">
                <TableHead>
                  <TableRow>
                    <TableCell>
                      <h2>{repos[0].owner.login}'s repositories</h2>
                    </TableCell>
                    <TableCell align="right">Forks</TableCell>
                    <TableCell align="right">Stars</TableCell>
                    <TableCell align="right">Issues</TableCell>
                    <TableCell align="right">Repository Links</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {repos.map((repo) => {
                    if (
                      new Date(repo.created_at).getFullYear() ===
                      new Date(filter).getFullYear()
                    ) {
                      console.log(
                        repo.name,
                        new Date(repo.updated_at).getFullYear(),
                      );
                      return (
                        <TableRow
                          key={repo.id}
                          sx={{
                            "&:last-child td, &:last-child th": { border: 0 },
                          }}
                        >
                          <TableCell
                            component="th"
                            scope="row"
                            onClick={() => repoDetail(repo)}
                          >
                            <h4>{repo.name}</h4>
                          </TableCell>
                          <TableCell align="right">{repo.forks}</TableCell>
                          <TableCell align="right">
                            {repo.stargazers_count}
                          </TableCell>
                          <TableCell align="right">
                            {repo.open_issues_count}
                          </TableCell>
                          <TableCell align="right">
                            {repo.open_issues_count}
                          </TableCell>
                          <TableCell align="right">
                            <Button>
                              <a href={repo.html_url}>URL</a>
                            </Button>
                          </TableCell>
                        </TableRow>
                      );
                    } else if (new Date(filter).getFullYear() === 1970) {
                      console.log(
                        repo.name,
                        new Date(repo.updated_at).getFullYear(),
                      );
                      return (
                        <TableRow
                          key={repo.id}
                          sx={{
                            "&:last-child td, &:last-child th": { border: 0 },
                          }}
                        >
                          <TableCell
                            component="th"
                            scope="row"
                            onClick={() => repoDetail(repo)}
                          >
                            <h4>{repo.name}</h4>
                          </TableCell>
                          <TableCell align="right">{repo.forks}</TableCell>
                          <TableCell align="right">
                            {repo.stargazers_count}
                          </TableCell>
                          <TableCell align="right">
                            {repo.open_issues_count}
                          </TableCell>
                          <TableCell align="right">
                            <Button>
                              <a href={repo.html_url}>URL</a>
                            </Button>
                          </TableCell>
                        </TableRow>
                      );
                    }
                  })}
                </TableBody>
              </Table>
            </TableContainer>
          </>
        ) : (
          ""
        )}
        {/* <div className='repo-list-left'>{repos.map(renderRepo)}</div> */}
        <Details details={showDetails} readMe={readMe !== "" ? readMe : ""} />
      </ResultsPage>
    </>
  );
};
const ResultsPage = styled.div`
  margin: 5rem;

  display: flex;

  justify-content: center;

  img {
    border-radius: 1.5rem;
  }

  button:active {
    background: linear-gradient(35deg, #494949, #313131);
    color: white;
  }

  h4 {
    color: #ff6600;
  }

  h4:hover {
    color: #ffdfba;
    opacity: 1;
  }

  a,
  a:visited,
  a:hover,
  a:active {
    color: inherit;
  }
`;

const GitHubInfoContainer = styled.div`
  display: flex;

  justify-content: center;

  img {
    border-radius: 1.5rem;
  }

  button:active {
    background: linear-gradient(35deg, #494949, #313131);
    color: white;
  }

  h2 {
    font-weight: bold;
    color: grey;
    font-size: 50px;
  }

  h4:hover {
    color: #ffdfba;
    opacity: 1;
  }
`;
export default Results;
