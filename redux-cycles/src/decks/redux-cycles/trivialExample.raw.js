const pongCycle = (sources) => {
  const pong$ = sources.ACTION
    .filter(action => action.type === 'PING')
    .mapTo({ type: 'PONG' });

  return {
    ACTION: pong$
  }
}

export default pongCycle;