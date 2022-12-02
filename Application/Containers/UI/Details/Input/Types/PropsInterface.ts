interface PropsInterface {
  type: string;
  placeholder: string;
  style?: React.CSSProperties;
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

export { PropsInterface };
