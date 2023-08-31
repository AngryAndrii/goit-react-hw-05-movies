const Home = () => {
  return (
    <>
      <h3>Home</h3>
      <div>
        {['film-1', 'film-2', 'film-3', 'film-4', 'film-5'].map(el => {
          return <div>{el}</div>;
        })}
      </div>
    </>
  );
};

export default Home;
