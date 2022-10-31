import "./App.css";

import Title from "./components/Title";
import Paragraph from "./components/Paragraph";

function App() {
  return (
    <>
      <div className="background-color">
        <Title name={"Je suis un premier titre"} color={"green"} />

        <Paragraph
          text={
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere asperiores deleniti, iure vel consequuntur impedit numquam alias, aspernatur repudiandae quasi nisi ad, cum reiciendis sit rerum pariatur doloremque eius fuga? Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo quia officiis repudiandae ullam odit fugit fugiat dolorem, at atque accusamus molestias harum, in illum et unde, voluptate pariatur laboriosam explicabo!"
          }
        />
      </div>

      <div className="background-color">
        <Title name={"Je suis un second titre"} color={"red"} />

        <Paragraph
          text={
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere asperiores deleniti, iure vel consequuntur impedit numquam alias, aspernatur repudiandae quasi nisi ad, cum reiciendis sit rerum pariatur doloremque eius fuga!"
          }
          color={"red"}
        />
      </div>
    </>
  );
}

export default App;
