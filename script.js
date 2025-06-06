let planted = false;
let watered = 0;
const seed = document.getElementById('seed');
const tree = document.getElementById('tree');
const messageElement = document.getElementById('message');

function plantTree() {
    if (!planted) {
        seed.style.display = 'none';
        tree.style.width = '50px';
        tree.style.height = '70px';
        tree.style.opacity = '0.2';
        messageElement.textContent = 'Semente plantada!';
        planted = true;
    } else {
        messageElement.textContent = 'Você já plantou uma semente!';
    }
}

function waterTree() {
    if (planted) {
        watered++;
        messageElement.textContent = `Árvore regada ${watered} vez(es).`;
        if (watered >= 3) {
            tree.style.width = '90px';
            tree.style.height = '200px';
            tree.style.opacity = '0.6';
        }
        if (watered >= 6) {
            tree.style.width = '100px';
            tree.style.height = '300px';
            tree.style.opacity = '5';
            messageElement.textContent = 'Sua árvore está crescendo forte e saudável!';
        }
    } else {
        messageElement.textContent = 'Você precisa plantar uma semente primeiro!';
    }
}