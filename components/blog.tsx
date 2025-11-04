"use client"

import Link from "next/link"
import { Card } from "@/components/ui/card"
import { useLanguage } from "@/lib/language-context"
import { ArrowRight, Calendar, User } from "lucide-react"

interface BlogPost {
  id: string
  title: string
  excerpt: string
  content: string
  author: string
  date: string
  category: string
  image: string
}

export default function Blog() {
  const { t } = useLanguage()

  const blogPosts: BlogPost[] = [
    {
      id: "1",
      title: "Understanding ADHD in Adults: Signs and Symptoms",
      excerpt:
        "ADHD is not just a childhood condition. Many adults struggle with undiagnosed ADHD, affecting their work, relationships, and overall wellbeing. Learn the key signs to watch for.",
      content:
        "Attention-Deficit/Hyperactivity Disorder (ADHD) is often associated with children, but it affects millions of adults worldwide. Many adults go through life without realising they have ADHD, attributing their struggles to personal failings rather than a neurodevelopmental condition. In this article, we explore the signs and symptoms of adult ADHD, how it differs from childhood presentations, and why seeking a proper diagnosis can be transformative.",
      author: "Dr. Faisal Shaikh",
      date: "2024-10-15",
      category: "ADHD",
      image: "/adult-adhd-awareness.jpg",
    },
    {
      id: "2",
      title: "Autism Spectrum Disorder: Embracing Neurodiversity",
      excerpt:
        "Autism is not a disorder to be cured, but a different way of experiencing the world. Discover how embracing neurodiversity can lead to better outcomes and self-acceptance.",
      content:
        "The autism spectrum is incredibly diverse, with each individual having unique strengths, challenges, and ways of experiencing the world. Rather than viewing autism as a deficit, modern approaches emphasise neurodiversity—the idea that neurological differences are natural variations in the human genome. This perspective shift has profound implications for how we support autistic individuals, from childhood through adulthood. In this comprehensive guide, we explore what autism spectrum disorder is, common misconceptions, and how acceptance and support can help autistic individuals thrive.",
      author: "Dr. Sarah Ahmed",
      date: "2024-10-10",
      category: "Autism",
      image: "/autism-neurodiversity.jpg",
    },
    {
      id: "3",
      title: "The Importance of Mental Health Support in Neurodivergent Individuals",
      excerpt:
        "Neurodivergent individuals often face unique mental health challenges. Discover why tailored mental health support is crucial for wellbeing and how to access appropriate care.",
      content:
        "Neurodivergent individuals—those with ADHD, autism, dyslexia, and other neurological differences—often experience higher rates of anxiety, depression, and other mental health conditions. This is not because neurodiversity itself causes mental illness, but because of the additional stressors neurodivergent people face, including social stigma, difficulty accessing appropriate support, and the constant effort of navigating a world not designed for their neurotype. In this article, we discuss the intersection of neurodiversity and mental health, and why specialised, understanding mental health support is essential.",
      author: "Dr. Amina Khan",
      date: "2024-10-05",
      category: "Mental Health",
      image: "/mental-health-support.jpg",
    },
  ]

  return (
    <section id="blog" className="py-20 md:py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">{t("blogTitle")}</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">{t("blogDescription")}</p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {blogPosts.map((post) => (
            <Card key={post.id} className="overflow-hidden hover:shadow-lg transition-shadow flex flex-col">
              {/* Image */}
              <div className="h-48 overflow-hidden bg-muted">
                <img
                  src={post.image || "/placeholder.svg"}
                  alt={post.title}
                  className="w-full h-full object-cover hover:scale-105 transition-transform"
                />
              </div>

              {/* Content */}
              <div className="p-6 flex flex-col grow">
                {/* Category */}
                <div className="mb-3">
                  <span className="inline-block px-3 py-1 bg-accent/10 text-accent text-xs font-semibold rounded-full">
                    {post.category}
                  </span>
                </div>

                {/* Title */}
                <h3 className="text-xl font-semibold text-foreground mb-3 line-clamp-2">{post.title}</h3>

                {/* Excerpt */}
                <p className="text-sm text-muted-foreground leading-relaxed mb-4 grow line-clamp-3">
                  {post.excerpt}
                </p>

                {/* Meta */}
                <div className="flex items-center gap-4 text-xs text-muted-foreground mb-4 pb-4 border-b border-border">
                  <div className="flex items-center gap-1">
                    <User className="w-4 h-4" />
                    <span>{post.author}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Calendar className="w-4 h-4" />
                    <span>{new Date(post.date).toLocaleDateString("en-GB")}</span>
                  </div>
                </div>

                {/* Read More Button */}
                <Link
                  href={`/blog/${post.id}`}
                  className="inline-flex items-center gap-2 text-primary hover:text-primary/80 font-medium text-sm"
                >
                  {t("readMore")}
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
