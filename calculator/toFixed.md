# La méthode `toFixed()`

La méthode `toFixed()` en JavaScript est utilisée pour formater un nombre en notation à point fixe.

## Syntaxe

```javascript
num.toFixed(digits);
```

### Paramètres

- `digits` (optionnel) : Un entier entre 0 et 20, indiquant le nombre de chiffres après la virgule décimale. Par défaut, il est défini à 0.

### Valeur de retour

Une chaîne de caractères représentant le nombre donné en notation à point fixe.

## Exemples

```javascript
let num = 123.456;

console.log(num.toFixed()); // "123"
console.log(num.toFixed(2)); // "123.46"
console.log(num.toFixed(5)); // "123.45600"
```

## Remarques

- Si le nombre de chiffres après la virgule est supérieur à ce qui est présent dans le nombre, des zéros sont ajoutés à la fin.
- La méthode `toFixed()` arrondit le nombre si nécessaire.

## Références

- [MDN Web Docs - Number.prototype.toFixed()](https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Global_Objects/Number/toFixed)
