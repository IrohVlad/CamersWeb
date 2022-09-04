import React from "react";
import { SERVER } from "./utils/const";
// export async function fetchItems(arr){
//     await fetch('http://62.113.105.113:7000/api/categories', {
//     method: 'GET',
//     headers: {
//         'Content-type': 'aplication/json'
//     }
//     }).then(data=> data.json())
//     .then(data =>{
//         arr(data);
//     });
// }
// export async function fetchGallery(func, id){
//     await fetch(`http://62.113.105.113:7000/api/category?id=${id}`, {
//     method: 'GET',
//     headers: {
//         'Content-type': 'aplication/json'
//     }
//     }).then(data=> data.json())
//     .then(data =>{
//        func(data);
//     });
// }
export async function fetchMain(func){
    await fetch(`http://localhost:7000/api/main`, {
    method: 'GET',
    headers: {
        'Content-type': 'aplication/json'
    }
    }).then(data=> data.json())
    .then(data =>{
       func(data[0]);
    });
}
export async function fetchMainPut(inf){
    await fetch(`http://localhost:7000/api/main`, {
    method: 'PUT',
    headers: {
        'Accept': 'application/json',
        'Content-type': 'aplication/json'
    },
    body: inf
    });
}