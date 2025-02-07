const Home = ({ id }: { id?: string }) => {
  return (
    <div className="min-h-screen" id={id}>
      <h1>Home</h1>
      <p>Welcome to the homepage! Here you can find the latest updates.</p>
    </div>
  );
};

export default Home;
