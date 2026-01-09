// Scripts JavaScript pour l'application bibliothèque

document.addEventListener('DOMContentLoaded', () => {
  // Formatage des dates
  document.querySelectorAll('.format-date').forEach(el => {
    const d = new Date(el.textContent);
    if (!isNaN(d)) {
      el.textContent = d.toLocaleDateString('fr-FR', {
        year: 'numeric',
        month: 'long',
        day: 'numeric'
      });
    }
  });

  // Confirmation de suppression
  document.querySelectorAll('form[action*="supprimer"] button[type="submit"]').forEach(button => {
    button.addEventListener('click', function(e) {
      if (!confirm('Êtes-vous sûr de vouloir supprimer cet élément ?')) {
        e.preventDefault();
      }
    });
  });

  // Validation des formulaires
  const forms = document.querySelectorAll('form');
  forms.forEach(form => {
    form.addEventListener('submit', function(e) {
      const requiredFields = form.querySelectorAll('[required]');
      let isValid = true;

      requiredFields.forEach(field => {
        if (!field.value.trim()) {
          isValid = false;
          field.classList.add('error');
        } else {
          field.classList.remove('error');
        }
      });

      if (!isValid) {
        e.preventDefault();
        alert('Veuillez remplir tous les champs obligatoires.');
      }
    });

    // Retirer la classe error lors de la saisie
    form.querySelectorAll('input, textarea, select').forEach(field => {
      field.addEventListener('input', function() {
        this.classList.remove('error');
      });
    });
  });

  // Styles pour les champs en erreur
  const style = document.createElement('style');
  style.textContent = `
    .error {
      border-color: #e74c3c !important;
      box-shadow: 0 0 0 2px rgba(231, 76, 60, 0.2) !important;
    }
  `;
  document.head.appendChild(style);
});