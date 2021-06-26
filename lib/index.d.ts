declare type Entry<P extends string> = {
    [P0 in P]: unknown;
};
declare type Dictionary<T> = {
    [key in string]: T;
};
declare const createDictionary: <P extends string, T extends Entry<P>>(key: P, entries: T[]) => Dictionary<T>;
export { createDictionary };
