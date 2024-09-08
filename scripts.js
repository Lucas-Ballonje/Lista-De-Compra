const ul = document.querySelector(".buyItens");
const input = document.querySelector("#item");
const form = document.querySelector("form");
const btnDelete = document.querySelector(".delete")

form.onsubmit = (event) => {
    event.preventDefault();

    const itemText = input.value;
    
    if (itemText.trim() !== "") {
        const newItem = document.createElement("li");
        const newDescricao = document.createElement("div");
        const inputCreated = document.createElement("input");
        const span = document.createElement("span");
        const button = document.createElement("button"); // Criando o botão
        const img = document.createElement("img"); // Criando o elemento de imagem

        // Configurando os atributos e classes corretamente
        newItem.classList.add("contentItem");
        newDescricao.classList.add("descricaoItem");

        inputCreated.type = "checkbox"; // Corrigido o tipo do input
        span.textContent = itemText;

        img.src = "img/Frame.svg"; // Substitua pelo caminho correto da sua imagem
        img.alt = "Ícone de remover item"; // Texto alternativo para a imagem
        button.appendChild(img)

        // Estrutura correta do novo item
        newDescricao.appendChild(inputCreated);  // Adiciona o checkbox
        newDescricao.appendChild(span);          // Adiciona o texto do item
        newItem.appendChild(newDescricao);       // Adiciona a descrição ao item da lista
        newItem.appendChild(button); // Adiciona o botão ao item


        ul.appendChild(newItem); // Adiciona o novo item à lista

        input.value = ""; // Limpa o campo de entrada
    }
};

ul.addEventListener("click", (event) => {
        
    if(event.target.closest(".delete")){
        const listItem = event.target.closest("li");
        listItem.remove()
    }
    
    
})

