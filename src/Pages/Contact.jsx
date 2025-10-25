import { Twitter, Github, Linkedin, Mail, ArrowUpRight } from "lucide-react";

const Contact = () => {
  const socials = [
    {
      name: "Twitter",
      icon: <Twitter className="w-5 h-5" />,
      link: "https://x.com/AbedazimReal",
      username: "@AbedazimReal",
    },
    {
      name: "GitHub",
      icon: <Github className="w-5 h-5" />,
      link: "https://github.com/the-abed",
      username: "the-abed",
    },
    {
      name: "LinkedIn",
      icon: <Linkedin className="w-5 h-5" />,
      link: "https://www.linkedin.com/in/mohammad-abed-477100386/",
      username: "Mohammad Abed",
    },
    {
      name: "Email",
      icon: <Mail className="w-5 h-5" />,
      link: "mailto:abedpersonal2024@gmail.com",
      username: "abedpersonal2024@gmail.com",
    },
  ];

  return (
    <div className="min-h-screen bg-neutral-50 dark:bg-neutral-900 py-24 px-4 transition-colors duration-300">
      
      {/* Main Container */}
      <div className="max-w-4xl mx-auto">
        
        {/* Contact Card */}
        <div className="bg-white dark:bg-neutral-800 rounded-2xl overflow-hidden shadow-sm border border-neutral-200 dark:border-neutral-700 transition-colors duration-300">
          
          {/* Header with Accent Line */}
          <div className="relative">
            <div className="h-1 bg-gradient-to-r from-neutral-800 via-neutral-600 to-neutral-400 dark:from-neutral-600 dark:via-neutral-500 dark:to-neutral-300"></div>
            
            {/* Content */}
            <div className="p-8 md:p-12">
              
              {/* Profile Section */}
              <div className="flex flex-col items-center text-center mb-12">
                
                {/* Avatar */}
                <div className="mb-6">
                  <div className="w-32 h-32 rounded-full overflow-hidden border-2 border-neutral-200 dark:border-neutral-600 shadow-sm">
                    <img
                      src="https://i.ibb.co/JWwJ1sX5/a-git.jpg"
                      alt="Profile"
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>

                {/* Title */}
                <h1 className="text-4xl md:text-5xl font-light text-neutral-900 dark:text-neutral-100 tracking-tight mb-3 transition-colors">
                  Get In Touch
                </h1>
                
                <p className="text-neutral-600 dark:text-neutral-400 text-lg max-w-2xl leading-relaxed transition-colors">
                  I'd love to hear from you! Connect with me through any of the following platforms.
                </p>
              </div>

              {/* Social Links */}
              <div className="space-y-3 max-w-2xl mx-auto">
                {socials.map((social) => (
                  <a
                    key={social.name}
                    href={social.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group flex items-center justify-between p-5 bg-neutral-50 dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-700 rounded-xl hover:border-neutral-400 dark:hover:border-neutral-500 transition-all"
                  >
                    <div className="flex items-center gap-4">
                      <div className="p-2 bg-white dark:bg-neutral-800 rounded-lg border border-neutral-200 dark:border-neutral-700 text-neutral-700 dark:text-neutral-300 transition-colors">
                        {social.icon}
                      </div>
                      <div className="text-left">
                        <div className="font-medium text-neutral-900 dark:text-neutral-100 transition-colors">
                          {social.name}
                        </div>
                        <div className="text-sm text-neutral-500 dark:text-neutral-400 transition-colors">
                          {social.username}
                        </div>
                      </div>
                    </div>
                    <ArrowUpRight className="w-5 h-5 text-neutral-400 dark:text-neutral-500 group-hover:text-neutral-900 dark:group-hover:text-neutral-100 group-hover:translate-x-1 group-hover:-translate-y-1 transition-all" />
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Additional Info Banner */}
        <div className="mt-8 bg-white dark:bg-neutral-800 rounded-2xl p-8 text-center border border-neutral-200 dark:border-neutral-700 shadow-sm transition-colors duration-300">
          <div className="max-w-2xl mx-auto space-y-3">
            <h2 className="text-2xl font-light text-neutral-900 dark:text-neutral-100 transition-colors">
              Let's Connect
            </h2>
            <p className="text-neutral-600 dark:text-neutral-300 leading-relaxed transition-colors">
              Whether you have a question, want to collaborate, or just want to say hi, feel free to reach out. I'm always open to discussing new projects and opportunities.
            </p>
          </div>
        </div>

        {/* Stats or Additional Info */}
        <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="bg-white dark:bg-neutral-800 rounded-xl p-6 border border-neutral-200 dark:border-neutral-700 hover:border-neutral-300 dark:hover:border-neutral-600 transition-all text-center">
            <div className="text-3xl font-light text-neutral-900 dark:text-neutral-100 mb-1 transition-colors">24h</div>
            <div className="text-sm text-neutral-500 dark:text-neutral-400 transition-colors">Response Time</div>
          </div>
          
          <div className="bg-white dark:bg-neutral-800 rounded-xl p-6 border border-neutral-200 dark:border-neutral-700 hover:border-neutral-300 dark:hover:border-neutral-600 transition-all text-center">
            <div className="text-3xl font-light text-neutral-900 dark:text-neutral-100 mb-1 transition-colors">4</div>
            <div className="text-sm text-neutral-500 dark:text-neutral-400 transition-colors">Platforms</div>
          </div>
          
          <div className="bg-white dark:bg-neutral-800 rounded-xl p-6 border border-neutral-200 dark:border-neutral-700 hover:border-neutral-300 dark:hover:border-neutral-600 transition-all text-center">
            <div className="text-3xl font-light text-neutral-900 dark:text-neutral-100 mb-1 transition-colors">∞</div>
            <div className="text-sm text-neutral-500 dark:text-neutral-400 transition-colors">Open to Connect</div>
          </div>
        </div>

        {/* Footer Note */}
        <div className="mt-12 text-center">
          <p className="text-sm text-neutral-400 dark:text-neutral-500 transition-colors">
            Available for freelance opportunities and collaborations.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Contact;