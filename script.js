/* Sabor de Cuba - Script de Renderizado Versión 2.1 (Sin Precios) */
const cocktailData = [
    {
        category: "🇨🇺 CLÁSICOS CUBANOS",
        items: [
            { name: "MOJITO", ingredients: "Ron blanco, hierbabuena fresca, azúcar, lima y soda", description: "Refrescante, el alma de Cuba" },
            { name: "DAIQUIRÍ", ingredients: "Ron blanco, zumo de lima y azúcar", description: "Equilibrio perfecto entre dulce y ácido", detail: "Frozen disponible: fresa, mango, maracuyá" },
            { name: "CUBA LIBRE", ingredients: "Ron añejo, cola y lima", description: "El clásico internacional con sello cubano" },
            { name: "PIÑA COLADA", ingredients: "Ron, crema de coco y zumo de piña", description: "Tropical, cremosa y deliciosa" },
            { name: "EL PRESIDENTE", ingredients: "Ron añejo, vermut, curaçao y granadina", description: "Elegante y sofisticado" }
        ]
    },
    {
        category: "🌴 SABORES DE LA ISLA",
        items: [
            { name: "CANCHÁNCHARA", ingredients: "Ron, miel y lima", description: "Tradición cubana con historia" },
            { name: "SAOCO", ingredients: "Ron con agua de coco natural", description: "Ligero, fresco y tropical" },
            { name: "CAFÉ CUBANO CON RON", ingredients: "Café fuerte cubano con ron añejo", description: "Ideal para sobremesa" }
        ]
    },
    {
        category: "🍹 ESPECIALIDADES DE LA CASA",
        items: [
            { name: "MOJITO TROPICAL", ingredients: "Mojito clásico con frutas naturales", detail: "Fresa / Mango / Maracuyá" },
            { name: "DAIQUIRÍ CARIBEÑO", ingredients: "Frozen de frutas tropicales con ron cubano" },
            { name: "CUBA LIBRE ESPECIADO", ingredients: "Ron infusionado con canela y cítricos" },
            { name: "PIÑA COLADA AHUMADA", ingredients: "Con toque de ron oscuro y especias" }
        ]
    },
    {
        category: "🚫 SIN ALCOHOL",
        items: [
            { name: "MOJITO VIRGEN", ingredients: "Hierbabuena, lima, azúcar y soda" },
            { name: "PIÑA COLADA VIRGEN", ingredients: "Crema de coco y zumo de piña" },
            { name: "LIMONADA CUBANA", ingredients: "Lima fresca, azúcar y hierbabuena" }
        ]
    }
];

function renderMenu() {
    const digitalContainer = document.getElementById('menu-container');
    const printContainer = document.getElementById('print-menu-grid');
    
    if (printContainer) {
        cocktailData.forEach(section => {
            const catTitle = document.createElement('h2');
            catTitle.className = 'category-title';
            catTitle.textContent = section.category;
            printContainer.appendChild(catTitle);

            section.items.forEach(item => {
                const itemDiv = document.createElement('div');
                itemDiv.className = 'print-item';
                itemDiv.innerHTML = `
                    <div class="print-item-header">
                        <span class="print-item-name">${item.name}</span>
                    </div>
                    <div class="print-item-ingredients">${item.ingredients}</div>
                `;
                printContainer.appendChild(itemDiv);
            });
        });
    } 
    else if (digitalContainer) {
        cocktailData.forEach(section => {
            const sectionEl = document.createElement('section');
            sectionEl.className = 'category-section reveal';
            
            const titleEl = document.createElement('h2');
            titleEl.className = 'category-title';
            titleEl.innerHTML = section.category;
            sectionEl.appendChild(titleEl);

            const gridEl = document.createElement('div');
            gridEl.className = 'cocktail-grid';

            section.items.forEach(item => {
                const card = document.createElement('div');
                card.className = 'cocktail-card';
                card.innerHTML = `
                    <div class="cocktail-header">
                        <h3 class="cocktail-name">${item.name}</h3>
                    </div>
                    <div class="cocktail-ingredients">${item.ingredients}</div>
                    ${item.description ? `<div class="cocktail-description">${item.description}</div>` : ''}
                    ${item.detail ? `<div class="cocktail-detail">${item.detail}</div>` : ''}
                `;
                gridEl.appendChild(card);
            });

            sectionEl.appendChild(gridEl);
            digitalContainer.appendChild(sectionEl);
        });
        initReveal();
    }
}

function initReveal() {
    const reveals = document.querySelectorAll('.reveal');
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) entry.target.classList.add('active');
        });
    }, { threshold: 0.1 });
    reveals.forEach(reveal => observer.observe(reveal));
}

document.addEventListener('DOMContentLoaded', renderMenu);
