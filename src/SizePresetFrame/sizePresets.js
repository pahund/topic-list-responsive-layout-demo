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
        name: 'Phone 4" [1]',
        scrollbar: {
            active: false
        },
        screen: {
            width: screen.phoneS.width,
            height: screen.phoneS.height
        }
    },
    phoneL: {
        name: 'Phone 5.5" [2]',
        scrollbar: {
            active: false
        },
        screen: {
            width: screen.phoneL.width,
            height: screen.phoneL.height
        }
    },
    tabletS: {
        name: 'Tablet 7" [3]',
        scrollbar: {
            active: false
        },
        screen: {
            width: screen.tabletS.width,
            height: screen.tabletS.height
        }
    },
    tabletLPort: {
        name: 'Tablet 9.7" Portrait [4]',
        scrollbar: {
            active: false
        },
        screen: {
            width: screen.tabletLPort.width,
            height: screen.tabletLPort.height
        }
    },
    tabletLLand: {
        name: 'Tablet 9.7" Landscape [5]',
        scrollbar: {
            active: false
        },
        screen: {
            width: screen.tabletLLand.width,
            height: screen.tabletLLand.height
        }
    },
    laptop13winIE: {
        name: 'Laptop 13" Windows Internet Explorer [6]',
        scrollbar: {
            active: true,
            width: scrollbar.win
        },
        screen: {
            width: screen.laptop13.width,
            height: screen.laptop13.height
        }
    },
    laptop13macSafari: {
        name: 'Laptop 13" MacOS Safari [7]',
        scrollbar: {
            active: true,
            width: scrollbar.mac
        },
        screen: {
            width: screen.laptop13.width,
            height: screen.laptop13.height
        }
    },
    laptop13winEdge: {
        name: 'Laptop 13" Windows Edge [8]',
        scrollbar: {
            active: true,
            width: scrollbar.edge
        },
        screen: {
            width: screen.laptop13.width,
            height: screen.laptop13.height
        }
    },
    laptop15winIE: {
        name: 'Laptop 15" Windows Internet Explorer [9]',
        scrollbar: {
            active: true,
            width: scrollbar.win
        },
        screen: {
            width: screen.laptop15.width,
            height: screen.laptop15.height
        }
    },
    laptop15macSafari: {
        name: 'Laptop 15" MacOS Safari [0]',
        scrollbar: {
            active: true,
            width: scrollbar.mac
        },
        screen: {
            width: screen.laptop15.width,
            height: screen.laptop15.height
        }
    },
    laptop15winEdge: {
        name: 'Laptop 15" Windows Edge [ß]',
        scrollbar: {
            active: true,
            width: scrollbar.edge
        },
        screen: {
            width: screen.laptop15.width,
            height: screen.laptop15.height
        }
    }
};
