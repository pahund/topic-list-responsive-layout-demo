import React, { Component } from 'react';
import sizePresets from './sizePresets';
import './SizePresetFrame.css';

const keyboardShortcuts = {
    Digit1: 'phoneS',
    Digit2: 'phoneL',
    Digit3: 'tabletS',
    Digit4: 'tabletLPort',
    Digit5: 'tabletLLand',
    Digit6: 'laptop13winIE',
    Digit7: 'laptop13macSafari',
    Digit8: 'laptop13winEdge',
    Digit9: 'laptop15winIE',
    Digit0: 'laptop15macSafari',
    Minus: 'laptop15winEdge',
    IntlBackslash: null
};

function renderOptions() {
    return Object.keys(sizePresets).map(id => (
        <option value={id} key={`preset${id}`}>
            {sizePresets[id].name}
        </option>
    ));
}

function calculateViewportWidth({ scrollbar, screen }) {
    return scrollbar.active ? screen.width - scrollbar.width : screen.width;
}

function getInitialState() {
    const selectedSizePresetId = localStorage.getItem('selectedSizePresetId') || null;
    const fullHeightStr = localStorage.getItem('fullHeight');
    const fullHeight = fullHeightStr === 'true';
    return {
        selectedSizePresetId,
        fullHeight
    };
}

class SizePresetFrame extends Component {
    constructor(props) {
        super(props);
        this.state = getInitialState();
        this.selectPreset = this.selectPreset.bind(this);
        this.toggleFullHeight = this.toggleFullHeight.bind(this);
        this.handleKeyboardShortcut = this.handleKeyboardShortcut.bind(this);
    }

    componentDidMount() {
        window.addEventListener('keydown', this.handleKeyboardShortcut);
    }

    selectPreset({ target: { value: selectedSizePresetId } }) {
        localStorage.setItem('selectedSizePresetId', selectedSizePresetId);
        this.setState({ selectedSizePresetId });
    }

    toggleFullHeight() {
        const fullHeight = !this.state.fullHeight;
        localStorage.setItem('fullHeight', fullHeight);
        this.setState({ fullHeight });
    }

    handleKeyboardShortcut({ code }) {
        if (code === 'Equal') {
            if (this.state.selectedSizePresetId) {
                this.toggleFullHeight();
            }
            return;
        }
        const selectedSizePresetId = keyboardShortcuts[code];
        if (selectedSizePresetId === undefined) {
            return;
        }
        localStorage.setItem('selectedSizePresetId', selectedSizePresetId);
        this.setState({
            selectedSizePresetId
        });
    }

    render() {
        const { selectedSizePresetId, fullHeight } = this.state;
        const preset = sizePresets[selectedSizePresetId] || null;
        return (
            <div className="SizePresetFrame">
                <div className="top">
                    <label htmlFor="preset">Size Preset:</label>
                    <select id="preset" onChange={this.selectPreset} value={selectedSizePresetId || ''}>
                        <option>none [^]</option>
                        {renderOptions()}
                    </select>
                    <div className="spacer" />
                    <label htmlFor="full-height">Full Height [´]:</label>
                    <input
                        type="checkbox"
                        checked={this.state.fullHeight}
                        id="full-height"
                        onChange={this.toggleFullHeight}
                        disabled={preset === null}
                    />
                </div>
                <div className="main">
                    {preset && <div className="left" />}
                    <iframe
                        className="content"
                        style={{
                            width: preset ? calculateViewportWidth(preset) : window.innerWidth,
                            height: preset
                                ? fullHeight
                                    ? preset.screen.fullHeight
                                    : preset.screen.height
                                : window.innerHeight,
                            border: 0
                        }}
                        src="./main.html"
                    />
                    {preset &&
                        preset.scrollbar.active && (
                            <div className="scrollbar" style={{ width: preset.scrollbar.width }} />
                        )}
                    {preset && <div className="right" />}
                </div>
            </div>
        );
    }
}

export default SizePresetFrame;
