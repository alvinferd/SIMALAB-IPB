import React from "react"
import { useForm, Controller } from "react-hook-form";
import { Grid, Typography, Box, Button } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

import LabDropZone from "@/components/surfaces/LabDropZone";
import LabFormField from "@/components/inputs/LabFormField";
import LabButton from "@/components/inputs/LabButton";

const useStyles = makeStyles((theme) => ({
    textField: {
        marginBottom: theme.spacing(2),
    },
}));

function LabRequestPeminjaman({ type }) {
    const classes = useStyles();
    const { control, handleSubmit } = useForm();
    const onSubmit = (data) => console.log(data);

    return (
        <>
            <form onSubmit={handleSubmit(onSubmit)}>
                <Grid container spacing={2}>
                    <Grid item xs={7}>
                        <Grid>
                            <Controller
                                name="Judul Penelitian"
                                control={control}
                                defaultValue=""
                                render={({ field: { onChange, value } }) => (
                                    <LabFormField
                                        title="Judul Penelitian"
                                        type="text"
                                        value={value}
                                        onChange={onChange}
                                    />
                                )}
                            />
                        </Grid>
                        <Grid>
                            <Controller
                                name="Dosen Pembimbing"
                                control={control}
                                defaultValue=""
                                render={({ field: { onChange, value } }) => (
                                    <LabFormField
                                        title="Dosen Pembimbing"
                                        type="text"
                                        value={value}
                                        onChange={onChange}
                                    />
                                )}
                            />
                        </Grid>
                    </Grid>
                    <Grid item xs={5}>
                        <Grid>
                            <Controller
                                name="Nomor Telepon"
                                control={control}
                                defaultValue=""
                                render={({ field: { onChange, value } }) => (
                                    <LabFormField
                                        title="Nomor Telepon"
                                        type="text"
                                        placeholder="xxxx-xxxx-xxxx"
                                        value={value}
                                        onChange={onChange}
                                    />
                                )}
                            />
                        </Grid>
                        <Grid>
                            <Controller
                                name="Laboratorium"
                                control={control}
                                defaultValue=""
                                render={({ field: { onChange, value } }) => (
                                    <LabFormField
                                        title="Laboratorium"
                                        type="text"
                                        value={value}
                                        onChange={onChange}
                                    />
                                )}
                            />
                        </Grid>
                    </Grid>
                </Grid>
                <Box className={classes.textField}>
                    <Typography variant="h4" component="div">
                        Unduh berkas form
                    </Typography>
                    <Typography component="div" color="textSecondary">
                        Anda belum mengupload apapun
                    </Typography>
                </Box>
                <LabDropZone
                    title="Upload berkas form"
                    subtitle="Max upload 3 file"
                    type="submit"
                    onSave={onSubmit}
                />
            </form>
        </>
    );
}

export default LabRequestPeminjaman;
