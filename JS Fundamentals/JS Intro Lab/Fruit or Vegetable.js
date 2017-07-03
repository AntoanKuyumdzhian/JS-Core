function calc(input) {
    let fruits = ['banana', 'apple', 'kiwi', 'cherry', 'lemon', 'grapes', 'peach']
    let vegies = ['tomato', 'cucumber', 'pepper', 'onion', 'garlic', 'parsley']

    for(let fruit of fruits){
        if(input == fruit)
            return 'fruit'
    }
    for(let vegi of vegies){
        if(input == vegi)
            return 'vegetable'
    }
    return 'unknown'
}