import React from 'react';
import './App.css';
import Box from '../Box';
import SizeIndicator from '../SizeIndicator';
import SizePresetFrame from '../SizePresetFrame';

export default () => (
    <SizePresetFrame>
        <SizeIndicator />
        <div className="App">
            <Box className="Header" title="Header" />
            <Box className="SkyscraperLeft" title="Sky" />
            <Box className="SkyscraperRight" title="Sky" />
            <Box className="Banner" title="Banner" />
            <Box className="MainContent" title="Main" />
            <Box className="Sidebar" title="Sidebar" />
            <Box className="Sidebar2" title="Sidebar" />
            <Box className="Footer" title="Footer" />
        </div>
    </SizePresetFrame>
);
