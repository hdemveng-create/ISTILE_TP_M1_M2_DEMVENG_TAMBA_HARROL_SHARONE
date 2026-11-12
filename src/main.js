// Programme principal : charge les données, appelle les fonctions et affiche les résultats
import { readFile } from "node:fs/promises";
import {
  moyenneGenerale,
  admis,
  nomsFormates,
  effectifParFiliere,
  moyenneParFiliere,
  classementParNote,
  majNote,
} from "./etudiants.js";

const etudiants = JSON.parse(
  await readFile(new URL("../data/etudiants.json", import.meta.url), "utf8"),
);

// ---------- Partie D : traitements de données ----------
console.log("=== Partie D : traitements de données ===");

console.log("Moyenne générale :", moyenneGenerale(etudiants));
console.log("Nombre d'admis :", admis(etudiants).length);
console.log("Noms formatés :", nomsFormates(etudiants));
console.log("Effectif par filière :", effectifParFiliere(etudiants));
console.log("Moyenne par filière :", moyenneParFiliere(etudiants));

// Preuve d'immutabilité n°1 : le classement ne change pas la liste d'origine
const classement = classementParNote(etudiants);
console.log("Premier du classement :", classement[0]);
console.log("Premier de la liste d'origine (inchangé) :", etudiants[0]);

// Preuve d'immutabilité n°2 : majNote ne modifie pas l'objet d'origine
const ancien = etudiants.find(({ id }) => id === 2);
const nouvelleListe = majNote(etudiants, 2, 12);
const nouveau = nouvelleListe.find(({ id }) => id === 2);
console.log("Ancien étudiant :", ancien);
console.log("Nouvel étudiant :", nouveau);
console.log("Objets différents :", ancien !== nouveau);
console.log("Ancienne note inchangée :", ancien.note === 9);
