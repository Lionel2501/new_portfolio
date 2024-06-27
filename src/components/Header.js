import React, { useEffect } from 'react';
import { header_script } from '../backgroundDinamic';

const Header = () => {

    useEffect(() => {
        if (typeof window !== 'undefined') {
            header_script();
        }
    }, []);

    return (
/*         <div id="large-header" class="large-header">
            <canvas id="demo-canvas"></canvas>
                <h1 class="main-title">Connect <span class="thin">Three</span></h1>
        </div> */

    );
}

export default Header;


