interface ButtonInterface {
  primary?: boolean;
  size?: "small" | "medium" | "big";
  onClick?: () => void;

  children: string;
}

export { ButtonInterface };
