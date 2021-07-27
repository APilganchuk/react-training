import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";

const useStyles = makeStyles((theme) => ({
  root: {
    "& > *": {
      margin: theme.spacing(0.4),
      display: "inline",
      height: "29px",
    },
  },
}));

export function ContainedButtons() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Button size="small" variant="outlined" color="secondary">
        buy
      </Button>
    </div>
  );
}
