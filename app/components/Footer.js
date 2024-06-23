export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="flex">
      <div className="w-1/2 bg-red-600 text-whitesmoke text-center py-4">
        <p className="font-bold text-whitesmoke">
          &copy; {currentYear} Leanne Goldsmith.
        </p>
      </div>
      <div className="w-1/2 bg-whitesmoke text-red-600 text-center py-4">
        <p className="font-bold">
          All Rights Reserved.
        </p>
      </div>
    </footer>
  );
}
