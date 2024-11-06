export default function History() {
  return (
    <main id="main" className="h-screen w-full bg-custom-red2">
        <div className="pt-20 pb-10 text-center">
          <div className="inline-block">
            <h1 className="text-4xl font-bold text-white uppercase tracking-wider font-customFont">
              History
            </h1>
            <div className="h-1 bg-white mt-4"></div>
          </div>
        </div>

        <div className="container mx-auto px-4">
          <div className="flex gap-8">
            <div className="w-1/2 space-y-8">
              <div className="bg-custom-red rounded-lg p-8 h-64 shadow-lg flex items-center justify-center">
                <p className="text-white text-center text-lg">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam voluptates deserunt,
                  explicabo amet consectetur modi dignissimos pariatur.
                </p>
              </div>
              <div className="bg-custom-red rounded-lg p-8 h-64 shadow-lg flex items-center justify-center">
                <p className="text-white text-center text-lg">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam voluptates deserunt,
                  explicabo amet consectetur modi dignissimos pariatur.
                </p>
              </div>
            </div>

            <div className="w-1/2">
              <div className="bg-custom-red rounded-lg p-8 h-[544px] shadow-lg flex items-center justify-center">
                <p className="text-white text-center text-lg">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam voluptates deserunt,
                  explicabo amet consectetur modi dignissimos pariatur. Repellendus magnam beatae
                  exercitationem dolorum necessitatibus quos iste, maiores nisi totam, laborum natus.
                </p>
              </div>
            </div>
          </div>
        </div>
      </main>
  );
}
