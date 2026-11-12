# Réponses - Partie C

# Réponses - Partie C

## Question 1 : requête vers /users/1

- Méthode : GET
- Code d'état : 200 (OK)
- Content-Type : application/json; charset=utf-8
- Deux champs du JSON : id (valeur 1) et firstName (valeur "Emily").
  On y trouve aussi lastName, email, age, username, etc.

## Question 2 : requête vers /users/99999

- Code obtenu : 404 (Not Found)
- Signification : le serveur a compris la requête, mais aucun utilisateur
  ne porte l'identifiant 99999, donc la ressource est introuvable.
  Le corps de la réponse est un JSON avec un champ "message" :
  « Utilisateur avec l'identifiant '99999' introuvable ».
- Réaction de l'interface : l'application ne doit pas traiter cette réponse
  comme un succès. Elle teste le code d'état, affiche un message clair
  à l'utilisateur (« Utilisateur introuvable ») et continue de fonctionner
  sans planter.

## Question 3 : côté client ou côté serveur

- (a) Afficher un message d'erreur sous un champ : côté client
- (b) Enregistrer une note dans la base de données : côté serveur
- (c) Vérifier un mot de passe : côté serveur
- (d) Changer la couleur d'un bouton au survol : côté client
- (e) Décider qu'un utilisateur n'a pas le droit de supprimer un utilisateur : côté serveur

## Question 4 : codes HTTP

| Code | Situation                                                              | Réaction de l'interface                                                                                       |
| ---- | ---------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------- |
| 201  | Ressource créée avec succès (ex : inscription d'un nouvel utilisateur) | Afficher un message de confirmation, puis rediriger ou afficher le nouvel élément                             |
| 401  | Utilisateur non authentifié (pas connecté, session expirée)            | Demander de se connecter, rediriger vers la page de connexion                                                 |
| 404  | Ressource introuvable (id inexistant)                                  | Afficher « introuvable » ou une page 404                                                                      |
| 500  | Erreur interne du serveur                                              | Afficher un message général (« Problème temporaire, réessayez plus tard ») sans montrer de détails techniques |
