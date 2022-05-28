function add_roll_number(){
    let roll_number = prompt('Enter Your RolNo:');
    document.getElementById('r_num').innerHTML = roll_number;
}

function add(){
    
    let num_1 = Number(document.getElementById('data1').value);
    let num_2 = Number(document.getElementById('data2').value);
    if(num_1 != 0 && num_2 != 0){
        let result1 = num_1 +num_2
        document.getElementById('result').innerHTML = result1; 
    }
    else{
        alert('Please input Values');
    }

}

function subtract(){
    let num_1 = Number(document.getElementById('data1').value);
    let num_2 = Number(document.getElementById('data2').value);
    if(num_1 !=0 && num_2 != 0){
    let result1 = num_1 - num_2
    document.getElementById('result').innerHTML = result1;
    }
    else{
        alert('Please input Values');
    }
}

function multiply(){
    let num_1 = Number(document.getElementById('data1').value);
    let num_2 = Number(document.getElementById('data2').value);
    if(num_1 != 0 && num_2 != 0){
        let result1 = num_1 *num_2
        document.getElementById('result').innerHTML = result1; 
    }
    else{
        alert('Please input Values');
    }
}

function divide(){
    let num_1 = Number(document.getElementById('data1').value);
    let num_2 = Number(document.getElementById('data2').value);
    if(num_1 != 0 && num_2 != 0){
        let result1 = num_1 /num_2
        document.getElementById('result').innerHTML = result1; 
    }
    else{
        alert('Please input Values');
    }
}