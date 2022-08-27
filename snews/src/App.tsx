import './App.css';
import Body from './Components/Body/Body';
import GridSection from './Components/Grid/GridSection';

function App() {

  let link: string = `https://api.spaceflightnewsapi.net/v3/articles?_limit=12`;

  return (
      <Body>
        <GridSection url={link}></GridSection>
      </Body>
    );
}

export default App;
