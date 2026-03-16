import HowItWorksCard from "./HowItWorksCard";
export default function HowItWorks() {
  return (
    <section id="how" className="py-10 bg-gray-50 text-center">
      <h2 className="text-3xl font-bold mb-12">How It Works</h2>

      <div className="grid md:grid-cols-3 gap-10 max-w-6xl mx-auto px-6">
        <HowItWorksCard
          title="1. Post Your Project"
          description="Describe your assignment or development project and upload files."
        />

        <HowItWorksCard
          title="2. Receive Proposals"
          description="Developers will submit price quotes and delivery timelines."
        />

        <HowItWorksCard
          title="3. Get Work Done"
          description="Choose the best developer and get your project completed."
        />
      </div>
    </section>
  );
}
