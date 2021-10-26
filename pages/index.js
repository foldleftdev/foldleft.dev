import Layout from '../components/Layout';

export default function Index() {
  return (
    <Layout>
      <div className="bg-gradient-to-tr from-purple-800 to-blue-600 shadow-2xl">
        <div className="pt-24 pb-48 bg-dither">
          <div className="container mx-auto px-3 filter drop-shadow-md">
            <div className="grid grid-flow-col auto-cols-max items-center gap-x-6">
              <a href="/">
                <img className="w-10" src="/logo.svg" alt="foldleft logo"/>
              </a>
              <h1 className="row-start-1 text-2xl font-mono font-bold tracking-wide">
                foldleft
              </h1>
              <div className="row-start-2 mt-24">
                <h1 className="text-5xl font-serif font-medium leading-tight">
                  We're the web dev studio<br/>that gets it done right.
                </h1>
                <a href="https://calendly.com/mazeika-llc/new-client">
                  <button className="mt-10 py-3 px-6 bg-yellow hover:shadow-xl hover:bg-yellow-2 rounded font-mono font-bold text-black text-opacity-60">
                    Let's Meet
                  </button>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}
