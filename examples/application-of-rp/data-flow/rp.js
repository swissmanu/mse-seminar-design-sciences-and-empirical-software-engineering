fetchProfile()
  .then(async profile => {
    const avatar = await fetchAvatar(profile);
    return { ...profile, ...avatar };
  })
  .then(renderUser);
