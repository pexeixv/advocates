const Footer = () => {
  return (
    <footer className="bg-neutral-800">
      <div className="container mx-auto px-5 py-3 flex flex-col lg:flex-row items-center justify-between">
        <a className="group" href="//gavn.in" target="_blank" rel="noreferrer">
          <i className="fas fa-code"></i> by{" "}
          <span className="font-bold underline decoration-transparent group-hover:decoration-white transition-all transition-300">
            Gavin Pereira
          </span>
        </a>
        <div>
          Built with{" "}
          <a
            href="//nextjs.org"
            target="_blank"
            className="font-bold underline decoration-transparent hover:decoration-white transition-all transition-300"
            rel="noreferrer"
          >
            NextJS
          </a>{" "}
          &{" "}
          <a
            href="//tailwindcss.com"
            target="_blank"
            className="font-bold underline decoration-transparent hover:decoration-white transition-all transition-300"
            rel="noreferrer"
          >
            TailwindCSS
          </a>
        </div>
      </div>
    </footer>
  );
};
export default Footer;
