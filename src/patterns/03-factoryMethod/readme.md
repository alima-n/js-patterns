# Factory Method

> Определяет общий интерфейс для создания объектов в суперклассе,
> позволяя подклассам изменять тип создаваемых объектов.

- Type: Creational
- Complexity: ⭐⭐⭐

Представьте что в приложении, к-е Вы разрабатываете, появилась потребность динамически
создавать "input" эл-ты различных типов: "text", "number", "email" и т.д.

Более того, данный список в будущем может быть расширен, поэтому вы не хотите напрямую
зависеть от классов соответствующих эл-тов: `TextInput`, `NumberInput`, `EmailInput`.

Чтобы избавится от прямой зависимости компонентов от классов,
создающих инпуты, Вы решили воспользоваться паттерном "Factory Method".

Пожалуйста, реализуйте логику добавление типа инпута в классах
`TextInput`, `NumberInput`, `EmailInput`, расширив поведение метода `create` в этих
подклассах:

```js
this.element.type = 'text';
```

Также реализуйте логику ф-ции `inputFactory`, к-я, в зависимости от входящего аргумента,
`type`, будет создавать инпут соответствующего типа.