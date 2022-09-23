export function Button(props) {
  const { children, style, ...rest } = props;
  return (
    <button
      onClick={(e) => {
        console.log(e);
      }}
      className={"button"}
      {...rest}
      style={{
        ...style,
      }}
    >
      <div className="text">{children}</div>
    </button>
  );
}

export function GrayButton({ children, ...props }) {
  return (
    <Button
      style={{
        "--y-button-background-color": "gray",
      }}
      {...props}
    >
      {children}
    </Button>
  );
}
