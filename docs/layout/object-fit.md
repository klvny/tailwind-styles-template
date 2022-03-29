---
sidebar: false
---

| Class             | Properties              |
| ----------------- | ----------------------- |
| object-contain    | object-fit: contain;    |
| object-cover      | object-fit: cover;      |
| object-fill       | object-fit: fill;       |
| object-none       | object-fit: none;       |
| object-scale-down | object-fit: scale-down; |

### Usage

```html
<img class="object-cover ..." src="path/to/image.jpg" />
```
<div class="grid grid-cols-1 space-y-4">
<span>cover</span>
<img class="object-cover w-98 h-42 rounded" src="https://images.unsplash.com/photo-1434394354979-a235cd36269d?ixlib=rb-1.2.1&amp;ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&amp;auto=format&amp;fit=crop&amp;w=2902&amp;q=80"/>
<span>contain</span>
<img class="object-contain w-98 h-42 rounded bg-purple-100" src="https://images.unsplash.com/photo-1434394354979-a235cd36269d?ixlib=rb-1.2.1&amp;ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&amp;auto=format&amp;fit=crop&amp;w=2902&amp;q=80"/>
<span>fit</span>
<img class="object-fit w-98 h-42 rounded bg-purple-100" src="https://images.unsplash.com/photo-1434394354979-a235cd36269d?ixlib=rb-1.2.1&amp;ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&amp;auto=format&amp;fit=crop&amp;w=2902&amp;q=80"/>
<span>scale-down</span>
<img class="object-scale-down w-98 h-42 rounded bg-purple-100" src="https://images.unsplash.com/photo-1434394354979-a235cd36269d?ixlib=rb-1.2.1&amp;ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&amp;auto=format&amp;fit=crop&amp;w=2902&amp;q=80"/>
</div>