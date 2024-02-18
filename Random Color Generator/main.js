const generateButton = document.querySelector('.button');

const colorGenerator = () => {
    const main = document.querySelector('main');
    const colorCode = document.querySelector('.color-code');

    let colorValue = Math.random().toString(16).slice(2, 8);

    colorCode.innerText = `#${colorValue}`;
    main.style.background = `#${colorValue}`;
}

document.addEventListener("DOMcontentLoaded", colorGenerator);
generateButton.addEventListener("click", colorGenerator);

console.log("if you're seeing this 0_0 \n hiiii :)");