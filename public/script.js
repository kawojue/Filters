import products from "./products.js"

const productsContainer = document.querySelector('#products-container')
const searchInput = document.querySelector('#search-input')
const priceRange = document.querySelector('.price-range')
const rangeValue = document.querySelector('.range-value')
const btns = document.querySelectorAll('.btn-container button')

window.addEventListener('DOMContentLoaded', () => {
    displayProducts("all")
})

btns.forEach(btn => {
    btn.addEventListener('click', e => {
        displayProducts(e.target.dataset.id)
    })
})

priceRange.addEventListener('input', e => {
    displayProducts(e.target.value, "price")
    rangeValue.innerHTML = `< $${e.target.value}`
})

searchInput.addEventListener('keyup', e => {
    displayProducts(e.target.value.toLowerCase(), "search")
})

function displayProducts(value, filterBy = "company") {
    const newProducts = products.filter(product => {
        if (filterBy === "company") {
            if (value === "all") {
                return product
            }
            return product.company === value
        } else if (filterBy === "price") {
            return product.price < value
        } else if (filterBy === "search") {
            return product.title.toLowerCase().includes(value) || product.company.includes(value);
        } else {
            return null
        }
    })
    productsContainer.innerHTML = newProducts.map(product => {
        const {
            title,
            image,
            price
        } = product
        return `
            <div class="product-container-center">
                <img src="${image}"
                        alt="">
                <footer class="product-container-footer">
                        <p>${title}</p>
                        <span>$${price}</span>
                </footer>
            </div>
        `
    }).join('')
}