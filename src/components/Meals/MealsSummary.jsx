import classes from "./MealsSummary.module.css";

const MealsSummary = () => {
  return (
    <section className={classes.summary}>
      <h2>Delicious Food, Delivered To You</h2>
      <p>
        Discover a world of flavor with our food app. Browse an extensive menu
        of delectable meals and savor a delightful lunch or dinner in the
        comfort of your home.
      </p>
      <p>
        Prepared by skilled chefs using premium ingredients, our dishes are made
        to order, ensuring freshness and quality with every bite.
      </p>
      <h3>Bon appétit!</h3>
    </section>
  );
};

export default MealsSummary;
