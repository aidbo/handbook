---
layout: doc
---

# JavaScript 命名

命名事物很难。此表试图使其更容易。

虽然这些建议可以应用于任何编程语言，但我将使用JavaScript在实践中说明它们。

## 英语

命名变量和函数时使用英语。

```js
/* Bad */
const primerNombre = 'Gustavo'
const amigos = ['Kate', 'John']

/* Good */
const firstName = 'Gustavo'
const friends = ['Kate', 'John']
```

> 不管你喜不喜欢，英语是编程中的主导语言：所有编程语言的语法都是用英语编写的，还有无数的文档和教育材料。通过用英语编写代码，您可以显着提高其凝聚力。
> 
## 命名约定

Pick **camelCase** naming convention and follow it.

```js
/* Bad */
const page_count = 5
const active = true
const ShouldUpdate = true

/* Good */
const pageCount = 5
const isActive = true
const shouldUpdate = true
```

## S-I-D

A name must be _short_, _intuitive_ and _descriptive_:

- **Short**. A name must not take long to type and, therefore, remember;
- **Intuitive**. A name must read naturally, as close to the common speech as possible;
- **Descriptive**. A name must reflect what it does/possesses in the most efficient way.

```js
/* Bad */
const a = 5 // "a" could mean anything
const isPaginatable = a > 10 // "Paginatable" sounds extremely unnatural
const shouldPaginatize = a > 10 // Made up verbs are so much fun!

/* Good */
const postCount = 5
const hasPagination = postCount > 10
const shouldPaginate = postCount > 10 // alternatively
```

## 避免缩写

**不要**使用缩写。它们只会降低代码的可读性。找到一个简短的描述性名称可能很困难，但缩写并不是不这样做的借口。

```js
/* Bad */
function getUsrNme() {
  // ...
}

/* Good */
function getUserName() {
  // ...
}
```

## 避免上下文重复

名称不应与定义它的上下文重复。如果上下文不会降低其可读性，请始终从名称中删除上下文。

```js
class UserService {
  /* Method name duplicates the context (which is "User") */
  getUserSettings(event) {
    // ...
  }

  /* Reads nicely as `userService.getSettings()` */
  getSettings(event) {
    // ...
  }
}
```

## 反映预期结果

名称应反映预期结果。

```jsx
/* Bad */
const isEnabled = itemCount > 3
if (!isEnabled) {
  // ...
}

/* Good */
const isDisabled = itemCount <= 3
if (isDisabled) {
  // ...
}
```

---

# 命名函数

## A/HC/LC Pattern

命名函数时，有一个有用的模式需要遵循：

```
prefix? + action (A) + high context (HC) + low context? (LC)
```

在下表中查看如何应用此模式。

| Name                   | Prefix   | Action (A) | High context (HC) | Low context (LC) |
|------------------------|----------|------------| ----------------- | ---------------- |
| `getUser`              |          | `get`      | `User`            |                  |
| `getUserMessages`      |          | `get`      | `User`            | `Messages`       |
| `shouldDisplayMessage` | `should` | `Display`  | `Message`         |                  |
| `isPaymentEnabled`     | `is`     | `Enabled`  | `Payment`         |                  |

---

## 动作(Actions)

函数名称的谓词部分。负责描述函数_做什么_的最重要部分。

### `get`

Accesses data immediately (i.e. shorthand getter of internal data).

```js
function getUserFullName() {
  return `${this.firstName} ${this.lastName}`
}
```

> See also [compose](#compose).

### `set`

Sets a variable in a declarative way, with value `A` to value `B`.

```js
let fruits = 0

function setFruits(nextFruits) {
  fruits = nextFruits
}

setFruits(5)
console.log(fruits) // 5
```

### `reset`

Sets a variable back to its initial value or state.

```js
const initialFruits = 5
let fruits = initialFruits
setFruits(10)
console.log(fruits) // 10

function resetFruits() {
  fruits = initialFruits
}

resetFruits()
console.log(fruits) // 5
```

### `fetch`

Request for some data, which takes some indeterminate time (i.e. database request).

```js
function fetchUsers() {
  return this.userRepository.createQueryBuilder()
    .where('user.isActive = :isActive', { isActive: true })
    .getMany()
}
```

### `remove`

Removes something _from_ somewhere.

For example, if you have a collection of selected filters on a search page, removing one of them from the collection is `removeFilter`, **not** `deleteFilter` (and this is how you would naturally say it in English as well):

```js
function removeFilter(filters, filterName) {
  return filters.filter(name => name !== filterName)
}

const selectedFilters = ['price', 'availability', 'size']
removeFilter(selectedFilters, 'price')
```

> See also [delete](#delete).

### `delete`

Completely erases something from the realms of existence.

Imagine you are a content editor, and there is that notorious post you wish to get rid of. Once you clicked a shiny "Delete post" button, the CMS performed a `deletePost` action, **not** `removePost`.

```js
function deleteUser(id) {
  return this.userRepository.delete(id)
}
```

> See also [remove](#remove).

### `compose`

从现有数据创建新数据。主要适用于字符串、对象或函数。

```js
function composePageUrl(pageName, pageId) {
  return (`${pageName.toLowerCase()}-${pageId}`)
}
```

> See also [get](#get).

---

## Context

A domain that a function operates on.

A function is often an action on _something_. It is important to state what its operable domain is, or at least an expected data type.

```js
/* A pure function operating with primitives */
function filter(list, predicate) {
  return list.filter(predicate)
}

/* Function operating exactly on posts */
function getRecentPosts(posts) {
  return filter(posts, post => post.date === Date.now())
}
```

> Some language-specific assumptions may allow omitting the context. For example, in JavaScript, it's common that `filter` operates on Array. Adding explicit `filterArray` would be unnecessary.

--

## Prefixes

Prefix enhances the meaning of a variable. It is rarely used in function names.

### `is`

Describes a characteristic or state of the current context (usually `boolean`).

```js
const color = 'blue'
const isBlue = color === 'blue' // characteristic
const isPresent = true // state

if (isBlue && isPresent)
  console.log('Blue is present!')
```

### `has`

描述当前上下文是否具有特定的值或状态（通常为 `boolean`）。

```js
/* Bad */
const isProductsExist = productsCount > 0
const areProductsPresent = productsCount > 0

/* Good */
const hasProducts = productsCount > 0
```

### `should`

Reflects a positive conditional statement (usually `boolean`) coupled with a certain action.

```js
function shouldUpdateUrl(url, expectedUrl) {
  return url !== expectedUrl
}
```

### `min`/`max`

Represents a minimum or maximum value. Used when describing boundaries or limits.

```js
/**
 * Renders a random amount of posts within
 * the given min/max boundaries.
 */
function renderPosts(posts, minPosts, maxPosts) {
  return posts.slice(0, randomBetween(minPosts, maxPosts))
}
```

## 单数和复数

与前缀一样，变量名称可以设置为单数或复数，具体取决于它们是包含单个值还是多个值。

```js
/* Bad */
const friends = 'Bob'
const friend = ['Bob', 'Tony', 'Tanya']

/* Good */
const friend = 'Bob'
const friends = ['Bob', 'Tony', 'Tanya']
```

---

https://github.com/NarHakobyan/awesome-nest-boilerplate/blob/main/docs/naming-cheatsheet.md
