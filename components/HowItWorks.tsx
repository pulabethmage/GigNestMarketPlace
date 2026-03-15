export default function HowItWorks() {
  return (
    <section id="how" className="py-20 bg-gray-50 text-center">
      <h2 className="text-3xl font-bold mb-12">How It Works</h2>

      <div className="grid md:grid-cols-3 gap-10 max-w-6xl mx-auto px-6">
        <div className="p-6 border rounded-xl">
          <h3 className="text-xl font-semibold mb-3">1. Post Your Project</h3>
          <p className="text-gray-600">
            Describe your assignment or development project and upload files.
          </p>
        </div>

        <div className="p-6 border rounded-xl">
          <h3 className="text-xl font-semibold mb-3">2. Receive Proposals</h3>
          <p className="text-gray-600">
            Developers will submit price quotes and delivery timelines.
          </p>
        </div>

        <div className="p-6 border rounded-xl">
          <h3 className="text-xl font-semibold mb-3">3. Get Work Done</h3>
          <p className="text-gray-600">
            Choose the best developer and get your project completed.
          </p>
        </div>
      </div>
    </section>
  );
}
