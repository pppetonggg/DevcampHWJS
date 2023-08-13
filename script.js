const printHW = document.getElementById('hw');

function hw1_1(){
    //HW 1.1
    let x = document.getElementById("n").value;
    text = "*".repeat(x);
    printHW.innerHTML="";
    printHW.innerHTML += "<p>" + text + "</p>";

}

function hw1_2(){
    //HW 1.2
    let x = document.getElementById("n").value;
    printHW.innerHTML="";

    for(let i=0 ; i<x ; i++){
        text = "*".repeat(x);
        printHW.innerHTML += "<p>" + text + "</p>";
    }
    
}

function hw1_3(){
    //HW 1.3
    let x = document.getElementById("n").value;
    printHW.innerHTML="";

    
    for(let row=1;row<=x;row++){
        text = "";
        for(let i=1;i<=x;i++){
            text += i.toString();
        }
        printHW.innerHTML += "<p>" + text + "</p>";
    }
    
}

function hw1_4(){
    //HW 1.4
    let x = document.getElementById("n").value;
    printHW.innerHTML="";

    
    row = 1;
    for(let i=0;i<x;i++){
        text = row.toString().repeat(x);
        printHW.innerHTML += "<p>"+text+"</p>";
        row++;
    }
    
}

function hw1_5(){
    //HW 1.5
    let x = document.getElementById("n").value;
    printHW.innerHTML="";

    
    row = x;
    for(let i=0;i<x;i++){
        text = row.toString().repeat(x);
        printHW.innerHTML += "<p>"+text+"</p>";
        row--;
    }
    
}

function hw1_6(){
    //HW 1.6
    let x = document.getElementById("n").value;
    printHW.innerHTML="";

    num = 1;
    for(let i=0;i<x;i++){
        row = "";
        for(let j=0;j<x;j++){
            row+=num.toString()
            num++;
        }
        printHW.innerHTML+="<p>"+row+"</p>"
    }
    
}

function hw1_7(){
    //HW 1.7
    let x = document.getElementById("n").value;
    printHW.innerHTML="";

    num = x*x;
    for(let i=0;i<x;i++){
        row = "";
        for(let j=0;j<x;j++){
            row+=num.toString()
            num--;
        }
        printHW.innerHTML+="<p>"+row+"</p>"
    }
    
}

function hw1_8(){
    //HW 1.8
    let x = document.getElementById("n").value;
    printHW.innerHTML="";

    num = 0;
    for(let i=0;i<x;i++){
        printHW.innerHTML+="<p>"+num+"</p>"
        num+=2;
    }
    
}

function hw1_9(){
    //HW 1.9
    let x = document.getElementById("n").value;
    printHW.innerHTML="";

    num = 2;
    for(let i=0;i<x;i++){
        printHW.innerHTML+="<p>"+num+"</p>"
        num+=2;
    }
    
}

function hw1_10(){
    //HW 1.10
    let x = document.getElementById("n").value;
    printHW.innerHTML="";
    round = 1;
    for(let i=0;i<x;i++){
        num = round;
        text = "";
        for(let j=0;j<x;j++){
            text+=num.toString()
            num+=round;
        }
        printHW.innerHTML+="<p>"+text+"</p>"
        round++;
    }
}

function hw1_11(){
    //HW 1.11
    let x = document.getElementById("n").value;
    printHW.innerHTML="";
    round = 1;
    for(let i=0;i<x;i++){
        text = "";
        for(let j=0;j<x;j++){
            if ((j+1)==round){
                text+="_"
            }else{
                text+="*"
            }
        }
        printHW.innerHTML+="<p>"+text+"</p>"
        round++;
    }
}

function hw3_3() {
    // HW 3.3
    let x = document.getElementById("n").value;
    printHW.innerHTML="";
    n = x;

    x = 0;
    y = n;
    for (let i = 0; i < n; i++) {
        text = "";
        x++;
        y--;
        text += "*".repeat(x);
        text += "_".repeat(y);
        // console.log("x:"+x);
        // console.log("y:"+y);
        printHW.innerHTML += "<p>" + text + "</p>";
    }
}
