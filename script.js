const printHW = document.getElementById('hw');

function hw1_1() {
    //HW 1.1
    let x = document.getElementById("n").value;
    text = "*".repeat(x);
    printHW.innerHTML = "";
    printHW.innerHTML += "<p>" + text + "</p>";

}

function hw1_2() {
    //HW 1.2
    let x = document.getElementById("n").value;
    printHW.innerHTML = "";

    for (let i = 0; i < x; i++) {
        text = "*".repeat(x);
        printHW.innerHTML += "<p>" + text + "</p>";
    }

}

function hw1_3() {
    //HW 1.3
    let x = document.getElementById("n").value;
    printHW.innerHTML = "";


    for (let row = 1; row <= x; row++) {
        text = "";
        for (let i = 1; i <= x; i++) {
            text += i.toString();
        }
        printHW.innerHTML += "<p>" + text + "</p>";
    }

}

function hw1_4() {
    //HW 1.4
    let x = document.getElementById("n").value;
    printHW.innerHTML = "";


    row = 1;
    for (let i = 0; i < x; i++) {
        text = row.toString().repeat(x);
        printHW.innerHTML += "<p>" + text + "</p>";
        row++;
    }

}

function hw1_5() {
    //HW 1.5
    let x = document.getElementById("n").value;
    printHW.innerHTML = "";


    row = x;
    for (let i = 0; i < x; i++) {
        text = row.toString().repeat(x);
        printHW.innerHTML += "<p>" + text + "</p>";
        row--;
    }

}

function hw1_6() {
    //HW 1.6
    let x = document.getElementById("n").value;
    printHW.innerHTML = "";

    num = 1;
    for (let i = 0; i < x; i++) {
        row = "";
        for (let j = 0; j < x; j++) {
            row += num.toString()
            num++;
        }
        printHW.innerHTML += "<p>" + row + "</p>"
    }

}

function hw1_7() {
    //HW 1.7
    let x = document.getElementById("n").value;
    printHW.innerHTML = "";

    num = x * x;
    for (let i = 0; i < x; i++) {
        row = "";
        for (let j = 0; j < x; j++) {
            row += num.toString()
            num--;
        }
        printHW.innerHTML += "<p>" + row + "</p>"
    }

}

function hw1_8() {
    //HW 1.8
    let x = document.getElementById("n").value;
    printHW.innerHTML = "";

    num = 0;
    for (let i = 0; i < x; i++) {
        printHW.innerHTML += "<p>" + num + "</p>"
        num += 2;
    }

}

function hw1_9() {
    //HW 1.9
    let x = document.getElementById("n").value;
    printHW.innerHTML = "";

    num = 2;
    for (let i = 0; i < x; i++) {
        printHW.innerHTML += "<p>" + num + "</p>"
        num += 2;
    }

}

function hw1_10() {
    //HW 1.10
    let x = document.getElementById("n").value;
    printHW.innerHTML = "";
    round = 1;
    for (let i = 0; i < x; i++) {
        num = round;
        text = "";
        for (let j = 0; j < x; j++) {
            text += num.toString()
            num += round;
        }
        printHW.innerHTML += "<p>" + text + "</p>"
        round++;
    }
}

function hw1_11() {
    //HW 1.11
    let x = document.getElementById("n").value;
    printHW.innerHTML = "";
    round = 1;
    for (let i = 0; i < x; i++) {
        text = "";
        for (let j = 0; j < x; j++) {
            if ((j + 1) == round) {
                text += "_"
            } else {
                text += "*"
            }
        }
        printHW.innerHTML += "<p>" + text + "</p>"
        round++;
    }
}

function hw1_12() {
    //HW 1.12
    let x = document.getElementById("n").value;
    printHW.innerHTML = "";
    round = x;
    for (let i = 0; i < x; i++) {
        text = "";
        for (let j = 0; j < x; j++) {
            if ((j + 1) == round) {
                text += "_"
            } else {
                text += "*"
            }
        }
        printHW.innerHTML += "<p>" + text + "</p>"
        round--;
    }
}

function hw2_1() {
    //HW 2.1
    let x = document.getElementById("n").value;
    printHW.innerHTML = "";
    star = 1;
    dash = x - 1;
    for (let i = 0; i < x; i++) {
        text = "";
        text += "*".repeat(star);
        text += "_".repeat(dash);
        printHW.innerHTML += "<p>" + text + "</p>";
        star++;
        dash--;
    }
}

function hw2_2() {
    //HW 2.2
    let x = document.getElementById("n").value;
    printHW.innerHTML = "";
    star = x;
    dash = 0;
    for (let i = 0; i < x; i++) {
        text = "";
        text += "*".repeat(star);
        text += "_".repeat(dash);
        printHW.innerHTML += "<p>" + text + "</p>";
        star--;
        dash++;
    }
}

function hw2_3() {
    //HW 2.3
    let x = document.getElementById("n").value;
    printHW.innerHTML = "";
    star = 1;
    dash = x - 1;
    for (let i = 0; i < ((2 * x) - 1); i++) {
        text = "";
        text += "*".repeat(star);
        text += "_".repeat(dash);
        printHW.innerHTML += "<p>" + text + "</p>";

        if ((i + 1) == x) {
            // text = "*".repeat(x);
            // printHW.innerHTML+="<p>"+text+"</p>";
            dash = 1;
            star = x - 1;
            // continue; 
        } else if ((i + 1) > x) {
            star--;
            dash++;
        } else if ((i + 1) < x) {
            dash--;
            star++;
        }

    }
}

function hw2_4() {
    //HW 2.4
    let x = document.getElementById("n").value;
    printHW.innerHTML = "";
    num = 1;
    dash = x - 1;
    for (let i = 0; i < ((2 * x) - 1); i++) {
        text = "";
        text += num.toString().repeat(num);
        text += "-".repeat(dash);
        printHW.innerHTML += "<p>" + text + "</p>";

        if ((i + 1) == x) {
            // text = "*".repeat(x);
            // printHW.innerHTML+="<p>"+text+"</p>";
            dash = 1;
            num = x - 1;
            // continue; 
        } else if ((i + 1) > x) {
            num--;
            dash++;
        } else if ((i + 1) < x) {
            dash--;
            num++;
        }

    }
}

function hw2_5() {
    //HW 2.5
    let x = document.getElementById("n").value;
    printHW.innerHTML = "";
    underscore = x - 1;
    star = 1;
    for (let i = 0; i < x; i++) {
        text = "";
        text += "_".repeat(underscore);
        text += "*".repeat(star);
        printHW.innerHTML += "<p>" + text + "</p>"
        underscore--;
        star++;
    }
}

function hw2_6() {
    //HW 2.6
    let x = document.getElementById("n").value;
    printHW.innerHTML = "";
    underscore = 0;
    star = x;
    for (let i = 0; i < x; i++) {
        text = "";
        text += "_".repeat(underscore);
        text += "*".repeat(star);
        printHW.innerHTML += "<p>" + text + "</p>"
        underscore++;
        star--;
    }
}

function hw2_7() {
    //HW 2.7
    let x = document.getElementById("n").value;
    printHW.innerHTML = "";
    underscore = x - 1;
    star = 1;
    for (let i = 0; i < ((2 * x) - 1); i++) {
        text = "";
        text += "_".repeat(underscore);
        text += "*".repeat(star);
        printHW.innerHTML += "<p>" + text + "</p>"

        if ((i + 1) == x) {
            underscore = 1;
            star = x - 1
        } else if ((i + 1) > x) {
            underscore++;
            star--;
        } else if ((i + 1) < x) {
            underscore--;
            star++;
        }
    }
}
  
function hw2_8() {
    // HW 2.8
    let x = document.getElementById("n").value;
    printHW.innerHTML = "";
    let ans = ''
    let num = x
    let sum = 1
    for (let i = 0; i < x; i++) {
        for (let j = 0; j < x; j++) {
            if(num-1 > j){
                ans += "-"
            }
            else{
                ans += sum 
                sum++
            }
        }
        num--
        ans += "<br>"
    }
    for (let i = 0; i < x-1; i++) {
        for (let j = 0; j < x; j++) {
            if (i < j ) {
                ans += sum 
                sum++
            } else {
                
                ans += "-"
            }
        }
        ans += "<br>"
    }
    printHW.innerHTML = "<p>"+ans+"</p>";
}

function hw2_9(){
    // HW 2.9
    let x = document.getElementById("n").value;
    printHW.innerHTML = "";
    let ans = ''
    let num = x
    for (let i = 0; i < x; i++) {
        ans = ''
        for (let j = 0; j < x; j++) {
            if(num-1 > j){
                ans += "-"
            }
            else{
                ans += "*"
            }  
        }
        for (let j = 0; j < x-1; j++) {
            if (i <= j ) {
                ans += "-"
               
            } else {
                ans += "*"
            }
        }
        printHW.innerHTML+="<p>"+ans+"</p>"
        num--
    }
}

function hw2_10(){
    // HW 2.10
    let x = document.getElementById("n").value;
    printHW.innerHTML = "";

    for (let i = 1; i <= x; i++) {
        let line = '';
        
        if (i === 1) {
            line += '-'.repeat(x - i);
            line += '*';
            line += '-'.repeat(x - i);
        } else {
            line += '-'.repeat(x - i);
            line += '*'.repeat((i - 1) * 2 + 1);
            line += '-'.repeat(x - i);
        }
        printHW.innerHTML+="<p>"+line+"</p>";
    }

}

function hw3_1(){
    // HW 3.1
    let x = document.getElementById("n").value;
    printHW.innerHTML = "";
    let ans = ''
    let num = x
    for (let i = 0; i < x-1; i++) {
        for (let j = 0; j < x; j++) {
            if(num-1 > j){
                ans += "-"
            }
            else{
                ans += "*"
            }  
        }
        for (let j = 0; j < x-1; j++) {
            if (i <= j ) {
                ans += "-"
               
            } else {
                ans += "*"
            }
        }
        ans += "<br>"
        num--
    }
    num = x-1
    for (let i = 0; i < x; i++) {
        for (let j = 0; j < x; j++) {
            if (i <= j ) {
                ans += "*"
               
            } else {
                
                ans += "-"
            }
        }
        for (let j = 0; j < x-1; j++) {
           
            if(num > j){
                ans += "*"
            }
            else{
                ans += "-"
            }    
        }
        num--
        ans += "<br>"
    }
    printHW.innerHTML=ans;
}



function hw3_3() {
    // HW 3.3
    let x = document.getElementById("n").value;
    printHW.innerHTML = "";
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
