# Opérateur Spread

L'opérateur spread (`...`) en JavaScript permet d'étendre des éléments d'un tableau ou des propriétés d'un objet. Il est souvent utilisé pour copier des tableaux, concaténer des tableaux, ou pour passer des éléments d'un tableau en tant qu'arguments individuels à une fonction.

## Utilisation avec les tableaux

```javascript
const arr1 = [1, 2, 3];
const arr2 = [...arr1, 4, 5, 6];

console.log(arr2); // [1, 2, 3, 4, 5, 6]
```

## Utilisation avec les objets

```javascript
const obj1 = { a: 1, b: 2 };
const obj2 = { ...obj1, c: 3 };

console.log(obj2); // { a: 1, b: 2, c: 3 }
```

## Passer des éléments d'un tableau en tant qu'arguments

```javascript
function sum(x, y, z) {
  return x + y + z;
}

const numbers = [1, 2, 3];
console.log(sum(...numbers)); // 6
```

L'opérateur spread est un outil puissant pour travailler avec des collections de données en JavaScript.
