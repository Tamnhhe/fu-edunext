import React from 'react';
import { Navbar, Breadcrumb, Container } from 'react-bootstrap';

const HeaderBar = ({ subject }) => {
  return (
    <Navbar bg="light" variant="light" className="mb-4">
      <Container>
        <Breadcrumb className="mb-0">
          <Breadcrumb.Item href="/home">Home</Breadcrumb.Item>
          <Breadcrumb.Item active>
            {subject.subname} ↔ {subject.subtitle}
          </Breadcrumb.Item>
        </Breadcrumb>
      </Container>
    </Navbar>
  );
};

export default HeaderBar;
