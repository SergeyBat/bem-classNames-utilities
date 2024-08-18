# BEM and classNames Utilities

## This is functions for generate bem classnames in react apps.


#### [BEM](bem%2Findex.ts) is recommended to use


In SCSS Modules a hash will be added for all classes as in the module file

for example module 'title' => 'title_hash'
for example module 'component-name__title' => 'component-name__title_hash'


### How to use:

***

1. [bem](bem%2Findex.ts)
   #### Standard usage
```tsx
import { bem } from "./bem-utils";
import './index.scss';
  
const b = bem('component-name');

// classname will be 'component-name'
<div className={b('')} >
   // classname will be 'component-name__title'
   <h1 className={b('title')}> title text </h1>
   
   // classname will be with modifaiers 'component-name__description component-name__description_red'
   <span className={b('description', { red: true })}> title text </span>

   // classname will be 'component-name__text global-title'
   <p className={b('text', {}, ['global-title'])}>title text </p>
</div>
        
```
<br>
<br>

   #### If use SCSS Modules
A ***hash*** will be added for all classes from the module, as in the module file
```tsx
import { bem } from "./bem-utils";
import styles from "./index.module.scss";
  
const b = bem('component-name', styles);

// classname will be 'component-name'
<div className={b('')} >
   // classname will be 'component-name__title'
   <h1 className={b('title')}> title text </h1>

   // classname will be with modifaiers 'component-name__description component-name__description_red'
   <span className={b('description', { red: true })}> title text </span>

   // classname will be 'component-name__text global-title'
   <p className={b('text', {}, ['global-title'])}>title text </p>
</div>
```

***

2. [classNames](classNames%2Findex.ts)
   #### Standard usage
```tsx
import { classNames as cs } from "./bem-utils";
import './index.scss';

// classname will be 'component-name'
<div className={cs('')} >
   // classname will be 'title'
   <h1 className={cs('title')}> title text </h1>
   
   // classname will be with modifaiers 'description red'
   <span className={cs('description', { red: true, round: false })}>title text</span>

   // classname will be 'text global-title'
   <p className={cs('text', {}, ['global-title'])}>title text</p>
</div>
```

<br>
<br>

   #### If use SCSS Modules
A ***hash*** will be added for all classes from the module, as in the module file
```tsx
import { classNames as cs } from "./bem-utils";
import './global.scss';
import styles from './index.scss';

// classname will be 'app'
<div className={cs('app')} >
  // classname will be 'title'
  <h1 className={cs(styles.title)}> title text </h1>

  // classname will be with modifaiers 'description red'
  <span className={cs(styles.description, { red: true, round: false })}>title text</span>

  // classname will be 'text global-title'
  <p className={cs('text', {}, ['global-title'])}>title text</p>
</div>
```

