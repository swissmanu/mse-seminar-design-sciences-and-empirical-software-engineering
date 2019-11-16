const profileObservable = observable();
const avatarObservable = observable();

avatarObservable.addObserver(observable => {
  renderUser({ ...profileObservable.value, ...observable.value });
});
profileObservable.addObserver(async ({ value: profile }) => {
  const avatar = await fetchAvatar(profile);
  avatarObservable.value = avatar;
  avatarObservable.notify();
});

fetchProfile().then(profile => {
  profileObservable.value = profile;
  profileObservable.notify();
});
