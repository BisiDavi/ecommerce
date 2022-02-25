export default function BlogBanner() {
  return (
    <section className="w-full items-center justify-center">
      <div className="flex justify-between">
        <div className="w-1/2 bg-pink-300 hover:bg-pink-200 flex justify-center p-16">
          <div className="content">
            <h3 className="capitalize text-lg">Read the Blog</h3>
            <p>Latest store, Fashion news and trends</p>
          </div>
        </div>
        <div className="w-1/2 bg-purple-300 hover:bg-purple-200 flex justify-center p-16">
          <div className="content">
            <h3 className="capitalize">Read the Blog</h3>
            <p className="font-serif">Latest store, Fashion news and trends</p>
          </div>
        </div>
      </div>
    </section>
  );
}
