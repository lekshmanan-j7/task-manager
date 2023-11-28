import { useState } from "react";
import { useDispatch } from "react-redux";
import { taskAdded } from "../slices/taskSlice";
import { Box, Button, TextField } from "@mui/material";



const AddTask = () => {
    const dispatch = useDispatch()
    const [title, setTitle] = useState('')
    const [description, setDescription] = useState('')

    const onTitleChanged = (e) => setTitle(e.target.value)
    const onDescriptionChanged = (e) => setDescription(e.target.value)

    const onAddTaskClicked = () => {
        if (title && description) {
            dispatch(
                taskAdded(title, description)
            )
            setTitle('')
            setDescription('')
        }
    }

    return (
        <section>
            <h2>Task Manager</h2>
            <Box>
               <TextField
               label="title"
                    type="text"
                    id="outlined-basic"
                    variant="outlined"
                    name="postTitle"
                    value={title}
                    onChange={onTitleChanged}
                />
            </Box>

            <Box sx={{ marginTop: "20px" }}>
                <TextField
                    label="description"
                    id="outlined-multiline-static"
                    multiline
                    rows={5}
                    defaultValue="Default Value"
                    value={description}
                    onChange={onDescriptionChanged}
                /></Box>

            <Button sx={{
                color:"white",
                backgroundColor:"#4169e1",
                marginTop:"20px",
                "&:hover": {
                    backgroundColor: "#ADD8E6",
                  },
            }}
                type="button"
                onClick={onAddTaskClicked}
            >Add Task</Button>

        </section>
    )
}
export default AddTask