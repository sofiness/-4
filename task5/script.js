document.addEventListener("DOMContentLoaded", function () {
    
    var form = document.querySelector('form');
    form.addEventListener('submit', function (event) {
        
        event.preventDefault();

        
        var inputText = document.querySelector('input[type="text"]').value;

        
        console.log("Введенный текст: " + inputText);

        
        var duplicateField = document.getElementById("duplicateField");
        duplicateField.innerText = inputText;

        
        document.querySelector('input[type="text"]').value = "";
    });
});