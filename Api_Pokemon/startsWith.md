## Différence entre `startsWith` et `includes` en JavaScript

En JavaScript, `startsWith` et `includes` sont deux méthodes utilisées pour vérifier la présence de sous-chaînes dans une chaîne de caractères, mais elles fonctionnent différemment.

### `startsWith`

La méthode `startsWith` vérifie si une chaîne commence par une sous-chaîne spécifique. Elle retourne `true` si c'est le cas, sinon `false`.

```javascript
let str = "Bonjour le monde";
console.log(str.startsWith("Bonjour")); // true
console.log(str.startsWith("le")); // false
```

### `includes`

La méthode `includes` vérifie si une chaîne contient une sous-chaîne spécifique, peu importe sa position dans la chaîne. Elle retourne `true` si c'est le cas, sinon `false`.

```javascript
let str = "Bonjour le monde";
console.log(str.includes("le")); // true
console.log(str.includes("monde")); // true
console.log(str.includes("Bonsoir")); // false
```

En résumé, utilisez `startsWith` pour vérifier le début d'une chaîne et `includes` pour vérifier la présence d'une sous-chaîne n'importe où dans la chaîne.
