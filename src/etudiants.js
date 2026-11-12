// Fonctions de traitement de la liste des étudiants (partie D)
// Aucune fonction ne modifie la liste reçue en paramètre.

// Arrondit un nombre à 2 décimales
const arrondir = (nombre) => Math.round(nombre * 100) / 100;

// Moyenne des notes de tous les étudiants
export function moyenneGenerale(liste) {
  if (liste.length === 0) {
    return 0;
  }
  const somme = liste.reduce((total, { note }) => total + note, 0);
  return arrondir(somme / liste.length);
}

// Étudiants dont la note est supérieure ou égale à 10
export function admis(liste) {
  return liste.filter(({ note }) => note >= 10);
}

// Noms au format "NOM Prénom"
export function nomsFormates(liste) {
  return liste.map(({ prenom, nom }) => `${nom.toUpperCase()} ${prenom}`);
}

// Nombre d'étudiants par filière, ex : { Informatique: 7, ... }
export function effectifParFiliere(liste) {
  return liste.reduce(
    (effectifs, { filiere }) => ({
      ...effectifs,
      [filiere]: (effectifs[filiere] ?? 0) + 1,
    }),
    {},
  );
}

// Moyenne des notes par filière, ex : { Informatique: 12.5, ... }
export function moyenneParFiliere(liste) {
  // Somme des notes de chaque filière
  const sommes = liste.reduce(
    (resultat, { filiere, note }) => ({
      ...resultat,
      [filiere]: (resultat[filiere] ?? 0) + note,
    }),
    {},
  );

  const effectifs = effectifParFiliere(liste);

  // On divise chaque somme par l'effectif de la filière
  return Object.fromEntries(
    Object.entries(sommes).map(([filiere, somme]) => [
      filiere,
      arrondir(somme / effectifs[filiere]),
    ]),
  );
}

// Nouvelle liste triée par note décroissante
export function classementParNote(liste) {
  // On copie d'abord la liste, car sort modifie le tableau sur lequel il travaille
  return [...liste].sort((a, b) => b.note - a.note);
}

// Nouvelle liste où seule la note de l'étudiant ciblé change
export function majNote(liste, id, note) {
  return liste.map((etudiant) =>
    etudiant.id === id ? { ...etudiant, note } : etudiant,
  );
}
