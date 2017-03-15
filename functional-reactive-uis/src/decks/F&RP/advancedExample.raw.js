const searchUsers = (sources) => {
  const searchQuery$ = sources.ACTION
    .filter(action => action.type === 'SEARCHED_USERS')
    .map(action => action.payload.query)
    .filter(isNotEmpty)
    .compose(debounce(800))
    .endWhen(
      sources.ACTION.filter(action =>
        action.type === 'CLEARED_SEARCH_RESULTS')
    )

  const searchQueryRequest$ = searchQuery$
    .map(q => ({
      url: `https://api.github.com/search/users?q=${q}`,
      category: 'query'
    }))

  const receiveUsersAction$ = sources.HTTP
    .select('query')
    .flatten()
    .map(res => res.body.items)
    .map(actions.receiveUsers)

  return {
    ACTION: receiveUsersAction$,
    HTTP: searchQueryRequest$
  }
}