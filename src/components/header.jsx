function Header() {
  function handleMainFocus() {
    const mainContent = document.getElementById("main-content");
    if (mainContent) {
      mainContent.focus();
    }
  }
  return (
    <>
      <nav id="main-navigation" aria-label="Primary">
        <button type="button" onClick={handleMainFocus}>
          Skip to Main Content
        </button>
      </nav>
      <header id="top">
        <h1>Reading Queue</h1>
      </header>
    </>
  );
}

export default Header;
