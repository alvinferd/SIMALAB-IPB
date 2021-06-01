import React from "react";
import { Box, Grid, ButtonGroup, Button, Typography } from "@material-ui/core";
import SimalabLayout from "@/layouts/default";

function Index() {
  // return <h1>Hello!</h1>;
  return (
    <>
      <Grid container>
        <Grid item>
          <Typography variant="h3" component="h2">
            Pilih Departemen
          </Typography>
          <Box mt={1.5}>
            <ButtonGroup
              variant="contained"
              color="primary"
              aria-label="contained primary button group"
            >
              <Button>Biologi</Button>
              <Button>Kimia</Button>
              <Button>Biokimia</Button>
            </ButtonGroup>
          </Box>
        </Grid>
        <Grid item style={{ marginLeft: 52 }}>
          <Typography variant="h3" component="h2">
            Pilih lab
          </Typography>
        </Grid>
      </Grid>
    </>
  );
}
Index.Layout = SimalabLayout;
export default Index;
