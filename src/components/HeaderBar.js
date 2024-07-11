import React from 'react';
import { Navbar, Breadcrumb, Container } from 'react-bootstrap';

const HeaderBar = ({ subject }) => {
  return (
    <Navbar bg="light" variant="light" className="mb-4 mt-4" >
      <div style={{padding: '0.5rem 1rem', fontSize: '1.25rem'}}>
        <Breadcrumb className="mb-0">
          <Breadcrumb.Item href="/home">Home</Breadcrumb.Item>
          <Breadcrumb.Item active>
            {subject.subname} ↔ {subject.subtitle}
          </Breadcrumb.Item>
        </Breadcrumb>
      </div>
    </Navbar>
  );
};

export default HeaderBar;
