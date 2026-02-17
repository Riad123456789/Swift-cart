const getCategories = () => {
  fetch('https://fakestoreapi.com/products/categories')
    .then(res => res.json())
    .then(data => showCategories(data))
}

const getproducts = () => {
  fetch('https://fakestoreapi.com/products')
    .then(res => res.json())
    .then(data => displayproduct(data))
}

const displayproduct = data => {
  console.log(data)
 const displayproduct = document.getElementById('AllProducts')
  displayproduct.innerHTML = ''
  data.forEach(product => {
    const div = document.createElement('div')
    div.classList.add('product-card')

    div.innerHTML = `
       <div class="shadow hover:shadow-lg transition flex flex-col">
            <div class="bg-gray-200 rounded-t-lg">
              <img
                src=${[product.image]}
                alt="Product 1"
                class="w-44 h-52 mx-auto p-3"
              />
            </div>
            <div class="p-4">
              <div class="flex items-center justify-between mb-2">
                <p
                  class="bg-blue-300 text-[10px] rounded-lg px-2 text-blue-700 font-semibold"
                >
                  ${product.category}
                </p>
                <div class="flex items-center gap-1">
                  <i class="fa-solid fa-star text-[#fed507]"></i>
                  <p class="text-xs">${product.rating.rate} (${
                     product.rating.count
                  })</p>
                </div>
              </div>
              <div class="mb-4 ">
                <p class="text-xs font-semibold py-3">
                  ${product.title}
                </p>
                <h1 class="pt-1 text-sm font-bold">$${product.price}</h1>
              </div>
              <div class="flex justify-between items-center gap-3 mt-auto">
                <button
                  class="flex-1 flex items-center justify-center gap-2 text-xs border border-gray-300 rounded-md px-3 py-1 hover:bg-gray-100 transition"
                >
                  <i class="fa-regular fa-eye"></i>
                  Details
                </button>
                <button
                  class="flex-1 flex items-center justify-center gap-2 text-xs bg-blue-500 text-white rounded-md px-3 py-1 hover:bg-blue-600 transition"
                >
                  <i class="fa-solid fa-cart-shopping"></i>
                  Add
                </button>
              </div>
            </div>
          </div>
    `
    displayproduct.appendChild(div)
  })
}

const lodedata = data => {
  url = `https://fakestoreapi.com/products/category/${data}`
  fetch(url)
    .then(res => res.json())
    .then(data => Displaylodedata(data))
}

const Displaylodedata = data => {
  const displayproduct = document.getElementById('AllProducts')
  displayproduct.innerHTML = ''
  data.forEach(product => {
    const div = document.createElement('div')
    div.classList.add('product-card')

    div.innerHTML = `
       <div class="shadow hover:shadow-lg transition flex flex-col">
            <div class="bg-gray-200 rounded-t-lg">
              <img
                src=${[product.image]}
                alt="Product 1"
                class="w-44 h-52 mx-auto p-3"
              />
            </div>
            <div class="p-4">
              <div class="flex items-center justify-between mb-2">
                <p
                  class="bg-blue-300 text-[10px] rounded-lg px-2 text-blue-700 font-semibold"
                >
                  ${product.category}
                </p>
                <div class="flex items-center gap-1">
                  <i class="fa-solid fa-star text-[#fed507]"></i>
                  <p class="text-xs">${product.rating.rate} (${
      product.rating.count
    })</p>
                </div>
              </div>
              <div class="mb-4 ">
                <p class="text-xs font-semibold py-3">
                  ${product.title}
                </p>
                <h1 class="pt-1 text-sm font-bold">$${product.price}</h1>
              </div>
              <div class="flex justify-between items-center gap-3 mt-auto">
                <button
                  class="flex-1 flex items-center justify-center gap-2 text-xs border border-gray-300 rounded-md px-3 py-1 hover:bg-gray-100 transition"
                >
                  <i class="fa-regular fa-eye"></i>
                  Details
                </button>
                <button
                  class="flex-1 flex items-center justify-center gap-2 text-xs bg-blue-500 text-white rounded-md px-3 py-1 hover:bg-blue-600 transition"
                >
                  <i class="fa-solid fa-cart-shopping"></i>
                  Add
                </button>
              </div>
            </div>
          </div>
    `
    displayproduct.appendChild(div)
  })
}

const showCategories = categories => {
  const displaycategories = document.getElementById('Categories')

  categories.forEach(category => {
    const div = document.createElement('div')
    div.classList.add('categories-btn')

    div.innerHTML = `
      <button 
        onclick="lodedata('${category}')" 
        class="btn btn-outline btn-primary">
        ${category}
      </button>
    `

    displaycategories.appendChild(div)
  })
}

getCategories()
getproducts()
