const orders = [

    {
        id: 1,
        pizza: "Hawaii",
        extra: "Kukorica",
        ital: "Pepsi zero",
        ar: 1500,
        kep: "https://images.pexels.com/photos/6937416/pexels-photo-6937416.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
    },

    {
        id: 2,
        pizza: "Son-Go-Ku",
        extra: "-",
        ital: "Coca-cola",
        ar: 1700,
        kep: "https://images.pexels.com/photos/6937416/pexels-photo-6937416.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
    },

    {
        id: 3,
        pizza: "Margarita",
        extra: "-",
        ital: "-",
        ar: 1200,
        kep: "https://images.pexels.com/photos/6937416/pexels-photo-6937416.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
    },

    {
        id: 4,
        pizza: "Magyaros",
        extra: "Kolbász, Sajt",
        ital: "Soproni",
        ar: 2500,
        kep: "https://images.pexels.com/photos/6937416/pexels-photo-6937416.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
    },

    {
        id: 5,
        pizza: "Webler kedvence",
        extra: "-",
        ital: "Red Bull",
        ar: 404,
        kep: "https://images.pexels.com/photos/6937416/pexels-photo-6937416.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
    },

    {
        id: 6,
        pizza: "Ínyenc",
        extra: "Újhagyma",
        ital: "Ásványvíz",
        ar: 1850,
        kep: "https://images.pexels.com/photos/6937416/pexels-photo-6937416.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
    }

]


const result = document.querySelector(".result");
let output = "";

orders.map((order) => {

    output += `
    
        <div class='order'>

            <div>
                <img src='${order.kep}' alt='pizza'>
            </div>

            <h3>${order.pizza}</h3>
            <hr>
            <h4>Ár: ${order.ar}</h4>
            <p>Extra: ${order.extra}</p>
            <p>Ital: ${order.ital}</p>

        </div>
    
    `;

})

result.innerHTML = output;