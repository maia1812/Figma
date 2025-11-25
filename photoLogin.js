document.addEventListener("DOMContentLoaded", () => {

    const nome = document.getElementById('nome')
    const senha = document.getElementById('senha')
    const recado = document.getElementById('recado')
    const botao = document.getElementById('botao')
    const form = document.querySelector(".login")

    form.addEventListener('submit', (e) => {
        e.preventDefault()
    })

     botao.addEventListener("click", () => {

        if (nome.value.trim() == "" && senha.value.trim() == "") {
            recado.textContent = "Preencha todos os campos!";
            recado.style.color = "red";
            console.log("Vazio")
            return;
        }

        if (nome.value === "admin" && senha.value === "123") {
            document.location.href = "photoGallery.html"
            console.log("Certo")
        } else {
            recado.textContent = "Usuário ou senha incorretos!";
            recado.style.color = "red";
            console.log("errado")
        }
    }) 
})