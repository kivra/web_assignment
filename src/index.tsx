import "@mantine/core/styles.css";
import { MantineProvider, Container } from "@mantine/core";
import { createRoot } from "react-dom/client";
import { PokeList } from "./PokeList";

function App() {
  return (
    <MantineProvider>
      <Container
        style={{
          marginTop: 50,
          border: "1px solid #000",
          borderRadius: 8,
          padding: 20,
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "space-around",
        }}
        size="lg"
      >
        <PokeList />
      </Container>
    </MantineProvider>
  );
}

const container = document.getElementById("app")!;
const root = createRoot(container);
root.render(<App />);
