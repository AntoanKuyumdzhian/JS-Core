function area(w, h, W, H) {
    let tempArea = (w * h) + (W * H)
    console.log(tempArea - Math.min(w, W) * Math.min(h, H))
}