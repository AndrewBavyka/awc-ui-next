type DefineTypes = <T extends readonly string[]>(values: T) => {
  types: T;
  type: T[number];
};

declare global {
  const defineTypes: DefineTypes;
}

export {};