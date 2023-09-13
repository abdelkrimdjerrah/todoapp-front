interface InputProps {
  text: string;
  type?: string;
  Icon?: any;
  widthFull?: boolean;
  value: string;
  secure?: boolean;
  white?: boolean;
  onChange: (v: string) => void;
  onClick?: (e: any) => void;
  className?: string;
}

function Input({
  widthFull,
  className,
  type,
  text,
  value,
  onChange,
  onClick,
  Icon,
}: InputProps) {
  const width = widthFull ? " w-full " : "";
  const paddingRight = Icon ? " pr-8 " : " ";

  return (
    <div className="relative">
      <input
        className={
          width +
          paddingRight +
          " " +
          "  bg-white placeholder-zinc-300 pl-10 rounded-md p-3 focus:shadow-border outline-none border " +
          className
        }
        type={type}
        onClick={onClick}
        placeholder={text}
        onChange={(e) => onChange(e.target.value)}
        value={value}
      />
    </div>
  );
}

export default Input;
