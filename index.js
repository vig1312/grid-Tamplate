const root = document.querySelector(".section-container");

function listItem(cars) {
    const container = document.createElement("div");
    container.classList.add("cars")

    container.innerHTML = `
        <h1>${cars.date}</h1>
        <h2>${cars.mark + " " + cars.name}</h2>
        <h3>${cars.price}</h3>
        <p>${cars.desc}</p>
    `
    return container;
}

function list(data) {
    const container = document.createElement("div");
    container.classList.add("cont")

    data.map((car) => {
        return listItem(car)
    }).forEach((el) => {
        container.appendChild(el)
    })

    return container
}

function app() {
    const container = document.createElement("div")

    let datas = [
        {
            mark:"BMW",
            name:"X6/M",
            price:"85.000$",
            date: "2022",
            desc:"4.4 Twin Turbo 625hp"
        },
        {
            mark:"BMW",
            name:"X5/M",
            price:"65.000$",
            date: "2020",
            desc:"4.4 Twin Turbo 585hp"
        },
        {
            mark:"Mercedes-Benz",
            name:"GLE63s",
            price:"125.000$",
            date: "2023",
            desc:"4.4 Twin Turbo 630hp"
        },
        {
            mark:"Audi",
            name:"RS/6",
            price:"145.000$",
            date: "2024",
            desc:"4.4 Twin Turbo 730hp"
        },
        {
            mark:"Mercedes-benz",
            name:"S63 ",
            price:"78.000$",
            date: "2017",
            desc:"4.4 Twin Turbo 585hp"
        },
        {
            mark:"Toyota",
            name:"Camry",
            price:"32.000$",
            date: "2021",
            desc:"2.5 DOCH 203hp"
        },
        {
            mark:"Lexus",
            name:"LX/570",
            price:"105.000$",
            date: "2020",
            desc:"5.7L 378hp"
        },
        {
            mark:"Audi",
            name:"Q8",
            price:"90.000$",
            date: "2021",
            desc:"3.0 Twin Turbo 421"
        },
        {
            mark:"BMW",
            name:"X6/M",
            price:"85.000$",
            date: "2022",
            desc:"4.4 Twin Turbo 625hp"
        },
        {
            mark:"BMW",
            name:"X5/M",
            price:"65.000$",
            date: "2020",
            desc:"4.4 Twin Turbo 585hp"
        },
        {
            mark:"Mercedes-Benz",
            name:"GLE63s",
            price:"125.000$",
            date: "2023",
            desc:"4.4 Twin Turbo 630hp"
        },
        {
            mark:"Audi",
            name:"RS/6",
            price:"145.000$",
            date: "2024",
            desc:"4.4 Twin Turbo 730hp"
        },
        {
            mark:"Mercedes-benz",
            name:"S63 ",
            price:"78.000$",
            date: "2017",
            desc:"4.4 Twin Turbo 585hp"
        },

    ]

    container.appendChild(list(datas))


    return container
}

root.appendChild(app())