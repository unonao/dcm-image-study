import React from 'react';
import './blankspace.css'

export function Blank(title) {
    return (
        <div className='blankspace'>
            <div className='blankspacebox'>
                <h2 >{title}</h2>
            </div>
        </div>
    )
}