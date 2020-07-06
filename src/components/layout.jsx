import React from 'react';
import { Navigation } from './';

export const Layout = ({ children }) => {
    return (
        <div className='flex flex-col items-center pa-3' style={{ width: '100vw', height: '100vh' }}>
            {/* NAVIGATION */}
            <Navigation />

            {/* MAIN CONTENT */}
            <div className='w100 flex-1'>
                {children}
            </div>

            {/* FOOTER */}
            <div className='font-ubuntu '>
                Made with ♥️ by Nest Academy
            </div>
            <div className='font-ubuntu mb-2-4' style={{ opacity: 0.2 }}>
                ©shortten.io 2020
            </div>
        </div>
    );
};