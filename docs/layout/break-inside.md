---
sidebar: false
---

| Class                     | Properties                  |
| ------------------------- | --------------------------- |
| break-inside-auto         | break-inside: auto;         |
| break-inside-avoid        | break-inside: avoid;        |
| break-inside-avoid-page   | break-inside: avoid-page;   |
| break-inside-avoid-column | break-inside: avoid-column; |

### Usage

- Without `break-inside`

<div class="columns-2 border-solid border border-slate-500 p-2">
  <p>Well, let me tell you something, ...</p>
  <p>Sure, go ahead, laugh...</p>
  <p>Maybe we can live without...</p>
  <p>Look. If you think this is...</p>
</div>

- With `break-inside`

```html
<div class="columns-2 ...">
  <p>Well, let me tell you something, ...</p>
  <p class="break-inside-avoid-column">Sure, go ahead, laugh...</p>
  <p>Maybe we can live without...</p>
  <p>Look. If you think this is...</p>
</div>
```

<div class="columns-2 border-solid border border-slate-500 p-2">
  <p>Well, let me tell you something, ...</p>
  <p class="break-inside-avoid">Sure, go ahead, laugh...</p>
  <p>Maybe we can live without...</p>
  <p>Look. If you think this is...</p>
</div>
