const mockedPosts = [
    {
      id: 1,
      foto: document.getElementsByName('img').innerHTML = "<img src='../imagens_feed/perfil1.jpeg' width='48'>",
      usuário: 'Pedro Fernandes',
      data: '15 de Março',
      content: 'Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin'
    },
    {
      id: 2,
      foto: document.getElementsByName('img').innerHTML = "<img src='../imagens_feed/perfil2.svg' width='48'>",
      usuário: 'Julia Alves',
      data: '13 de Março',
      content: 'Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin'},
    {
      id: 3,
      foto: document.getElementsByName('img').innerHTML = "<img src='../imagens_feed/perfil2.svg' width='48'>",
      usuário: 'Julia Alves',
      data: '12 de Março',
      content: 'Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin'},
    {
      id: 4,
      foto: document.getElementsByName('img').innerHTML = "<img src='../imagens_feed/perfil1.jpeg' width='48'>",
      usuário: 'Pedro Fernandes',
      data: '15 de Março',
      content: 'Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin'},
  ]

const renderPosts = () => {
    const postContainer = document.querySelector('.lista_posts')
    mockedPosts.forEach(post => {
        const postElement = document.createElement('div')
        postElement.classList.add('post')
        postElement.innerHTML = `
            <h2>${post.foto}</h2>
            <h3>${post.usuário}</h3>
            <h5>${post.data}</h5>
            <br>
            <p>${post.content.slice(0, 350)}</p>
            <br>
        `
        postContainer.appendChild(postElement)
    })
}

renderPosts()
