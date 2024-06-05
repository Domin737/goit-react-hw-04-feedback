import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const SectionWrapper = styled.section`
  margin: 20px 0;
  width: 100%;
  max-width: 600px;
  text-align: center;
`;

const Title = styled.h2`
  margin-bottom: 10px;
  font-size: 24px;
  color: #333;
`;

const Section = ({ title, children }) => {
  return (
    <SectionWrapper>
      <Title>{title}</Title>
      {children}
    </SectionWrapper>
  );
};

Section.propTypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
};

export default Section;
