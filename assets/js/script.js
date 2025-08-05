document.addEventListener('DOMContentLoaded', function() {
    const toggleSwitch = document.getElementById('toggle-mode');
    const body = document.body;

    // Verifica se o usuário já tem uma preferência salva
    const savedMode = localStorage.getItem('mode');
    if (savedMode === 'dark') {
        body.classList.add('dark-mode');
        toggleSwitch.checked = true;
    }

    // Alternar entre os modos
    toggleSwitch.addEventListener('change', function() {
        if (this.checked) {
            body.classList.add('dark-mode');
            localStorage.setItem('mode', 'dark');
        } else {
            body.classList.remove('dark-mode');
            localStorage.setItem('mode', 'light');
        }
    });
});