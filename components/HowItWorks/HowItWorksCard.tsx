interface Props {
  title: string;
  description: string;
}

export default function HowItWorksCard({ title, description }: Props) {
  return (
    <div className="p-6 bg-green-700 rounded-xl hover:bg-green-900 transition duration-300">
      <h3 className="text-xl font-semibold mb-3 text-white">{title}</h3>
      <p className="text-white">{description}</p>
    </div>
  );
}
