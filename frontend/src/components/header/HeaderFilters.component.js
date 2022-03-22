import { LinkContainer } from 'react-router-bootstrap';
import { NavDropdown } from 'react-bootstrap';
import React from 'react';

const HeaderFilters = () => {
  return (
    <NavDropdown title="Филтри" id="collasible-nav-dropdown">
        {Array(5).fill(0).map((filter, index) => (
            <LinkContainer key={'filter' + index} to={`/filters/${index + 1}`}>
                <NavDropdown.Item >Справка {index + 1}</NavDropdown.Item>
            </LinkContainer>
        ))}
    </NavDropdown>
  );
};

export default HeaderFilters;
