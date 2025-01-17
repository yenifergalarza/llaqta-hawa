const coordenadast = [{
    longitud: -12.122752,
    latitud: -76.994037,
    titulo: "Experiencia de naturaleza",
    parrafo: "disfutra de 3 dias",
    departamento: "arequipa",
    tipo: "naturaleza",
    orientado: "trekking",
    dia: "3-dias",
}, {
    longitud: -12.125260,
    latitud: -76.994037,
    titulo: "Experiencia sobre pago a la tierra",
    parrafo: "disfruta 1 dia",
    tipo: "mistico",
    orientado: "pago-a-la-tierra",
    dia: "1-dia",
}, {
    longitud: -12.129759,
    latitud: -76.994037,
    titulo: "arequipa",
    parrafo: "Centro de préstamo de bicicleta",
    departamento: "arequipa",
    tipo: "naturaleza",
    orientado: "trekking",
    dia: "2-dias",
}, {
    longitud: -12.129759,
    latitud: -76.994037,
    titulo: "Experiencia de naturaleza",
    parrafo: "disfruta una semana",
    departamento: "madre dios ",
    tipo: "naturaleza",
    orientado: "trekking",
    dia: "otro",
}];




var marker = {};
var foo = (coordenadas) => {};
var miMapa = L.map('mapa').setView([-12.099803, -77.008990], 15);
L.tileLayer('https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token={accessToken}', {
    attribution: 'Rubén Alcaraz. Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 20,
    id: 'mapbox.comic',
    accessToken: 'pk.eyJ1IjoicmFsY2FyYXoiLCJhIjoiY2prNmRxcmh1MXNqODNya2NocWY5azEweCJ9.4Qf2Wgh-d1e_ujcRkvq0MA'
}).addTo(miMapa);
let estiloPopup = {
    'maxWidth': '300'
}

var iconoBase = L.Icon.extend({ options: { iconSize: [24, 39], iconAnchor: [16, 87], popupAnchor: [-3, -76] } });
var iconoTurismo = new iconoBase({
    iconUrl: 'peruvian.png'
});



const arrayOfOptions = [];

const opc1 = document.getElementById("opc1");
const opc2 = document.getElementById("opc2");
const opc3 = document.getElementById("opc3");




const op1 = document.getElementById('i1');
const op2 = document.getElementById('i2');
const op3 = document.getElementById('i3');
const op4 = document.getElementById('i4');


op4.addEventListener("click", () => {
    arrayOfOptions.push('naturaleza');
    console.log(arrayOfOptions)

})

op2.addEventListener("click", () => {
    arrayOfOptions.push('mistico');
    console.log(arrayOfOptions)
})
const twoDiv = document.getElementById('twoDiv');
const threeDiv = document.getElementById('threeDiv');

const o1 = document.getElementById('o1');
const o2 = document.getElementById('o2');
const o3 = document.getElementById('o3');
const o4 = document.getElementById('o4');

op1.addEventListener("click", () => {
    twoDiv.classList.remove("Dnone");
    const algo = document.querySelectorAll(".vivencial");
    algo.forEach(function(userItem) {
        userItem.classList.remove("Dnone");

    });
    const algo2 = document.querySelectorAll(".mistico");
    algo2.forEach(function(userItem) {
        userItem.classList.add("Dnone");
    });
    const algo3 = document.querySelectorAll(".investigacion");
    algo3.forEach(function(userItem) {
        userItem.classList.add("Dnone");

    });
    const algo4 = document.querySelectorAll(".naturaleza");
    algo4.forEach(function(userItem) {
        userItem.classList.add("Dnone");

    });
});

op2.addEventListener("click", () => {
    twoDiv.classList.remove("Dnone");
    const algo2 = document.querySelectorAll(".vivencial");
    algo2.forEach(function(userItem) {
        userItem.classList.add("Dnone");
    });
    const algo = document.querySelectorAll(".mistico");
    algo.forEach(function(userItem) {
        userItem.classList.remove("Dnone");
    });
    const algo3 = document.querySelectorAll(".investigacion");
    algo3.forEach(function(userItem) {
        userItem.classList.add("Dnone");
    });
    const algo4 = document.querySelectorAll(".naturaleza");
    algo4.forEach(function(userItem) {
        userItem.classList.add("Dnone");
    });
});


op3.addEventListener("click", () => {
    twoDiv.classList.remove("Dnone");
    const algo2 = document.querySelectorAll(".vivencial");
    algo2.forEach(function(userItem) {
        userItem.classList.add("Dnone");
    });
    const algo = document.querySelectorAll(".mistico");
    algo.forEach(function(userItem) {
        userItem.classList.add("Dnone");

    });

    const algo3 = document.querySelectorAll(".investigacion");
    algo3.forEach(function(userItem) {
        userItem.classList.remove("Dnone");

    });

    const algo4 = document.querySelectorAll(".naturaleza");
    algo4.forEach(function(userItem) {
        userItem.classList.add("Dnone");

    });
});


op4.addEventListener("click", () => {
    twoDiv.classList.remove("Dnone");
    const algo2 = document.querySelectorAll(".vivencial");
    algo2.forEach(function(userItem) {
        userItem.classList.add("Dnone");

    });
    const algo = document.querySelectorAll(".mistico");
    algo.forEach(function(userItem) {
        userItem.classList.add("Dnone");

    });

    const algo3 = document.querySelectorAll(".investigacion");
    algo3.forEach(function(userItem) {
        userItem.classList.add("Dnone");

    });

    const algo4 = document.querySelectorAll(".naturaleza");
    algo4.forEach(function(userItem) {
        userItem.classList.remove("Dnone");

    });
});

const day1 = document.getElementById("day1");

const day2 = document.getElementById("day2");

const day3 = document.getElementById("day3");

const day4 = document.getElementById("day4");

const bird = document.getElementById("o16");

const florafauna = document.getElementById("o17");

const trek = document.getElementById("o18");


const pagoalatierra = document.getElementById("o6");





day3.addEventListener("click", () => {
    arrayOfOptions.push('3-dias');
    console.log(arrayOfOptions);



    miMapa.removeLayer(marker);

    const datafilter = coordenadast.filter(menosdata => menosdata.tipo == arrayOfOptions[0]);

    const datafilter1 = coordenadast.filter(menosdata => menosdata.orientado == arrayOfOptions[1]);

    const datafilter2 = coordenadast.filter(menosdata => menosdata.dia == arrayOfOptions[2]);
    console.log(datafilter2);

    for (const longitudYlatitud of datafilter2) {
        const divMap = document.getElementById("texto");
        const name = `<div id="texto1">
        <h1> ${longitudYlatitud.titulo}</h1>
        <p> ${longitudYlatitud.tipo}</p>
        <span> ${longitudYlatitud.orientado}</span>
        </div>
        `;
        divMap.innerHTML = name;

        marker = L.marker([longitudYlatitud.longitud, longitudYlatitud.latitud], {
            icon: iconoTurismo
        }).addTo(miMapa);
        marker.bindPopup(`<p>${longitudYlatitud.titulo}</p><img class="imageMap"src='peruvian.png' alt='ecoFeria'><p>${longitudYlatitud.parrafo}</p>`, estiloPopup).openPopup();
        var popup = L.popup();
    };

});




day1.addEventListener("click", () => {
    arrayOfOptions.push('1-dia');
    console.log(arrayOfOptions);



    miMapa.removeLayer(marker);

    const datafilter = coordenadast.filter(menosdata => menosdata.tipo == arrayOfOptions[0]);

    const datafilter1 = coordenadast.filter(menosdata => menosdata.orientado == arrayOfOptions[1]);

    const datafilter2 = coordenadast.filter(menosdata => menosdata.dia == arrayOfOptions[2]);
    console.log(datafilter2);

    for (const longitudYlatitud of datafilter2) {
        const divMap = document.getElementById("texto");
        const
            name = `<div id="texto1">
        <h1> ${longitudYlatitud.titulo}</h1>
        <p> ${longitudYlatitud.tipo}</p>
        <span> ${longitudYlatitud.orientado}</span>
        </div>
        `;
        divMap.innerHTML = name;

        marker = L.marker([longitudYlatitud.longitud, longitudYlatitud.latitud], {
            icon: iconoTurismo
        }).addTo(miMapa);
        marker.bindPopup(`<p>${longitudYlatitud.titulo}</p><img class="imageMap"src='peruvian.png' alt='ecoFeria'><p>${longitudYlatitud.parrafo}</p>`, estiloPopup).openPopup();
        var popup = L.popup();
    };

});


trek.addEventListener("click", () => {
    arrayOfOptions.push('trekking');
    console.log(arrayOfOptions)
})


pagoalatierra.addEventListener("click", () => {
    arrayOfOptions.push('pago-a-la-tierra');
    console.log(arrayOfOptions)
})

const todos1_2 = document.querySelectorAll(".sanpedro");

const todos1 = document.querySelectorAll(".todos1");
const days = document.querySelectorAll(".days");
const daya = document.querySelectorAll(".ayahuasca");

for (const todos of todos1) {
    todos.addEventListener("click", () => {
        threeDiv.classList.remove("Dnone");

        days.forEach(function(userItem) {
            userItem.classList.remove("Dnone");
        });

    });
};


for (const todoss of todos1_2) {
    todoss.addEventListener("click", () => {
        threeDiv.classList.remove("Dnone");

        days.forEach(function(userItem) {
            userItem.classList.add("Dnone");
        });
        daya.forEach(function(userItem) {
            userItem.classList.remove("Dnone");
        });
    });
};



const mapacont = document.getElementById("contmapa")

threeDiv.addEventListener("click", () => {
    mapacont.classList.remove("Dnone");
});




//naturaleza trekking 3-dias
//tipo-orientado-dia
/* 


opc2.addEventListener("click", () => {
    const datafilter = coordenadast.filter(menosdata => menosdata.departamento == "arequipa");
    miMapa.removeLayer(marker);
    for (const longitudYlatitud of datafilter) {
        marker = L.marker([longitudYlatitud.longitud, longitudYlatitud.latitud], {
            icon: iconoReciclaje
        }).addTo(miMapa);
        marker.bindPopup(`<h1>${longitudYlatitud.titulo}</h1><img class="imageMap"src='peruvian.png' alt='ecoFeria'><p>${longitudYlatitud.parrafo}</p>`, estiloPopup).openPopup();
        var popup = L.popup();
    }


});
opc3.addEventListener("click", () => {
    const datafilter = coordenadast.filter(menosdata => menosdata.departamento == "cusco");
    miMapa.removeLayer(marker);
    for (const longitudYlatitud of datafilter) {
        marker = L.marker([longitudYlatitud.longitud, longitudYlatitud.latitud], {
            icon: iconoReciclaje
        }).addTo(miMapa);
        marker.bindPopup(`<h1>${longitudYlatitud.titulo}</h1><img class="imageMap"src='peruvian.png' alt='ecoFeria'><p>${longitudYlatitud.parrafo}</p>`, estiloPopup).openPopup();
        var popup = L.popup();
    }
}); */