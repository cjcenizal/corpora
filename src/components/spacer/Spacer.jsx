import classNames from "classnames";

const sizeToClassMap = {
  s: 'spacer--s',
  m: 'spacer--m',
  l: 'spacer--l',
};

export const Spacer = ({ size }) => {
  const className = classNames('spacer', sizeToClassMap[size]);

  return (
    <div className={className} />
  );
}
