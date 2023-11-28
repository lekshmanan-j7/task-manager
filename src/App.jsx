import { Grid } from "@mui/material";
import AddTask from "./components/addTask";
import TaskList from "./components/taskList";


function App() {

  return (
    <main className="App">
      <Grid container spacing={1}>
        <Grid item xs={4} sx={{ marginLeft: "100px" ,marginTop:"20px"}}>
          <AddTask />
        </Grid>
        <Grid item xs={6} sx={{ marginTop:"20px"}}>
          <TaskList />
        </Grid>
       </Grid>
    </main>
  );
}

export default App;
