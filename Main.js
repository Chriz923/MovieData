//exerice 1
fetch('https://gist.githubusercontent.com/pankaj28843/08f397fcea7c760a99206bcb0ae8d0a4/raw/02d8bc9ec9a73e463b13c44df77a87255def5ab9/movies.json')
    .then(response => response.json())
    .then(Moviedata => {

//exerice 2
        const TotalMovies = document.createElement('TotalMovies');
        TotalMovies.innerText = "6527 movies fetched";
        document.body.appendChild(TotalMovies);
//exerice 3
        document.createElement("p");
        const p = document.createElement("p");
        const firstmovie = Moviedata[0];
        p.innerText = firstmovie.title;
        document.body.appendChild(p);
//exerice 4



const ulElement = document.getElementById("first-ul");

document.createElement("e")
        const e = document.createElement("e");

Moviedata.forEach(function (e) {
    const liElement = document.createElement('li');
    liElement.innerText = e.title;
    document.body.appendChild(liElement);
});
//exerice 5
 const button =document.createElement("button");
        button.innerHTML = "Click This";
        button.addEventListener("click", function (){
            for (let i = 0; i < Moviedata.length; i++) {
                if (Moviedata [i].year >= '2014') {
                    const li = document.createElement('li')
                    li.innerText = JSON.stringify(Moviedata[i])
                    Moviedata.appendChild(li)
                }
            }
        })
    });

//const selectElement = document.querySelector('select');




















/* fetch('https://yesno.wtf/api/')
    .then(response => response.json())
    .then(function (yesOrNoData) {
               console.log(yesOrNoData.answer);
        renderYesorNo (yesOrNoData);
    });
function renderYesorNo(dataFromApi) {
    console.log(dataFromApi);
    const h1 = document.querySelector('h1');
    h1.innerHTML = dataFronApi.answer;
}*/