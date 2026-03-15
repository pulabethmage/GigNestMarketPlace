const categories = [
  "Website Development",
  "ReactJs Projects",
  "NodeJs Projects",
  "Mobile Apps",
  "Java Projects",
  "Asp.NET Projects",
  "PHP/Laravel Projects",
  "Database Design",
  "UI/UX Design",
];

const subcategories = {
  "Website Development": ["E-commerce", "Blogs", "Portfolios"],
  "ReactJs Projects": ["Dashboards", "SPAs", "PWA"],
  "NodeJs Projects": ["APIs", "Real-time Apps", "Microservices"],
  "Mobile Apps": ["iOS", "Android", "Cross-platform"],
  "Java Projects": ["Spring", "Android", "Desktop"],
  "Asp.NET Projects": ["Web Forms", "MVC", "Core"],
  "PHP/Laravel Projects": ["Web Apps", "APIs", "CMS"],
  "Database Design": ["MySQL", "MongoDB", "PostgreSQL"],
  "UI/UX Design": ["Web Design", "Mobile Design", "Prototyping"],
};

export default function Categories() {
  return (
    <section id="categories" className="py-20 text-center bg-green-200">
      <h2 className="text-3xl font-bold mb-10">Popular Categories</h2>

      <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto px-6 ">
        {categories.map((cat, i) => (
          <div
            key={i}
            className="border bg-green-100 transparent border-gray-300 p-6 rounded-xl hover:shadow-lg hover:border-black hover:bg-white transition duration-200 cursor-pointer"
          >
            {cat}
            <span className="block mt-2 text-sm text-gray-500">
              {subcategories[cat].join(" | ")}
            </span>
          </div>
        ))}
      </div>
    </section>
  );
}
