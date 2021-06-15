import React, { useState } from 'react';
import Image from "next/image";
import {
  Grid,
  Box,
  Card,
  CardContent,
  CardHeader,
  Typography,
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import CustomTheme from "@/themes/default";

import ButtonBase from "@material-ui/core/ButtonBase";
import ButtonGroup from '@material-ui/core/ButtonGroup';
import Button from '@material-ui/core/Button';
import Paper from '@material-ui/core/Paper';
import AddIcon from '@material-ui/icons/Add';
import RemoveIcon from '@material-ui/icons/Remove';
import { LabWarnButton } from "@/components/inputs/LabButton";
import LabButton from "@/components/inputs/LabButton";

const useStyles = makeStyles(() => ({
  root: {
    width: "100%",
    maxHeight: "700px",
  },
  header: {
    backgroundColor: CustomTheme.palette.blue.main,
    color: "#FFF",
  },
  cardInstrumen: {
    ".MuiCardContent-root": {
      padding: 8,
    },
  },
  image: {
    width: 84,
    height: 84,
    paddingTop: 8,
    paddingBottom: 8,
    marginLeft: 16
  },
  img: {
    margin: "auto",
    display: "block",
    maxWidth: "100%",
    maxHeight: "100%",
  },
  button: {
    paddingLeft: 32
  }
}));

function LabCard({
  children,
  title,
  margin = 8,
  action = null,
  noMargin = false,
  noPadding = false,
  ...props
}) {
  const classes = useStyles();
  margin = noMargin === true ? 0 : margin;
  return (
    <Card
      className={classes.root}
      elevation={3}
      style={{ marginTop: margin }}
      {...props}
    >
      <CardHeader
        title={title}
        className={classes.header}
        titleTypographyProps={{ variant: "h3", component: "h3" }}
        action={action}
      />
      <Box p={noPadding == true ? 0 : 2} pb={noPadding == true ? 0 : 3}>
        {children}
      </Box>
    </Card>
  );
}

function LabCardAlatInstrumen({
  title,
  subtitle,
  jenis,
  image,
  button,
  onButtonClick,
}) {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <Card
        elevation={0}
        variant="outlined"
        style={{ border: "1px solid #2196F3" }}
      >
        <Box
          css={{
            float: "right",
            borderRadius: "0px 8px",
            outlineOffset: "1px",
            outline: "1px solid #2196F3",
            padding: "2px 12px",
            paddingTop: -2,
          }}
        >
          <div style={{ marginTop: "-4px" }}>
            <Typography variant="subtitle2" component="span" color="primary">
              <b>{jenis}</b>
            </Typography>
          </div>
        </Box>
        <Box mx={1} my={2} pt={1.5}>
          <Grid container justify="center" alignItems="center">
            <Grid
              item
              xs={5}
              style={{ position: "relative", width: 84, height: 63 }}
            >
              <Image src={image} alt={title} layout="fill" objectFit="cover" />
            </Grid>
            <Grid item xs={7}>
              <Typography variant="h4" component="p">
                {title}
              </Typography>
              <Typography
                variant="subtitle2"
                color="textSecondary"
                component="p"
              >
                {subtitle}
              </Typography>
              <LabButton
                size="small"
                style={{ marginTop: 4, fontSize: 11 }}
                onClick={onButtonClick}
              >
                {button}
              </LabButton>
            </Grid>
          </Grid>
        </Box>
      </Card>
    </div>
  );
}

function LabCardRequestAlat({
  title,
  subtitle,
  jenis,
  image,
  onButtonClick,
  margin = 16
}) {
  const classes = useStyles();
  const [count, setCount] = React.useState(1);

  return (
    <div className={classes.root}>
      <Card elevation={0} variant="outlined" style={{ marginBottom: margin }}>
        <CardHeader
          title={jenis}
          className={classes.header}
          titleTypographyProps={{ variant: "h4", component: "h4" }}
        />

        <Grid container xs={12} direction="row" justify="space-around" alignItems="center">
          <Grid item xs={3} justify="center">
            <ButtonBase className={classes.img}>
              <img
                className={classes.image}
                alt="complex"
                src={image}
              />
            </ButtonBase>
          </Grid>

          <Grid
            container
            xs={3}
            direction="column"
            alignItems="center"
            spacing={2}
          >
            <Typography variant="h4" component="p">
              {title}
            </Typography>
            <Typography variant="subtitle2" color="textSecondary" component="p">
              {subtitle}
            </Typography>
          </Grid>

          <Grid item xs={3}>
            <ButtonGroup>
              <LabButton
                aria-label="reduce"
                onClick={() => {
                  setCount(Math.max(count - 1, 1));
                }}
              >
                <RemoveIcon style={{ fontSize: 11 }} />
              </LabButton>
              <LabButton>
                <Typography align="center" >
                  {count}
                </Typography>
              </LabButton>
              <LabButton
                aria-label="increase"
                onClick={() => {
                  setCount(count + 1);
                }}
              >
                <AddIcon style={{ fontSize: 11 }} />
              </LabButton>
            </ButtonGroup>
          </Grid>

          <Grid item xs={3} className={classes.button}>
            <LabWarnButton size="small" onClick={onButtonClick} >Hapus</LabWarnButton>
          </Grid>
        </Grid>
      </Card>
    </div>
  );
}
export default LabCard;
export { LabCard, LabCardAlatInstrumen, LabCardRequestAlat };
