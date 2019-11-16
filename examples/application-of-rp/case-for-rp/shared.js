/**
 * Simulate fetching a the profile information for a user.
 */
async function fetchProfile(delay = 1000) {
  return new Promise(resolve => {
    setTimeout(
      () => resolve({ id: 1, firstName: 'Manuel', lastName: 'Alabor' }),
      delay
    );
  });
}

/**
 * Simulate fetching the avatar URL for given user profile.
 */
async function fetchAvatar(profile, delay = 2000) {
  return new Promise(resolve => {
    setTimeout(() => resolve({ avatar: './avatar.jpg' }), delay);
  });
}

/**
 * Render given user in the #data element.
 */
function renderUser(user) {
  const app = document.getElementById('data');
  app.innerHTML = '';

  const title = document.createElement('h3');
  title.textContent = `${user.firstName} ${user.lastName}`;
  const avatar = document.createElement('img');
  avatar.setAttribute('src', user.avatar);
  avatar.setAttribute('width', 100);
  avatar.setAttribute('height', 100);

  app.appendChild(title);
  app.appendChild(avatar);
}
