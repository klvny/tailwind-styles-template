---
sidebar: false
---

| Class       | Properties               |
| ----------- | ------------------------ |
| box-border  | box-sizing: border-box;  |
| box-content | box-sizing: content-box; |

### Usage

```html
<div class="box-border h-32 w-32 p-4 border-4 border-solid border-slate-500">
  <!-- ... -->
</div>

<div class="box-content h-32 w-32 p-4 border-4 border-solid border-slate-500">
  <!-- ... -->
</div>
```

<div class="grid grid-cols-2 gap-8">
<div>
<div class="box-border h-32 w-32 p-4 border-4 border-solid border-slate-500">
  <!-- ... -->
</div>
</div>
<div>
<div class="box-content h-32 w-32 p-4 border-4 border-solid border-slate-500">
  <!-- ... -->
</div>
</div>
</div>