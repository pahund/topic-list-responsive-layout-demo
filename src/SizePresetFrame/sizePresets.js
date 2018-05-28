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
    laptopS: {
        width: 1280,
        height: 800
    },
    laptopM: {
        width: 1366,
        height: 768
    },
    laptopL: {
        width: 1440,
        height: 900
    },
    fullHD: {
        width: 1920,
        height: 1080
    }
};

const scrollbar = {
    edge: 12,
    win: 17,
    mac: 15
};

export default {
    phoneS: {
        name: 'XS – Phone [1]',
        scrollbar: {
            active: false
        },
        screen: {
            width: screen.phoneS.width,
            height: screen.phoneS.height,
            fullHeight: 2029
        }
    },
    phoneL: {
        name: 'XS – Large Phone [2]',
        scrollbar: {
            active: false
        },
        screen: {
            width: screen.phoneL.width,
            height: screen.phoneL.height,
            fullHeight: 2029
        }
    },
    tabletS: {
        name: 'S – Small Tablet [3]',
        scrollbar: {
            active: false
        },
        screen: {
            width: screen.tabletS.width,
            height: screen.tabletS.height,
            fullHeight: 2039
        }
    },
    tabletLPort: {
        name: 'M – Tablet Portrait [4]',
        scrollbar: {
            active: false
        },
        screen: {
            width: screen.tabletLPort.width,
            height: screen.tabletLPort.height,
            fullHeight: 1669
        }
    },
    tabletLLand: {
        name: 'L – Tablet Landscape [5]',
        scrollbar: {
            active: false
        },
        screen: {
            width: screen.tabletLLand.width,
            height: screen.tabletLLand.height,
            fullHeight: 1413
        }
    },
    laptopSWinIE: {
        name: 'L – Small Laptop Windows Internet Explorer [6]',
        scrollbar: {
            active: true,
            width: scrollbar.win
        },
        screen: {
            width: screen.laptopS.width,
            height: screen.laptopS.height,
            fullHeight: 1413
        }
    },
    laptopSMacSafari: {
        name: 'L – Small Laptop MacOS Safari',
        scrollbar: {
            active: true,
            width: scrollbar.mac
        },
        screen: {
            width: screen.laptopS.width,
            height: screen.laptopS.height,
            fullHeight: 1413
        }
    },
    laptopSWinEdge: {
        name: 'L – Small Laptop Windows Edge',
        scrollbar: {
            active: true,
            width: scrollbar.edge
        },
        screen: {
            width: screen.laptopS.width,
            height: screen.laptopS.height,
            fullHeight: 1413
        }
    },
    laptopMWinIE: {
        name: 'XL – Medium Laptop Windows Internet Explorer [7]',
        scrollbar: {
            active: true,
            width: scrollbar.win
        },
        screen: {
            width: screen.laptopM.width,
            height: screen.laptopM.height,
            fullHeight: 1413
        }
    },
    laptopMMacSafari: {
        name: 'XL – Medium Laptop MacOS Safari',
        scrollbar: {
            active: true,
            width: scrollbar.mac
        },
        screen: {
            width: screen.laptopM.width,
            height: screen.laptopM.height,
            fullHeight: 1413
        }
    },
    laptopMWinEdge: {
        name: 'XL – Medium Laptop Windows Edge',
        scrollbar: {
            active: true,
            width: scrollbar.edge
        },
        screen: {
            width: screen.laptopM.width,
            height: screen.laptopM.height,
            fullHeight: 1413
        }
    },
    laptopLWinIE: {
        name: 'XXL – Large Laptop Windows Internet Explorer [8]',
        scrollbar: {
            active: true,
            width: scrollbar.win
        },
        screen: {
            width: screen.laptopL.width,
            height: screen.laptopL.height,
            fullHeight: 1253
        }
    },
    laptopLMacSafari: {
        name: 'XXL – Large Laptop MacOS Safari',
        scrollbar: {
            active: true,
            width: scrollbar.mac
        },
        screen: {
            width: screen.laptopL.width,
            height: screen.laptopL.height,
            fullHeight: 1253
        }
    },
    laptopLWinEdge: {
        name: 'XXL – Large Laptop Windows Edge',
        scrollbar: {
            active: true,
            width: scrollbar.edge
        },
        screen: {
            width: screen.laptopL.width,
            height: screen.laptopL.height,
            fullHeight: 1253
        }
    },
    fullHDWinIE: {
        name: 'XXL – Full HD Windows Internet Explorer [9]',
        scrollbar: {
            active: true,
            width: scrollbar.win
        },
        screen: {
            width: screen.fullHD.width,
            height: screen.fullHD.height,
            fullHeight: 1253
        }
    },
    fullHDMacSafari: {
        name: 'XXL – Full HD MacOS Safari',
        scrollbar: {
            active: true,
            width: scrollbar.mac
        },
        screen: {
            width: screen.fullHD.width,
            height: screen.fullHD.height,
            fullHeight: 1253
        }
    },
    fullHDWinEdge: {
        name: 'XXL – Full HD Windows Edge',
        scrollbar: {
            active: true,
            width: scrollbar.edge
        },
        screen: {
            width: screen.fullHD.width,
            height: screen.fullHD.height,
            fullHeight: 1253
        }
    }
};
