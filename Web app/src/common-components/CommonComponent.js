/*
    all common components goes in this folder..
    same components which are re-used commonly in all the pages..
    or the same components which are being at multiple other places in the same application..
    will be kept under this folder..
*/
import React from 'react';

import Header from './Header/Header';
import Navigation from './Navigation/Navigation';
import Footer from './Footer/Footer';

export default function CommonComponent() {
    return (
        <div>
            <h1>CommonComponent</h1>
            <Navigation />
            <Header />
            <Footer />
        </div>
    )
}
