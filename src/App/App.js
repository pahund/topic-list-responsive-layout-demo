import React, { Fragment, Component } from 'react';
import './App.css';
import Box from '../Box';
import SizeIndicator from '../SizeIndicator';

function handleKeyboardShortcut({ code }) {
    window.parent.postMessage({ type: 'iframe-keydown', code }, '*');
}

export default class App extends Component {
    componentDidMount() {
        window.addEventListener('keydown', handleKeyboardShortcut);
    }

    render() {
        return (
            <Fragment>
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
            </Fragment>
        );
    }
}
