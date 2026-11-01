function Panel({ heading, children }) {
  return (
    <section>
      <h2>{heading}</h2>
      {children}
    </section>
  );
}
export default Panel;
