import { Box, Grid, Typography, ButtonGroup, Button } from "@material-ui/core";

import ChevronLeftIcon from "@material-ui/icons/ChevronLeft";
import ChevronRightIcon from "@material-ui/icons/ChevronRight";

function LabCardPagination({ now = 1, total = 1 }) {
  return (
    <Grid
      container
      justify="center"
      alignItems="center"
      style={{ marginTop: 20 }}
    >
      <Grid item>
        <Typography variant="body1" color="textSecondary">
          Menampilkan {now} dari {total} halaman
        </Typography>
      </Grid>
      <Box flexGrow={1} />
      <Grid item>
        <ButtonGroup
          size="small"
          color="primary"
          aria-label="outlined primary button group"
        >
          <Button style={{ padding: 0 }}>
            <Typography variant="subtitle2">
              <ChevronLeftIcon />
            </Typography>
          </Button>
          <Button style={{ padding: 0 }} color="primary">
            <Typography variant="subtitle2">{now}</Typography>
          </Button>
          <Button style={{ padding: 0 }}>
            <Typography variant="subtitle2">
              <ChevronRightIcon />
            </Typography>
          </Button>
        </ButtonGroup>
      </Grid>
    </Grid>
  );
}

export default LabCardPagination;
