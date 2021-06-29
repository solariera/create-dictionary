# Create Dictionary

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

const stringKeyData = [
  { key: 'a', value: 'alfa' },
  { key: 'b', value: 'bravo' },
  { key: 'c', value: 'charlie' },
];

const keyDictionary = createDictionary('key', stringKeyData);
console.log(keyDictionary);
// {
//   a: { key: 'a', value: 'alfa' },
//   b: { key: 'b', value: 'bravo' },
//   c: { key: 'c', value: 'charlie' },
// }

const numberKeyData = [
  { page: 2, value: 'bravo' },
  { page: 3, value: 'charlie' },
  { page: 1, value: 'alfa' },
];

const pageDictionary = createDictionary('page', numberKeyData);
console.log(pageDictionary);
// {
//   1: { page: 1, value: 'alfa' },
//   2: { page: 2, value: 'bravo' },
//   3: { page: 3, value: 'charlie' },
// }
```

## 2. Specifications

### 2-1. Parameters

| No. | Name    | Type     | Description                    |
| --- | ------- | -------- | ------------------------------ |
| 1   | key     | string   | Key to specify for the index\* |
| 2   | entries | object[] | Source data for the dictionary |

\*The value of the specified key can be of type string or number
