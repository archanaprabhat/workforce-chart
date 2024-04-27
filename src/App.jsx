import Header from './components/Header.jsx'
import Search from './components/Search.jsx'
import Table from './components/Table.jsx'
import { useState } from 'react';
function App() {
  const [inputSearch, setInputSearch] = useState("");
  return (
    <div>
      <Header />
      <Search inputSearch={inputSearch} setInputSearch={setInputSearch} />
      <Table inputSearch={inputSearch} />
    </div>
  )
}

export default App