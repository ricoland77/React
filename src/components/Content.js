import Title from "./Title";
import Description from "./Description";

const Content = () => {
  return (
    <div className="background-color">
      <Title name={props.title} />
      <Description text={props.description} />
    </div>
  );
};

export default Content;
