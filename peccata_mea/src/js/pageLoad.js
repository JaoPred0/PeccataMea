document.addEventListener("DOMContentLoaded", () => {
    function carregarConteudo(arquivo, container) {
        const caminho = `base/${arquivo}.html`; // Adiciona automaticamente 'base/' e '.html'
        
        fetch(caminho)
            .then(response => {
                if (!response.ok) throw new Error(`Erro HTTP! Status: ${response.status}`);
                return response.text();
            })
            .then(html => {
                const elemento = document.getElementById(container);
                if (elemento) {
                    elemento.innerHTML = html;
                } else {
                    console.warn(`Elemento com ID "${container}" não encontrado.`);
                }
            })
            .catch(error => console.error(`Erro ao carregar ${caminho}:`, error));
    }

    const elementos = [
        { arquivo: 'nav', container: 'container-nav' },
        { arquivo: 'menu', container: 'container-menu' },
        { arquivo: 'pecados', container: 'container-pecados' },
    ];

    elementos.forEach(item => carregarConteudo(item.arquivo, item.container));
});
