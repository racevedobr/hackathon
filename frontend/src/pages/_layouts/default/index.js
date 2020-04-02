import React from 'react';
import PropTypes from 'prop-types';

import { Wrapper } from './styles';

export default function DefultLayout({ children }) {
  return <Wrapper>{children}</Wrapper>;
}

DefultLayout.propTypes = {
  children: PropTypes.element.isRequired,
};
