const clubsData = [
    {
        id: 1,
        titre: "Python Jeunes",
        ageMin: 13,
        ageMax: 16,
        description: "Apprenez les bases de la programmation avec Python. Idéal pour développer la logique algorithmique, créer des jeux textuels et manipuler les données.",
        image: "python.jpg",
        video: "python.mp4"
    },
    {
        id: 2,
        titre: "Python Kids",
        ageMin: 10,
        ageMax: 12,
        description: "Une introduction douce au langage Python avec des blocs et du code simple pour les jeunes créateurs de technologies.",
        image: "python.jpg",
        video: "python.mp4"
    },
    {
        id: 3,
        titre: "WeDo (Robotique)",
        ageMin: 5,
        ageMax: 8,
        description: "Premiers pas en robotique ! Les enfants construisent des modèles Lego animés et les programment avec une interface visuelle simple.",
        image: "wedo.jpg",
        video: "wedo.mp4"
    },
    {
        id: 4,
        titre: "Calcul Mental",
        ageMin: 5,
        ageMax: 15,
        description: "Développez l'agilité intellectuelle et la rapidité de calcul de votre enfant grâce à des méthodes ludiques et interactives.",
        image: "calcul.jpg",
        video: "calcul.mp4"
    },
    {
        id: 5,
        titre: "Scratch Jeunes",
        ageMin: 12,
        ageMax: 13,
        description: "ما هو برنامج سكراتش (Scratch)؟ 🐱🖥️سكراتش (Scratch) هو برنامج مجاني وممتع ولطيف جداً، يساعد الأطفال على تعلم البرمجة (Programming) وصناعة ألعابهم ورسومهم المتحركة الخاصة بكل سهولة، دون الحاجة لكتابة أكواد معقدة باللغة الإنجليزية..",
        image: "Scratch2.webp",
        video: "scratch.mp4"
    },
    {
        id: 6,
        titre: "Scratch Kids",
        ageMin: 9,
        ageMax: 11,
        description: "ما هو برنامج سكراتش (Scratch)؟ 🐱🖥️سكراتش (Scratch) هو برنامج مجاني وممتع ولطيف جداً، يساعد الأطفال على تعلم البرمجة (Programming) وصناعة ألعابهم ورسومهم المتحركة الخاصة بكل سهولة، دون الحاجة لكتابة أكواد معقدة باللغة الإنجليزية.",
        image: "Scratch2.webp",
        video: "scratch.mp4"
    },
    {
        id: 7,
        titre: "Initiation à l'Intelligence Artificielle (IA)",
        ageMin: 9,
        ageMax: 11,
        description: "ما هو الذكاء الاصطناعي؟ (شرح مبسط للأطفال)الذكاء الاصطناعي (Artificial Intelligence) هو جعل الكمبيوتر أو الروبوت يفكر ويتعلم مثل الإنسان تماماً! 🤖🧠في القديم، كان الكمبيوتر ينفذ فقط الأوامر التي نكتبها له خطوة بخطوة. أما الآن، مع الذكاء الاصطناعي، أصبح الكمبيوتر ذكياً يستطيع أن يرى، ويسمع، ويتحدث، ويأخذ قراراته بنفسه.",
        image: "ia.jpg",
        video: ""
    },
    {
        id: 8,
        titre: "Robotique IA Kids",
        ageMin: 9,
        ageMax: 13,
        description: "Combinaison parfaite entre la construction de robots physiques et l'intégration de programmes d'intelligence artificielle.",
        image: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?w=500",
        video: ""
    },
    {
        id: 9,
        titre: "Micro:bit",
        ageMin: 10,
        ageMax: 13,
        description: "مايكروبيت هو كمبيوتر صغير بحجم الجيب، صُمم لتعليم البرمجة والروبوتات بطريقة سهلة وممتعة Micro:bit Educational Foundation.بفضل مستشعراته المدمجة وشاشته الرقمية، يتيح لك هذا الجهاز ابتكار ألعاب تفاعلية وأجهزة ذكية بكل سهولة Micro:bit Educational Foundation.",
        image: "microbit.webp",
        video: "microbit.mp4"
    },
    {
        id: 10,
        titre: "SolidWorks (Modélisation 3D)",
        ageMin: 10,
        ageMax: 15,
        description: "Apprenez à concevoir des objets en 3D comme de vrais ingénieurs. Idéal pour préparer des projets d'impression 3D.",
        image: "solidworks.jpg",
        video: "Solidworks.mp4"
    },
    {
        id: 11,
        titre: "Montage Vidéo",
        ageMin: 13,
        ageMax: 16,
        description: "Maîtrisez les techniques de découpe, de transitions, d'effets visuels et sonores pour créer des vidéos captivantes.",
        image: "https://images.unsplash.com/photo-1574717024653-61fd2cf4d44d?w=500",
        video: "video.mp4"
    },
    {
        id: 12,
        titre: "Anglais Tech & Ludique",
        ageMin: 6,
        ageMax: 15,
        description: "Apprentissage de la langue anglaise axé sur la communication, les jeux et le vocabulaire lié aux nouvelles technologies.",
        image: "https://images.unsplash.com/photo-1546410531-bb4caa6b424d?w=500",
        video: ""
    },
    {
        id: 13,
        titre: "Robotique Arduino",
        ageMin: 9,
        ageMax: 15,
        description: "Entrez dans le monde des vrais makers. Câblage de circuits électroniques, utilisation de moteurs, capteurs et programmation en langage C++.",
        image: "arduino.webp",
        video: "arduino.mp4"
    },
    {
        id: 14,
        titre: "تحسين الخط",
        ageMin: 5,
        ageMax: 9,
        description: "Un atelier dédié à l'amélioration de l'écriture et à la découverte de l'art de la calligraphie pour permettre aux enfants de développer une écriture soignée, fluide et lisible.",
        image: "ta7sin.jpg",
        video: ""
    },
    {
        id: 15,
        titre: "Robotique Arduino kids",
        ageMin: 7,
        ageMax: 8,
        description: "Entrez dans le monde des vrais makers. Câblage de circuits électroniques, utilisation de moteurs, capteurs et programmation en langage C++.",
        image: "arduinokids.webp",
        video: ""
    },
    {
        id: 16,
        titre: "الشطرنج",
        ageMin: 7,
        ageMax: 15,
        description: " لعبة الشطرنج هي لعبة لوحية استراتيجية تُلعب بين لاعبين اثنين على رقعة مربعة مقسمة إلى 64 مربعاً. يهدف كل لاعب إلى التفكير والتخطيط لحماية مَلِكه، وفي الوقت ذاته مهاجمة ومحاصرة ملك الخصم لوضعه في موقف كش ",
        image: "echec.jpg",
        video: "echec.mp4"
    },
];

// Initialisation au chargement de la page
document.addEventListener("DOMContentLoaded", () => {
    filtrerAge('tous');
});

// Fonction de filtrage des clubs par âge
function filtrerAge(ageSelectionne) {
    const boutons = document.querySelectorAll('.btn-age');
    boutons.forEach(btn => btn.classList.remove('active'));
    
    if(event && event.target && event.target.classList.contains('btn-age')) {
        event.target.classList.add('active');
    }

    const grid = document.getElementById('clubsGrid');
    if (!grid) return;
    grid.innerHTML = "";

    let clubsFiltres = [];
    if (ageSelectionne === 'tous') {
        clubsFiltres = clubsData;
    } else {
        clubsFiltres = clubsData.filter(club => ageSelectionne >= club.ageMin && ageSelectionne <= club.ageMax);
    }

    if (clubsFiltres.length === 0) {
        grid.innerHTML = `<p style="grid-column: 1/-1; text-align: center; color: var(--text-muted); padding: 20px;">
                            Aucune activité disponible pour cet âge spécifique actuellement. Contacter le centre pour plus d'infos !
                          </p>`;
        return;
    }

    clubsFiltres.forEach(club => {
        const carte = document.createElement('div');
        carte.className = "club-card";
        carte.style.cursor = "pointer";
        carte.onclick = () => ouvrirModal(club.id);
        
        carte.innerHTML = `
            <img src="${club.image}" alt="${club.titre}" class="club-img">
            <div class="club-info">
                <h3>${club.titre}</h3>
                <span class="age-badge">${club.ageMin} - ${club.ageMax} ans</span>
                
                <p style="color: #00f2ff; font-size: 0.85rem; margin-top: 12px; font-weight: bold; font-style: italic; text-align: center;">
                    ✨ Cliquer ici pour plus d'informations sur ce club
                </p>
            </div>
        `;
        grid.appendChild(carte);
    });
}

// Gestion de la modale de détails
function ouvrirModal(idClub) {
    const club = clubsData.find(c => c.id === idClub);
    if (!club) return;

    document.getElementById('modalTitle').innerText = club.titre;
    document.getElementById('modalDescription').innerText = club.description;
    document.getElementById('modalAgeRange').innerText = `${club.ageMin} à ${club.ageMax} ans`;

    const imgElement = document.getElementById('modalImage');
    const videoContainer = document.getElementById('modalVideoContainer');
    
    // Réinitialiser le contenu vidéo
    videoContainer.innerHTML = "";

    // Affichage de l'image
    imgElement.src = club.image;
    imgElement.style.display = "block";

    // Affichage de la vidéo si elle existe
    if (club.video) {
        videoContainer.style.display = "block";
        videoContainer.innerHTML = `
            <video controls width="100%">
                <source src="${club.video}" type="video/mp4">
                Votre navigateur ne prend pas en charge la lecture de vidéos.
            </video>
        `;
    } else {
        videoContainer.style.display = "none";
    }

    document.getElementById('detailsModal').style.display = "flex";
}

function fermerModal() {
    document.getElementById('detailsModal').style.display = "none";
    document.getElementById('modalVideoContainer').innerHTML = "";
}

// Fermeture en cliquant en dehors de la modale
window.onclick = function(event) {
    const modal = document.getElementById('detailsModal');
    if (event.target == modal) {
        fermerModal();
    }
}
