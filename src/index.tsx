import { Container } from "@mantine/core";
import { render } from "react-dom";
import { PokeList } from "./PokeList";

function App() {
  return (
    <Container
      style={{
        marginTop: 50,
        border: "1px solid #000",
        borderRadius: 8,
        padding: 20,
        display: "flex",
        flexWrap: "wrap",
        justifyContent: "space-around"
      }}
      size="lg"
    >
      <PokeList />
    </Container>
  );
}

render(<App />, document.querySelector("#app"));
