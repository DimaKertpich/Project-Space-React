import Header from './components/header/header';
import Content from './components/content/content';
import Project from './components/infoProject/project';
import Footer from './components/footer/footer';
import Swap from './components/swap/swapToken'


function App() {
  return (
    <div className="App">
        <Header></Header>
        <Content></Content>
        <Swap></Swap>
        <Project></Project>
        <Footer></Footer>
    </div>
  );
}

export default App;
