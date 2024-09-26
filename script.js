const countvalue = document.getElementById('counter');



const decrement = ()=>{
    let value = parseInt(countvalue.innerText);
    value = value-1;
   countvalue.innerText=value;
};

const increment = ()=>{
    let value = parseInt(countvalue.innerText);
    value = value+1;
  countvalue.innerText = value;
};