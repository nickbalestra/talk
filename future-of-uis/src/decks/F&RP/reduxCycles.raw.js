const fetchUserCycle = (sources) => {
  const request$ = sources.ACTION
    .filter(action => action.type === FETCH_USER)
    .map(({payload}) => ({
      url: `https://api.github.com/users/${payload}`,
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