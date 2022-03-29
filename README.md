## Static Stylesheet For TailwindCSS

### Usage document
You can use the classes directly by just importing a single css file, or you can fork this project to modify as your wish.
The usage document you can reference [the TailwindCSS document](https://tailwindcss.com/docs/installation).

### Deferences
Cause of the special symbol such as '/', '.' etc. they are replaced with '-', please pay attention to this if you are using a TailwindCSS plugin for vscode. And furthermore, those [md:/hover:/active:/...] dynamic features are disabled.

- Using TailwindCSS

```html
<div class="grid gap-1.5 grid-cols-2">
  <div>01</div>
  <div>02</div>
  <div>03</div>
  <div>04</div>
</div>
```

- Using this single css file

```html
<div class="grid gap-1-5 grid-cols-2">
  <div>01</div>
  <div>02</div>
  <div>03</div>
  <div>04</div>
</div>
```

### More than TailwindCSS
You can find something fun in '_animation.scss' and '_hover.scss' files. Some animations from [Animate.css](https://animate.style/) and [Hover.css](https://ianlunn.github.io/Hover/) are imported. You can use them in your vue(transition component) or react(react-transition-group) to improve the user experience.