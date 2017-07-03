function calc(radius, height) {
    let slant = Math.sqrt(radius**2 + height**2)
    let volume = (Math.PI * radius * radius * height) / 3
    let area = (Math.PI * radius * slant) + (Math.PI * radius * radius)

    console.log(`volume = ${volume}`)
    console.log(`area = ${area}`)
}