import React, { useState } from 'react';
import {
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  Button,
  TextField,
  InputAdornment,
  Checkbox,
  Typography,
  Box,
  Grid,
  Autocomplete
} from '@mui/material';

import './NewCodeModal.css';

const options = ['Bedrag', 'Percentage'];

export default function NewCodeModal({ open, handleClose }) {
  const codeValues = {
    title: '',
    code: '',
    description: '',
    discountAmountBefore: '',
    discountAmountAfter: '',
    discountPercentage: '',
    startDate: '',
    endDate: '',
    maxUsage: ''
  };

  const [selectedOption, setSelectedOption] = useState('');
  const [maxUsageCheck, setMaxUsageCheck] = useState(false);
  const [codeValue, setCodeValue] = useState(codeValues);

  const autocompleteChange = (event, value) => {
    setSelectedOption(value);
  };

  const checkboxChange = (event) => {
    setMaxUsageCheck(event.target.checked);
  };

  const inputChange = (event) => {
    const { name, value } = event.target;
    setCodeValue({
      ...codeValue,
      [name]: value
    });
  };

  const save = () => {
    console.log('Code:', codeValue);
    setCodeValue(codeValues);
    setSelectedOption('');
    setMaxUsageCheck(false);
    handleClose();
  };

  return (
    <Dialog open={open} onClose={handleClose} maxWidth={false}>
      <DialogTitle className="modal-title">Kortingscode toevoegen</DialogTitle>
      <DialogContent>
        <Grid className="content-modal">

          <Grid className="information">
            <Box className="info-title">
              <i className="bi bi-info-circle-fill info-icon"></i>
              <Typography className="info-text">Informatie</Typography>
            </Box>

            <Box className="divider-light"></Box>

            <Box className="input-box">
              <Typography className="input-title">Titel</Typography>
              <TextField
                className="input-text"
                name="title"
                value={codeValue.title}
                onChange={inputChange}
              />
            </Box>
            <Box className="code-box">
              <Typography className="code-title">Code</Typography>
              <TextField
                className="code-text"
                name="code"
                value={codeValue.code}
                onChange={inputChange}
                InputProps={{
                  endAdornment: (
                    <InputAdornment position="end">
                      <i className="bi bi-arrow-clockwise reload-icon"></i>
                    </InputAdornment>
                  )
                }}
              />
            </Box>
            <Box className="description-box">
              <Typography className="description-title">Omschrijving</Typography>
              <textarea
                className="description-text"
                name="description"
                value={codeValue.description}
                onChange={inputChange}
                placeholder={'Omschrijf hier de kortingsactie.\nWaar is de korting voor bedoeld?'}
                rows={10}
              />
            </Box>
          </Grid>

          <Grid className="settings">
            <Box className="settings-title">
              <i className="bi bi-sliders settings-icon"></i>
              <Typography className="settings-text">Informatie</Typography>
            </Box>

            <Box className="divider-light"></Box>

            <Grid className="select-grid">
              <Box className="select-box">
                <Typography className="select-text">Type korting</Typography>
                <Autocomplete
                  className="select-input"
                  options={options}
                  onChange={autocompleteChange}
                  renderInput={(params) => <TextField {...params} label="Maak een keuze" />}
                />
              </Box>
              <Box className="divider-medium"></Box>
              {selectedOption === 'Bedrag' && (
                <Box className="amount-box">
                  <Typography className="amount-text">Kortingsbedrag</Typography>
                  <Box className="amount-input-box">
                    <TextField
                      className="amount-before"
                      name="discountAmountBefore"
                      value={codeValue.discountAmountBefore}
                      onChange={inputChange}
                    />
                    <Typography>,</Typography>
                    <TextField
                      className="amount-after"
                      name="discountAmountAfter"
                      value={codeValue.discountAmountAfter}
                      onChange={inputChange}
                    />
                  </Box>
                </Box>
              )}
              {selectedOption === 'Percentage' && (
                <Box className="percentage-box">
                  <Typography className="percentage-text">Kortingspercentage</Typography>
                  <TextField
                    className="percentage-input"
                    name="discountPercentage"
                    value={codeValue.discountPercentage}
                    onChange={inputChange}
                  />
                </Box>
              )}
            </Grid>

            <Grid className="date-grid">
              <Box className="start-date">
                <Typography className="start-title">Geldig van datum</Typography>
                <TextField
                  className="date-start-text"
                  name="startDate"
                  value={codeValue.startDate}
                  onChange={inputChange}
                  label="dd-mm-yyyy"
                  InputProps={{
                    endAdornment: (
                      <InputAdornment position="end">
                        <i className="bi bi-calendar calender-icon"></i>
                      </InputAdornment>
                    )
                  }}
                />
              </Box>
              <Box className="end-row">
                <Box className="end-date">
                  <Typography className="end-title">Geldig tot datum</Typography>
                  <Typography className="optional">(optioneel)</Typography>
                </Box>
                <TextField
                  className="date-end-text"
                  name="endDate"
                  value={codeValue.endDate}
                  onChange={inputChange}
                  label="dd-mm-yyyy"
                  InputProps={{
                    endAdornment: (
                      <InputAdornment position="end">
                        <i className="bi bi-calendar calender-icon"></i>
                      </InputAdornment>
                    )
                  }}
                />
              </Box>
            </Grid>

            <Grid className="max-grid">
              <Box className="check">
                <Typography className="max-title">Maximumgebruik</Typography>
                <Checkbox
                  className="checkbox-box"
                  onChange={checkboxChange}
                  checked={maxUsageCheck}
                />
              </Box>
              {maxUsageCheck && (
                <Box className="max-uses">
                  <Typography className="uses-title">Aantal keer te gebruiken</Typography>
                  <TextField
                    className="uses-text"
                    name="maxUsage"
                    value={codeValue.maxUsage}
                    onChange={inputChange}
                  />
                </Box>
              )}
            </Grid>
          </Grid>
        </Grid>
      </DialogContent>
      <Box className="divider-end"></Box>
      <DialogActions className="btn-actions">
        <Button onClick={handleClose} className="btn-cancel">Annuleren</Button>
        <Button onClick={save} className="btn-save">Opslaan</Button>
      </DialogActions>
    </Dialog>
  );
}
