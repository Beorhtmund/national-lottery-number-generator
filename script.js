// For EUROMILLIONS
const fifty = () => {
    let min = 1;
    let max = 50 + 1;

    let randomNumber = Math.floor(Math.random() * (max - min) + min);

    return randomNumber;
};

const luckyStars = () => {
    let min = 1;
    let max = 12 + 1;

    let randomNumber = Math.floor(Math.random() * (max - min) + min);

    return randomNumber;
};

// For LOTTO
const fiftyNine = () => {
    let min = 1;
    let max = 59 + 1;

    let randomNumber = Math.floor(Math.random() * (max - min) + min);

    return randomNumber;
};

// For THUNDERBALL
const thirtyNine = () => {
    let min = 1;
    let max = 39 + 1;

    let randomNumber = Math.floor(Math.random() * (max - min) + min);

    return randomNumber;
};

const thunderball = () => {
    let min = 1;
    let max = 14 + 1;

    let randomNumber = Math.floor(Math.random() * (max - min) + min);

    return randomNumber;
};

// For SET FOR LIFE
const fortySeven = () => {
    let min = 1;
    let max = 47 + 1;

    let randomNumber = Math.floor(Math.random() * (max - min) + min);

    return randomNumber;
};

const lifeBall = () => {
    let min = 1;
    let max = 10 + 1;

    let randomNumber = Math.floor(Math.random() * (max - min) + min);

    return randomNumber;
};

// Set active class on nav-link onclick
const changeActive = (event) => {
    const copyButton = document.getElementById('copyButton');
    copyButton.classList.remove('disabled');

    const getActive = document.getElementsByClassName('nav-link');
    for (let i = 0; i < getActive.length; i++) {
        getActive[i].classList.remove('active');
    }
    event.target.classList.add('active');

    setNumbers(event.target.innerText);
}

// Display numbers on screen
const setNumbers = (game) => {

    let result = [[], []];

    const title = document.getElementById('title');
    const main = document.getElementById('main');
    const special = document.getElementById('special');

    switch (game) {
        case 'EUROMILLIONS':
            while (result[0].length !== 5 || result[1].length !== 2) {
                result = ascendingUnique([fifty(), fifty(), fifty(), fifty(), fifty()], [luckyStars(), luckyStars()]);
            }

            result[0] = result[0].join(' ');
            result[1] = result[1].join(' ');

            title.innerText = game;
            main.innerHTML = '<span class="bold">Main: </span>' + result[0];
            special.innerHTML = '<span class="bold">Lucky Stars: </span>' + result[1];

            break;
        case 'LOTTO':
            while (result[0].length !== 6) {
                result = ascendingUnique([fiftyNine(), fiftyNine(), fiftyNine(), fiftyNine(), fiftyNine(), fiftyNine()]);
            }

            result[0] = result[0].join(' ');
            
            title.innerText = game;
            main.innerHTML = '<span class="bold">Main: </span>' + result[0];
            special.innerHTML = '';

            break;
        case 'THUNDERBALL':
            while (result[0].length !== 5 || result[1].length !== 1) {
                result = ascendingUnique([thirtyNine(), thirtyNine(), thirtyNine(), thirtyNine(), thirtyNine()], [thunderball()]);
            }

            result[0] = result[0].join(' ');
            
            title.innerText = game;
            main.innerHTML = '<span class="bold">Main: </span>' + result[0];
            special.innerHTML = '<span class="bold">Thunderball: </span>' + result[1];

            break;
        case 'EUROMILLIONS HOTPICKS':
            while (result[0].length !== 5) {
                result = ascendingUnique([fifty(), fifty(), fifty(), fifty(), fifty()]);
            }

            result[0] = result[0].join(' ');
            
            title.innerText = game;
            main.innerHTML = '<span class="bold">Main: </span>' + result[0];
            special.innerText = '';

            break;
        case 'LOTTO HOTPICKS':
            while (result[0].length !== 5) {
                result = ascendingUnique([fiftyNine(), fiftyNine(), fiftyNine(), fiftyNine(), fiftyNine()]);
            }

            result[0] = result[0].join(' ');

            title.innerText = game;
            main.innerHTML = '<span class="bold">Main: </span>' + result[0];
            special.innerText = '';

            break;
        case 'SET FOR LIFE':
            while (result[0].length !== 5 || result[1].length !== 1) {
                result = ascendingUnique([fortySeven(), fortySeven(), fortySeven(), fortySeven(), fortySeven()], [lifeBall()]);
            }

            result[0] = result[0].join(' ');
            
            title.innerText = game;
            main.innerHTML = '<span class="bold">Main: </span>' + result[0];
            special.innerHTML = '<span class="bold">Life Ball: </span>' + result[1];

            break;
    }
};
// remove duplicates
// Display numbers in ascending order
const ascendingUnique = (...args) => {
    let list = [...args];
    for (let i in list) {
        list[i].sort((a, b) => {
            return a - b
        });

        // Remove duplicates
        list[i] = [...new Set(list[i])];
    }
    return list;
}

const onlyUnique = (value, index, self) => {
    return self.indexOf(value) === index;
}

// Copy to clipboard
const writeClipboard = () => {
    const main = document.getElementById('main');
    const special = document.getElementById('special');
    navigator.clipboard.writeText(main.innerText + ' ' + special.innerText).then(() => {
    });
}