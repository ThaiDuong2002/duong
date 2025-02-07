const About = ({ id }: { id?: string }) => {
  return (
    <div className="min-h-screen" id={id}>
      <h1>About</h1>
      <p>This section provides information about our mission and values.</p>
    </div>
  );
};

export default About;
