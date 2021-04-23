import React from 'react';
import{
    Navbar,
    Container,
    NavbarBrand
} from 'reactstrap';

export const GameHeader = () => {
    return (
        <Navbar color="dark" dark>
            <Container>
                <NavbarBrand href="/">
                    Minesweeper
                </NavbarBrand>
            </Container>
        </Navbar>
    )
}
