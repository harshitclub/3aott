import Link from "next/link";

export default function NotFound() {
  return (
    <>
      <main className="notFound flex alignCenter justifyCenter with100">
        <section className="notFoundContainer width95 maxWidth flex alignCenter justifyCenter flexColumn">
          <h1>404</h1>
          <h2>Page Not Found</h2>
          <Link href="/">Back to home</Link>
        </section>
      </main>
    </>
  );
}
