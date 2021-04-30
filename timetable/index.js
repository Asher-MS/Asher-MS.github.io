// console.log("Index.js Included");

let cprog=`<span class="bg-sky padding-5px-tb padding-15px-lr border-radius-5 margin-10px-bottom text-white font-size16 xs-font-size13">PROGRAMMING IN C
[Theory]</span>

<div class="font-size13 text-light-gray">SHABANA A.S.</div>`;

let physics=`
<span class="bg-purple padding-5px-tb padding-15px-lr border-radius-5 margin-10px-bottom text-white font-size16  xs-font-size13">PHYSICS</span>
                                
                                <div class="font-size13 text-light-gray">DR. SREENADH S</div>`;

let graphics=`<span class="bg-green padding-5px-tb padding-15px-lr border-radius-5 margin-10px-bottom text-white font-size16  xs-font-size13">GRAPHICS</span>
                                
<div class="font-size13 text-light-gray">RIZWAN RASHEED</div>`;
let beee1=`<span class="bg-yellow padding-5px-tb padding-15px-lr border-radius-5 margin-10px-bottom text-white font-size16  xs-font-size13">BEEE</span>
                                
<div class="font-size13 text-light-gray">SAJEENA A</div>`;

let beee2=`<span class="bg-yellow padding-5px-tb padding-15px-lr border-radius-5 margin-10px-bottom text-white font-size16  xs-font-size13">BEEE</span>
                                
<div class="font-size13 text-light-gray">MOHAMMED MANSOOR O</div>`;

let maths=`<span class="bg-purple padding-5px-tb padding-15px-lr border-radius-5 margin-10px-bottom text-white font-size16  xs-font-size13">MATHS</span>
                                
<div class="font-size13 text-light-gray">FAYIS THAZHETHE PALLIYALI</div>`;

let procomm=`<span class="bg-pink padding-5px-tb padding-15px-lr border-radius-5 margin-10px-bottom text-white font-size16  xs-font-size13">PROFESSIONAL COMMUNICATION</span>
                                
<div class="font-size13 text-light-gray">AMINA N.M.</div>`;


let complab=`<span class="bg-sky padding-5px-tb padding-15px-lr border-radius-5 margin-10px-bottom text-white font-size16  xs-font-size13">PROGRAMMING IN C LAB</span>
                                
<div class="font-size13 text-light-gray">SHABANA A.S.</div>`;



let phylab=`<span class="bg-sky padding-5px-tb padding-15px-lr border-radius-5 margin-10px-bottom text-white font-size16  xs-font-size13">PHYSICS LAB/COMP LAB</span>
                                
<div class="font-size13 text-light-gray">DR. SREENADH S</div>`;


let free=`<span class="bg-purple padding-5px-tb padding-15px-lr border-radius-5 margin-10px-bottom text-white font-size16  xs-font-size13">!!FREE!!!</span>
                                
<div class="font-size13 text-light-gray">YOURSELF</div>`

let eeelab=`<span class="bg-purple padding-5px-tb padding-15px-lr border-radius-5 margin-10px-bottom text-white font-size16  xs-font-size13">EEE WRKSHP</span>
                                
<div class="font-size13 text-light-gray"></div>`

let periods={
    "m1":cprog,
    "t1":cprog,
    "w1":physics,
    "th1":procomm,
    "f1":free,
    "m2":graphics,
    "t2":beee1,
    "w2":procomm,
    "th2":physics,
    "f2":cprog,
    "m3":graphics,
    "t3":beee2,
    "w3":maths,
    "th3":beee2,
    "f3":physics,
    "m4":beee1,
    "t4":maths,
    "w4":graphics,
    "th4":maths,
    "f4":free,
    "m5":physics,
    "t5":eeelab,
    "w5":graphics,
    "th5":cprog,
    "f5":phylab,
    "m6":maths,
    "t6":eeelab,
    "w6":procomm,
    "th6":cprog,
    "f6":phylab,





}


for(let per in periods){
    document.getElementById(per).innerHTML=periods[per];
}
