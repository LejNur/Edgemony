import styles from "./App.module.css";
import ProductDetailsBox from "./components/ProductDetailsBox/ProductDetailsBox";
// import { Button } from "./components/Button/Button";
// import { IconCart } from "./components/Icons/IconCart";
// import { Counter } from "./components/Counter/Counter";
import { ProductLightBox } from "./components/ProductLightBox/ProductLightBox";
function App() {
  return (
    <>
      {/* <Button text={"Add to cart"}>
        <IconCart fill="#000000" />
      </Button>
      <Counter /> */}
      <ProductLightBox />
      <ProductDetailsBox />
    </>
  );
}

export default App;
