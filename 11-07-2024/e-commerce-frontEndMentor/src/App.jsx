import styles from "./App.module.css";
import { ProductDetailsBox } from "./components/ProductDetailsBox/ProductDetailsBox";
import { ProductLightBox } from "./components/ProductLightBox/ProductLightBox";
import { Layout } from "./components/Layout/Layout";
function App() {
  return (
    <>
      <Layout>
        <ProductLightBox />
        <ProductDetailsBox />
      </Layout>
    </>
  );
}

export default App;
