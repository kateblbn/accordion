const btn = document.querySelectorAll('.accordion__btn');

btn.forEach( button => {
button.addEventListener('click', show) })

    function show(but) {
    this.classList.toggle("active");
    let panel = this.nextElementSibling;
    if (panel.style.maxHeight ) {
        panel.style.maxHeight = null;
    } else {
        panel.style.maxHeight = panel.scrollHeight + "px";        
    }
}