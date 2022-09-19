
const loadConuntries = () =>{
    fetch('https://restcountries.com/v3.1/all')
    .then(res => res.json())
    .then(data => displayCountries(data))
}

const displayCountries = countries => {
    console.log(countries);
    // console.log(countries[0]);
    const countriesHTML  = countries.map(country =>{
        return `
            <div class="country">
                <h2>${country.name.common}</h2>
                <img src="${country.flags.png}">
            </div>
        `
    })
    console.log(countriesHTML);
    // console.log(countriesHTML[0]);
    const container = document.getElementById('countries');
    container.innerHTML = countriesHTML.join(' ');
}
loadConuntries();