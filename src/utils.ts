type OperationFn = () => any;
export const recordTime = (operation: OperationFn, operationName = ''): any => {
  const t0 = performance.now();
  const result = operation();
  const t1 = performance.now();
  console.log(`Call to ${operationName} took ${t1 - t0} milliseconds.`);
  return result;
};

export const looseIdentical = (a: any, b: any): boolean => {
  return (
    a === b ||
    (typeof a === 'number' && typeof b === 'number' && isNaN(a) && isNaN(b))
  );
};
