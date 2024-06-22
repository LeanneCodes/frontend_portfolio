import Navbar from './Navbar';

export default function Layout({ children }) {
  return (
    <div className="relative flex flex-col md:flex-row min-h-screen">
      <Navbar />
      <main className="flex-1 md:pr-16">{children}</main>
    </div>
  );
}
