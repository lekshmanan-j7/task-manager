//import { useState } from "react";
import { useDispatch } from "react-redux";
import { taskAdded } from "../slices/taskSlice";
import { Alert, Box, Button, TextField } from "@mui/material";
import { useForm } from "react-hook-form";


const AddTask = () => {
    const dispatch = useDispatch()

    const { register, handleSubmit, formState: { errors }, reset } = useForm();



    // const onTitleChanged = (e) => setTitle(e.target.value)
    //  const onDescriptionChanged = (e) => setDescription(e.target.value)

    const onAddTaskClicked = () => {

        // if (title && description) {
        //     dispatch(
        //         taskAdded(title, description)
        //     )
        //     setTitle('')
        //     setDescription('')
        // }

    }
    const onSubmit = (data) => {
        const { title, description } = data;
        dispatch(
            taskAdded(title, description)
        )
        reset()
    }

    return (
        <section>
            <h2>Task Manager</h2>
            <form onSubmit={handleSubmit(onSubmit)}>
                <Box>
                    <TextField
                        {...register("title", { required: true, minLength: 5 })}
                        label="title"
                        id="outlined-error-helper-text"
                        type="text"
                        variant="outlined"

                    />
                    {errors.title && <Alert sx={{width:"200px",marginTop:"10px"}}severity="error">title must above 5 letters</Alert>}
                </Box>


                <Box sx={{ marginTop: "20px" }}>
                    <TextField
                        {...register("description", { required: true, maxLength: 10 })}
                        label="description"
                        id="outlined-multiline-static"
                        multiline
                        rows={5}

                    />
                </Box>

                <Button sx={{
                    color: "white",
                    backgroundColor: "#4169e1",
                    marginTop: "20px",
                    "&:hover": {
                        backgroundColor: "#ADD8E6",
                    },
                }}
                    type='submit'
                    onClick={onAddTaskClicked}
                >Add Task</Button>
            </form>

        </section>
    )
}
export default AddTask