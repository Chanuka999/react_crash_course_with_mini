const Home = () => {
  return (
    <div className="Home">
      <h2>Homepage</h2> <br></br>
      <ExampleTwo name="chanuka" age="23" job="software Engineer" />
      <ExampleTwo name="kamal" age="25" job="eletrical Engineer" />
      <ExampleTwo name="gamlath" age="31" job="civil enginner" />
    </div>
  );
};

const ExampleTwo = (props) => {
  return (
    <div>
      <h3>Name:{props.name}</h3>
      <br />
      <h3>Age:{props.age}</h3>
      <br />
      <h3>Job:{props.job}</h3>
      <hr />
    </div>
  );
};

// const Example = () => {
//   return (
//     <div>
//       <div>
//         <h3>name:chanuka</h3>
//         <br />
//         <h3>age:23</h3>
//         <br />
//         <h3>job:softwre engineer</h3>
//         <hr />
//       </div>

//       <div>
//         <h3>name:kamal</h3>
//         <br />
//         <h3>age:25</h3>
//         <br />
//         <h3>job:electrical engineer</h3> <hr />
//       </div>

//       <div>
//         <h3>name:perera</h3>
//         <br />
//         <h3>age:24</h3>
//         <br />
//         <h3>job:civil engineer</h3> <hr />
//       </div>

//       <div>
//         <h3>name:gamlath</h3>
//         <br />
//         <h3>age:20</h3>
//         <br />
//         <h3>job:softwre engineer</h3> <hr />
//       </div>
//     </div>
//   );
// };
export default Home;
