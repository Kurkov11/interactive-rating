var selected;

document.getElementById('c1').onclick = function(){
    selected = '1';
    document.getElementById('submit-button').href = 'index2.html';
    document.getElementById('c1').style.backgroundColor = 'grey';
    document.getElementById('c1').style.color = 'white';

    document.getElementById('c2').style.backgroundColor = 'hsl(213, 19%, 20%)';
    document.getElementById('c3').style.backgroundColor = 'hsl(213, 19%, 20%)';
    document.getElementById('c4').style.backgroundColor = 'hsl(213, 19%, 20%)';
    document.getElementById('c5').style.backgroundColor = 'hsl(213, 19%, 20%)';
}
document.getElementById('c2').onclick = function(){
    selected = '2';
    document.getElementById('submit-button').href = 'index2.html';
    document.getElementById('c2').style.backgroundColor = 'grey';
    document.getElementById('c2').style.color = 'white';

    document.getElementById('c1').style.backgroundColor = 'hsl(213, 19%, 20%)';
    document.getElementById('c3').style.backgroundColor = 'hsl(213, 19%, 20%)';
    document.getElementById('c4').style.backgroundColor = 'hsl(213, 19%, 20%)';
    document.getElementById('c5').style.backgroundColor = 'hsl(213, 19%, 20%)';
}
document.getElementById('c3').onclick = function(){
    selected = '3';
    document.getElementById('submit-button').href = 'index2.html';
    document.getElementById('c3').style.backgroundColor = 'grey';
    document.getElementById('c3').style.color = 'white';

    document.getElementById('c1').style.backgroundColor = 'hsl(213, 19%, 20%)';
    document.getElementById('c2').style.backgroundColor = 'hsl(213, 19%, 20%)';
    document.getElementById('c4').style.backgroundColor = 'hsl(213, 19%, 20%)';
    document.getElementById('c5').style.backgroundColor = 'hsl(213, 19%, 20%)';
}
document.getElementById('c4').onclick = function(){
    selected = '4';
    document.getElementById('submit-button').href = 'index2.html';
    document.getElementById('c4').style.backgroundColor = 'grey';
    document.getElementById('c4').style.color = 'white';

    document.getElementById('c1').style.backgroundColor = 'hsl(213, 19%, 20%)';
    document.getElementById('c2').style.backgroundColor = 'hsl(213, 19%, 20%)';
    document.getElementById('c3').style.backgroundColor = 'hsl(213, 19%, 20%)';
    document.getElementById('c5').style.backgroundColor = 'hsl(213, 19%, 20%)';
}
document.getElementById('c5').onclick = function(){
    selected = '5';
    document.getElementById('submit-button').href = 'index2.html';
    document.getElementById('c5').style.backgroundColor = 'grey';
    document.getElementById('c5').style.color = 'white';

    document.getElementById('c1').style.backgroundColor = 'hsl(213, 19%, 20%)';
    document.getElementById('c2').style.backgroundColor = 'hsl(213, 19%, 20%)';
    document.getElementById('c3').style.backgroundColor = 'hsl(213, 19%, 20%)';
    document.getElementById('c4').style.backgroundColor = 'hsl(213, 19%, 20%)';
}

// c1
document.getElementById('b1').onmouseover = function(){
    if(selected != '1'){
        document.getElementById('c1').style.backgroundColor = 'hsl(25, 97%, 53%)';
        document.getElementById('c1').style.color = 'white';
    }
    document.body.style.cursor = 'pointer';
}
document.getElementById('b1').onmouseout = function(){
    if(selected != '1'){
        document.getElementById('c1').style.backgroundColor = 'hsl(213, 19%, 20%)';
        document.getElementById('c1').style.color = 'hsl(217, 12%, 63%)';
    }
    document.body.style.cursor = 'auto';
}

// c2
document.getElementById('b2').onmouseover = function(){
    if(selected != '2'){
        document.getElementById('c2').style.backgroundColor = 'hsl(25, 97%, 53%)';
        document.getElementById('c2').style.color = 'white';
    }
    document.body.style.cursor = 'pointer';
}
document.getElementById('b2').onmouseout = function(){
    if(selected != '2'){
        document.getElementById('c2').style.backgroundColor = 'hsl(213, 19%, 20%)';
        document.getElementById('c2').style.color = 'hsl(217, 12%, 63%)';
    }
    
    document.body.style.cursor = 'auto';
}

// c3
document.getElementById('b3').onmouseover = function(){
    if(selected != '3'){
        document.getElementById('c3').style.backgroundColor = 'hsl(25, 97%, 53%)';
        document.getElementById('c3').style.color = 'white';
    }
    document.body.style.cursor = 'pointer';
}
document.getElementById('b3').onmouseout = function(){
    if(selected != '3'){
        document.getElementById('c3').style.backgroundColor = 'hsl(213, 19%, 20%)';
        document.getElementById('c3').style.color = 'hsl(217, 12%, 63%)';
    }
    document.body.style.cursor = 'auto';
}

// c4
document.getElementById('b4').onmouseover = function(){
    if(selected != '4'){
        document.getElementById('c4').style.backgroundColor = 'hsl(25, 97%, 53%)';
        document.getElementById('c4').style.color = 'white';
    }

    document.body.style.cursor = 'pointer';
}
document.getElementById('b4').onmouseout = function(){
    if(selected != '4'){
        document.getElementById('c4').style.backgroundColor = 'hsl(213, 19%, 20%)';
        document.getElementById('c4').style.color = 'hsl(217, 12%, 63%)';
    }
    document.body.style.cursor = 'auto';
}

// c5
document.getElementById('b5').onmouseover = function(){
    if(selected != '5'){
        document.getElementById('c5').style.backgroundColor = 'hsl(25, 97%, 53%)';
        document.getElementById('c5').style.color = 'white';
    }
    document.body.style.cursor = 'pointer';
}
document.getElementById('b5').onmouseout = function(){
    if(selected != '5'){
    document.getElementById('c5').style.backgroundColor = 'hsl(213, 19%, 20%)';
    document.getElementById('c5').style.color = 'hsl(217, 12%, 63%)';
    }
    document.body.style.cursor = 'auto';
}

// button
document.getElementById('submit-button').onmouseover = function(){
    document.getElementById('submit-button').style.backgroundColor = 'white';
    document.getElementById('submit-button').style.color = 'hsl(25, 97%, 53%)';
    document.body.style.cursor = 'pointer';
}
document.getElementById('submit-button').onmouseout = function(){
    document.getElementById('submit-button').style.backgroundColor = 'hsl(25, 97%, 53%)';
    document.getElementById('submit-button').style.color = 'white';
    document.body.style.cursor = 'auto';
}

document.getElementById('submit-button').onclick = function(){
    if(selected == null){
        document.getElementById('error').innerHTML = 'Please choose a number';
    }else{
        localStorage.setItem('yay', selected);
    }
}