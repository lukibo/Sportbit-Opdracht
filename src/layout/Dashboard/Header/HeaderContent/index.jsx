// material-ui
import Box from '@mui/material/Box';
import 'bootstrap-icons/font/bootstrap-icons.css';
import Typography from '@mui/material/Typography';

// css import
import './index.css';

// ==============================|| HEADER - CONTENT ||============================== //

export default function HeaderContent() {
  return (
    <Box className="header-content">
      <Box className="support-box">
        <i className="bi bi-person-fill person-icon"></i>
        <Typography className="box-text">Sportbit Support</Typography>
      </Box>
      <Box className="support-box">
        <i className="bi bi-question-circle-fill help-icon"></i>
        <Typography className="box-text">Helpcenter</Typography>
      </Box>
      <i className="bi bi-gift-fill gift-icon"></i>
      <i className="bi bi-megaphone-fill mega-icon"></i>
    </Box>
  );
}
