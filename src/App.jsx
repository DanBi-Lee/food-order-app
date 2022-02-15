import {useState} from "react";
import Cart from "./components/Cart/Cart";
import MainBody from "./components/Layout/MainBody";
import MainHeader from "./components/Layout/MainHeader";
import Modal from "./components/UI/Modal";

function App() {
    const [isModal,
        setIsModal] = useState(false);
    const closeHandler = () => {
        setIsModal(false);
    }
    const openHandler = () => {
        setIsModal(true);
    }

    return ( 
    <> 
      <MainHeader onOpen={openHandler}/> 
      < MainBody />
      {
        isModal && 
        (
        <Modal onClose={closeHandler}>
          <Cart onClose={closeHandler}/>
        </Modal>
         )
      }
      
    </>
  );
}

export default App;