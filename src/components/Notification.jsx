import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const Message = styled.p`
  font-size: 18px;
  color: #ff0000;
`;

const Notification = ({ message }) => <Message>{message}</Message>;

Notification.propTypes = {
  message: PropTypes.string.isRequired,
};

export default Notification;
