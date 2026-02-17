const getCategories = () => {
  fetch('https://fakestoreapi.com/products/categories')
    .then(res => res.json())
    .then(data => showCategories(data))
}

const lodedata = data => {
  url = `https://fakestoreapi.com/products/category/${data}`
  fetch(url)
    .then(res => res.json())
    .then(data => console.log(data))
}





const showCategories = categories => {
  const displaycategories = document.getElementById('Categories')

  categories.forEach(category => {
    console.log(category)
    const div = document.createElement('div')
    div.classList.add('categories-btn')

    div.innerHTML = `
      <button 
        onclick='lodedata("${category}")' 
        class="btn btn-outline btn-primary">
        ${category}
      </button>
    `

    displaycategories.appendChild(div)
  })
}

getCategories()
