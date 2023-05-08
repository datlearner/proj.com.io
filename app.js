/*myFun = () => {
    let info = document.getElementById('pass').value;
    console.log(info);
}

myFun = () => {
    let msg = document.getElementById('pass').value;
    console.log(msg)
}


myFunction = () =>{
    let infor = document.getElementById('show').value;
    console.log(infor)
}
*/

myFunction = () => { 
    let val = document.getElementById('colorp').value;

    document.getElementById('demo').innerHTML = val;

    document.querySelector('p').style.visibility = 'visible';

    document.querySelector('h1').style.color = val;
     document.querySelector('p').style.color = val;
     document.querySelector('button').style.backgroundColor = val;



    document.getElementById('width').style.backgroundColor = val;
}