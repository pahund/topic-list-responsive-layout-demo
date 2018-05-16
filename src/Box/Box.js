import React, { Component } from 'react';
import './Box.css';
import { debounce } from '../util';
import PropTypes from 'prop-types';

class Box extends Component {
    constructor(props) {
        super(props);
        this.state = {};
        this.divElement = React.createRef();
    }
    componentDidMount() {
        window.addEventListener('resize', debounce(() => this.updateDimensions(), 100, false), false);
    }

    updateDimensions() {
        const { divElement } = this;
        this.setState({
            width: divElement.clientWidth,
            height: divElement.clientHeight
        });
    }

    render() {
        const { className, style, title } = this.props;
        const { width, height } = this.state;
        return (
            <div className={`Box ${className}`} style={style} ref={this.divElement}>
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

Box.propTypes = {
    className: PropTypes.string,
    title: PropTypes.string.isRequired,
    style: PropTypes.object
};

export default Box;
