import classNames from 'classnames';

const colorToClassMap = {
  accent: 'text--accent',
  subtle: 'text--subtle',
};

export const Text = ({ color, children }) => {
  const className = classNames('text', colorToClassMap[color]);

  return (
    <div className={className}>
      {children}
    </div>
  );
}
