{\rtf1\ansi\ansicpg1252\cocoartf2870
\cocoatextscaling0\cocoaplatform0{\fonttbl\f0\fswiss\fcharset0 Helvetica;}
{\colortbl;\red255\green255\blue255;}
{\*\expandedcolortbl;;}
\margl1440\margr1440\vieww11520\viewh8400\viewkind0
\pard\tx720\tx1440\tx2160\tx2880\tx3600\tx4320\tx5040\tx5760\tx6480\tx7200\tx7920\tx8640\pardirnatural\partightenfactor0

\f0\fs24 \cf0 // Gallery functionality\
const thumbs = document.querySelectorAll('.thumb');\
const images = document.querySelectorAll('.gallery-image');\
\
thumbs.forEach(thumb => \{\
    thumb.addEventListener('click', () => \{\
        const index = thumb.dataset.index;\
        \
        // Update thumbs\
        thumbs.forEach(t => t.classList.remove('active'));\
        thumb.classList.add('active');\
        \
        // Update images\
        images.forEach(img => img.classList.remove('active'));\
        images[index].classList.add('active');\
    \});\
\});\
\
// Size selector\
const sizeBtns = document.querySelectorAll('.size-btn');\
const priceDisplay = document.querySelector('.price-current');\
const priceUnit = document.querySelector('.price-unit');\
const btnPrice = document.getElementById('btnPrice');\
const customSizeInput = document.getElementById('customSize');\
\
sizeBtns.forEach(btn => \{\
    btn.addEventListener('click', () => \{\
        sizeBtns.forEach(b => b.classList.remove('active'));\
        btn.classList.add('active');\
        \
        const size = btn.dataset.size;\
        const price = btn.dataset.price;\
        \
        if (size === 'custom') \{\
            priceDisplay.textContent = 'Custom Quote';\
            priceUnit.textContent = '';\
            btnPrice.textContent = '\'97 Request Quote';\
            if (customSizeInput) customSizeInput.style.display = 'block';\
        \} else \{\
            priceDisplay.textContent = '$' + price;\
            priceUnit.textContent = '/ ' + size.replace('x', ' \'d7 ') + ' ft';\
            btnPrice.textContent = '\'97 $' + price;\
            if (customSizeInput) customSizeInput.style.display = 'none';\
        \}\
    \});\
\});\
\
// Quantity selector\
const qtyInput = document.getElementById('quantity');\
const qtyMinus = document.getElementById('qtyMinus');\
const qtyPlus = document.getElementById('qtyPlus');\
\
qtyMinus.addEventListener('click', () => \{\
    let val = parseInt(qtyInput.value);\
    if (val > 1) qtyInput.value = val - 1;\
    updateButtonPrice();\
\});\
\
qtyPlus.addEventListener('click', () => \{\
    let val = parseInt(qtyInput.value);\
    if (val < 99) qtyInput.value = val + 1;\
    updateButtonPrice();\
\});\
\
qtyInput.addEventListener('change', () => \{\
    let val = parseInt(qtyInput.value);\
    if (val < 1) qtyInput.value = 1;\
    if (val > 99) qtyInput.value = 99;\
    updateButtonPrice();\
\});\
\
function updateButtonPrice() \{\
    const activeSize = document.querySelector('.size-btn.active');\
    const qty = parseInt(qtyInput.value);\
    const price = parseFloat(activeSize.dataset.price);\
    \
    if (activeSize.dataset.size !== 'custom' && price) \{\
        const total = (price * qty).toFixed(2);\
        btnPrice.textContent = '\'97 $' + total;\
    \}\
\}\
\
// Add to cart animation\
const addToCartBtn = document.getElementById('addToCart');\
addToCartBtn.addEventListener('click', () => \{\
    addToCartBtn.innerHTML = '<span>Added \uc0\u10003 </span>';\
    addToCartBtn.style.background = '#2d7a62';\
    \
    setTimeout(() => \{\
        addToCartBtn.innerHTML = '<span>Add to Cart</span><span class="btn-price" id="btnPrice">' + btnPrice.textContent + '</span>';\
        addToCartBtn.style.background = '';\
    \}, 2000);\
\});\
\
// Accordion animation\
document.querySelectorAll('.accordion-item').forEach(item => \{\
    item.addEventListener('toggle', () => \{\
        const icon = item.querySelector('.accordion-icon');\
        if (item.open) \{\
            icon.textContent = '\uc0\u8722 ';\
        \} else \{\
            icon.textContent = '+';\
        \}\
    \});\
\});\
\
// Navbar scroll (same as homepage)\
let lastScroll = 0;\
const navbar = document.getElementById('navbar');\
\
window.addEventListener('scroll', () => \{\
    const currentScroll = window.pageYOffset;\
    if (currentScroll > 100) \{\
        navbar.style.boxShadow = '0 4px 20px rgba(0,0,0,0.08)';\
    \} else \{\
        navbar.style.boxShadow = 'none';\
    \}\
    lastScroll = currentScroll;\
\});\
\
// Mobile nav (same as homepage)\
const navToggle = document.getElementById('navToggle');\
const navMenu = document.getElementById('navMenu');\
\
navToggle.addEventListener('click', () => \{\
    navMenu.classList.toggle('active');\
\});\
\
document.querySelectorAll('.nav-link').forEach(link => \{\
    link.addEventListener('click', () => \{\
        navMenu.classList.remove('active');\
    \});\
\});}