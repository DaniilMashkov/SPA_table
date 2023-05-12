export function *range(start=0, stop=1, step=1) {
  for (let i=start; i<=stop; i+=step) {
    yield i
  }
}

