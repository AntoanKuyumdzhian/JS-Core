function calc(order) {
    let item = [];
    let price = [];

    for (let i = 0; i < order.length; i++) {
        if (i % 2 === 0) {
            item.push(order[i]);
        } else {
            price.push(Number(order[i]));
        }
    }

    console.log(`You purchased ${item.join(', ')} for a total sum of ${price.reduce((a, b) => a + b)}`);
}

calc(['Beer Zagorka', '2.65', 'Tripe soup', '7.80','Lasagna', '5.69'])