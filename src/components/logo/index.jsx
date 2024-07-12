import Logo from './LogoMain';
import './index.css';
import Box from '@mui/material/Box';

// eslint-disable-next-line no-empty-pattern
const LogoSection = ({}) => {
  return (
    <Box className="logo-container">
      <Logo className="logo" />
    </Box>
  );
};

export default LogoSection;
