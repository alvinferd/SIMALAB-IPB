import { useRef, React } from "react"
import { useForm, Controller } from "react-hook-form";
import { Grid, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

import LabFormField from "@/components/inputs/LabFormField";
import LabButton from "@/components/inputs/LabButton";
import Image from "next/image";

const useStyles = makeStyles((theme) => ({
    dimensi: {
        width: "100%",
        height: "100vh",
    },
    item: {
        marginBottom: theme.spacing(2)
    },
    field: {
        marginTop: theme.spacing(-1)
    },
    submit: {
        width: "100%",
        marginTop: theme.spacing(2)
    },
    bg: {
        height: 121,
        width: "100%",
        position: "absolute",
        bottom: 0,
        background: "url(/images/VectorsBG.svg)",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover"
    }
}));

function Login() {
    const { control, handleSubmit } = useForm();
    const onSubmit = (data) => console.log(data);
    const classes = useStyles();

    return (
        <Grid container spacing={3} className={classes.dimensi} justify="center" alignItems="center" >
            <Grid item xs={2}>
                <Grid container justify="center" alignItems="center" className={classes.item}>
                    <Grid className={classes.item}>
                        <Image
                            src="/images/LogoIPB.png"
                            alt="Logo IPB University"
                            width={96}
                            height={96}
                        />
                    </Grid>
                    <Typography variant="h4">
                        <b>SIMALAB IPB</b>
                    </Typography>
                    <Typography variant="body1" className={classes.item}>
                        Manajemen Laboratorium IPB University
                    </Typography>
                </Grid>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <Grid className={classes.field}>
                        <Controller
                            name="email"
                            control={control}
                            defaultValue=""
                            render={({ field: { onChange, value } }) => (
                                <LabFormField
                                    type="text"
                                    placeholder="email"
                                    value={value}
                                    onChange={onChange}
                                />
                            )}
                        />
                    </Grid>
                    <Grid className={classes.field}>
                        <Controller
                            name="password"
                            control={control}
                            defaultValue=""
                            render={({ field: { onChange, value } }) => (
                                <LabFormField
                                    type="password"
                                    placeholder="password"
                                    value={value}
                                    onChange={onChange}
                                />
                            )}
                        />
                    </Grid>
                    <LabButton type="submit" className={classes.submit}>
                        Submit
                    </LabButton>
                </form>
            </Grid>
            <Grid container className={classes.bg} direction="column" justify="flex-end" alignItems="center"></Grid>
        </Grid >
    )
}

export default Login;