// Fonctions asynchrones qui appellent l'API de démonstration (partie E)

const URL_API = "https://dummyjson.com";

// Convertit un utilisateur de l'API (firstName, lastName) vers notre format
const formaterUtilisateur = ({ id, firstName, lastName, email }) => ({
  id,
  prenom: firstName,
  nom: lastName,
  email,
});

// Charge une liste d'utilisateurs. En cas d'erreur, retourne []
export async function chargerUtilisateurs(limite = 5, base = URL_API) {
  try {
    const response = await fetch(`${base}/users?limit=${limite}`);

    // fetch ne rejette pas la promesse pour un code 404 ou 500 : on teste response.ok
    if (!response.ok) {
      console.error(
        `Erreur : le serveur a répondu avec le code ${response.status}`,
      );
      return [];
    }

    const { users } = await response.json();
    return users.map(formaterUtilisateur);
  } catch (erreur) {
    console.error(`Impossible de charger les utilisateurs : ${erreur.message}`);
    return [];
  }
}

// Charge un seul utilisateur. En cas d'erreur, retourne null
export async function chargerUtilisateur(id, base = URL_API) {
  try {
    const response = await fetch(`${base}/users/${id}`);

    if (response.status === 404) {
      console.error(`Utilisateur ${id} introuvable (404)`);
      return null;
    }
    if (!response.ok) {
      console.error(
        `Erreur : le serveur a répondu avec le code ${response.status}`,
      );
      return null;
    }

    return formaterUtilisateur(await response.json());
  } catch (erreur) {
    console.error(
      `Impossible de charger l'utilisateur ${id} : ${erreur.message}`,
    );
    return null;
  }
}
