import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";

const useStyles = makeStyles((theme) => ({
  root: {
    "& > *": {
      margin: theme.spacing(0.4),
      display: "block",
    },
  },
}));

export function ContainedButtons() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Button size="small" variant="outlined" color="secondary">
        Click
      </Button>
    </div>
  );
}
