const profileObservable = observable();
const avatarObservable = observable();

profileObservable.addObserver(async () => {
  const avatar = await fetchAvatar(profileObservable.value);
  avatarObservable.value = avatar;
  avatarObservable.notify();
});

avatarObservable.addObserver(() => {
  renderUser({ ...profileObservable.value, ...avatarObservable.value });
});

fetchProfile().then(profile => {
  profileObservable.value = profile;
  profileObservable.notify();
});
