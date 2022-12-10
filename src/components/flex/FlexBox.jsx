import classNames from "classnames";

const spacingToClassMap = {
  s: 'flexBox--spacingS',
};

export const FlexBox = ({ children, justifyContent, spacing }) => {
  const style = {};
  
  switch(justifyContent) {
    case 'spaceBetween':
      style.justifyContent = 'space-between';
      break;
    default:
      break;
  }

  const className = classNames('flexBox', spacingToClassMap[spacing]);

  return (
    <div className={className} style={style}>
      {children}
    </div>
  );
}
