const cocktailData = [
    {
        category: "🇨🇺 CLÁSICOS CUBANOS",
        items: [
            {
                name: "MOJITO",
                ingredients: "Ron blanco, hierbabuena fresca, azúcar, lima y soda",
                description: "Refrescante, el alma de Cuba",
                price: 14
            },
            {
                name: "DAIQUIRÍ",
                ingredients: "Ron blanco, zumo de lima y azúcar",
                description: "Equilibrio perfecto entre dulce y ácido",
                detail: "Frozen disponible: fresa, mango, maracuyá",
                price: 13
            },
            {
                name: "CUBA LIBRE",
                ingredients: "Ron añejo, cola y lima",
                description: "El clásico internacional con sello cubano",
                price: 12
            },
            {
                name: "PIÑA COLADA",
                ingredients: "Ron, crema de coco y zumo de piña",
                description: "Tropical, cremosa y deliciosa",
                price: 15
            },
            {
                name: "EL PRESIDENTE",
                ingredients: "Ron añejo, vermut, curaçao y granadina",
                description: "Elegante y sofisticado",
                price: 16
            }
        ]
    },
    {
        category: "🌴 SABORES DE LA ISLA",
        items: [
            {
                name: "CANCHÁNCHARA",
                ingredients: "Ron, miel y lima",
                description: "Tradición cubana con historia",
                price: 13
            },
            {
                name: "SAOCO",
                ingredients: "Ron con agua de coco natural",
                description: "Ligero, fresco y tropical",
                price: 14
            },
            {
                name: "CAFÉ CUBANO CON RON",
                ingredients: "Café fuerte cubano con ron añejo",
                description: "Ideal para sobremesa",
                price: 12
            }
        ]
    },
    {
        category: "🍹 ESPECIALIDADES DE LA CASA",
        items: [
            {
                name: "MOJITO TROPICAL",
                ingredients: "Mojito clásico con frutas naturales",
                detail: "Fresa / Mango / Maracuyá",
                price: 16
            },
            {
                name: "DAIQUIRÍ CARIBEÑO",
                ingredients: "Frozen de frutas tropicales con ron cubano",
                price: 17
            },
            {
                name: "CUBA LIBRE ESPECIADO",
                ingredients: "Ron infusionado con canela y cítricos",
                price: 15
            },
            {
                name: "PIÑA COLADA AHUMADA",
                ingredients: "Con toque de ron oscuro y especias",
                price: 18
            }
        ]
    },
    {
        category: "🚫 SIN ALCOHOL",
        items: [
            {
                name: "MOJITO VIRGEN",
                ingredients: "Hierbabuena, lima, azúcar y soda",
                price: 12
            },
            {
                name: "PIÑA COLADA VIRGEN",
                ingredients: "Crema de coco y zumo de piña",
                price: 12
            },
            {
                name: "LIMONADA CUBANA",
                ingredients: "Lima fresca, azúcar y hierbabuena",
                price: 12
            }
        ]
    }
];

function renderMenu() {
    const container = document.getElementById('menu-container');
    
    cocktailData.forEach((section, index) => {
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
                    <span class="cocktail-price">$${item.price}</span>
                </div>
                <div class="cocktail-ingredients">${item.ingredients}</div>
                ${item.description ? `<div class="cocktail-description">${item.description}</div>` : ''}
                ${item.detail ? `<div class="cocktail-detail">${item.detail}</div>` : ''}
            `;
            
            gridEl.appendChild(card);
        });

        sectionEl.appendChild(gridEl);
        container.appendChild(sectionEl);
    });

    // Initialize reveal animations
    initReveal();
}

function initReveal() {
    const reveals = document.querySelectorAll('.reveal');
    
    const observerOptions = {
        threshold: 0.1,
        rootMargin: "0px 0px -50px 0px"
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('active');
            }
        });
    }, observerOptions);

    reveals.forEach(reveal => observer.observe(reveal));
}

document.addEventListener('DOMContentLoaded', renderMenu);
