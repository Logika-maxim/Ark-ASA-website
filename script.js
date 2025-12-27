// Показує сторінку за id
function showPage(id){
    document.querySelectorAll('.page').forEach(p=>{
        p.classList.remove('active'); // ховаємо всі
    });
    document.getElementById(id).classList.add('active'); // показуємо потрібну
}

// Показати моба
function showMob(id){
    showPage('mob-' + id);
}

// Пошук мобів
function searchMobs(){
    let value = document.getElementById('searchInput').value.toLowerCase();
    document.querySelectorAll('.mobs-grid .card').forEach(c=>{
        c.style.display = c.innerText.toLowerCase().includes(value) ? 'block' : 'none';
    });
}

// Фільтр мобів за типом
function filterMobs(type){
    document.querySelectorAll('.mobs-grid .card').forEach(c=>{
        c.style.display = (type === 'all' || c.dataset.type === type) ? 'block' : 'none';
    });
}

// Пошук крафтів
function searchCrafts(){
    let value = document.getElementById('searchCraft').value.toLowerCase();
    document.querySelectorAll('.crafts-grid .card').forEach(c=>{
        c.style.display = c.innerText.toLowerCase().includes(value) ? 'block' : 'none';
    });
}

// Фільтр крафтів
function filterCrafts(type){
    document.querySelectorAll('.crafts-grid .card').forEach(c=>{
        c.style.display = (type==='all'||c.dataset.type===type) ? 'block' : 'none';
    });
}

// Показати крафт
function showCraft(id){
    showPage('craft-' + id);
}
