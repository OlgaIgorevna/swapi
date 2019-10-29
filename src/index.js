import React from 'react';
import ReactDOM from 'react-dom';
import App from "../src/components/app/App";

console.log("hello!");

ReactDOM.render(<App/>, document.getElementById("root"));

/*const swapi = new SwapiService();

swapi.getPerson(2).then((data)=>{
    console.log("people", data);
});*/

/*const getResource = async (url)=>{
    const res = await fetch(url);
    if (!res.ok) {
        throw new Error(`could not fetch ${url}, received ${res.status}`)
    }
    const data = await res.json();
    console.log("data in func", data);
    return data;
};
 getResource("https://swapi.co/api/people/45641")
     .then(
         (data)=>{
             console.log("data", data);
         }
     )
     .catch((err)=>{
         console.log("error:", err)
     });*/

/*fetch("https://swapi.co/api/people/1")
    .then(
    (res)=>{
        console.log(res.status);
        return res.json(); // возвращает промис, который когда будет выполнен, станет доступно тело ответа
    })
    .then(
        (data)=>{
            console.log(data);
        }
    );*/
