let xhr = new XMLHttpRequest();
xhr.open('GET', 'customer.json');

let button1 = document.getElementById('button1');
let customer = document.getElementById('customer');

button1.addEventListener("click", loadCustomer);

function loadCustomer() {
    var result = '';

    xhr.onload = function(){
        if (xhr.status >= 200 && xhr.status < 400) {
            var ourData = JSON.parse(xhr.responseText);
            for (var i in ourData) {
                result += '<ul>' + '<li>' + i + ": " + ourData[i] + '</li>' + '</ul>';
            }
            customer.innerHTML = result;


        } else if(xhr.status == 404){
             console.log("error 404");
        }
    };
xhr.send();
}

//*********************************second*********************************/
let xhr2 = new XMLHttpRequest();
xhr2.open('GET', 'customers.json');

let button2 = document.getElementById('button2');
let customer2 = document.getElementById('customers');

button2.addEventListener("click", loadCustomers);

function loadCustomers() {
    var res = '';

    xhr2.onload = function(){
        if (xhr2.status >= 200 && xhr2.status < 400) {
            var DATA = JSON.parse(xhr2.responseText);
            for (var i in DATA) {
                res+= '<ul>' +
                '<li>ID: ' + DATA[i].id + '</li>' +
                '<li>Name : ' + DATA[i].name + '</li>' +
                '<li>Company : ' + DATA[i].company + '</li>' +
                '<li>Phone : ' + DATA[i].phone + '</li>' +
                '</ul>';
            }
            customer2.innerHTML = res;

        } else if(xhr2.status == 404){
             console.log("error 404");
        }
    };
    xhr2.send();
}
