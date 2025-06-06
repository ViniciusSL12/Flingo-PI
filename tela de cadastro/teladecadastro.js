function togglePassword(id) {
  const toggle = document.getElementById(id);
  if (!toggle) return;

  toggle.addEventListener("click", () => {
    const container = toggle.closest(".input-container");
    const input = container.querySelector('input[type="password"], input[type="text"]');

    if (input.type === "password") {
      input.type = "text";
      toggle.src = "https://img.icons8.com/ios-glyphs/30/39c6a4/closed-eye.png";
    } else {
      input.type = "password";
      toggle.src = "https://img.icons8.com/ios-glyphs/30/39c6a4/visible.png";
    }
  });
}

togglePassword("togglePassword1");
togglePassword("togglePassword2");
