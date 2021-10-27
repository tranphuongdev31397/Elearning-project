import React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import Button from 'components/Button/Button'

export default function CourseCard(props) {
  const hinhAnh = props.hinhAnh
  return (
    <div className="courseD__card absolute top-10 right-0">
      <Card sx={{ maxWidth: 345, width: 345 }}>
        <CardMedia
          component="img"
          height="140"
          image={hinhAnh}
          alt="green iguana"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            100$
          </Typography>
          <Typography variant="body2" color="text.secondary">
          <Button styleBtn={"w-100 my-2"}>Add to card</Button>
          <Button styleBtn={"w-100 my-2"}>Buy now</Button>
          </Typography>
        </CardContent>
       
      </Card>
    </div>
  );
}
