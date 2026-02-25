let allPokemon = [];

async function loadPokedex() {
    const promises = Array.from({length: 151}, (_, i) => 
        fetch(`https://pokeapi.co/api/v2/pokemon/${i + 1}`).then(res => res.json())
    );
    
    allPokemon = await Promise.all(promises); // Requerimiento: Carga paralela [cite: 15]
    renderGrid(allPokemon);
}

function renderGrid(data) {
    const grid = document.getElementById('pokemon-grid');
    grid.innerHTML = data.map(p => `
        <div class="pokemon-card" onclick="updateDetails(${p.id})">
            <img src="${p.sprites.front_default}" loading="lazy">
            <p style="font-size: 0.6rem; color: #888;">N.º ${p.id.toString().padStart(3, '0')}</p>
            <h4 class="pixel-font" style="font-size: 0.5rem; margin: 5px 0;">${p.name}</h4>
        </div>
    `).join('');
}

function updateDetails(id) {
    const p = allPokemon.find(pokemon => pokemon.id === id);
    const container = document.getElementById('active-pokemon');
    
    // Conversiones de API a lectura humana 
    const weight = p.weight / 10; 
    const height = p.height / 10;
    const mainType = p.types[0].type.name;

    container.innerHTML = `
        <div class="details-view">
            <h2 class="pixel-font" style="color: var(--poke-yellow);">#${p.id} ${p.name}</h2>
            <img src="${p.sprites.other['official-artwork'].front_default}" style="width: 100%; max-width: 250px;">
            <div class="type-pill">${mainType.toUpperCase()}</div>
            <p><strong>Peso:</strong> ${weight}kg | <strong>Altura:</strong> ${height}m</p>
            
            <h3 class="pixel-font" style="font-size: 0.7rem; border-bottom: 1px solid #444; padding-bottom: 5px;">Estadísticas Base</h3>
            ${p.stats.map(s => `
                <div class="stat-container">
                    <div class="stat-label">
                        <span>${s.stat.name.toUpperCase()}</span>
                        <span>${s.base_stat}</span>
                    </div>
                    <div class="bar-bg">
                        <div class="bar-fill" style="width: ${Math.min(s.base_stat, 100)}%;"></div>
                    </div>
                </div>
            `).join('')}
        </div>
    `;
}

// Filtro en tiempo real [cite: 16]
document.getElementById('pokemon-search').addEventListener('input', (e) => {
    const val = e.target.value.toLowerCase();
    const filtered = allPokemon.filter(p => p.name.includes(val) || p.id.toString() === val);
    renderGrid(filtered);
});

loadPokedex();