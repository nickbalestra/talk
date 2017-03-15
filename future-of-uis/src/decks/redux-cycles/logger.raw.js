const logCycle = (sources) => {
  const log$ = sources.ACTION
    .filter(({type}) => type !== 'LOG')
    .compose(sampleCombine(sources.STATE))
    .debug('[ACTION, STATE]')
    .map(payload => ({type: 'LOG', payload}))

  return {
    ACTION: log$
  }
}

export default logger