const fetchUserEpic = action$ =>
  action$.ofType(FETCH_USER)
    .mergeMap(action =>
      ajax.getJSON(
        `https://api.github.com/users/${action.payload}`
      )
      .map(fetchUserFulfilled)
    );