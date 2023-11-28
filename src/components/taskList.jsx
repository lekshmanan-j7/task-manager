import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { deletetask } from "../slices/taskSlice";
import { Box, Card, CardContent, Button, CardActionArea, CardActions, Alert, AlertTitle } from '@mui/material';
import { MdOutlineDelete } from "react-icons/md";


const TaskList = () => {
    const dispatch = useDispatch()
    const taskList = useSelector((state) => state.tasks.tasks);

    const ondeleteTask = (id) => {
        console.log(id)
        dispatch(deletetask(id))
    }

    return (

        <Box sx={{ marginTop: "20px" }}> <h2>Tasks</h2>{
            taskList.length !== 0 ? taskList.map(task => (
                <Card key={task.id} sx={{ width: 600, marginBottom: "20px", backgroundColor: "#90aff0" }}>
                    <CardActionArea>
                        <CardContent>
                            <Box sx={{ display: "flex" }}>
                                <input type="checkbox" ></input>
                                <Box sx={{ marginLeft: "30px", marginTop: "27px" }}>
                                    <h3>{task.title}</h3>
                                    <p>{task.description}</p></Box>

                            </Box>
                            <CardActions >
                                <Box>
                                    <Button sx={{ color: "red", border: "1px solid black" }} 
                                        onClick={() => ondeleteTask(task.id)} 
                                        variant="outlined"
                                        startIcon={<MdOutlineDelete color="red" />}>
                                        Delete
                                    </Button>
                                </Box>

                            </CardActions>
                        </CardContent>
                    </CardActionArea>

                </Card>
            )) : <Box sx={{ marginTop: "20%" }}>

                <Alert severity="info">
                    <AlertTitle><strong>No tasks found !!</strong></AlertTitle>

                </Alert>
            </Box>}
        </Box>
    )
}

export default TaskList