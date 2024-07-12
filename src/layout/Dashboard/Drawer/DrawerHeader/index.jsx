import PropTypes from 'prop-types';

import Logo from 'components/logo';

// ==============================|| DRAWER HEADER ||============================== //

// eslint-disable-next-line no-empty-pattern
export default function DrawerHeader({}) {
  return <Logo />;
}

DrawerHeader.propTypes = { open: PropTypes.bool };
