// console.log("Index.js Included");

let cprog=`<span class="bg-sky padding-5px-tb padding-15px-lr border-radius-5 margin-10px-bottom text-white font-size16 xs-font-size13">PROGRAMMING IN C
[Theory]</span>
<div class="margin-10px-top font-size14">8:30-9:10</div>
<div class="font-size13 text-light-gray">SHABANA A.S.</div>`

let periods={
    "m1":cprog,
    "t1":cprog,

}


for(let per in periods){
    document.getElementById(per).innerHTML=periods[per];
}
