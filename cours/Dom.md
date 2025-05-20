Le DOM (Document Object Model) est une interface de programmation pour les documents HTML et XML. Il représente la structure du document sous forme d'un arbre, où chaque nœud est un objet représentant une partie du document (comme un élément, un attribut ou un texte).

le dom est l'arbre de non élement ou balise est c'est balise son pointable.
Voici une explication simple du DOM avec un schéma :

Explication du DOM

Document : Le document entier est la racine de l'arbre DOM.
Éléments : Les balises HTML (comme <html>, <body>, <div>, etc.) sont représentées comme des nœuds dans l'arbre.
Attributs : Les attributs des balises HTML (comme class, id, etc.) sont des propriétés des nœuds d'élément.


Texte : Le contenu textuel à l'intérieur des balises HTML est également représenté comme des nœuds.
Schéma du DOM
Voici un schéma simplifié du DOM pour un document HTML basique :

Document
   |
   +-- <html>
        |
        +-- <head>
        |     |
        |     +-- <title>
        |           |
        |           +-- "Titre de la page"
        |
        +-- <body>
              |
              +-- <h1>
              |     |
              |     +-- "Titre principal"
              |
              +-- <p>
                    |
                    +-- "Paragraphe de texte"

Exemple de code HTML correspondant

<!DOCTYPE html>
<html>
<head>
    <title>Titre de la page</title>
</head>
<body>
    <h1>Titre principal</h1>
    <p>Paragraphe de texte</p>
</body>
</html>

Dans cet exemple, le document HTML est représenté comme un arbre DOM avec des nœuds pour chaque élément, attribut et texte. Le DOM permet aux langages de programmation comme JavaScript de manipuler la structure, le style et le contenu du document de manière dynamique.
