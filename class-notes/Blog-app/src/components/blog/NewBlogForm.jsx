import * as React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Modal from "@mui/material/Modal";
import { TextField } from "@mui/material";
import { useState } from "react";
import useBlogCall from "../../hooks/useBlogCalls";
import { flexColumn, modalStyle } from "../../styles/globalStyle";
import { useSelector } from "react-redux";
import { Form, isInteger } from "formik";
import { object, string, ref, number, NumberSchema } from "yup";

export const blogSchema = object({
  title: string()
    .max(100, "This field is required")
    .required(),
  content: string(),
  image: string()
    .max(400, "URL must be less than 400 characters."),
  category: number(),
  status: string()
    .oneOf(['d', 'p'], 'Status must be either "draft" or "published"')
    .default('d'),
});


const NewBlogForm = ({values, handleChange, errors, touched, handleBlur}) => {

  // const { getBlogData } = useBlogCall();
  // const { firms } = useSelector(state => state.blog);
  // const [open, setOpen] = React.useState(false);
  // const handleOpen = () => setOpen(true);
  // const handleClose = () => {
  //   // setOpen(false);
  //   setInfo({
  //     title: "",
  //     phone: "",
  //     image: "",
  //     address: "",
  //   });
  //* handleClose olduğunda yani modal kapnadığında formdaki verilerin temizlenmesi için burada tanımladık.
  // };
  const [info, setInfo] = useState({
    title: "",
    content: "",
    image: "",
    category: 0,
    status: "d",
  });
  return (
    <div>
      <Form>
        <Box sx={{ display: "flex", flexDirection: "column", gap: 1}}>
          <TextField
            label="Titel"
            name="title"
            id="title"
            type="text"
            variant="outlined"
            value={values.title}
            onChange={handleChange}
            onBlur={handleBlur}
            helperText={touched.title && errors.title}
            error={touched.title && Boolean(errors.title)}
          />
          <TextField
            label="Image"
            name="image"
            id="image"
            type="url"
            variant="outlined"
            value={values.image}
            onChange={handleChange}
            onBlur={handleBlur}
            helperText={touched.image && errors.image}
            error={touched.image && Boolean(errors.image)}
          />
          <TextField
            label="Category"
            name="category"
            id="category"
            type="text"
            variant="outlined"
            value={values.category}
            onChange={handleChange}
            onBlur={handleBlur}
            helperText={touched.category && errors.category}
            error={touched.category && Boolean(errors.category)}
          />
          <TextField
            label="Status"
            name="status"
            id="status"
            type="text"
            variant="outlined"
            value={values.status}
            onChange={handleChange}
            onBlur={handleBlur}
            helperText={touched.status && errors.status}
            error={touched.status && Boolean(errors.status)}
          />
          <TextField
            label="Content"
            name="content"
            id="content"
            type="text"
            variant="outlined"
            value={values.content}
            onChange={handleChange}
            onBlur={handleBlur}
            helperText={touched.content && errors.content}
            error={touched.content && Boolean(errors.content)}
          />
          
          <Button type="submit" variant="contained" size="large">
            Submit
          </Button>
        </Box>
      </Form>
    </div>
  )
}

export default NewBlogForm