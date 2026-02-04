import CyberCard from "./ui/CyberCard";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="mt-auto">
      <div className="container mx-auto px-8">
        <CyberCard title="Communication Links" className="mb-0">
          <div className="flex justify-center space-x-6 mb-4">
            {/* Social Icons */}
            <a
              href="https://github.com/ProjectEuropa"
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center justify-center w-10 h-10 border border-cyber-blue/50 rounded-full text-foreground hover:text-cyber-blue hover:border-cyber-blue hover:shadow-[0_0_10px_#26dafd] hover:-translate-y-1 transition-all duration-300"
            >
              <span className="sr-only">GitHub</span>
              <svg
                className="w-5 h-5 fill-current"
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                <path d="M12,2A10,10 0 0,0 2,12C2,16.42 4.87,20.17 8.84,21.5C9.34,21.58 9.5,21.27 9.5,21C9.5,20.77 9.5,20.14 9.5,19.31C6.73,19.91 6.14,17.97 6.14,17.97C5.68,16.81 5.03,16.5 5.03,16.5C4.12,15.88 5.1,15.9 5.1,15.9C6.1,15.97 6.63,16.93 6.63,16.93C7.5,18.45 8.97,18 9.54,17.76C9.63,17.11 9.89,16.67 10.17,16.42C7.95,16.17 5.62,15.31 5.62,11.5C5.62,10.39 6,9.5 6.65,8.79C6.55,8.54 6.2,7.5 6.75,6.15C6.75,6.15 7.59,5.88 9.5,7.17C10.29,6.95 11.15,6.84 12,6.84C12.85,6.84 13.71,6.95 14.5,7.17C16.41,5.88 17.25,6.15 17.25,6.15C17.8,7.5 17.45,8.54 17.35,8.79C18,9.5 18.38,10.39 18.38,11.5C18.38,15.32 16.04,16.16 13.81,16.41C14.17,16.72 14.5,17.33 14.5,18.26C14.5,19.6 14.5,20.68 14.5,21C14.5,21.27 14.66,21.59 15.17,21.5C19.14,20.16 22,16.42 22,12A10,10 0 0,0 12,2Z" />
              </svg>
            </a>
            <a
              href="https://qiita.com/ProjectEuropa"
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center justify-center w-10 h-10 border border-cyber-blue/50 rounded-full text-foreground hover:text-cyber-blue hover:border-cyber-blue hover:shadow-[0_0_10px_#26dafd] hover:-translate-y-1 transition-all duration-300"
            >
              <span className="sr-only">Qiita</span>
              <svg
                className="w-5 h-5 fill-current"
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                <path d="M7.1,19c-0.3,0-0.5-0.1-0.7-0.3c-0.2-0.2-0.3-0.4-0.3-0.7V6c0-0.3,0.1-0.5,0.3-0.7c0.2-0.2,0.4-0.3,0.7-0.3h2.1 c0.3,0,0.5,0.1,0.7,0.3c0.2,0.2,0.3,0.4,0.3,0.7v12c0,0.3-0.1,0.5-0.3,0.7C9.7,18.9,9.4,19,9.2,19H7.1z M14.8,19 c-0.3,0-0.5-0.1-0.7-0.3c-0.2-0.2-0.3-0.4-0.3-0.7v-5.3c0-0.3,0.1-0.5,0.3-0.7c0.2-0.2,0.4-0.3,0.7-0.3h2.1c0.3,0,0.5,0.1,0.7,0.3 c0.2,0.2,0.3,0.4,0.3,0.7V18c0,0.3-0.1,0.5-0.3,0.7c-0.2,0.2-0.4,0.3-0.7,0.3H14.8z M14.8,9.5c-0.8,0-1.5-0.3-2.1-0.8 c-0.6-0.6-0.8-1.2-0.8-2.1c0-0.8,0.3-1.5,0.8-2.1c0.6-0.6,1.2-0.8,2.1-0.8c0.8,0,1.5,0.3,2.1,0.8c0.6,0.6,0.8,1.2,0.8,2.1 c0,0.8-0.3,1.5-0.8,2.1C16.3,9.2,15.6,9.5,14.8,9.5z" />
              </svg>
            </a>
            <a
              href="https://zenn.dev/m2"
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center justify-center w-10 h-10 border border-cyber-blue/50 rounded-full text-foreground hover:text-cyber-blue hover:border-cyber-blue hover:shadow-[0_0_10px_#26dafd] hover:-translate-y-1 transition-all duration-300"
            >
              <span className="sr-only">Zenn</span>
              <svg
                className="w-5 h-5 fill-current"
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                <path d="M.264 23.771h4.984c.264 0 .498-.147.645-.352L19.614.874c.176-.293-.029-.645-.381-.645h-4.72c-.235 0-.44.117-.557.323L.03 23.361c-.088.176.029.41.234.41zM17.445 23.419l6.479-10.408c.205-.323-.029-.733-.41-.733h-4.691c-.176 0-.352.088-.44.235l-6.655 10.643c-.176.264.029.616.352.616h4.779c.234-.001.468-.118.586-.353z" />
              </svg>
            </a>
          </div>
          <p className="text-sm opacity-80 font-mono">
            &copy; 2016-{currentYear}{" "}
            <span className="text-cyber-blue">Team Project Europa</span>{" "}
            {/* All Systems Operational */}
          </p>
        </CyberCard>
      </div>
    </footer>
  );
}
