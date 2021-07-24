function Step4() {
  const onSubmit = (e) => {
    e.preventDefault();
  };
  return (
    <main className='two-grid'>
      <form onSubmit={onSubmit}></form>
      <section className='result'></section>
    </main>
  );
}

export default Step4;
