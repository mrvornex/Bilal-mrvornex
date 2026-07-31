const WorkExperience = () => {
  return (
    <section id="work-experience" className="mt-20">
      <h2 className="text-2xl font-bold mb-10 uppercase tracking-wide">
        WORK EXPERIENCE
      </h2>

      <div className="flex flex-col md:flex-row gap-8">
        {/* Date */}
        <div className="min-w-[150px] text-gray-500">
          2024 — Present
        </div>

        {/* Content */}
        <div>
          <h3 className="text-xl font-semibold text-black">
            Software Development Trainee
          </h3>

          <p className="text-gray-500 mt-1 mb-5">
            Professional Software Development Course – Jawan Pakistan
          </p>

          <div className="space-y-5 text-gray-700 leading-8">
            <p>
              I have completed a Professional Software Development course from Jawan Pakistan, where I gained hands-on experience in HTML, CSS, JavaScript, React, Tailwind CSS, Next.js, and TypeScript. I started my web development journey in 2024, and since then I have built a strong foundation in modern frontend development through consistent practice and real-world projects.

              During my training, I developed projects including a Student Management System, a Contact Book Application, and several responsive web applications. These projects gave me a solid understanding of component-based architecture, state management, routing, and responsive design.

              I also have experience with Git and GitHub for version control, and I always strive to write clean, maintainable, and professional code.

              Currently, I am expanding my skills into backend development — learning Node.js, Express.js, and GraphQL — so that I can build full-stack applications.
            </p>

            {/* <p>
              During my training, I completed projects including a Student
              Management System, Contact Book Application, and multiple
              responsive web applications. These projects strengthened my
              understanding of component-based architecture, state management,
              routing, and responsive design.
            </p>

            <p>
              I also have experience with Git and GitHub for version control and
              focus on writing clean, maintainable code. In addition, I create
              AI-generated content and manage a YouTube channel with 78.5K+
              subscribers. I also work with AI-powered image enhancement,
              professional portraits, and customized visual editing.
            </p> */}
          </div>
        </div>
      </div>
    </section>
  );
};

export default WorkExperience;