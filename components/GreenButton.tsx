"use client";
interface GreenButtonProps {
  text: string;
  onClick?: () => void;
}

const GreenButton = ({ text, onClick }: GreenButtonProps) => {
  return (
    <button
      className="bg-green-700 text-white px-6 py-3 rounded-lg hover:bg-black transition duration-200"
      onClick={onClick}
    >
      {text}
    </button>
  );
};

export default GreenButton;
