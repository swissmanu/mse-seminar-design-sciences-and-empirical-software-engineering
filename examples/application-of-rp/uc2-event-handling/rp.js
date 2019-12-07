Bacon.fromEvent(getButton(), "click")
  .map(() => new Date())
  .onValue(logInteraction);
