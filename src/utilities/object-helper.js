const pluck = (obj, candidateTest, selectTest) =>
  Object.keys(obj).reduce((result, key) => {
    const candidate = obj[key];

    if (!candidateTest(candidate)) return {...result, ...pluck(candidate, candidateTest, selectTest)};
    if (selectTest(candidate)) result[key] = candidate;

    return result;
  }, {});

export {
  pluck
};