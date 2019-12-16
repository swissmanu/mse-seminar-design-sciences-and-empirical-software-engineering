function observable() {
  let observers = [];

  const observable = {
    value: null,
    notify: () => observers.forEach(observer => observer(observable)),
    addObserver: observer => (observers = [...observers, observer])
  };
  return observable;
}
