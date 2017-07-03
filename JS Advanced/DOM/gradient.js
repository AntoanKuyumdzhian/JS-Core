function attachGradientEvents() {
    document.getElementById('gradient').addEventListener('click', onClick);

    function onClick(event) {
        let x = event.offsetX;
        let percent = (x / this.clientWidth) * 100;
        document.getElementById('result').textContent = percent.toFixed(0) + '%';
    }
}