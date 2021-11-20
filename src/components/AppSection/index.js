import React, { Component } from 'react';

import Mobile from './mobile.jsx'
import Desktop from './desktop.jsx'

class AppSection extends Component {
    render() {
        return (
            <div id="apps">
                <div  id="mobile-app">
                    <Mobile/>
                </div>
                <div  id="desktop-app">
                    <Desktop />
                </div>
            </div>
        );
    }
}

export default AppSection;