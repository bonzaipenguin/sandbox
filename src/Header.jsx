import React from 'react';
import { Row, Col } from 'react-bootstrap';
import './styles/global.scss';

const Header = () => {
  return (
    <Row className="header">
      <Col sm={12}>
        <h1>Proof of concept</h1>
      </Col>
    </Row>
  );
};

export default Header;