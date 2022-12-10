export const FlexItem = ({ children, flexGrow }) => {
  const style = {};
  
  if (flexGrow) {
    style.flexGrow = flexGrow;
  }

  return (
    <div className="flexItem" style={style}>
      {children}
    </div>
  );
}
