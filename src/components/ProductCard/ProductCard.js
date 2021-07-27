import PropTypes from "prop-types";
import styles from "../Products/Products.module.css";

import Card from "@material-ui/core/Card";
import Count from "./Count";
import { makeStyles } from "@material-ui/core/styles";

import { ContainedButtons } from "./Button/Button.js";

const useStyles = makeStyles({
  root: {
    width: 150,
    padding: "1rem",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
});

export default function ProductCard({
  updateBascet,
  bascet,
  name,
  price,
  img,
}) {
  const classes = useStyles();

  return (
    <li className={styles.product_item}>
      <Card className={classes.root}>
        <img width="50" src={img} alt="img" />

        <p>{name}</p>
        <p>{price} $</p>
        <Count value={bascet[name]} updateBascet={updateBascet} name={name} />
        <ContainedButtons />
      </Card>
    </li>
  );
}

ProductCard.propTypes = {
  name: PropTypes.string.isRequired,
};
