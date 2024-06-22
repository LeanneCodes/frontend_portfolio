import Layout from './components/Layout';

export default function Home() {
  return (
    <Layout>
      <section className="flex flex-col justify-center items-center h-screen bg-purple-500 text-white text-center md:w-full md:pr-16">
        <h1 className="text-4xl md:text-6xl font-bold mb-4">Hi! We Are Studio Bagaz'</h1>
        <p className="text-lg md:text-2xl">
          As visual storytellers we transform any concept into a unique visual language with a little bit of magic & fairy dust.
        </p>
      </section>
      <section id="work" className="p-8">
        <h2 className="text-3xl font-bold mb-4">Work</h2>
        <p>Details about work...</p>
      </section>
      <section id="about" className="p-8">
        <h2 className="text-3xl font-bold mb-4">About</h2>
        <p>Details about about...</p>
      </section>
      <section id="contact" className="p-8">
        <h2 className="text-3xl font-bold mb-4">Contact</h2>
        <p>Details about contact...</p>
      </section>
    </Layout>
  );
}
