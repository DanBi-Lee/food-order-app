import Cart from "./components/Cart/Cart";
import MainBody from "./components/Layout/MainBody";
import MainHeader from "./components/Layout/MainHeader";
import Modal from "./components/UI/Modal";

function App() {
  return (
    <>
      <MainHeader />
      <MainBody />
      <Modal>
        <Cart></Cart>
      </Modal>
    </>
  );
}

export default App;
