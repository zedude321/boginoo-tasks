import React from 'react';
import { Navigation } from './';

export const Layout = ({ children }) => {
    return (
        <div className='flex flex-col items-center pa-3 vhw'>
            <Navigation />

            <div className='w100 flex-1'>
                {children}
            </div>

                <div className='font-ubuntu '>
                    Made with ♥️ by Nest Academy
                </div>
                <div className='font-ubuntu mb-2-4 mt-2-4' style={{ opacity: 0.2 }}>
                    ©zorten.web.app 2020
                </div>
        </div>
    );
};