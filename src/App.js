import "./App.css";

import Title from "./components/Title";
import Description from "./components/Description";
import Content from "./components/Content";

function App(props) {
  return (
    <>
      <Content
        name={"Je suis un premier titre"}
        text={
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere asperiores deleniti, iure vel consequuntur impedit numquam alias, aspernatur repudiandae quasi nisi ad, cum reiciendis sit rerum pariatur doloremque eius fuga? Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo quia officiis repudiandae ullam odit fugit fugiat dolorem, at atque accusamus molestias harum, in illum et unde, voluptate pariatur laboriosam explicabo!"
        }
      />

      <Content
        h1={"Je suis un second titre"}
        p={
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere asperiores deleniti, iure vel consequuntur impedit numquam alias"
        }
      />
    </>
  );
}

export default App;
