import { Grid, Typography, TextField, Box } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  textField: {
    marginBottom: theme.spacing(2),
  },
}));

const LabFormField = ({
  title,
  placeholder = "",
  content = "",
  readOnly = false,
  type,
  value,
  onChange,
  ...props
}) => {
  const classes = useStyles();
  return (
    <Box className={classes.textField}>
      <Typography variant="h4" component="div">
        {title}
      </Typography>
      <TextField
        fullWidth
        color="primary"
        margin="dense"
        variant="outlined"
        value={value}
        onChange={onChange}
        type={type}
        placeholder={placeholder}
        defaultValue={content}
        InputProps={{ readOnly: readOnly }}
        {...props}
      />
    </Box>
  );
};

export default LabFormField;
