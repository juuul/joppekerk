const toggle = document.querySelector(".menu-toggle");
const navigation = document.querySelector("#navigation");
function closeMenu() {
  toggle.setAttribute("aria-expanded", "false");
  navigation.classList.remove("is-open");
}
toggle.addEventListener("click", () => {
  const open = toggle.getAttribute("aria-expanded") !== "true";
  toggle.setAttribute("aria-expanded", String(open));
  navigation.classList.toggle("is-open", open);
});
navigation.addEventListener("click", (event) => {
  if (event.target.closest("a")) closeMenu();
});
document.addEventListener("keydown", (event) => {
  if (
    event.key === "Escape" &&
    toggle.getAttribute("aria-expanded") === "true"
  ) {
    closeMenu();
    toggle.focus();
  }
});
document.addEventListener("click", (event) => {
  if (!event.target.closest(".site-header")) closeMenu();
});
document
  .querySelector(".copy-iban")
  .addEventListener("click", async (event) => {
    const status = document.querySelector("#copy-status");
    try {
      await navigator.clipboard.writeText(event.currentTarget.dataset.iban);
      status.textContent = "Rekeningnummer gekopieerd";
    } catch {
      status.textContent =
        "Kopiëren niet beschikbaar. Selecteer het rekeningnummer handmatig.";
    }
  });
const privacy = document.querySelector("#privacy");
document.querySelector("#privacy-link").addEventListener("click", (event) => {
  event.preventDefault();
  privacy.showModal();
});
privacy
  .querySelector(".dialog-close")
  .addEventListener("click", () => privacy.close());
privacy.addEventListener("click", (event) => {
  const bounds = privacy.getBoundingClientRect();
  if (
    event.clientX < bounds.left ||
    event.clientX > bounds.right ||
    event.clientY < bounds.top ||
    event.clientY > bounds.bottom
  )
    privacy.close();
});
document.querySelector("#year").textContent = new Date().getFullYear();
