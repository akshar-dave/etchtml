// initialize quicklink js
window.addEventListener('load', function(){
    quicklink.listen();
});



// helper functions
function $(elem){
    return document.querySelectorAll(elem);
}
function log(message){
    return console.log(message);
}