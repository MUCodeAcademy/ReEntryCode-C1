## Pseudo-Classes and Combinators

What if you want only SOME of the selector to have the effects of the style rules? What if you want every div EXCEPT divs that have a specific class or ID? What about styling when someone is hovering over a link or button? What about every odd or even or every fifth div? This is where pseudo classes and combinators come into effect.

### Pseudo-Classes

Pseudo-classes follow the same format (regardless of which one it is). You start with the selector and then follow it with a `:` and then the selector rule. So any div that is hovered over would be `div:hover`. A complete list of options can be found here: [Pseudo-Classes](https://developer.mozilla.org/en-US/docs/Learn/CSS/Introduction_to_CSS/Pseudo-classes_and_pseudo-elements) but the most used ones are:

- :last-child - Last child element of a specific type.
- :first-child - First child of a specific type.
- :hover - Only when the user hovers over the element.
- :nth-child Specific rules for which children to apply the rules to. This can be one of the following patterns:
  - :nth-child(even) or :nth-child(odd) - selects only even or odd children respectively.
  - :nth-child(an+b) - Uses a calculation to select which children to apply the rules to. [Examples](https://developer.mozilla.org/en-US/docs/Web/CSS/:nth-child#Example_selectors)
```
div:nth-child(even) -> 2, 4, 6
```
```
div:nth-child(2n) -> 2, 4, 6, etc
```
```
div:nth-child(n + 6) -> 6, 7, 8, etc
```
```
div:nth-child(5n + 4) -> 4, 9, 14, etc
```

- :not() - Everything but the specific selector(s) in the parenthesis

```
div:not(3)
```