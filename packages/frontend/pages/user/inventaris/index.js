import React from "react";
import { useEffect, useState } from "react";
import { Box, Grid, Typography } from "@material-ui/core";

import { useSelector } from "react-redux";
import { dispatch } from "@/utils/redux/store";
import { inventarisGet } from "@/utils/redux/slice/inventaris";
import { labGet } from "@/utils/redux/slice/lab";

import SimalabLayout from "@/layouts/default";
import LabCariInventaris from "@/sections/LabCariInventaris";
import LabPopper from "@/components/utils/LabPopper";
import { LabListItemLink } from "@/components/data_display/LabListItem";
import { LabButton, LabButtonDropdown } from "@/components/inputs/LabButton";
import { ListLabDummy } from "@/utils/dummy/ListItemsInventaris";

const listDepartemen = ["Biologi", "Kimia", "Biokimia"];

function UserInventarisPage() {
    const [departemenState, setDepartemenState] = useState(0);
    useEffect(() => {
        dispatch(inventarisGet());
        dispatch(labGet());
      }, []);
    
      const dataInventaris = useSelector((state) =>
        state.inventaris.data.map((item) => ({
          ...item,
        }))
      );
    
      const dataLab = useSelector((state) =>
        state.lab.data.map((item) => ({
          ruangan: item.ruangan,
          id: item.id_labor,
        }))
      );

  const [openPopper, setOpenPopper] = React.useState(false);
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [selectedListItem, setSelectedListItem] = React.useState(null);

  const handleClickPilihLab = (event) => {
    setAnchorEl(event.currentTarget);
    setOpenPopper((prev) => !prev);
  };

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
                <Grid item style={{ marginLeft: 140 }}>
                    <Typography variant="h3" component="h2">
                        Pilih Lab
                    </Typography>
                    <LabButtonDropdown
                        onClick={handleClickPilihLab}
                        style={{ marginTop: 12 }}
                    >
                        {selectedListItem !== null
                            ? dataLab[selectedListItem].ruangan
                            : "Pilih Lab"}
                    </LabButtonDropdown>
                    <Box>
                        <LabPopper anchorEl={anchorEl} open={openPopper}>
                            {ListLabDummy.map((item, index) => {
                                return (
                                    <LabListItemLink
                                        text={item}
                                        onClick={() => {
                                            setSelectedListItem(index);
                                            setOpenPopper(false);
                                        }}
                                        key={index}
                                        href="#"
                                        selected={selectedListItem === index ? true : false}
                                    />
                                );
                            })}
                        </LabPopper>
                    </Box>
                </Grid>
            <Grid container spacing={3} style={{ marginTop: 12 }}>
                <Grid>
                    <LabCariInventaris 
                    items={dataInventaris}
                    id_lab={selectedListItem === null ? null : dataLab[selectedListItem].id} 
                    />
                </Grid>
            </Grid>
        </Grid>
    </>
    )
}

UserInventarisPage.title = "Inventaris";
UserInventarisPage.Layout = SimalabLayout;
export default UserInventarisPage;
