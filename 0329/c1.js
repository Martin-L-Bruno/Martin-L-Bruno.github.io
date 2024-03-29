
'use strict'

let R = null;

let b2 = document.querySelector("#b2");

async function showc() {
    let url = `https://juxinglong.github.io/static/HW/hw6/MIS3033.json`;
    //fetch async
    let r = await fetch(url);
    let rj = await r.json();

    let chart2 = null;

    let c2 = document.querySelector("#c2");

    let opts = {
        type: "pie", //line or bar can be used too
        data:
        {
            labels: rj.map(x => x.lg),
            datasets: [{ data: rj.map(x => x.n), label: "number" },],
        }
    }



    if (chart2 != null) {
        chart2.destroy();
    }
    c2.innerHTML = ``;

    chart2 = new Chart(c2, opts);
    opts = {
        targets: [c2,],
        rotate: {value:60, duration:3000},

    }
    anime(opts);
};

    R = rj;
    console.log(rj);


    b2.addEventListener("click", showc);

