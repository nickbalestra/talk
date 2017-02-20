const fetchUserCycle = (sources) => {
  const request$ = sources.ACTION
    .filter(action => action.type === FETCH_USER)
    .map(action => ({
      url: `https://api.github.com/users/${action.payload}`,
      category: 'users',
    }));

  const action$ = sources.HTTP
    .select('users')
    .flatten()
    .map(fetchUserFulfilled);

  return {
    ACTION: action$,
    HTTP: request$
  };
}