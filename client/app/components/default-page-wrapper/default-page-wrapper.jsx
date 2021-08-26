import React from 'react';

import {
  Row, Column, Container,
} from '@components';

const DefaultPageWrapper = ({ children }) => (
//   <Container>
  <Row spacing="m">
    <Column size="2">
      {/* <Component /> */}
    </Column>
    <Column size="2">
      {children}
    </Column>
  </Row>
//   </Container>
);

export default DefaultPageWrapper;
