# Create Dictionary

[![npm](https://img.shields.io/npm/v/@solariera/create-dictionary)](https://www.npmjs.com/package/@solariera/create-dictionary)
[![npm](https://img.shields.io/npm/dw/@solariera/create-dictionary)](https://www.npmjs.com/package/@solariera/create-dictionary)
[![npm bundle size](https://img.shields.io/bundlephobia/min/@solariera/create-dictionary)](https://bundlephobia.com/result?p=@solariera/create-dictionary)

Create dictionary from array of object

## 1. Usage

### 1-1. Installation

```console
# npm
npm install @solariera/create-dictionary
```

```console
# yarn
yarn add @solariera/create-dictionary
```

### 1-2. Basic Usage

```typescript
import { createDictionary } from '@solariera/create-dictionary';

const entries = [
  { key: 'a', value: 'alfa' },
  { key: 'b', value: 'bravo' },
  { key: 'c', value: 'charlie' },
];

const dictionary = createDictionary('key', entries);
console.log(dictionary);
// {
//   a: { key: 'a', value: 'alfa' },
//   b: { key: 'b', value: 'bravo' },
//   c: { key: 'c', value: 'charlie' },
// }

const entries = [
  { page: 2, value: 'bravo' },
  { page: 3, value: 'charlie' },
  { page: 1, value: 'alfa' },
];

const dictionary = createDictionary('page', entries);
console.log(dictionary);
// {
//   1: { page: 1, value: 'alfa' },
//   2: { page: 2, value: 'bravo' },
//   3: { page: 3, value: 'charlie' },
// }
```

## 2. Specifications

### 2-1. Syntax & Parameters

#### createDictionary(`key`, `entries`)

| No. | Name      | Type     | Required | Description                    |
| --- | --------- | -------- | :------: | ------------------------------ |
| 1   | `key`     | string   |   Yes    | Key to specify for the index\* |
| 2   | `entries` | object[] |   Yes    | Source data for the dictionary |

\*The value of the specified key can be of type string or number
