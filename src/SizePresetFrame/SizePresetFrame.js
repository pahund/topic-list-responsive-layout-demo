import React, { Component } from 'react';
import sizePresets from './sizePresets';
import PropTypes from 'prop-types';
import './SizePresetFrame.css';

function renderOptions() {
    return Object.keys(sizePresets).map(id => (
        <option value={id} key={`preset${id}`}>
            {sizePresets[id].name}
        </option>
    ));
}

class SizePresetFrame extends Component {
    constructor(props) {
        super(props);
        this.state = {
            selectedSizePresetId: null
        };
        this.selectPreset = this.selectPreset.bind(this);
    }

    selectPreset({ target: { value: selectedSizePresetId } }) {
        console.log('[PH_LOG] id:', selectedSizePresetId); // PH_TODO
        const sizePreset = sizePresets[selectedSizePresetId] || null;
        console.log('[PH_LOG] size preset changed:', sizePreset); // PH_TODO
        this.setState({ selectedSizePresetId });
    }

    render() {
        const { selectedSizePresetId } = this.state;
        const preset = sizePresets[selectedSizePresetId];
        return (
            <div className="SizePresetFrame">
                <div className="top">
                    <label htmlFor="preset">Size Preset:</label>
                    <select id="preset" onChange={this.selectPreset} value={selectedSizePresetId || ''}>
                        <option>none</option>
                        {renderOptions()}
                    </select>
                </div>
                <div className="main">
                    {preset && <div className="left" />}
                    <div
                        className="content"
                        style={{
                            width: preset && preset.screen.width,
                            height: preset && preset.screen.height
                        }}
                    >
                        {this.props.children}
                    </div>
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

SizePresetFrame.propTypes = {
    children: PropTypes.node.isRequired
};

export default SizePresetFrame;
