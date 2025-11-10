console.log("loops");

//for
//for(starting_point; condition; interval)

//for(let i=0; i<101; i++){
//    console.log(i);
//}

//function multiTable(){
//    for(let i=1;i<=10;i++){
//        console.log(`${2} x ${i} = ${i*2}`);
//    }
//}
//multiTable()

//for(let i=0;i<5;i++){
//    console.log("counter");
//}
//console.log(:"the code continues here")

//example

for(let i=1;i<10;i++){
    if(i==1){
        console.log("Gold Medal");
    }else if(i==2){
        console.log("Silver Medal")
    }else if(i==3){
        console.log("Bronze Medal")
    }else{
        console.log("Runner "+ i)
    }
}

function fillThermo(){
    for(let i=0;i<10;i++){
        let level = document.createElement("div");
        level.classList.add("level");
        console.log(level);

        if(i<3){
            level.style.backgroundColor="red";
        }else if(i>3,i<7){
            level.style.backgroundColor="orange";
        }

        document.getElementById("thermo").appendChild(level)
    }
}

function generateTable(){
    for(let celsius=0;celsius<10;celsius++){
        let farenheit = (celsius*(9/5)) + 32;
        console.log(farenheit)

        document.getElementById("temps").innerHTML+=`
        <tr>
            <td>${celsius}</td>
            <td>${farenheit}</td>
        </tr>
        `
    }
}

generateTable();
