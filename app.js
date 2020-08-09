function check(){
    total=0
    var correct= document.getElementById('q1');
    var q2=document.getElementById('q2');
    var q3=document.getElementById('q3');
    var q4=document.getElementById('q4');
    if (correct.checked ==true){
        total++
        alert('Q1 AWNSER IS CORRECT')
    }else{
        alert('Q1 AWNSER IS wrong')
    }


   
    var correct= document.getElementById('Q1');
    var q2=document.getElementById('Q2');
    var q3=document.getElementById('Q3');
    var q4=document.getElementById('Q4');
    if (correct.checked ==true){
        total++
        alert('Q2 AWNSER IS CORRECT')
    }else{
        alert('Q2 AWNSER IS wrong')
    }


    
    var correct= document.getElementById('QQ1');
    var q2=document.getElementById('QQ2');
    var q3=document.getElementById('QQ3');
    var q4=document.getElementById('QQ4');
    if (correct.checked ==true){
        total++
        alert('Q3 AWNSER IS CORRECT')
    }else{
        alert('Q3 AWNSER IS wrong')
    }
    
    var correct= document.getElementById('QQQ1');
    var q2=document.getElementById('QQQ2');
    var q3=document.getElementById('QQQ3');
    var q4=document.getElementById('QQQ4');
    if (correct.checked ==true){
        total++
        alert('Q4 AWNSER IS CORRECT')
    }else{
        alert('Q4 AWNSER IS wrong')
    }
   
    
    var correct= document.getElementById('QQQQ1');
    var q2=document.getElementById('QQQQ2');
    var q3=document.getElementById('QQQQ3');
    var q4=document.getElementById('QQQQ4');
    if (correct.checked ==true){
        total++
        alert('Q5 AWNSER IS CORRECT')
    }else{
        alert('Q5 AWNSER IS wrong')
    }
    alert("your total score is" + total++ +'/5' )
}