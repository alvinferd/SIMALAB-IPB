import { useEffect } from "react";
import { useRouter } from "next/router";
import Image from "next/image";
import { useForm, Controller } from "react-hook-form";

import { Grid, Typography, ThemeProvider } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

import CustomTheme from "@/themes/default";
import LabFormField from "@/components/inputs/LabFormField";
import LabButton from "@/components/inputs/LabButton";
import LabLoading from "@/components/feedback/LabLoading";

import { useSelector } from "react-redux";
import { dispatch } from "@/utils/redux/store";
import { userLogin } from "@/utils/redux/slice/user";

const useStyles = makeStyles((theme) => ({
  dimensi: {
    width: "100%",
    height: "100vh",
  },
  item: {
    marginBottom: theme.spacing(2),
  },
  field: {
    marginTop: theme.spacing(-1),
  },
  submit: {
    width: "100%",
    marginTop: theme.spacing(2),
  },
  bg: {
    height: 121,
    width: "100%",
    position: "absolute",
    bottom: 0,
    background: "url(/images/VectorsBG.svg)",
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
  },
}));

function Login() {
  const classes = useStyles();
  const router = useRouter();
  const { control, handleSubmit } = useForm();

  const authenticated = useSelector((state) => state.user.authenticated);
  const isUserAdmin = useSelector((state) => state.user.current.is_adminLab);
  const isUserMahasiswa = useSelector(
    (state) => state.user.current.is_mahasiswa
  );
  const loadingState = useSelector((state) => state.loading);

  useEffect(() => {
    if (authenticated) {
      // console.log("admin:", isUserAdmin, "mahasiswa:", isUserMahasiswa);
      if (isUserAdmin) router.replace("/admin");
      if (isUserMahasiswa) router.replace("/user");
    }
  }, [authenticated, isUserAdmin, isUserMahasiswa]);

  const onSubmit = (data) => {
    // console.log(data);
    dispatch(userLogin(data));
  };

  return (
    <ThemeProvider theme={CustomTheme}>
      <LabLoading open={loadingState} />
      <Grid
        container
        spacing={3}
        className={classes.dimensi}
        justify="center"
        alignItems="center"
      >
        <Grid item xs={4}>
          <Grid
            container
            justify="center"
            alignItems="center"
            direction="column"
            className={classes.item}
          >
            <Grid className={classes.item} style={{ marginRight: 12 }}>
              <Image
                src="/images/LogoIPB.png"
                alt="Logo IPB University"
                width={72}
                height={72}
              />
            </Grid>
            <Typography variant="h1">
              <b>SIMALAB IPB</b>
            </Typography>
            <Typography variant="body1" className={classes.item}>
              Manajemen Laboratorium IPB University
            </Typography>
          </Grid>
          <form onSubmit={handleSubmit(onSubmit)}>
            <Grid className={classes.field}>
              <Controller
                name="username"
                control={control}
                defaultValue=""
                render={({ field: { onChange, value } }) => (
                  <LabFormField
                    title="User Name"
                    type="text"
                    placeholder="User Name"
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
                    title="Password"
                    type="password"
                    placeholder="Password"
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
        <Grid
          container
          className={classes.bg}
          direction="column"
          justify="flex-end"
          alignItems="center"
        ></Grid>
      </Grid>
    </ThemeProvider>
  );
}

export default Login;
