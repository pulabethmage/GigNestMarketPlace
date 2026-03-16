"use client";
import GreenButton from "./GreenButton";

export default function CTA() {
  const handleClick = () => {
    console.log("CTA button clicked!");
  };

  return (
    <section className="bg-white text-gray-800 text-center py-20">
      <h2 className="text-3xl font-bold mb-6">Ready to start your project?</h2>

      <GreenButton text="Post a Project" onClick={handleClick} />
    </section>
  );
}
