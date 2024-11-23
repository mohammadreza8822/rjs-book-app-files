import image from "./assets/1.png";
import Books from "./components/Books";
import Layout from "./layouts/Layout";
// we can use tinypng.com for having picture with smaller size

function App() {
  return (
    <Layout>
      {/* <img src={image} alt="" /> */}
      {/* <img src="/1.png" alt="" /> if we put image in public just we need to add / */}
      <Books />
    </Layout>
  );
}

export default App;
