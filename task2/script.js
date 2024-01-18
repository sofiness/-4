const consoleLog = document.getElementById("consoleLog");
consoleLog.addEventListener("click", ()=>{
    alert("Метод отображения текста в консоли");   
});

const prompt = document.getElementById("prompt");
prompt.addEventListener("click", ()=>{
    alert("Метод вывода текста в диалоговом окне с запросом на ввод текста");  
});

const AleRt = document.getElementById("AleRt");
AleRt.addEventListener("click", ()=>{
    alert("Метод вывода текста в диалоговом окне");  
});
