function input(text, letter) {
    let counter = 0;
    for(let i of text){
        if (i == letter) counter++;
    }

    console.log(counter);
}