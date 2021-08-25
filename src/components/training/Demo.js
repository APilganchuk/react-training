import { useHover } from "react-use";

const Demo = () => {
  const element = (hovered) => (
    <div style={hovered ? { color: "tomato" } : null}>Hover me!</div>
  );
  const [hoverable] = useHover(element);

  return <div>{hoverable}</div>;
};

export default Demo;
