import Title from "./components/Title";
import Grid from "./components/Grid";
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';

function App() {
  return (
    <>
      <Container>
        <Title />
        <Grid />
      </Container>
    </>
  );
}

export default App;
