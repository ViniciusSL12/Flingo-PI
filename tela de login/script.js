const passwordInput = document.querySelector('input[type="password"]');
const toggleIcon = document.getElementById('togglePassword');

toggleIcon.addEventListener('click', () => {
  const type = passwordInput.type === 'password' ? 'text' : 'password';
  passwordInput.type = type;
  toggleIcon.src = type === 'password'
    ? 'https://img.icons8.com/ios-glyphs/30/39c6a4/visible.png'
    : 'https://img.icons8.com/ios-glyphs/30/39c6a4/invisible.png';
});
