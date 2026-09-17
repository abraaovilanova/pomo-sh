import './App.css';
import Footer from './components/footer';
import { NavbarList, NavbarListItens } from './components/navbarlist';
import Clook from './components/clock'
import Management from './components/management'
import Header from './components/header'
import ManagementContainer from './components/management/ManagementContainer'

function App() {
  return (
    <div className="App">
      <Header>
        <div className="title">
          <h1>./pomo.sh</h1>
        </div>
          <NavbarList>
            <NavbarListItens>Config</NavbarListItens>
            <NavbarListItens>Report</NavbarListItens>
            <NavbarListItens>Login</NavbarListItens>
          </NavbarList>
      </Header>
      <Clook />
      <ManagementContainer>
        <Management title="Project" />
        <Management title="Task" />
      </ManagementContainer>
      <Footer />
    </div >

  );
}

export default App;
