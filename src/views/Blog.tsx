"use client";

import { Layout } from "@/components/layout";
import { ScrollReveal, StaggerContainer, StaggerItem } from "@/components/animations";
import { Button } from "@/components/ui/button";
import { ImageWithSkeleton } from "@/components/ui/image-skeleton";
import Link from "next/link";
import { ArrowRight, Calendar, Clock, User } from "lucide-react";
import { useI18n } from "@/i18n";

const defaultPosts = [
  {
    id: 1,
    title: "How AI Chatbots Are Revolutionizing Customer Service",
    excerpt: "Discover how RAG-powered chatbots are transforming the way businesses interact with customers, reducing costs while improving satisfaction.",
    image: "https://images.unsplash.com/photo-1531746790731-6c087fecd65a?w=800&h=400&fit=crop",
    category: "AI & Technology",
    author: "Make It Bot Team",
    date: "Dec 15, 2024",
    readTime: "5 min read",
  },
  {
    id: 2,
    title: "PWA vs Native Apps: Making the Right Choice",
    excerpt: "A comprehensive comparison to help you decide whether a Progressive Web App or native development is right for your project.",
    image: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=800&h=400&fit=crop",
    category: "Web Development",
    author: "Make It Bot Team",
    date: "Dec 5, 2024",
    readTime: "6 min read",
  },
  {
    id: 3,
    title: "The Future of Digital Solutions: Trends for 2025",
    excerpt: "Explore the emerging technologies and strategies that will shape digital innovation in the coming year.",
    image: "https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=800&h=400&fit=crop",
    category: "Technology",
    author: "Make It Bot Team",
    date: "Nov 28, 2024",
    readTime: "7 min read",
  },
];

export default function BlogPage() {
  const { t } = useI18n();
  const posts = defaultPosts;
  const categories = ["All", "AI & Technology", "Web Development", "Technology"];

  return (
    <Layout>
      {/* Hero Section */}
      <section className="pt-32 pb-20 relative overflow-hidden">
        <div className="absolute inset-0 grid-pattern opacity-30" />
        <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-primary/20 rounded-full blur-3xl" />

        <div className="container mx-auto px-4 lg:px-8 relative z-10">
          <div className="max-w-4xl">
            <ScrollReveal animation="fade-up">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
                {t.blog.heroTitle}<span className="gradient-text">{t.blog.heroSubtitleStart}</span>
              </h1>
            </ScrollReveal>
            <ScrollReveal animation="fade-up" delay={0.1}>
              <p className="text-xl text-muted-foreground max-w-2xl">
                {t.blog.heroSubtitle}
              </p>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Blog Posts */}
      <section className="py-20">
        <div className="container mx-auto px-4 lg:px-8">
          {/* Categories */}
          <ScrollReveal animation="fade-up">
            <div className="flex flex-wrap gap-3 mb-12">
              {categories.map((category) => (
                <Button
                  key={category}
                  variant={category === "All" ? "default" : "outline"}
                  className={category === "All" ? "gradient-primary text-primary-foreground" : ""}
                >
                  {category}
                </Button>
              ))}
            </div>
          </ScrollReveal>

          {/* Featured Post */}
          <ScrollReveal animation="fade-up" delay={0.1}>
            <div className="mb-12">
              <div className="group rounded-2xl overflow-hidden bg-card border border-border hover:border-primary/50 transition-all">
                <div className="grid md:grid-cols-2 gap-0">
                  <ImageWithSkeleton
                    src={posts[0].image}
                    alt={posts[0].title}
                    aspectRatio="video"
                    className="md:aspect-auto md:h-full group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="p-8 flex flex-col justify-center">
                    <span className="text-xs font-medium text-primary uppercase tracking-wider mb-3">
                      {posts[0].category}
                    </span>
                    <h2 className="text-2xl md:text-3xl font-bold mb-4 group-hover:text-primary transition-colors">
                      {posts[0].title}
                    </h2>
                    <p className="text-muted-foreground mb-6">{posts[0].excerpt}</p>
                    <div className="flex items-center gap-4 text-sm text-muted-foreground mb-6">
                      <span className="flex items-center gap-1">
                        <Calendar className="h-4 w-4" />
                        {posts[0].date}
                      </span>
                      <span className="flex items-center gap-1">
                        <Clock className="h-4 w-4" />
                        {posts[0].readTime}
                      </span>
                    </div>
                    <Button variant="outline" className="w-fit">
                      {t.blog.readArticle}
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </ScrollReveal>

          {/* Posts Grid */}
          <StaggerContainer className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {posts.slice(1).map((post) => (
              <StaggerItem key={post.id}>
                <article className="group rounded-2xl overflow-hidden bg-card border border-border hover:border-primary/50 transition-all hover-lift h-full">
                  <ImageWithSkeleton
                    src={post.image}
                    alt={post.title}
                    aspectRatio="video"
                    className="group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="p-6">
                    <span className="text-xs font-medium text-primary uppercase tracking-wider">
                      {post.category}
                    </span>
                    <h3 className="text-xl font-semibold mt-2 mb-3 group-hover:text-primary transition-colors line-clamp-2">
                      {post.title}
                    </h3>
                    <p className="text-muted-foreground text-sm mb-4 line-clamp-2">
                      {post.excerpt}
                    </p>
                    <div className="flex items-center gap-4 text-xs text-muted-foreground">
                      <span className="flex items-center gap-1">
                        <Calendar className="h-3 w-3" />
                        {post.date}
                      </span>
                      <span className="flex items-center gap-1">
                        <Clock className="h-3 w-3" />
                        {post.readTime}
                      </span>
                    </div>
                  </div>
                </article>
              </StaggerItem>
            ))}
          </StaggerContainer>

          {/* Load More */}
          <ScrollReveal animation="fade-up">
            <div className="text-center mt-12">
              <Button variant="outline" size="lg">
                {t.blog.loadMore}
              </Button>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Newsletter */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4 lg:px-8">
          <ScrollReveal animation="scale">
            <div className="max-w-2xl mx-auto text-center">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                {t.blog.stayUpdated}
              </h2>
              <p className="text-muted-foreground mb-8">
                {t.blog.stayUpdatedDesc}
              </p>
              <form className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
                <input
                  type="email"
                  placeholder={t.blog.emailPlaceholder}
                  className="flex-1 h-12 rounded-lg border border-input bg-background px-4 text-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
                />
                <Button size="lg" className="gradient-primary text-primary-foreground">
                  {t.blog.subscribe}
                </Button>
              </form>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </Layout>
  );
}
