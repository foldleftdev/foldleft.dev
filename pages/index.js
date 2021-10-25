import Layout from '../components/Layout';

export default function Index() {
  return (
    <Layout>
      <div className="pt-24 pb-48 bg-gradient-to-tr from-purple-800 to-purple-500 shadow-2xl">
        <div className="container mx-auto">
          <div className="grid grid-flow-col auto-cols-max items-center gap-x-6">
            <img className="w-10" src="/logo.svg" alt="foldleft logo"/>
            <h1 className="row-start-1 text-2xl font-mono font-medium tracking-wide">foldleft</h1>
            <div className="row-start-2 mt-24">
              <h1 className="text-5xl font-serif font-medium">
                Build the web app of your dreams.
              </h1>
              <p className="mt-6 text-lg font-mono font-medium">
                We are <span className="text-yellow tracking-wide">foldleft</span>,
                the web dev studio that can get it done.
              </p>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}
