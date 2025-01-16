import { getContent } from "@/utils/contentLoader";

export const About = () => {
  const { about } = getContent();

  return (
    <section id="about" className="py-16 bg-accent">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-primary mb-4">{about.title}</h2>
          <p className="text-xl text-gray-600 mb-8">{about.subtitle}</p>
          <p className="text-gray-700 mb-8">{about.description}</p>
          
          <div className="bg-white p-8 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold text-primary mb-4">Our Mission</h3>
            <p className="text-gray-700 mb-8">{about.mission}</p>
            
            <h3 className="text-xl font-semibold text-primary mb-4">Our Values</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {about.values.map((value, index) => (
                <div key={index} className="p-4 bg-accent rounded-md">
                  <p className="text-gray-700">{value}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};