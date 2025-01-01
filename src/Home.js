const Home = () => {
  return (
    <div className="Home">
      <h2>Homepage</h2> <br></br>
      <Example />
    </div>
  );
};

const Example = () => {
  return (
    <div>
      <div>
        <h3>name:chanuka</h3>
        <br />
        <h3>age:23</h3>
        <br />
        <h3>job:softwre engineer</h3>
        <hr />
      </div>

      <div>
        <h3>name:kamal</h3>
        <br />
        <h3>age:25</h3>
        <br />
        <h3>job:electrical engineer</h3> <hr />
      </div>

      <div>
        <h3>name:perera</h3>
        <br />
        <h3>age:24</h3>
        <br />
        <h3>job:civil engineer</h3> <hr />
      </div>

      <div>
        <h3>name:gamlath</h3>
        <br />
        <h3>age:20</h3>
        <br />
        <h3>job:softwre engineer</h3> <hr />
      </div>
    </div>
  );
};
export default Home;
