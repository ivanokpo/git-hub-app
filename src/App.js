import Search from "./components/Search";
import Results from "./components/Results";
import { Typography } from '@mui/material';

const App = () => {

  const PageTitle = () => {
    return <h1>Github Repository Finder</h1>
  }
  return (
    <div className="App">
      <Typography>
      <PageTitle/>
      </Typography>
      <Search/>
    </div>
  );
}

export default App;
