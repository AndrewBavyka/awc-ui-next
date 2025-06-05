type DefineTypes = <T extends readonly string[]>(values: T) => {
  types: T;
  type: T[number];
};

export const defineTypesImpl = <T extends readonly string[]>(values: T) => {
  return {
    types: values,
    type: {} as T[number],
  };
};

if (typeof window !== 'undefined') {
  (window as any).defineTypes = defineTypesImpl;
}

export const defineTypes = defineTypesImpl;

declare global {
  interface Window {
    defineTypes: DefineTypes;
  }
}