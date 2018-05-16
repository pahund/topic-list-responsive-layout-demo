import React from 'react';
import './SizeIndicator.css';

export default () => (
    <div className="SizeIndicator">
        <div className="xs">XS (phone, portrait)</div>
        <div className="s">S (small tablet, portrait)</div>
        <div className="m">M (tablet, portrait)</div>
        <div className="l">L (tablet, landscape / small desktop)</div>
        <div className="xl">XL (desktop)</div>
    </div>
);
