interface GreenButtonProps {
  text: string;
}

const GreenButton = ({ text }: GreenButtonProps) => {
  return (
    <button className="bg-green-700 text-white px-6 py-3 rounded-lg hover:bg-black transition duration-300">
      {text}
    </button>
  );
};

export default GreenButton;
