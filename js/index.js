document.addEventListener('DOMContentLoaded', function() {
    const navMenu = document.querySelector('nav ul');
    const menuToggle = document.getElementById('menu-toggle-btn');
    const formVoluntario = document.querySelector('.formulario-voluntario');
    const ctaSection = document.querySelector('.cta-voluntario');
    

    if (menuToggle && navMenu) {
        menuToggle.addEventListener('click', () => {
            navMenu.classList.toggle('active'); 
        });
    }

    
    if (formVoluntario && ctaSection) {
        formVoluntario.addEventListener('submit', function(event) {
            event.preventDefault(); 

            const emailInput = document.getElementById('email');
            if (!emailInput.value.includes('@') || emailInput.value.trim().length < 5) {
                alert('Por favor, insira um endereço de e-mail válido.');
                return; 
            }
            
            const mensagemSucesso = document.createElement('div');
            mensagemSucesso.className = 'mensagem-sucesso';
            mensagemSucesso.textContent = '✅ Sua candidatura foi enviada com sucesso! Agradecemos o seu interesse e entraremos em contato em breve.';
            
            const mensagemExistente = ctaSection.querySelector('.mensagem-sucesso');
            if (mensagemExistente) {
                mensagemExistente.remove();
            }

            ctaSection.insertBefore(mensagemSucesso, formVoluntario);
            formVoluntario.reset();

            setTimeout(() => {
                mensagemSucesso.remove();
            }, 7000); 
            
            const formData = new FormData(formVoluntario);
            const data = {};
            formData.forEach((value, key) => { data[key] = value; });
            console.log('Formulário Enviado (Simulação):', data);
        });
    }
});