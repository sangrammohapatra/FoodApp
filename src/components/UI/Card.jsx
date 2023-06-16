import classes from "./Card.module.css";
// import { Card as FoodCard } from "@mui/material";

const Card = (props) => {
  return <div className={classes.card}>{props.children}</div>;
};

export default Card;
