const Button = ({ className, text }: { className?: string; text?: string }) => {
  return <button className={className}>{text}</button>;
};

export default Button;
