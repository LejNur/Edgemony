import styles from "./App.module.css";
import { Button } from "./components/Button/Button";
import { IconCart } from "./components/Icons/IconCart";
import { Counter } from "./components/Counter/Counter";
import { ProductLightBox } from "./components/ProductLightBox/ProductLightBox";
function App() {
  return (
    <>
      <h1>hello world!</h1>
      <Button text={"Add to cart"}>
        <IconCart fill="#000000" />
      </Button>
      <Counter />
      <ProductLightBox />
    </>
  );
}

export default App;
