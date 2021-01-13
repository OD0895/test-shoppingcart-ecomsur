import React from 'react';
import { Content, Footer } from "../styles/components"
import  Navbar from './Header';

export default function Layout(props){
    return(
        <>
        <Navbar />
        <Content>
            <main>{props.children}</main>
            <Footer>
            Shopping Cart React and Redux - Test Ecomsur - By Osvaldo Daniel Amador Salinas
            </Footer>
        </Content>
        </>
    );
}