// h_mui_konsta/components/EjemploKonsta.jsx
import React from 'react';
import {Page, Navbar, Block, BlockTitle, List, ListGroup, ListItem, App} from 'konsta/react';
import {Button} from "@mui/material";
export default function EjemploKonsta() {
    return (
        <>
            <App theme="material">
                <Page>
                    <Navbar
                        title="List"
                    />
                    <BlockTitle>Links, Header, Footer</BlockTitle>
                    <List strongIos outlineIos>
                        <ListItem
                            link
                            header={
                                <Button variant="outlined">Hola Mui</Button>
                            }
                            title="John Doe"
                            after="Edit"
                        />
                    </List>

                </Page>
            </App>
        </>
    );
}