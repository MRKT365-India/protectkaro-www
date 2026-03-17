import type { Metadata } from "next";
import Link from "next/link";
import { Nav } from "../components/Nav";
import { Footer } from "../components/Footer";
import { getAllPosts } from "../../content/blog/posts";

export const metadata: Metadata = {
  title: "Blog",
  description:
    "ProtectKaro blog: DPDP guides, Shopify compliance checklists, consent record best practices, and audit-ready implementation advice.",
};

export default function BlogPage() {
  const posts = getAllPosts();

  return (
    <>
      <Nav />
      <section className="page-hero">
        <div className="page-hero-inner">
          <div className="page-badge">Blog</div>
          <h1 className="page-title">DPDP, consent records, and Shopify compliance</h1>
          <p className="page-subtitle">
            Practical guides for merchants and agencies that want more than a banner — they want audit-ready proof.
          </p>
        </div>
      </section>

      <section className="section" style={{ paddingTop: 24 }}>
        <div className="blog-grid">
          {posts.map((post) => (
            <article key={post.slug} className="blog-card">
              <div className="blog-meta">
                <span>{post.category}</span>
                <span>·</span>
                <span>{post.readingTime}</span>
              </div>
              <h2 className="blog-card-title">
                <Link href={`/blog/${post.slug}`}>{post.title}</Link>
              </h2>
              <p className="blog-card-desc">{post.description}</p>
              <div className="blog-keywords">
                {post.keywords.slice(0, 2).map((keyword) => (
                  <span key={keyword} className="blog-keyword">{keyword}</span>
                ))}
              </div>
              <Link href={`/blog/${post.slug}`} className="text-link">Read article →</Link>
            </article>
          ))}
        </div>
      </section>

      <Footer />
    </>
  );
}
