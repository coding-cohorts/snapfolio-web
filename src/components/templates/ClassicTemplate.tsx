import { Mail, Phone, MapPin } from 'lucide-react';

// Classic Template - Traditional, header-based layout
export const ClassicTemplate: React.FC<{ data: ResumeData }> = ({ data }) => {
    return (
      <div className="bg-white min-h-[1056px] w-[816px] p-8">
        {/* Header */}
        <div className="text-center border-b pb-6 mb-6">
          <h1 className="text-3xl font-bold text-gray-900">{data.personalInfo.name}</h1>
          <p className="text-xl text-gray-600 mt-1">{data.personalInfo.title}</p>
          
          <div className="flex justify-center gap-4 mt-4 text-sm text-gray-600">
            <div className="flex items-center gap-1">
              <Mail size={14} /> {data.personalInfo.email}
            </div>
            <div className="flex items-center gap-1">
              <Phone size={14} /> {data.personalInfo.phone}
            </div>
            <div className="flex items-center gap-1">
              <MapPin size={14} /> {data.personalInfo.location}
            </div>
          </div>
        </div>
  
        {/* Content */}
        <div className="space-y-6">
          {data.summary && (
            <section>
              <h2 className="text-xl font-bold border-b pb-2 mb-3">Professional Summary</h2>
              <p className="text-gray-700">{data.summary}</p>
            </section>
          )}
  
          <section>
            <h2 className="text-xl font-bold border-b pb-2 mb-3">Experience</h2>
            <div className="space-y-4">
              {data.experience.map((exp, index) => (
                <div key={index}>
                  <div className="flex justify-between items-start">
                    <div>
                      <h3 className="font-semibold">{exp.position}</h3>
                      <p className="text-gray-600">{exp.company}</p>
                    </div>
                    <span className="text-gray-600">{exp.duration}</span>
                  </div>
                  <p className="mt-2">{exp.description}</p>
                </div>
              ))}
            </div>
          </section>
  
          <section>
            <h2 className="text-xl font-bold border-b pb-2 mb-3">Education</h2>
            <div className="space-y-4">
              {data.education.map((edu, index) => (
                <div key={index}>
                  <div className="flex justify-between items-start">
                    <div>
                      <h3 className="font-semibold">{edu.degree}</h3>
                      <p className="text-gray-600">{edu.school}</p>
                    </div>
                    <span className="text-gray-600">{edu.duration}</span>
                  </div>
                  {edu.description && <p className="mt-2">{edu.description}</p>}
                </div>
              ))}
            </div>
          </section>
  
          <section>
            <h2 className="text-xl font-bold border-b pb-2 mb-3">Skills</h2>
            <div className="flex flex-wrap gap-2">
              {data.skills.map((skill, index) => (
                <span key={index} className="bg-gray-100 px-3 py-1 rounded">
                  {skill}
                </span>
              ))}
            </div>
          </section>
        </div>
      </div>
    );
  };