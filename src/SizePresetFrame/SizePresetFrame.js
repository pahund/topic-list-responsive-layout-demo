import React, { Component } from 'react';
import sizePresets from './sizePresets';
import './SizePresetFrame.css';

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

class SizePresetFrame extends Component {
    constructor(props) {
        super(props);
        this.state = {
            selectedSizePresetId: null,
            fullHeight: false
        };
        this.selectPreset = this.selectPreset.bind(this);
        this.toggleFullHeight = this.toggleFullHeight.bind(this);
    }

    selectPreset({ target: { value: selectedSizePresetId } }) {
        this.setState({ selectedSizePresetId });
    }

    toggleFullHeight() {
        this.setState({ fullHeight: !this.state.fullHeight });
    }

    render() {
        const { selectedSizePresetId, fullHeight } = this.state;
        const preset = sizePresets[selectedSizePresetId] || null;
        return (
            <div className="SizePresetFrame">
                <div className="top">
                    <label htmlFor="preset">Size Preset:</label>
                    <select id="preset" onChange={this.selectPreset} value={selectedSizePresetId || ''}>
                        <option>none</option>
                        {renderOptions()}
                    </select>
                    <div className="spacer" />
                    <label htmlFor="full-height">Full Height:</label>
                    <input
                        type="checkbox"
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
                                    ? 'calc(100vh - 32px)'
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
