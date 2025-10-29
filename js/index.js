document.addEventListener('DOMContentLoaded', () => {

    const navMenu = document.querySelector('nav ul');
    const menuToggle = document.getElementById('menu-toggle-btn');
    const formVoluntario = document.querySelector('.formulario-voluntario');
    

    if (menuToggle && navMenu) {
        menuToggle.addEventListener('click', () => {
            navMenu.classList.toggle('active'); 
        });
    }

    if (formVoluntario) {
        formVoluntario.addEventListener('submit', function(event) {
            event.preventDefault(); 

            const emailInput = document.getElementById('email');
            if (!emailInput || !emailInput.value.includes('@') || emailInput.value.trim().length < 5) {
                alert('Por favor, insira um endereço de e-mail válido.');
                return; 
            }
            
            const parentSection = formVoluntario.closest('.cta-voluntario, .secao-voluntario');
            if (!parentSection) {
                console.error('Seção pai para mensagem de sucesso não encontrada.');
                return;
            }

            const mensagemSucesso = document.createElement('div');
            mensagemSucesso.className = 'mensagem-sucesso';
            mensagemSucesso.textContent = '✅ Sua candidatura foi enviada com sucesso! Agradecemos o seu interesse e entraremos em contato em breve.';
            
            const mensagemExistente = parentSection.querySelector('.mensagem-sucesso');
            if (mensagemExistente) {
                mensagemExistente.remove();
            }

            parentSection.insertBefore(mensagemSucesso, formVoluntario);
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

    function setupButtonHoverEffect() {
        const buttons = document.querySelectorAll(
            '.btn-primary, .btn-secondary, .btn-voluntario, .cta-actions a, .formulario-voluntario button[type="submit"]'
        );

        buttons.forEach(button => {
            button.addEventListener('mouseover', () => {
                button.classList.add('btn-scale-up');
            });

            button.addEventListener('mouseout', () => {
                button.classList.remove('btn-scale-up');
            });
        });
    }

    function setupProjectItemHoverEffect() {
        const projectItems = document.querySelectorAll('.projeto-item');

        projectItems.forEach(item => {
            item.addEventListener('mouseover', () => {
                item.classList.add('card-elevate');
            });

            item.addEventListener('mouseout', () => {
                item.classList.remove('card-elevate');
            });
        });
    }

    setupButtonHoverEffect(); 
    setupProjectItemHoverEffect(); 
});