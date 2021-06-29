import { tests, TestData } from '@solariera/easy-jest/lib/tests';
import { createDictionary as fn } from '..';

const data: TestData<typeof fn>[] = [
  {
    id: 'key: string, value: string',
    params: [
      'key',
      [
        { key: 'a', value: 'alfa' },
        { key: 'b', value: 'bravo' },
        { key: 'c', value: 'charlie' },
      ],
    ],
    ret: {
      a: { key: 'a', value: 'alfa' },
      b: { key: 'b', value: 'bravo' },
      c: { key: 'c', value: 'charlie' },
    },
    mode: 'toEqual',
  },
  {
    id: 'key: string include empty, value: string',
    params: [
      'key',
      [
        { key: '', value: 'empty' },
        { key: 'a', value: 'alfa' },
        { key: 'b', value: 'bravo' },
        { key: 'c', value: 'charlie' },
      ],
    ],
    ret: {
      a: { key: 'a', value: 'alfa' },
      b: { key: 'b', value: 'bravo' },
      c: { key: 'c', value: 'charlie' },
    },
    mode: 'toEqual',
  },

  {
    id: 'key: number, value: string',
    params: [
      'key',
      [
        { key: 2, value: 'bravo' },
        { key: 3, value: 'charlie' },
        { key: 1, value: 'alfa' },
      ],
    ],
    ret: {
      1: { key: 1, value: 'alfa' },
      2: { key: 2, value: 'bravo' },
      3: { key: 3, value: 'charlie' },
    },
    mode: 'toEqual',
  },
];

tests(fn, data);
