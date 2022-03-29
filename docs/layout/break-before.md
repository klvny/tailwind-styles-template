---
 sidebar: false
---


| Class                  | Properties               |
| ---------------------- | ------------------------ |
| break-before-auto       | break-before: auto;       |
| break-before-avoid      | break-before: avoid;      |
| break-before-all        | break-before: all;        |
| break-before-avoid-page | break-before: avoid-page; |
| break-before-page       | break-before: page;       |
| break-before-left       | break-before: left;       |
| break-before-right      | break-before: right;      |
| break-before-column     | break-before: column;     |


### Usage

- Without `break-before`

<div class="columns-2 border-solid border border-slate-500 p-2">
  <p>Well, let me tell you something, ...</p>
  <p>Sure, go ahead, laugh...</p>
  <p>Maybe we can live without...</p>
  <p>Look. If you think this is...</p>
</div>

- With `break-before`

```html
<div class="columns-2 ...">
  <p>Well, let me tell you something, ...</p>
  <p class="break-before-column">Sure, go ahead, laugh...</p>
  <p>Maybe we can live without...</p>
  <p>Look. If you think this is...</p>
</div>
```

<div class="columns-2 border-solid border border-slate-500 p-2">
  <p>Well, let me tell you something, ...</p>
  <p class="break-before-column">Sure, go ahead, laugh...</p>
  <p>Maybe we can live without...</p>
  <p>Look. If you think this is...</p>
</div>

