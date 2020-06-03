/*eslint-env browser*/

let formName = document.querySelector('#formName');

let formDep = document.querySelector('#formDep');

let formWith = document.querySelector('#formWith');

console.log(formWith);

// BUTTONS
let btnName = document.querySelector("#btnName");

let btnDep = document.querySelector("#btnDep");

let btnWith = document.querySelector("#btnWith");

console.log(btnWith);

// FUNCTIONS

window.onload = function () {
    let name = btnName.addEventListener('click', e => {
        e.preventDefault();
        formName.innerHTML += '<input type="text" id="name"></input>';
        formName.innerHTML += '<input type="submit" value="submit"></input>';

    });

    let depos = btnDep.addEventListener('click', () => {
        formDep.innerHTML += '<input type="text" id="depos"></input>';
    });

    let withd = btnWith.addEventListener('click', () => {
        formWith.innerHTML += '<input type="text" id="wid"></input>';
    });
    
    function getToday() {
        let d = new Date();
        let year = g.getFullYear();
        let day = d.getDate();
        let month = d.getMonth() + 1;
        let today = month + "/" + day + "/" + year;
        return today;
    }

    let balNew = document.querySelector('div');
    formName.addEventListener('submit', e => {
        e.preventDefault();
        console.log(formName.yourname.value);
        newName.querySelector('#name1').textContent = `${formName.yourname.value}`;
        newBal.querySelector('#bln').textContent = `${getToday}`;
    });

    let balance = 0;
    formDep.addEventListener('submit', e => {
        e.preventDefault();
        let depBal = Number.parseFloat(formDep.depamt.value, 10).toFixed(2);
        console.log(depBal);
       let onebalance = Number.parseFloat((balance + depBal),10).toFixed(2);
           if (depBal === ' ')
            {
                depBal = 0;
            }    
            console.log(dep);

            nextbal.querySelector('#bln').textContent = `${Number.parseFloat(onebalance, 10).toFixed(2)}`;  
                formWith.addEventListener('submit', e => 
                {
                    e.preventDefault();
                    let withdrow = Number.parseFloat(formWith.wdamt.value, 10).toFixed(2);
                    console.log(withdrow);

                    console.log(onebalance);
                    this.console.log(withdrow);

                    if (withdrow > onebalance) {
                        window.alert("Not enough money in account, please make a deposit!");
                    } else {
                        nextbal.querySelector('#bln').textContent = `${parseFloat(onebalance - withdrow, 10).toFixed(2)}`;
                    }
                    
                }); 
        
    }); 

};
