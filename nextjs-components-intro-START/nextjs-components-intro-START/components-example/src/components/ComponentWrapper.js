const ComponentWrapper = (props) => {
  return <div style={{ color: props.color }}>{props.children}</div>;
};

export default ComponentWrapper;
