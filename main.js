
let forma = document.querySelector("form");
forma.addEventListener("submit", function (e) {
    e.preventDefault();
    let pridetPrieSaraso = forma["text"].value;
    let iSarasa = document.createElement("li")
    iSarasa.textContent = (pridetPrieSaraso);//istrina irasytas rreiksmes laukelyja
    body.appendChild(iSarasa);
    forma["text"].value = "";
})
let ivesti = document.querySelector('input[type="text"]');
ivesti.addEventListener("focus", (e) => {
    e.target.style.background = 'AliceBlue';

})

ivesti.addEventListener("blur", (e) => {
    e.target.style.background = '';
})

let formaFonas = document.querySelector("form");
let body = document.querySelector("body");

formaFonas.addEventListener("submit", function (e) {
    let pasirinktiFona = document.getElementById("pasirink").value;

    if (pasirinktiFona == ziema) {
        document.body.style.backgroundImage = 'url(https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/first-day-of-winter-solstice-2021-1638278570.jpg?crop=1.00xw:0.803xh;0.00160xw,0.197xh&resize=1200:*)';
    } else if (pasirinktiFona == pavasaris) {
        document.body.style.backgroundImage = 'urlhttps://upload.wikimedia.org/wikipedia/commons/thumb/e/ef/Fr%C3%BChlingsallee_Tulpenbl%C3%BCte_2010_%281%29.jpg/1200px-Fr%C3%BChlingsallee_Tulpenbl%C3%BCte_2010_%281%29.jpg()';
    } else if (pasirinktiFona == vasara) {
        document.body.style.backgroundImage = 'url(https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/beautiful-tropical-sunset-scenery-two-sun-beds-royalty-free-image-1595368231.jpg)';
    } else if (pasirinktiFona == ruduo) {
        document.body.style.backgroundImage = 'url(https://assets-eu-01.kc-usercontent.com/bcd02f72-b50c-0179-8b4b-5e44f5340bd4/7a0b8947-d971-444f-9287-e11fd0d2c421/autumn-poems-header-min.jpg)';
    }

})
