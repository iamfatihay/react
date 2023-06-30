import React from 'react';
import { Typography, Container } from '@mui/material';
import { styled } from '@mui/system';

const FooterContainer = styled('footer')(({ theme }) => ({
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(2),
    marginTop: 'auto',
    position: 'fixed',
    bottom: 0,
    width: '100%',
    boxShadow: '0px -4px 6px -1px rgba(0, 0, 0, 0.1)',
    borderTop: '1px solid lightgray',
}));

const Footer = () => {
    return (
        <FooterContainer >
            <Container maxWidth="sm">
                <Typography variant="body1" align="center" color="textSecondary">
                    Developed by Fatih Ay
                </Typography>
                <Typography variant="body1" align="center" color="textSecondary">
                    © {new Date().getFullYear()} My Blog App. All rights reserved.
                </Typography>
            </Container>
        </FooterContainer>
    );
};

export default Footer;
