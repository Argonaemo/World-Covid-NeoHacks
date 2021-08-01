async function cariApi() {
    let input = document.getElementById('valueElement');
    console.log("hi");
    var inp = input.value;
    function searchCountry(keyword) {
        return fetch(`https://covid19.mathdro.id/api/countries/${keyword}`)
            .then(response => {
                return response.json();
            })
            .then(responseJson => {
                if (responseJson.confirmed) {
                    return Promise.resolve(responseJson);
                } else {
                    return Promise.reject(`Negara ${keyword} tak ditemukan`);
                }
            })
    }
    let res = await searchCountry(inp);
    var textSearched = document.getElementById('textnotyet');
    if (res) {
        textSearched.innerHTML = inp;
        // ========== chart sec ===========
        document.querySelector("#chartReport").innerHTML = '<canvas id="canvas"></canvas>';
        let conf = res.confirmed.value;
        let recov = res.recovered.value;
        let death = res.deaths.value
        let ctx = document.getElementById('canvas').getContext('2d');
        let labels = ["confirmed", 'recovered', 'death'];
        let colorHex = ['#ffd700', "#00b100", '#ff0000']
        let myChart = new Chart(ctx, {
            type: 'bar',
            data: {
                datasets: [{
                    label: "COVID-19",
                    data: [conf, recov, death],
                    backgroundColor: colorHex
                }],
                labels: labels
            },
            option: {
                responsive: true
            }
        });
    }
}

window.onload = function () {
    let button = document.getElementById('pemicuEvent');
    console.log('hi');
    button.addEventListener('click', cariApi);
}