import { cloneElement } from 'react';
import classNames from 'classnames';

const sizeToClassMap = {
  xs: 'title--xs',
  s: 'title--s',
  m: 'title--m',
};

const colorToClassMap = {
  accent: 'title--accent',
};

export const Title = ({ size, color, children }) => {
  const className = classNames('title', sizeToClassMap[size], colorToClassMap[color]);
  const element = cloneElement(children, { className });
  return element;
}
