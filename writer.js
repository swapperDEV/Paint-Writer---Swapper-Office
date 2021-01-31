const area = document.querySelector('textarea')
area.value = localStorage.getItem("textSave");
area.addEventListener('keyup', () => {
    localStorage.setItem("textSave", area.value)
})