async function listRepos(username) {
  try {
    const data = await fetch(`https://api.github.com/users/${username}/repos?type=owner&sort=updated`)
    const repos = await data.json()
    const content = document.querySelector('#content')
    const markup = repos.map(repo => (
      `<li>
        <a href=${repo.html_url}>${repo.name}</a>
      </li>`
    )).join('')

    content.innerHTML = markup

  } catch (err) {
    console.log(err)
  }
}

listRepos('Jack11709')
