function Button(props) {
  return (
    <button type="button" className={props.className} onClick={props.onClick}>
      {props.children ?? "Golden Rabbit"}
    </button>
  );
}

function Page() {
  return <Button className="primary" onClick={console.log} />;
}
