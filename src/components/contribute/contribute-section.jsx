"use client";

export function ContributeSection() {
  return (
    <section className="py-16 bg-zinc-50">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-4">
            Join Our Component Collection
          </h2>
          <p className="text-zinc-600 mb-8">
            We're building a comprehensive library of different components and
            we need your help! Share your favorite components with the community
            and help others discover amazing UI elements.
          </p>
          <a
            href="https://forms.gle/K4FcBCnG1PQNo1tm7"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center px-6 py-3 text-base font-medium text-white bg-zinc-900 rounded-lg hover:bg-zinc-800 transition-colors duration-200"
          >
            Submit Your Components
          </a>
        </div>
      </div>
    </section>
  );
}
