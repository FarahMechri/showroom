// Fonction pour afficher la section de la catégorie sélectionnée et masquer l'accueil
function ouvrirCategorie(categorie) {
    // Cacher la section d'accueil
    document.getElementById('accueil').style.display = 'none';
    
    // Masquer toutes les autres sections avant d'en afficher une nouvelle
    const categories = document.querySelectorAll('.categorie');
    categories.forEach(function(categorieElement) {
        categorieElement.style.display = 'none';
    });
    
    // Afficher la section choisie
    const sectionChoisie = document.getElementById(categorie);
    sectionChoisie.style.display = 'block';
}

// Fonction pour commander un article
function commander(article) {
    alert("Vous avez commandé : " + article);
}

// Fonction pour afficher l'accueil et masquer les autres sections
function retourAccueil() {
    // Afficher la section d'accueil
    document.getElementById('accueil').style.display = 'block';
    
    // Masquer toutes les autres sections
    const categories = document.querySelectorAll('.categorie');
    categories.forEach(function (categorie) {
        categorie.style.display = 'none';
    });
}

// Attacher des événements aux liens pour afficher la catégorie correspondante
document.getElementById('salonsLink').addEventListener('click', function() {
    ouvrirCategorie('salons');
});
document.getElementById('chambresLink').addEventListener('click', function() {
    ouvrirCategorie('chambres');
});
document.getElementById('tapisLink').addEventListener('click', function() {
    ouvrirCategorie('tapis');
});
document.getElementById('bureauxLink').addEventListener('click', function() {
    ouvrirCategorie('bureaux');
});
document.getElementById('chaisesLink').addEventListener('click', function() {
    ouvrirCategorie('chaises');
});

// Fonction pour agrandir une image
function agrandirImage(imageElement) {
    // Créer un élément lightbox si ce n'est pas déjà fait
    if (!document.getElementById('lightbox')) {
        let lightbox = document.createElement('div');
        lightbox.id = 'lightbox';
        document.body.appendChild(lightbox);

        // Ajouter un élément d'image dans le lightbox
        let lightboxImage = document.createElement('img');
        lightbox.appendChild(lightboxImage);

        // Ajouter un bouton de fermeture
        let closeBtn = document.createElement('span');
        closeBtn.classList.add('close');
        closeBtn.textContent = '×';
        closeBtn.onclick = function() {
            lightbox.style.display = 'none';
        };
        lightbox.appendChild(closeBtn);
    }

    // Récupérer l'élément lightbox et l'image à afficher
    let lightbox = document.getElementById('lightbox');
    let lightboxImage = lightbox.querySelector('img');
    lightboxImage.src = imageElement.src;

    // Afficher le lightbox en plein écran
    lightbox.style.display = 'flex';
}

// Placer ce script à la fin du fichier body ou dans le fichier script1.js
document.addEventListener("DOMContentLoaded", function() {
    const message = document.getElementById("blackFridayMessage");
    
    // Commenter ou supprimer cette ligne si vous voulez que le message reste
    // Faire disparaître le message après 5 secondes
    // setTimeout(() => {
    //     message.style.display = 'none';
    // }, 5000);  // 5000 millisecondes = 5 secondes
});
// Fonction pour ouvrir le formulaire de commande
function commander(categorie) {
    document.getElementById('formulaireCommande').style.display = "block";
}

// Fonction pour fermer le formulaire de commande
function fermerFormulaire() {
    document.getElementById('formulaireCommande').style.display = "none";
}

// Fermer le formulaire si l'utilisateur clique en dehors de celui-ci
window.onclick = function(event) {
    var modal = document.getElementById('formulaireCommande');
    if (event.target === modal) {
        modal.style.display = "none";
    }
    
}