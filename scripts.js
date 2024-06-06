document.getElementById('more').addEventListener('click', function() {
    var element = document.getElementsByClassName('moreinfo');
    for (var i = 0; i < element.length; i++) {
        if(element[i].style.display === 'block') {
            element[i].style.display = 'none';
        }else {
            element[i].style.display = 'block';
        } 
    }
}) ;


document.getElementById('contact-me').addEventListener('click', function() {
    var element = document.getElementsByClassName('contakt');
    for (var i = 0; i < element.length; i++) {
        if(element[i].style.display === 'block') {
            element[i].style.display = 'none';
        }else {
            element[i].style.display = 'block';
        } 
    }
}) ;

document.getElementById('next').addEventListener('click' ,function() {
    var selection2 = document.getElementById('selection-2');
    var selection1 = document.getElementById('selection-1');
    if (selection2.style.display === 'none') {
        selection2.style.display = 'flex';
        selection1.style.display = 'none';
    } else {
        selection2.style.display = 'flex';
        selection1.style.display = 'none';
    }
})

document.getElementById('prev').addEventListener('click' ,function() {
    var selection2 = document.getElementById('selection-2');
    var selection1 = document.getElementById('selection-1');
    if (selection1.style.display === 'none') {
        selection1.style.display = 'flex';
        selection2.style.display = 'none';
    } else {
        selection1.style.display = 'flex';
        selection2.style.display = 'none';
    }
})
 