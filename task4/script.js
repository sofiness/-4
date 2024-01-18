const btw = document.getElementById("btw");
btw.addEventListener("click", (event)=>{
    const name  =  prompt("Введите ссылку", 'Ссылка');
    btw.textContent = name;
    event.preventDefault;
});