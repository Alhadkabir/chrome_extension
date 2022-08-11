//Start AJoke
//ajoke by alhad kabir
//you can buy pro vershion using Web Store

//https://api.chucknorris.io/jokes/random  => Jokes api


const getJokes = async () => {
    try {
        const res = await fetch("https://api.chucknorris.io/jokes/random");
        const data = await res.json();
        const myJoke = document.querySelector('#myJoke');
        myJoke.innerHTML = data.value;
    } catch (error) {}
};

window.addEventListener("load", () => {
    getJokes();
});

// Powered by Abestbuyshop => http://abestbuyshop.unaux.com

// End AJoke