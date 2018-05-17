const screen = {
    phoneS: {
        width: 320,
        height: 568
    },
    phoneL: {
        width: 414,
        height: 736
    },
    tabletS: {
        width: 600,
        height: 960
    },
    tabletLPort: {
        width: 768,
        height: 1024
    },
    tabletLLand: {
        width: 1024,
        height: 768
    },
    laptop13: {
        width: 1280,
        height: 800
    },
    laptop15: {
        width: 1440,
        height: 900
    }
};

const scrollbar = {
    edge: 12,
    win: 17,
    mac: 15
};

export default {
    phoneS: {
        name: 'Phone 4"',
        scrollbar: {
            active: false
        },
        screen: {
            width: screen.phoneS.width,
            height: screen.phoneS.height
        }
    },
    phoneL: {
        name: 'Phone 5.5"',
        scrollbar: {
            active: false
        },
        screen: {
            width: screen.phoneL.width,
            height: screen.phoneL.height
        }
    },
    tabletS: {
        name: 'Tablet 7"',
        scrollbar: {
            active: false
        },
        screen: {
            width: screen.tabletS.width,
            height: screen.tabletS.height
        }
    },
    tabletLPort: {
        name: 'Tablet 9.7" Portrait',
        scrollbar: {
            active: false
        },
        screen: {
            width: screen.tabletLPort.width,
            height: screen.tabletLPort.height
        }
    },
    tabletLLand: {
        name: 'Tablet 9.7" Landscape',
        scrollbar: {
            active: false
        },
        screen: {
            width: screen.tabletLLand.width,
            height: screen.tabletLLand.height
        }
    },
    laptop13winEdge38: {
        name: 'Laptop 13" Windows Edge 38',
        scrollbar: {
            active: true,
            width: scrollbar.edge
        },
        screen: {
            width: screen.laptop13.width,
            height: screen.laptop13.height
        }
    },
    laptop15winEdge38: {
        name: 'Laptop 15" Windows Edge 38',
        scrollbar: {
            active: true,
            width: scrollbar.edge
        },
        screen: {
            width: screen.laptop15.width,
            height: screen.laptop15.height
        }
    },
    laptop13winIE11: {
        name: 'Laptop 13" Windows Internet Explorer 11',
        scrollbar: {
            active: true,
            width: scrollbar.win
        },
        screen: {
            width: screen.laptop13.width,
            height: screen.laptop13.height
        }
    },
    laptop15winIE11: {
        name: 'Laptop 15" Windows Internet Explorer 11',
        scrollbar: {
            active: true,
            width: scrollbar.win
        },
        screen: {
            width: screen.laptop15.width,
            height: screen.laptop15.height
        }
    },
    laptop13macSafari11: {
        name: 'Laptop 13" MacOS Safari 11',
        scrollbar: {
            active: true,
            width: scrollbar.mac
        },
        screen: {
            width: screen.laptop13.width,
            height: screen.laptop13.height
        }
    },
    laptop15macSafari11: {
        name: 'Laptop 15" MacOS Safari 11',
        scrollbar: {
            active: true,
            width: scrollbar.mac
        },
        screen: {
            width: screen.laptop15.width,
            height: screen.laptop15.height
        }
    }
};
