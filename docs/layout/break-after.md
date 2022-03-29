---
 sidebar: false
---


| Class                  | Properties               |
| ---------------------- | ------------------------ |
| break-after-auto       | break-after: auto;       |
| break-after-avoid      | break-after: avoid;      |
| break-after-all        | break-after: all;        |
| break-after-avoid-page | break-after: avoid-page; |
| break-after-page       | break-after: page;       |
| break-after-left       | break-after: left;       |
| break-after-right      | break-after: right;      |
| break-after-column     | break-after: column;     |


### Usage

- Without `break-after`

<div class="columns-2 border-solid border border-slate-500 p-2">
  <p>Well, let me tell you something, ...</p>
  <p>Sure, go ahead, laugh...</p>
  <p>Maybe we can live without...</p>
  <p>Look. If you think this is...</p>
</div>

- With `break-after`

```html
<div class="columns-2 ...">
  <p>Well, let me tell you something, ...</p>
  <p class="break-after-column">Sure, go ahead, laugh...</p>
  <p>Maybe we can live without...</p>
  <p>Look. If you think this is...</p>
</div>
```

<div class="columns-2 border-solid border border-slate-500 p-2">
  <p>Well, let me tell you something, ...</p>
  <p class="break-after-column">Sure, go ahead, laugh...</p>
  <p>Maybe we can live without...</p>
  <p>Look. If you think this is...</p>
</div>

