import { useEffect, useState } from "react";
import { Box, Grid, Typography } from "@material-ui/core";

import SimalabLayout from "@/layouts/default";
import LabCariInventaris from "@/sections/LabCariInventaris";
import { LabButton, LabButtonDropdown } from "@/components/inputs/LabButton";
import { ListCariItemDummy } from "@/utils/dummy/ListItemsInventaris";

const listDepartemen = ["Biologi", "Kimia", "Biokimia"];

function UserInventarisPage() {
    const [departemenState, setDepartemenState] = useState(0);
    useEffect(() => {
        console.log("Departemen State:", departemenState);
    }, [departemenState]);

    return (
        <>
            <Grid container>
                <Grid item>
                    <Typography variant="h3" component="h2">
                        Pilih Departemen
                    </Typography>
                    <Box mt={1.5}>
                        {listDepartemen.map((text, index) => {
                            return (
                                <Box mr={1} component="span">
                                    <LabButton
                                        key={index}
                                        variant={
                                            departemenState === index ? "contained" : "outlined"
                                        }
                                        color="primary"
                                        onClick={() => {
                                            setDepartemenState(index);
                                        }}
                                    >
                                        {text}
                                    </LabButton>
                                </Box>
                            );
                        })}
                    </Box>
                </Grid>

                <Grid item style={{ marginLeft: 44 }}>
                    <Typography variant="h3" component="h2">
                        Pilih lab
                    </Typography>
                    <Box mt={1.5}>
                        <LabButtonDropdown>Silahkan pilih lab</LabButtonDropdown>
                    </Box>
                </Grid>
            </Grid>

            <Grid container spacing={3} style={{ marginTop: 12 }}>
                <Grid>
                    <LabCariInventaris items={ListCariItemDummy} />
                </Grid>
            </Grid>
        </>
    )
}

UserInventarisPage.title = "Inventaris";
UserInventarisPage.Layout = SimalabLayout;
export default UserInventarisPage;