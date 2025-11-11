// Espera o documento carregar para rodar o script
document.addEventListener('DOMContentLoaded', () => {

    // --- Lógica do Menu Móvel (Hamburger) ---
    const menuToggle = document.getElementById('mobile-menu-toggle');
    const navWrapper = document.querySelector('.nav-wrapper');

    menuToggle.addEventListener('click', () => {
        // Adiciona ou remove a classe 'open' para mostrar/esconder o menu
        navWrapper.classList.toggle('open');
    });

    // --- Lógica da Troca de Tema (Dark/Light) ---
    const themeToggleBtn = document.getElementById('theme-toggle');
    const body = document.body;

    // Função para aplicar o tema salvo no localStorage
    const applySavedTheme = () => {
        const savedTheme = localStorage.getItem('theme');
        
        // O padrão é escuro, então só precisamos checar se é 'light'
        if (savedTheme === 'light') {
            body.classList.add('light-mode');
            themeToggleBtn.textContent = 'Modo Escuro';
        } else {
            body.classList.remove('light-mode');
            themeToggleBtn.textContent = 'Modo Claro';
        }
    };

    // Adiciona o evento de clique ao botão de tema
    themeToggleBtn.addEventListener('click', () => {
        // Adiciona/remove a classe 'light-mode' do <body>
        body.classList.toggle('light-mode');

        // Atualiza o localStorage e o texto do botão
        if (body.classList.contains('light-mode')) {
            localStorage.setItem('theme', 'light');
            themeToggleBtn.textContent = 'Modo Escuro';
        } else {
            localStorage.setItem('theme', 'dark'); // Salva como 'dark'
            themeToggleBtn.textContent = 'Modo Claro';
        }
    });

    // Aplica o tema salvo assim que a página carrega
    applySavedTheme();

});