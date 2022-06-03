const Button = ({
  className,
  text,
  icon,
}: {
  className?: string;
  text?: string;
  icon?: any;
}) => {
  return <button className={className}>{text ? text : icon}</button>;
};

export default Button;
