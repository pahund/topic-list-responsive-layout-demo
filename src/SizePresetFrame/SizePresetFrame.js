import React, { Component } from 'react';
import sizePresets from './sizePresets';
import './SizePresetFrame.css';

const frameModes = ['demo', 'topiclist'];

const sourceUrls = {
    demo: './main.html',
    topiclist: 'http://localhost:3000/forum/audi-a4-b9-b962.html?feature.resi=1&pmtest=1497345885'
};

const keyboardShortcuts = {
    Digit1: 'phoneS',
    Digit2: 'phoneL',
    Digit3: 'tabletS',
    Digit4: 'tabletLPort',
    Digit5: 'tabletLLand',
    Digit6: 'laptopSWinIE',
    Digit7: 'laptopMWinIE',
    Digit8: 'laptopLWinIE',
    Digit9: 'fullHDWinIE',
    Digit0: null
};

function renderOptions() {
    return Object.keys(sizePresets).map(id => (
        <option value={id} key={`preset${id}`}>
            {sizePresets[id].name}
        </option>
    ));
}

function calculateViewportWidth({ scrollbar, screen }, frameMode) {
    if (frameMode !== 'demo') {
        return screen.width;
    }
    return scrollbar.active ? screen.width - scrollbar.width : screen.width;
}

function getInitialState() {
    const selectedSizePresetId = localStorage.getItem('selectedSizePresetId') || null;
    const fullHeightStr = localStorage.getItem('fullHeight');
    const frameMode = localStorage.getItem('frameMode');
    const fullHeight = fullHeightStr === 'true';
    return {
        selectedSizePresetId,
        fullHeight,
        frameMode
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
        window.addEventListener(
            'message',
            ({ data }) => data.type === 'iframe-keydown' && this.handleKeyboardShortcut(data)
        );
    }

    selectPreset({ target: { value: selectedSizePresetId } }) {
        localStorage.setItem('selectedSizePresetId', selectedSizePresetId);
        this.setState({ selectedSizePresetId });
    }

    cycleFrameMode() {
        const currentIndex = frameModes.indexOf(this.state.frameMode);
        const frameMode = frameModes[currentIndex === frameModes.length - 1 ? 0 : currentIndex + 1];
        localStorage.setItem('frameMode', frameMode);
        this.setState({ frameMode });
    }

    toggleFullHeight() {
        const fullHeight = !this.state.fullHeight;
        localStorage.setItem('fullHeight', fullHeight);
        this.setState({ fullHeight });
    }

    handleKeyboardShortcut({ code }) {
        if (code === 'IntlBackslash') {
            if (this.state.selectedSizePresetId) {
                this.toggleFullHeight();
            }
            return;
        }
        if (code === 'KeyM') {
            this.cycleFrameMode();
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
        const { selectedSizePresetId, fullHeight, frameMode } = this.state;
        const preset = sizePresets[selectedSizePresetId] || null;
        return (
            <div className="SizePresetFrame">
                <div className="top">
                    <label htmlFor="preset">Size Preset:</label>
                    <select id="preset" onChange={this.selectPreset} value={selectedSizePresetId || ''}>
                        <option>none [0]</option>
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
                        width={preset ? undefined : '100%'}
                        className="content"
                        style={{
                            width: preset ? calculateViewportWidth(preset, frameMode) : undefined,
                            height: preset ? (fullHeight ? preset.screen.fullHeight : preset.screen.height) : 3000,
                            border: 0
                        }}
                        src={sourceUrls[frameMode]}
                    />
                    {frameMode === 'demo' &&
                        preset &&
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
