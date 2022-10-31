const Paragraph = (props) => {
  return <p className={`description ${props.color}`}> {props.text} </p>;
};
export default Paragraph;
