const store = action$
  .startWith({type: '@@INIT'})
  .fold(rootReducer)

store.subscribe(renderer)