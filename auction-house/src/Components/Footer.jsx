import React from 'react';
import { MDBFooter } from 'mdb-react-ui-kit';
import "./Footer.css";

export default function App() {
    return (
        <MDBFooter bgColor='light' className='text-center text-lg-left pozicija'>
            <div className='text-center p-3' style={{ backgroundColor: "#0083ca" }}>
                &copy; {new Date().getFullYear()}{' '}
                Аукциска Куќа. Сите права задржани.
            </div>
        </MDBFooter>
    );
}