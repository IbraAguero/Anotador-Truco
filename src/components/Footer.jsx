const Footer = () => {
  return (
    <footer className="w-full text-center text-sm font-medium bg-stone-900 text-white p-2">
      © {new Date().getFullYear()} -{" "}
      <a
        href="https://github.com/IbraAguero"
        target="_blank"
        className="italic"
      >
        IBRA
      </a>
    </footer>
  );
};
export default Footer;
