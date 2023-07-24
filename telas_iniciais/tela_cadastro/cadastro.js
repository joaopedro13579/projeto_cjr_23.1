let foto = document.getElementById('foto')
let arquivo = document.getElementById('foto_perfil')

foto.addEventListener('click', () => {
    arquivo.click();
})

arquivo.addEventListener('change', () => {

    let leitura = new FileReader();

    leitura.onload = () => {
        foto.src = leitura.result;
    }

    leitura.readAsDataURL(arquivo.files[0]);
});