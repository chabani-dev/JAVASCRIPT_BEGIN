/\*\*

- La méthode `includes()` détermine si un tableau contient une valeur spécifiée parmi ses entrées,
- en renvoyant true ou false selon le cas.
-
- @param {any} searchElement - L'élément à rechercher dans le tableau.
- @param {number} [fromIndex=0] - La position dans le tableau à partir de laquelle commencer la recherche.
- Si l'index est négatif, il est pris comme un décalage par rapport à la fin du tableau.
- @returns {boolean} - Renvoie true si l'élément est trouvé dans le tableau, sinon false.
-
- @example
- const array = [1, 2, 3];
- console.log(array.includes(2)); // true
- console.log(array.includes(4)); // false
- console.log(array.includes(3, 3)); // false
- console.log(array.includes(3, -1)); // true
  \*/
  const animaux = ['chat','chien','cheval'] ;
  console.log(animaux.inculdes('chat')) ==> true,

const animaux = ['chat','chien','cheval'] ;
console.log(animaux.inculdes('crocodile')) ==> false,
