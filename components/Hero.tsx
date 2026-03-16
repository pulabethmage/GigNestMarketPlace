"use client";
import GreenButton from "./GreenButton";
import { getProjects } from "@/services/projects/projectService";

export default function Hero() {
  const handlePostProject = async () => {
    try {
      const data = await getProjects();
      console.log(data);
      alert("Projects loaded. Check console.");
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <section className="text-center py-24 px-6 bg-green-100">
      <h1 className="text-5xl font-bold leading-tight">
        Post Your Project <br />
        Get Quotes From Developers
      </h1>

      <p className="mt-6 text-gray-600 max-w-xl mx-auto">
        Upload your assignment or software project and receive proposals from
        talented developers ready to help.
      </p>

      <div className="mt-8 space-x-4">
        <GreenButton text="Post a Project" onClick={handlePostProject} />

        <button className="border px-6 py-3 rounded-lg hover:bg-gray-300 transition duration-200">
          Browse Projects
        </button>
      </div>
    </section>
  );
}
