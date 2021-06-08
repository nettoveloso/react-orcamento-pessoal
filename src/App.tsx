import { useState } from "react";
import { Dashboard } from "./components/Dashboard";
import { Header } from "./components/Header";
import { NewTransactionModal } from "./components/NewTransactionModal";

import { GlobalStyle } from "./styles/global";

export function App() {
  const [isNewTransactionModalOpen, setIsNewTransactionModalOpen] = useState(false);

  function hadleOpenNewTransactionModal(){
    setIsNewTransactionModalOpen(true);
  }

  function hadleCloseNewTransactionModal(){
    setIsNewTransactionModalOpen(false);
  }

  return (
    <>
      <Header 
        onOpenNewTransactionModal={hadleOpenNewTransactionModal} 
      />
      
      <Dashboard />   
      
      <NewTransactionModal 
        isOpen={isNewTransactionModalOpen}
        onRequestClose={hadleCloseNewTransactionModal}
      />
      
      <GlobalStyle />      
    </>
  );
}

export default App;
