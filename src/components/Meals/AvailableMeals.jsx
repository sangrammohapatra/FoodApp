// import Card from "../UI/Card";
import classes from "./AvailableMeals.module.css";
import MealItem from "./MealItem/MealItem";
import Foodmenu from "../../assets/Foodmenu.json";
import { Card } from "@mui/material";
// import { useEffect } from "react";

const AvailableMeals = () => {
  // useEffect(() => {
  //   const getMeal = async () => {
  //     const response = await fetch(
  //       "https://49af6d73-8488-4cfb-8edb-2938f19f3f56.mock.pstmn.io/getMeal"
  //     );
  //     const data = await response.json();
  //     console.log(data);
  //   };
  //   getMeal();
  // }, []);
  const mealsList = Foodmenu.foods.map((meal) => (
    <MealItem
      id={meal.id}
      key={meal.id}
      description={meal.description}
      name={meal.name}
      price={meal.price}
    />
  ));
  return (
    <section className={classes.meals}>
      <Card>
        <ul>{mealsList}</ul>
      </Card>
    </section>
  );
};

export default AvailableMeals;
