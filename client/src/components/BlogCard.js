import * as React from "react";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import Avatar from "@mui/material/Avatar";
import Typography from "@mui/material/Typography";
import { red } from "@mui/material/colors";
import ModeEditIcon from "@mui/icons-material/ModeEdit";
import DeleteIcon from "@mui/icons-material/Delete";
import { Box, IconButton } from "@mui/material";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
import axios from "axios";

export default function BlogCard({
  title,
  description,
  image,
  username,
  time,
  id,
  isUser,
}) {
  const navigate = useNavigate();
  const handleEdit = () => {
    navigate(`/blog-details/${id}`);
  };

  const handleDelete = async () => {
    try {
      const { data } = await axios.delete(`http://localhost:8800/api/blog/delete-blog/${id}`);
      if (data?.success) {
        toast.success("Blog deleted")
        window.location.reload();
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <Card
      sx={{
        display: "flex",
        width: "100%",
        margin: "auto",
        mt: 2,
        padding: 2,
        boxShadow: "5px 5px 10px #ccc",
        transition: "box-shadow 0.3s ease-in-out",
        "&:hover": {
          boxShadow: "10px 10px 20px #ccc",
        },
        "@media (min-width: 600px)": {
          width: "70%",
        },
        "@media (min-width: 960px)": {
          width: "50%",
        },
        "@media (min-width: 1280px)": {
          width: "40%",
        },
      }}
    >
      <CardMedia
        component="img"
        sx={{ height: 200, width: 200, objectFit: "cover" }}
        image={image}
        alt="Blog Image"
      />
      <Box sx={{ display: "flex", flexDirection: "column", flex: 1 }}>
        {isUser && (
          <Box display="flex" justifyContent="flex-end">
            <IconButton onClick={handleEdit}>
              <ModeEditIcon color="info" />
            </IconButton>
            <IconButton onClick={handleDelete}>
              <DeleteIcon color="error" />
            </IconButton>
          </Box>
        )}
        <CardHeader
          avatar={
            <Avatar sx={{ bgcolor: "grey" }} aria-label="recipe">
              {username}
            </Avatar>
          }
          title={username}
          subheader={time}
        />
        <CardContent>
          <Typography variant="h6" color="text.secondary">
            {title}
          </Typography>
          <Typography variant="body1" color="text.secondary" sx={{ whiteSpace: 'pre-line' }}>
            {description}
          </Typography>
        </CardContent>
      </Box>
    </Card>
  );
}
