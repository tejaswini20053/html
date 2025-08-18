function changebg() {
    let r = Math.trunc(Math.random() * 256);
    let g = Math.trunc(Math.random() * 256);
    let b = Math.trunc(Math.random() * 256);

    let body_bg = document.querySelector('body');
    body_bg.style.cssText = `background-color: rgb(${r}, ${g}, ${b});`;

    let h5_bg = document.querySelector('h5');
    h5_bg.innerHTML = `rgb(${r}, ${g}, ${b})`;

}
let mode = document.querySelector('#mode');
let body = document.querySelector('body');
let premode = 'light';

mode.addEventListener('click', () => {
    if (premode === 'light') {
        premode = 'dark';
        body.classList.add('dark');
        body.classList.remove('light');
    } else {
        premode = 'light';
        body.classList.add('light');
        body.classList.remove('dark');
    }
    console.log(premode);
});

let images = document.getElementsByTagName('img');
for (let i = 0; i < images.length; i++) {
    images[i].addEventListener('click', function () {
        document.body.style.cssText = `
            background-image: url('${images[i].src}');
            background-repeat: no-repeat;
            background-size: cover;
            background-position: center;
        `;
    });
}
