import React from 'react';
import './SizeIndicator.css';

export default () => (
    <div className="SizeIndicator">
        <div className="xs">Size: XS (phone, portrait)</div>
        <div className="s">Size: S (small tablet, portrait)</div>
        <div className="m">Size: M (tablet, portrait)</div>
        <div className="l">Size: L (tablet, landscape / small desktop)</div>
        <div className="xl">Size: XL (desktop)</div>
    </div>
);
