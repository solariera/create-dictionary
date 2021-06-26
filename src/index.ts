type Entry<P extends string> = { [P0 in P]: unknown };
type Dictionary<T> = { [key in string]: T };

const createDictionary = <P extends string, T extends Entry<P>>(key: P, entries: T[]): Dictionary<T> => {
  let dictionary = {} as Dictionary<T>;
  for (const entry of entries) {
    const index = entry[key];
    if (typeof index === 'string' && index.length) {
      dictionary = { ...dictionary, [index]: entry };
    } else if (typeof index === 'number' && !Number.isNaN(index)) {
      dictionary = { ...dictionary, [index]: entry };
    }
  }

  return dictionary;
};

export { createDictionary };
