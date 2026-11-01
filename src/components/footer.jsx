function Footer() {
  function handleTopNav() {
    const topNav = document.getElementById("top");
    if (topNav) {
      topNav.focus();
    }
  }
  return (
    <footer>
      <nav id="footer-navigation" aria-label="Footer">
        <button type="button" onClick={handleTopNav}>
          Back to Top
        </button>
      </nav>
      <p>&copy; 2026 Reading Queue.</p>
    </footer>
  );
}
export default Footer;
