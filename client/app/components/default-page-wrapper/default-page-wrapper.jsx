import React from 'react';

import {
  Row,
  Column,
  Container,
  Header,
} from '@components';

const DefaultPageWrapper = ({ children }) => (
  <Container>
    <Header />
    {/* <Nav /> */}
    {/* <Main>
      <div>{children}</div>
    </Main> */}
    {/* <Footer /> */}
  </Container>
);

export default DefaultPageWrapper;
