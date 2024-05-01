import React from 'react';


export default async function getData() {

let listofdeal;

const res = await fetch('https://manaboss-default-rtdb.firebaseio.com/deals/.json', {cache: 'no-store'})

const data = await res.json();
return data;


}


