let pls1 = document.getElementById("pls1");
let mines1 = document.getElementById("mines1");
let c = 0;
let to = 0;
pls1.addEventListener("click" , (e)=>{
    c++;
    to += 100;
    let count1 = document.getElementById("count1");
    let pro1 = document.getElementById("pro1");
    let total = document.getElementById("tota");
    console.log(count1);
        count1.innerHTML = c;
        pro1.innerHTML = c+" x 100";
        total.innerHTML = to;
})
mines1.addEventListener("click" , (e)=>{
    c--;
    to -= 100
    let count = document.getElementById("count1");
    let pro1 = document.getElementById("pro1");
    let total = document.getElementById("tota");
    console.log(count);
        count.innerHTML = c;
        pro1.innerHTML = c+" x 100";
        total.innerHTML = to;
});

let pls2 = document.getElementById("pls2");
let mines2 = document.getElementById("mines2");
let v = 0;
pls2.addEventListener("click" , (e)=>{
    v++;
    to += 200
    let count2 = document.getElementById("count2");
    let pro2 = document.getElementById("pro2");
    let total = document.getElementById("tota");
    console.log(count2);
        count2.innerHTML = v;
        pro2.innerHTML = v+" x 200";
        total.innerHTML = to;
})
mines2.addEventListener("click" , (e)=>{
    v--;
    to -= 200;
    let count2 = document.getElementById("count2");
    let pro2 = document.getElementById("pro2");
    let total = document.getElementById("tota");
    console.log(count2);
        count2.innerHTML = v;
        pro2.innerHTML = v+" x 200";
        total.innerHTML = to;
});

let pls3 = document.getElementById("pls3");
let mines3 = document.getElementById("mines3");
let b = 0;
pls3.addEventListener("click" , (e)=>{
    b++;
    to += 300;
    let count3 = document.getElementById("count3");
    let pro3 = document.getElementById("pro3");
    let total = document.getElementById("tota");
    console.log(count3);
        count3.innerHTML = b;
        pro3.innerHTML = b+" x 300";
        total.innerHTML = to;
})
mines3.addEventListener("click" , (e)=>{
    b--;
    to -= 300;
    let count3 = document.getElementById("count3");
    let pro3 = document.getElementById("pro3");
    let total = document.getElementById("tota");
    console.log(count2);
        count3.innerHTML = b;
        pro3.innerHTML = b+" x 300";
        total.innerHTML = to;
});