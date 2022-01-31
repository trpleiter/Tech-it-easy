const inventory4 = [
    {
        type: '43PUS6504/12',
        name: '4K TV',
        brand: 'Philips',
        price: 379,
        availableSizes: [43, 50, 58, 65],
        refreshRate: 50,
        screenType: 'LED',
        screenQuality: 'Ultra HD/4K',
        smartTv: true,
        options: {
            wifi: true,
            speech: false,
            hdr: true,
            bluetooth: false,
            ambiLight: false,
        },
        originalStock: 23,
        sold: 2,
    },
    {
        type: 'NH3216SMART',
        name: 'HD smart TV',
        brand: 'Nikkei',
        price: 159,
        availableSizes: [32],
        refreshRate: 100,
        screenType: 'LED',
        screenQuality: 'HD ready',
        smartTv: true,
        options: {
            wifi: true,
            speech: false,
            hdr: false,
            bluetooth: false,
            ambiLight: false,
        },
        originalStock: 4,
        sold: 4,
    },
    {
        type: 'QE55Q60T',
        name: '4K QLED TV',
        brand: 'Samsung',
        price: 709,
        availableSizes: [43, 50, 55, 58, 65],
        refreshRate: 60,
        screenType: 'QLED',
        screenQuality: 'Ultra HD/4K',
        smartTv: true,
        options: {
            wifi: true,
            speech: true,
            hdr: true,
            bluetooth: true,
            ambiLight: false,
        },
        originalStock: 7,
        sold: 0,
    },
    {
        type: '43HAK6152',
        name: 'Ultra HD SMART TV',
        brand: 'Hitachi',
        price: 349,
        availableSizes: [43, 50, 55, 58],
        refreshRate: 60,
        screenType: 'LCD',
        screenQuality: 'Ultra HD/4K',
        smartTv: true,
        options: {
            wifi: true,
            speech: true,
            hdr: true,
            bluetooth: true,
            ambiLight: false,
        },
        originalStock: 5,
        sold: 5,
    },
    {
        type: '50PUS7304/12',
        name: 'The One 4K TV',
        brand: 'Philips',
        price: 479,
        availableSizes: [43, 50, 55, 58, 65, 70],
        refreshRate: 50,
        screenType: 'LED',
        screenQuality: 'Ultra HD/4K',
        smartTv: true,
        options: {
            wifi: true,
            speech: true,
            hdr: true,
            bluetooth: true,
            ambiLight: true,
        },
        originalStock: 8,
        sold: 3,
    },
    {
        type: '55PUS7805',
        name: '4K LED TV',
        brand: 'Philips',
        price: 689,
        availableSizes: [55],
        refreshRate: 100,
        screenType: 'LED',
        screenQuality: 'Ultra HD/4K',
        smartTv: true,
        options: {
            wifi: true,
            speech: false,
            hdr: true,
            bluetooth: false,
            ambiLight: true,
        },
        originalStock: 6,
        sold: 3,
    },
    {
        type: 'B2450HD',
        name: 'LED TV',
        brand: 'Brandt',
        price: 109,
        availableSizes: [24],
        refreshRate: 60,
        screenType: 'LED',
        screenQuality: 'Full HD',
        smartTv: false,
        options: {
            wifi: false,
            speech: false,
            hdr: false,
            bluetooth: false,
            ambiLight: false,
        },
        originalStock: 10,
        sold: 8,
    },
    {
        type: '32WL1A63DG',
        name: 'HD TV',
        brand: 'Toshiba',
        price: 161,
        availableSizes: [32],
        refreshRate: 50,
        screenType: 'LED',
        screenQuality: 'Full HD',
        smartTv: false,
        options: {
            wifi: false,
            speech: false,
            hdr: true,
            bluetooth: false,
            ambiLight: false,
        },
        originalStock: 10,
        sold: 8,
    },
];

// Opdracht 4a
function tvName(tvObject) {
    return tvObject.brand + " " + tvObject.type + " - " + tvObject.name;
}

console.log(tvName(inventory4[0]));

// Opdracht 4b
function tvPrice(tvObject) {
    return "€" + tvObject.price + ",-";
}

console.log(tvPrice(inventory4[0]));

//Opdracht 4c

function tvSize(tvObject) {
    if (tvObject.availableSizes.length === 4) {
        return tvObject.availableSizes[0] + " inch (" + tvObject.availableSizes[0] * 2.54.toFixed(0) + "cm) | "
            + tvObject.availableSizes[1] + " inch (" + tvObject.availableSizes[1] * 2.54.toFixed(0) + "cm) | "
            + tvObject.availableSizes[2] + " inch (" + tvObject.availableSizes[2] * 2.54.toFixed(0) + "cm) | "
            + tvObject.availableSizes[3] + " inch (" + tvObject.availableSizes[3] * 2.54.toFixed(0) + "cm)";
    } else if (tvObject.availableSizes.length === 3) {
        return tvObject.availableSizes[0] + " inch (" + tvObject.availableSizes[0] * 2.54.toFixed(0) + "cm) | "
            + tvObject.availableSizes[1] + " inch (" + tvObject.availableSizes[1] * 2.54.toFixed(0) + "cm) | "
            + tvObject.availableSizes[2] + " inch (" + tvObject.availableSizes[2] * 2.54.toFixed(0) + "cm)";
    } else if (tvObject.availableSizes.length === 2) {
        return tvObject.availableSizes[0] + " inch (" + tvObject.availableSizes[0] * 2.54.toFixed(0) + "cm) | "
            + tvObject.availableSizes[1] + " inch (" + tvObject.availableSizes[1] * 2.54.toFixed(0) + "cm)";
    } else {
        return tvObject.availableSizes + " inch (" + tvObject.availableSizes * 2.54.toFixed(0) + "cm)";
    }
}

console.log(tvSize(inventory4[6]));

//Opdracht 4d
// const informationElement = document.getElementById("tvInformation");
// informationElement.textContent = `${tvName(inventory4[0])} \r\n ${tvPrice(inventory4[0])} \r\n ${tvSize(inventory4[0])}`;

//Opdracht 4e
function allTvInformation(tvArray) {
    for (let i = 0; i < tvArray.length; i++) {
        tvArray[i] = tvName(tvArray[i]) + tvPrice(tvArray[i]) + tvSize(tvArray[i])
    }
    return tvArray
}

console.log(allTvInformation(inventory4));
