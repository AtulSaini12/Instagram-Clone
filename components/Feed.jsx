import Stories from "./Stories";

function Feed() {
  return (
    <main className="grid grid-cols-1 md:grid-cols-2 md:max-w-3xl xl:grid-cols-3 xl:max-w-6xl max-auto">
      <section className="col-span-2">
        {/* section left */}
        <Stories />
        {/* Stories */}
        {/* Posts */}
      </section>

      <section>
        {/* Right section */}
        {/* Mini profile */}
        {/* Suggestions */}
      </section>
    </main>
  );
}

export default Feed;
