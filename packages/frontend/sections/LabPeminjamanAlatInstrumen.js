import React, { useState } from 'react';
import { Grid, Typography, Box } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

import LabFormField from "@/components/inputs/LabFormField";
import LabButton from "@/components/inputs/LabButton";
import GridList from '@material-ui/core/GridList';
import Divider from '@material-ui/core/Divider';
import { LabCardAlatInstrumen, LabCardRequestAlat } from "@/components/surfaces/LabCard";

const useStyles = makeStyles((theme) => ({
    textField: {
        width: "100%",
    },
    container: {
        display: 'grid',
        gridTemplateColumns: 'repeat(2, 1fr)',
        gridGap: theme.spacing(2),
    },
    gridList: {
        width: 'auto',
        height: 220,
    },
    section1: {
        marginBottom: theme.spacing(3.6),
    },
    section2: {
        marginBottom: theme.spacing(0),
    },
}));

const LabPeminjamanAlat = ({ items }) => {
    const classes = useStyles();
    const [selectedInventaris, setSelectedInventaris] = React.useState(null);

    const handleButtonTambah = (_event, index) => {
        setSelectedInventaris(items[index]);
    };

    return (
        <Box className={classes.textField}>
            <Box className={classes.section1}>
                <Grid item xs={12}>
                    <LabFormField placeholder="Search" />
                </Grid>
                <Box mt={3}>
                    <Typography variant="h4" component="div">
                        Seluruh Alat
                    </Typography>
                </Box>
                <Grid container xs={12} spacing={1} style={{ marginTop: 16 }}>
                    {items.map((item, index) => {
                        return (
                            <Grid item xs={6}>
                                <LabCardAlatInstrumen
                                    key={item.title}
                                    title={item.title}
                                    subtitle={item.subtitle}
                                    image={item.image}
                                    jenis={item.jenis}
                                    button="Tambah"
                                    onButtonClick={(event) =>
                                        handleButtonTambah(event, index)
                                    }
                                />
                            </Grid>
                        );
                    })}
                </Grid>
                <Box mt={3}>
                    <Typography variant="h4" component="div">
                        Alat yang kamu pinjam
                    </Typography>
                </Box>
                <Box mt={2}>
                    <GridList cellHeight={180} className={classes.gridList}>
                        {selectedInventaris === null ? (
                            <Typography>Belum ada alat yang dipilih.</Typography>
                        ) : (
                            <LabCardRequestAlat
                                title={selectedInventaris.title}
                                subtitle={selectedInventaris.subtitle}
                                jenis={selectedInventaris.jenis}
                                image={selectedInventaris.image}
                            />
                        )}
                    </GridList>
                </Box>
            </Box>
            <Divider variant="middle" />
            <Box className={classes.section2}>
                <Box mt={2}>
                    <Grid container justify="space-between" alignItems="center">
                        <Grid item>
                            <Typography variant="h4" component="div">
                                Total Item : 2
                            </Typography>
                        </Grid>
                        <Grid item>
                            <LabButton size="medium" style={{ marginTop: 4 }}>
                                Simpan
                            </LabButton>
                        </Grid>
                    </Grid>
                </Box>
            </Box>
        </Box >
    )
}

export default LabPeminjamanAlat;