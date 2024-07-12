import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';

import './index.css';
import { Autocomplete } from '@mui/lab';
import { Checkbox, TextField } from '@mui/material';
import { Button } from '@mui/base';
import NewCodeModal from './NewCodeModal';
import { useState } from 'react';

const options = ['Titel', 'Datum'];

export default function DashboardDefault() {

  const [modalOpen, setModalOpen] = useState(false);

  const openModal = () => {
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
  };

  return (
    <Grid container rowSpacing={4.5} columnSpacing={2.75} className="container">

      <Grid item xs={12}>
        <Grid>
          <Box className="title-box">
            <i className="bi bi-cart-fill cart-icon"></i>
            <Typography className="box-text">Shop</Typography>
          </Box>
        </Grid>

        <Box className="divider"></Box>

        <Grid className="sub-menu">
          <Typography className="text">Productgroepen</Typography>
          <Typography className="text">Abonnementen</Typography>
          <Typography className="text">Rittenkaarten</Typography>
          <Typography className="text">Artikelen</Typography>
          <Typography className="text-selected">Kortingscodes</Typography>
        </Grid>
      </Grid>

      <Grid item xs={12}>

        <Grid className="content">

          <Typography className="content-title">Kortingscodes overzicht</Typography>
          <Typography className="content-text">In deze module kun je kortingscodes maken en zelf kiezen waar (potentiële) leden ze voor kunnen gebruiken.</Typography>
          <Typography className="content-text">Bijvoorbeeld een kortingscode voor nieuwe leden die hun proefleskosten kunnen terugverdienen.</Typography>

          <Box className="divider-light"></Box>

          <Grid className="search-add">
            <Box className="search-input">
              <Autocomplete
                className="combo-box"
                options={options}
                renderInput={(params) => <TextField {...params} label="Sorteer op..." />}
              />
              <Box className="search">
                <TextField
                  className="search-box"
                  label="Zoeken op trefwoord"
                >
                </TextField>
                <Button className="search-button">
                  <i className="bi bi-search search-button-icon"></i>
                  <Typography className="search-button-text">Zoeken</Typography>
                </Button>
              </Box>
              <Box className="checkbox">
                <Checkbox defaultChecked className="checkbox-box" />
                <Typography className="checkbox-text">Toon ook inactieve kortingscodes</Typography>
              </Box>
            </Box>
            <Button className="new-code" onClick={openModal}>
              <i className="bi bi-plus add-icon"></i>
              <Typography className="add-text">Nieuwe kortingscode</Typography>
            </Button>
            <NewCodeModal open={modalOpen} handleClose={closeModal} />
          </Grid>

          <Grid className="codes">
            <Box className="code">
              <Box className="top-part">
                <Button className="code-button">
                  <Typography className="code-title">VRAAGROY</Typography>
                </Button>
                <Box className="date">
                  <Button className="info-label">
                    <Typography className="info-text">ACTIEF</Typography>
                  </Button>
                  <Typography className="untill">tot</Typography>
                  <Typography className="end-date">21-12-2024</Typography>
                </Box>
              </Box>
              <Box className="bottom-part">
                <Box className="text-part">
                  <Typography className="code-description">Roy trakteert</Typography>
                  <Typography className="code-type">€20 Korting</Typography>
                </Box>
                <i className="bi bi-trash-fill trash-icon"></i>
              </Box>
            </Box>

          </Grid>

        </Grid>

      </Grid>

    </Grid>
  );
}
