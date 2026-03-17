import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { Nav } from "../../components/Nav";
import { Footer } from "../../components/Footer";
import { getAllPosts, getPostBySlug } from "../../../content/blog/posts";

export async function generateStaticParams() {
  return getAllPosts().map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) return {};

  return {
    title: post.title,
    description: post.description,
    keywords: post.keywords,
  };
}

export default async function BlogPostPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) notFound();

  return (
    <>
      <Nav />
      <article className="article-shell">
        <div className="article-meta">
          <span>{post.category}</span>
          <span>·</span>
          <span>{post.readingTime}</span>
          <span>·</span>
          <span>{post.publishedAt}</span>
        </div>
        <h1 className="article-title">{post.title}</h1>
        <p className="article-intro">{post.excerpt}</p>

        <div className="article-body">
          {post.body.map((paragraph, index) => (
            <p key={index}>{paragraph}</p>
          ))}
        </div>

        {post.faq?.length ? (
          <section className="article-faq">
            <h2>FAQs</h2>
            <div className="faq-list">
              {post.faq.map((item) => (
                <div key={item.question} className="faq-item">
                  <h3 className="faq-q">{item.question}</h3>
                  <p className="faq-a">{item.answer}</p>
                </div>
              ))}
            </div>
          </section>
        ) : null}

        <section className="article-cta">
          <h2>See ProtectKaro on your store</h2>
          <p>
            Install ProtectKaro to capture consent, monitor Protection Status, and keep consent records review-ready inside Shopify admin.
          </p>
          <a href="https://apps.shopify.com/protectkaro" className="cta-btn" rel="noopener noreferrer">
            Install on Shopify
          </a>
        </section>
      </article>
      <Footer />
    </>
  );
}
