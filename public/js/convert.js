const Name=$("h1").attr("name");

let idNum = -1;
let idNum2 = -1;
$("#sel1").on("change", function(){
    let val1=$("#num1").val();
    let op1=$("#sel1").val();
    let op2=$("#sel2").val();
    if(op1==0){
        $("#num1").attr("placeholder", "Select Unit");
        $("#num1").attr("readonly","");
    }
    if(op1!=0){
        $("#num1").removeAttr("readonly");
        $("#num1").attr("placeholder", "Enter Number");
        $("#"+idNum).removeAttr("disabled");
        let totalOptions = ($("option").length-2)/2; //number of units used
        idNum = Number(op1)+totalOptions;
        $("#"+idNum).attr("disabled","");
        if(val1!=0){
            let val2=calculate(val1,op1,op2);
            console.log(val2);
            $("#num2").val(val2);
        }
    }
});

$("#sel2").on("change", function(){
    let val1=$("#num1").val();
    let op1=$("#sel1").val();
    let op2=$("#sel2").val();
    if(op2==0){
        $("#num2").attr("placeholder", "Select Unit");
        $("#num2").attr("readonly","");
    }
    if(op2!=0){
        $("#num2").removeAttr("readonly");
        $("#num2").attr("placeholder", "Enter Number");
        $("#"+idNum2).removeAttr("disabled");
        idNum2 = Number(op2);
        $("#"+idNum2).attr("disabled","");
        if(val1!=0){
            let val2=calculate(val1,op1,op2);
            console.log(val2);
            $("#num2").val(val2);
        }
    }
});

$("#reset").on("click", function(){
    $("form").trigger("reset");
    $("#num1").attr("placeholder", "Select Unit");
    $("#num1").attr("readonly","");
    $("#num2").attr("placeholder", "Select Unit");
    $("#num2").attr("readonly","");
    $("#"+idNum).removeAttr("disabled");
    $("#"+idNum2).removeAttr("disabled");
});

$("#num1").on("keyup", function(){
    let val1=$("#num1").val();
    let op1=$("#sel1").val();
    let op2=$("#sel2").val();
    if(val1!=0){
        let val2=calculate(val1,op1,op2);
        console.log(val2);
        $("#num2").val(val2);
    }
    else{
        $("#num2").val(0);
    }
});
$("#num2").on("keyup", function(){
    let val2=$("#num2").val();
    let op1=$("#sel2").val();
    let op2=$("#sel1").val();
    if(val2!=0){
        let val1=calculate(val2,op1,op2);
        console.log(val1);
        $("#num1").val(val1);
    }
    else{
        $("#num1").val(0);
    }
});

function calculate(v, o1, o2){
    let v2=0;
    //length
    if(Name=="Length"){
        if(o1==1){
            if(o2==2)   v2 = Number(bigDecimal.divide(v,"100"));
            else if(o2==3)  v2 = Number(bigDecimal.multiply(v,"0.032808399"));   
            else if(o2==4)  v2 = Number(bigDecimal.multiply(v,"0.393700787"));
            return v2;
        }
        else if(o1==2){
            if(o2==1)   v2 = Number(bigDecimal.multiply(v,"100"));
            else if(o2==3)  v2 = Number(bigDecimal.multiply(v,"3.2808399"));
            else if(o2==4)  v2 = Number(bigDecimal.multiply(v,"39.3700787"));
            return v2;
        }
        else if(o1==3){
            if(o2==1)   v2 = Number(bigDecimal.divide(v,"0.032808399"));  
            else if(o2==2)  v2 = Number(bigDecimal.divide(v,"3.2808399"));
            else if(o2==4)  v2 = Number(bigDecimal.multiply(v,"12"));
            return v2;
        }
        else if(o1==4){
            if(o2==1)   v2 = Number(bigDecimal.divide(v,"0.393700787"));
            else if(o2==2)  v2 = Number(bigDecimal.divide(v,"39.3700787"));
            else if(o2==3)  v2 = Number(bigDecimal.divide(v,"12"));
            return v2;
        }
    }
    //Weight
    else if(Name=="Weight"){
        if(o1==1){
            if(o2==2)   v2 = Number(bigDecimal.divide(v,"1000"));
            else if(o2==3)  v2 = Number(bigDecimal.multiply(v,"0.0022046226"));   
            else if(o2==4)  v2 = Number(bigDecimal.multiply(v,"0.0352739619"));
            return v2;
        }
        else if(o1==2){
            if(o2==1)   v2 = Number(bigDecimal.multiply(v,"1000"));
            else if(o2==3)  v2 = Number(bigDecimal.multiply(v,"2.2046226218"));
            else if(o2==4)  v2 = Number(bigDecimal.multiply(v,"35.2739619496"));
            return v2;
        }
        else if(o1==3){
            if(o2==1)   v2 = Number(bigDecimal.divide(v,"0.0022046226"));  
            else if(o2==2)  v2 = Number(bigDecimal.divide(v,"2.2046226218"));
            else if(o2==4)  v2 = Number(bigDecimal.multiply(v,"16"));
            return v2;
        }
        else if(o1==4){
            if(o2==1)   v2 = Number(bigDecimal.divide(v,"0.0352739619"));
            else if(o2==2)  v2 = Number(bigDecimal.divide(v,"35.2739619496"));
            else if(o2==3)  v2 = Number(bigDecimal.divide(v,"16"));
            return v2;
        }
    }
    //temperature
    else if(Name=="Temperature"){
        if(o1==1){
            if(o2==2)   v2 = Number(bigDecimal.add(bigDecimal.multiply(v,"1.8"),"32"));
            else if(o2==3)  v2 = Number(bigDecimal.add(v,"273.15"));   
            return v2;
        }
        else if(o1==2){
            if(o2==1)   v2 = Number(bigDecimal.divide(bigDecimal.multiply(bigDecimal.subtract(v,"32"),"5"),"9"));
            else if(o2==3)  v2 = Number(bigDecimal.divide(bigDecimal.multiply(bigDecimal.add(v,"459.67"),"5"),"9"));
            return v2;
        }
        else if(o1==3){
            if(o2==1)   v2 = Number(bigDecimal.subtract(v,"273.15"));  
            else if(o2==2)  v2 = Number(bigDecimal.subtract(bigDecimal.multiply(v,"1.8"),"459.67"));
            return v2;
        }
    }
    //speed
    else if(Name=="Speed"){
        if(o1==1){
            if(o2==2)   v2 = Number(bigDecimal.divide(bigDecimal.multiply(v,"1000"),"3600"));
            else if(o2==3)  v2 = Number(bigDecimal.multiply(v,"0.6213711922"));   
            return v2;
        }
        else if(o1==2){
            if(o2==1)   v2 = Number(bigDecimal.divide(bigDecimal.multiply(v,"3600"),"1000"));
            else if(o2==3)  v2 = Number(bigDecimal.multiply(v,"2.2369362921"));
            return v2;
        }
        else if(o1==3){
            if(o2==1)   v2 = Number(bigDecimal.divide(v,"0.6213711922"));  
            else if(o2==2)  v2 = Number(bigDecimal.divide(v,"2.2369362921"));
            return v2;
        }
    }
}
