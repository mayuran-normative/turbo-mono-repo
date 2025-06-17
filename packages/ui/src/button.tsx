"use client";


interface ButtonProps {
  title: string;
  className?: string;
}

export const Button = ({ title, className }: ButtonProps) => {
  return (
    <button
      className={className}
      onClick={() => alert(`Hello from your button!`)}
    >
      {title}
    </button>
  );
};
