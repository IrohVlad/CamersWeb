import React from "react";
import axios from "axios";
import { SERVER } from "./utils/const";
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
        method: 'PATCH',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `${localStorage.getItem('token')}`
        },
        body: JSON.stringify(inf)
        });
    console.log(JSON.stringify(inf));
}
export async function fetchCards(func){
    await fetch(`http://localhost:7000/api/why`, {
    method: 'GET',
    headers: {
        'Content-type': 'aplication/json'
    }
    }).then(data=> data.json())
    .then(data =>{
       func(data);
    });
}
export async function fetchPosts(func){
    await fetch(`http://localhost:7000/api/posts`, {
    method: 'GET',
    headers: {
        'Content-type': 'aplication/json'
    }
    }).then(data=> data.json())
    .then(data =>{
       func(data);
    });
}
export async function fetchLogin(inf){
    await fetch(`http://localhost:7000/api/auth`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(inf)
        }).then(response => response.json())
        .then(response => localStorage.setItem('token', response.token))
}

/*-------------------------------------------------------------------------------------------------------------*/
export async function fetchMainGet(method, func){
    await fetch(`${SERVER}/api/main`, {
        method: `${method}`,
        headers: {
            'Content-Type': 'application/json'
        }
    }).then(data=> data.json()).then(data =>{
        func(data);
    });
}
export async function fetchMainPost(method, body){
    await fetch(`${SERVER}/api/main`, {
        method: `${method}`,
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `${localStorage.getItem('token')}`
        },
        body: JSON.stringify(body)
    }); 
}

export async function fetchPostsGet(method, func){
    await fetch(`${SERVER}/api/posts`, {
        method: `${method}`,
        headers: {
            'Content-Type': 'application/json'
        }
    }).then(data=> data.json()).then(data =>{
        func(data);
    });
}
export async function fetchPostsPost(method, body){
    await fetch(`${SERVER}/api/posts`, {
        method: `${method}`,
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `${localStorage.getItem('token')}`
        },
        body: JSON.stringify(body)
    }); 
}

export async function fetchPriceGet(method, func){
    await fetch(`${SERVER}/api/price`, {
        method: `${method}`,
        headers: {
            'Content-Type': 'application/json'
        }
    }).then(data=> data.json()).then(data =>{
        func(data);
    });
}
export async function fetchPricePost(method, body){
    await fetch(`${SERVER}/api/price`, {
        method: `${method}`,
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `${localStorage.getItem('token')}`
        },
        body: JSON.stringify(body)
    }); 
}

export async function fetchWhyGet(method, func){
    await fetch(`${SERVER}/api/why`, {
        method: `${method}`,
        headers: {
            'Content-Type': 'application/json'
        }
    }).then(data=> data.json()).then(data =>{
        func(data);
    });
}
export async function fetchWhyPost(method, body){
    await fetch(`${SERVER}/api/why`, {
        method: `${method}`,
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `${localStorage.getItem('token')}`
        },
        body: JSON.stringify(body)
    }); 
}