---
sidebar: false
---

| Class                | Properties                   |
| -------------------- | ---------------------------- |
| box-decoration-clone | box-decoration-break: clone; |
| box-decoration-slice | box-decoration-break: slice; |


### Usage

```html
<span class="box-decoration-slice ...">
  Hello<br>
  World
</span>
<span class="box-decoration-clone ...">
  Hello<br>
  World
</span>
```

<div class="grid grid-cols-2 px-10 gap-8">
<div>
<span class="box-decoration-slice bg-gradient-to-r from-indigo-600 to-pink-500 text-white px-2 ">
  Hello<br>
  World
</span>
</div>
<div>
<span class="box-decoration-clone bg-gradient-to-r from-indigo-600 to-pink-500 text-white px-2">
  Hello<br>
  World
</span>
</div>
</div>
