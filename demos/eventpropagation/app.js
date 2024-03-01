


document.getElementById('B').addEventListener('click', function(e) {

    //wat is deze!
    console.log(this);
    e.stopPropagation();

})

document.getElementById('D').addEventListener('click', function(e) {

    console.log(this);
   
});