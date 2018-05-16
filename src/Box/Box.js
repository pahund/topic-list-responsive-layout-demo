import React, { Component } from 'react';
import './Box.css';
import debounce from '../util/debounce';

class Box extends Component {
    constructor(props) {
        super(props);
        this.state = {};
        window.addEventListener('resize', debounce(() => this.updateDimensions(), 100, false), false);
    }
    componentDidMount() {
        this.updateDimensions();
    }

    updateDimensions() {
        const { divElement } = this;
        if (!divElement) {
            return;
        }
        this.setState({
            width: divElement.clientWidth,
            height: divElement.clientHeight
        });
    }

    render() {
        const { className, style, title } = this.props;
        const { width, height } = this.state;
        return (
            <div className={`Box ${className}`} style={style} ref={divElement => (this.divElement = divElement)}>
                <div>
                    <div className="title">{title}</div>
                    {width &&
                        height && (
                            <div className="size">
                                {width} x {height}
                            </div>
                        )}
                </div>
            </div>
        );
    }
}

export default Box;
