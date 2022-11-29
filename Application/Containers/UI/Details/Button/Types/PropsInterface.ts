interface PropsInterface {
  children?: React.ReactNode;
  disabled?: boolean;
  style?: React.CSSProperties;
  onClick?: (event: React.MouseEvent<HTMLElement>) => void;
}

export { PropsInterface };
