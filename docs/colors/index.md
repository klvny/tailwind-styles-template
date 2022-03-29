## Colors
Usage [bg/text/border/decoration/shadow/outline/divide/ring]:
```html
<div class="bg-slate-500">
    <!-- ... -->
</div>
```


<script setup>
const steps = [50,100,200,300,400,500,600,700,800,900]
</script>

#### Slate 
<div class="grid grid-cols-10 gap-4">
    <div v-for="i in steps" key="i" :class="[`bg-slate-${i}`, 'border', 'rounded', 'p-6']"></div>   
</div>
<div class="grid grid-cols-10 gap-4">
    <div v-for="i in steps" key="i" class="text-center">{{i}}</div>   
</div>

#### Gray
<div class="grid grid-cols-10 gap-4">
    <div v-for="i in steps" key="i" :class="[`bg-gray-${i}`, 'border', 'rounded', 'p-6']"></div>   
</div>
<div class="grid grid-cols-10 gap-4">
    <div v-for="i in steps" key="i" class="text-center">{{i}}</div>   
</div>

#### Zinc
<div class="grid grid-cols-10 gap-4">
    <div v-for="i in steps" key="i" :class="[`bg-zinc-${i}`, 'border', 'rounded', 'p-6']"></div>   
</div>
<div class="grid grid-cols-10 gap-4">
    <div v-for="i in steps" key="i" class="text-center">{{i}}</div>   
</div>

#### Neutral
<div class="grid grid-cols-10 gap-4">
    <div v-for="i in steps" key="i" :class="[`bg-neutral-${i}`, 'border', 'rounded', 'p-6']"></div>   
</div>
<div class="grid grid-cols-10 gap-4">
    <div v-for="i in steps" key="i" class="text-center">{{i}}</div>   
</div>

#### Stone
<div class="grid grid-cols-10 gap-4">
    <div v-for="i in steps" key="i" :class="[`bg-stone-${i}`, 'border', 'rounded', 'p-6']"></div>   
</div>
<div class="grid grid-cols-10 gap-4">
    <div v-for="i in steps" key="i" class="text-center">{{i}}</div>   
</div>

#### Red
<div class="grid grid-cols-10 gap-4">
    <div v-for="i in steps" key="i" :class="[`bg-red-${i}`, 'border', 'rounded', 'p-6']"></div>   
</div>
<div class="grid grid-cols-10 gap-4">
    <div v-for="i in steps" key="i" class="text-center">{{i}}</div>   
</div>

#### Orange
<div class="grid grid-cols-10 gap-4">
    <div v-for="i in steps" key="i" :class="[`bg-orange-${i}`, 'border', 'rounded', 'p-6']"></div>   
</div>
<div class="grid grid-cols-10 gap-4">
    <div v-for="i in steps" key="i" class="text-center">{{i}}</div>   
</div>

#### Amber
<div class="grid grid-cols-10 gap-4">
    <div v-for="i in steps" key="i" :class="[`bg-amber-${i}`, 'border', 'rounded', 'p-6']"></div>   
</div>
<div class="grid grid-cols-10 gap-4">
    <div v-for="i in steps" key="i" class="text-center">{{i}}</div>   
</div>

#### Yellow
<div class="grid grid-cols-10 gap-4">
    <div v-for="i in steps" key="i" :class="[`bg-yellow-${i}`, 'border', 'rounded', 'p-6']"></div>   
</div>
<div class="grid grid-cols-10 gap-4">
    <div v-for="i in steps" key="i" class="text-center">{{i}}</div>   
</div>

#### Lime
<div class="grid grid-cols-10 gap-4">
    <div v-for="i in steps" key="i" :class="[`bg-lime-${i}`, 'border', 'rounded', 'p-6']"></div>   
</div>
<div class="grid grid-cols-10 gap-4">
    <div v-for="i in steps" key="i" class="text-center">{{i}}</div>   
</div>

#### Green
<div class="grid grid-cols-10 gap-4">
    <div v-for="i in steps" key="i" :class="[`bg-green-${i}`, 'border', 'rounded', 'p-6']"></div>   
</div>
<div class="grid grid-cols-10 gap-4">
    <div v-for="i in steps" key="i" class="text-center">{{i}}</div>   
</div>

#### Emerald
<div class="grid grid-cols-10 gap-4">
    <div v-for="i in steps" key="i" :class="[`bg-emerald-${i}`, 'border', 'rounded', 'p-6']"></div>   
</div>
<div class="grid grid-cols-10 gap-4">
    <div v-for="i in steps" key="i" class="text-center">{{i}}</div>   
</div>

#### Teal
<div class="grid grid-cols-10 gap-4">
    <div v-for="i in steps" key="i" :class="[`bg-teal-${i}`, 'border', 'rounded', 'p-6']"></div>   
</div>
<div class="grid grid-cols-10 gap-4">
    <div v-for="i in steps" key="i" class="text-center">{{i}}</div>   
</div>

#### Cyan
<div class="grid grid-cols-10 gap-4">
    <div v-for="i in steps" key="i" :class="[`bg-cyan-${i}`, 'border', 'rounded', 'p-6']"></div>   
</div>
<div class="grid grid-cols-10 gap-4">
    <div v-for="i in steps" key="i" class="text-center">{{i}}</div>   
</div>

#### Sky
<div class="grid grid-cols-10 gap-4">
    <div v-for="i in steps" key="i" :class="[`bg-sky-${i}`, 'border', 'rounded', 'p-6']"></div>   
</div>
<div class="grid grid-cols-10 gap-4">
    <div v-for="i in steps" key="i" class="text-center">{{i}}</div>   
</div>

#### Blue
<div class="grid grid-cols-10 gap-4">
    <div v-for="i in steps" key="i" :class="[`bg-blue-${i}`, 'border', 'rounded', 'p-6']"></div>   
</div>
<div class="grid grid-cols-10 gap-4">
    <div v-for="i in steps" key="i" class="text-center">{{i}}</div>   
</div>

#### Indigo
<div class="grid grid-cols-10 gap-4">
    <div v-for="i in steps" key="i" :class="[`bg-indigo-${i}`, 'border', 'rounded', 'p-6']"></div>   
</div>
<div class="grid grid-cols-10 gap-4">
    <div v-for="i in steps" key="i" class="text-center">{{i}}</div>   
</div>

#### Violet
<div class="grid grid-cols-10 gap-4">
    <div v-for="i in steps" key="i" :class="[`bg-violet-${i}`, 'border', 'rounded', 'p-6']"></div>   
</div>
<div class="grid grid-cols-10 gap-4">
    <div v-for="i in steps" key="i" class="text-center">{{i}}</div>   
</div>

#### Purple
<div class="grid grid-cols-10 gap-4">
    <div v-for="i in steps" key="i" :class="[`bg-purple-${i}`, 'border', 'rounded', 'p-6']"></div>   
</div>
<div class="grid grid-cols-10 gap-4">
    <div v-for="i in steps" key="i" class="text-center">{{i}}</div>   
</div>

#### Fuchsia
<div class="grid grid-cols-10 gap-4">
    <div v-for="i in steps" key="i" :class="[`bg-fuchsia-${i}`, 'border', 'rounded', 'p-6']"></div>   
</div>
<div class="grid grid-cols-10 gap-4">
    <div v-for="i in steps" key="i" class="text-center">{{i}}</div>   
</div>

#### Pink
<div class="grid grid-cols-10 gap-4">
    <div v-for="i in steps" key="i" :class="[`bg-pink-${i}`, 'border', 'rounded', 'p-6']"></div>   
</div>
<div class="grid grid-cols-10 gap-4">
    <div v-for="i in steps" key="i" class="text-center">{{i}}</div>   
</div>

#### Rose
<div class="grid grid-cols-10 gap-4">
    <div v-for="i in steps" key="i" :class="[`bg-rose-${i}`, 'border', 'rounded', 'p-6']"></div>   
</div>
<div class="grid grid-cols-10 gap-4">
    <div v-for="i in steps" key="i" class="text-center">{{i}}</div>   
</div>