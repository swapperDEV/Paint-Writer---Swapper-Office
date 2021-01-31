let mq = window.matchMedia( "(max-width: 800px)" );
if (mq.matches) {
    alert('For best Performence, change resolution for 800px+')
}
else {
    console.log('Poprawne Okno');
}

window.addEventListener('resize', function(event){
    if (mq.matches) {
        alert('For best Performence, change resolution for 800px+')
    }
    else {
        console.log('Poprawne Okno');
    }
});