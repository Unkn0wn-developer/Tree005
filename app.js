// PROJECT 005 - Logic Engine V8 (Perfect V6 Math & Developer UI)

const treeRoot = document.getElementById('tree-root');
const renderedIds = new Set(); 

function initTree() {
    const rootNodes = familyData.filter(p => p.parentId === null);
    
    if (rootNodes.length > 0) {
        const ul = document.createElement('ul');
        rootNodes.forEach(person => {
            if (!renderedIds.has(person.id)) {
                const li = buildNode(person);
                if (li) ul.appendChild(li);
            }
        });
        treeRoot.appendChild(ul);
    }
}

function buildNode(person) {
    if (renderedIds.has(person.id)) return null;

    const li = document.createElement('li');
    const nodeContainer = document.createElement('div');
    nodeContainer.className = 'node-container';

    nodeContainer.appendChild(createCard(person));
    renderedIds.add(person.id);

    let spouse = null;
    if (person.spouseId !== null) {
        spouse = familyData.find(s => s.id === person.spouseId);
        if (spouse && !renderedIds.has(spouse.id)) {
            
            li.classList.add('has-spouse'); 

            const spouseWrapper = document.createElement('div');
            spouseWrapper.className = 'spouse-wrapper';
            spouseWrapper.appendChild(createCard(spouse));
            
            nodeContainer.appendChild(spouseWrapper);
            renderedIds.add(spouse.id);

            // Back to the perfect 160px math for the floating circles!
            li.style.marginRight = '160px'; 
        }
    }

    li.appendChild(nodeContainer);

    const children = familyData.filter(child => 
        child.parentId === person.id || (spouse && child.parentId === spouse.id)
    );

    if (children.length > 0) {
        const childrenUl = document.createElement('ul');
        children.forEach(child => {
            const childLi = buildNode(child);
            if (childLi) childrenUl.appendChild(childLi);
        });
        li.appendChild(childrenUl);
    }

    return li;
}

function createCard(person) {
    const card = document.createElement('div');
    
    let genderClass = 'unknown';
    if (person.gender) {
        if (person.gender.toLowerCase() === 'male') genderClass = 'male';
        if (person.gender.toLowerCase() === 'female') genderClass = 'female';
    }
    card.className = `member-card ${genderClass}`;
    
    card.onclick = () => openModal(person);
    const dateText = person.birthYear ? person.birthYear : '';

    card.innerHTML = `
        <div class="photo-wrapper">
            <img src="${person.photo}" alt="">
        </div>
        <div class="name">${person.name}</div>
        <div class="dates">${dateText}</div>
    `;
    return card;
}

// Modal Functions
function openModal(person) {
    document.getElementById('modal-img').src = person.photo;
    document.getElementById('modal-name').innerText = person.name;
    document.getElementById('modal-dates').innerText = person.birthYear ? `Born: ${person.birthYear}` : '';
    document.getElementById('modal-bio').innerText = person.bio;
    document.getElementById('bio-modal').style.display = 'flex';
}

function closeModal() {
    document.getElementById('bio-modal').style.display = 'none';
}

window.onclick = function(event) {
    const modal = document.getElementById('bio-modal');
    if (event.target === modal) closeModal();
}

window.addEventListener('load', () => {
    const wrapper = document.getElementById('scroll-wrapper');
    const tree = document.getElementById('tree-root');
    
    if (tree.offsetWidth > wrapper.clientWidth) {
        wrapper.scrollLeft = (tree.offsetWidth - wrapper.clientWidth) / 2;
    }
});

initTree();
