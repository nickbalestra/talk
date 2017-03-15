const program = (sources) => {
  const response$ = sources.HTTP
    .select('cyclejs')
    .flatten()
    .map(response => response);

  const request$ = xs.of({
    url: `https://api.github.com/users/cyclejs-community`,
    category: 'cyclejs',
  });

  return {
    HTTP: request$
  };
}