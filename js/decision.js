function button1click(){
    alert('but1');
    
    var el = document.querySelector("h6");
    if (el) {alert('tt');}
    else alert(document.children);
    el.remove();
    //document.body.appendChild(el2);
}

