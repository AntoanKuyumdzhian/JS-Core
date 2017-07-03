function solve(target, main) {
    let counter = 0;
    for (let i = 0; i <= main.length - target.length; i ++) {
        if (main.substr(i, target.length) === target) {
            counter++;
        }
    }
    console.log(counter);
}

solve('ma', 'Marine mammal training is the training and caring for marine life such as, dolphins, killer whales, sea lions, walruses, and other marine mammals. It is also a duty of the trainer to do mental and physical exercises to keep the animal healthy and happy.')