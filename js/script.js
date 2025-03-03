const form = document.querySelector('.early-access form');
const emailInput = document.querySelector('.early-access input[type="email"]');

form.addEventListener('submit', function (e){
    e.preventDefault();

    const email = emailInput.value.trim();

    if(!email) {
        alert('Por favor, insira um endereço de e-mail.');
    }

    else {
        alert('Inscrição realizada com sucesso!');
        emailInput.value = '';
    }
}
)

