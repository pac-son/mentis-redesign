import Header from "@/components/header"
import Footer from "@/components/footer"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Calendar, User, ArrowLeft } from "lucide-react"
import Link from "next/link"

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

export default async function BlogPostPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params

  const blogPosts: Record<string, BlogPost> = {
    "1": {
      id: "1",
      title: "Understanding ADHD in Adults: Signs and Symptoms",
      excerpt:
        "ADHD is not just a childhood condition. Many adults struggle with undiagnosed ADHD, affecting their work, relationships, and overall wellbeing. Learn the key signs to watch for.",
      content: `Attention-Deficit/Hyperactivity Disorder (ADHD) is often associated with children, but it affects millions of adults worldwide. Many adults go through life without realising they have ADHD, attributing their struggles to personal failings rather than a neurodevelopmental condition.

## Common Signs of Adult ADHD

Adults with ADHD often experience:
- Difficulty concentrating on tasks, especially those that are not immediately engaging
- Chronic disorganisation and difficulty managing time
- Impulsivity in decision-making and social interactions
- Emotional dysregulation and mood swings
- Difficulty maintaining relationships due to inattention or impulsivity
- Procrastination and difficulty starting tasks
- Restlessness and difficulty relaxing

## How Adult ADHD Differs from Childhood ADHD

In childhood, ADHD often manifests as hyperactivity and impulsivity. In adults, these symptoms may be less obvious. Instead, adults may experience:
- Internal restlessness rather than physical hyperactivity
- Difficulty with executive functions like planning and organisation
- Chronic underachievement despite intellectual ability
- Relationship difficulties due to inattention or emotional dysregulation

## Why Diagnosis Matters

Getting a proper ADHD diagnosis can be transformative. It helps you understand yourself better, access appropriate treatment, and develop strategies to manage your symptoms. Treatment options include medication, therapy, lifestyle changes, and workplace accommodations.

## Seeking Help

If you recognise these signs in yourself, consider reaching out to a mental health professional who specialises in ADHD. A proper assessment can provide clarity and open doors to support and treatment options that can significantly improve your quality of life.`,
      author: "Dr. Faisal Shaikh",
      date: "2024-10-15",
      category: "ADHD",
      image: "/adult-adhd-awareness.jpg",
    },
    "2": {
      id: "2",
      title: "Autism Spectrum Disorder: Embracing Neurodiversity",
      excerpt:
        "Autism is not a disorder to be cured, but a different way of experiencing the world. Discover how embracing neurodiversity can lead to better outcomes and self-acceptance.",
      content: `The autism spectrum is incredibly diverse, with each individual having unique strengths, challenges, and ways of experiencing the world. Rather than viewing autism as a deficit, modern approaches emphasise neurodiversity—the idea that neurological differences are natural variations in the human genome.

## What is Neurodiversity?

Neurodiversity is a concept that recognises and respects neurological differences as natural variations in the human genome. It challenges the traditional medical model that views autism, ADHD, dyslexia, and other neurological differences as disorders to be cured.

## Strengths of Autistic Individuals

Many autistic individuals have remarkable strengths, including:
- Attention to detail and pattern recognition
- Deep focus and concentration on areas of interest
- Creative and innovative thinking
- Honesty and directness in communication
- Strong sense of justice and fairness
- Unique perspectives and problem-solving approaches

## Challenges and Support

While autistic individuals have many strengths, they may also face challenges such as:
- Sensory sensitivities to light, sound, or touch
- Difficulty with social communication and unwritten social rules
- Anxiety in social situations
- Need for routine and predictability
- Difficulty with transitions and changes

## Creating an Autism-Friendly Environment

Supporting autistic individuals involves:
- Accepting and respecting their differences
- Providing clear communication and explicit instructions
- Reducing sensory overload when possible
- Allowing for special interests and focused activities
- Providing predictability and advance notice of changes
- Avoiding forced eye contact or other neurotypical expectations

## The Path Forward

Embracing neurodiversity means recognising that autism is not something to be cured, but a different way of experiencing and interacting with the world. With proper support, understanding, and acceptance, autistic individuals can thrive and contribute their unique talents to society.`,
      author: "Dr. Sarah Ahmed",
      date: "2024-10-10",
      category: "Autism",
      image: "/autism-neurodiversity.jpg",
    },
    "3": {
      id: "3",
      title: "The Importance of Mental Health Support in Neurodivergent Individuals",
      excerpt:
        "Neurodivergent individuals often face unique mental health challenges. Discover why tailored mental health support is crucial for wellbeing and how to access appropriate care.",
      content: `Neurodivergent individuals—those with ADHD, autism, dyslexia, and other neurological differences—often experience higher rates of anxiety, depression, and other mental health conditions. This is not because neurodiversity itself causes mental illness, but because of the additional stressors neurodivergent people face.

## Why Neurodivergent Individuals Face Higher Mental Health Risks

Several factors contribute to increased mental health challenges:
- Social stigma and discrimination
- Difficulty accessing appropriate support and accommodations
- Constant effort of navigating a world not designed for their neurotype
- Masking or camouflaging their true selves to fit in
- Sensory overload and overwhelm
- Difficulty with executive functions affecting daily life
- Relationship difficulties and social isolation

## Common Mental Health Conditions in Neurodivergent Individuals

Neurodivergent individuals are at higher risk for:
- Anxiety disorders
- Depression
- Burnout and exhaustion
- Post-traumatic stress disorder (PTSD)
- Sleep disorders
- Eating disorders
- Substance abuse

## The Importance of Specialised Mental Health Support

Generic mental health support may not adequately address the unique needs of neurodivergent individuals. Specialised support should:
- Understand neurodiversity and its impact on mental health
- Avoid pathologising neurodivergent traits
- Provide accommodations for sensory and communication differences
- Address the specific stressors neurodivergent individuals face
- Teach coping strategies tailored to neurodivergent needs
- Support self-acceptance and identity

## Accessing Appropriate Care

If you're neurodivergent and struggling with mental health, seek out professionals who:
- Have experience working with neurodivergent individuals
- Understand and respect neurodiversity
- Can provide tailored support and accommodations
- Listen to your needs and preferences
- Collaborate with you on treatment goals

Remember, seeking help is a sign of strength, not weakness. With appropriate support, neurodivergent individuals can manage their mental health and thrive.`,
      author: "Dr. Amina Khan",
      date: "2024-10-05",
      category: "Mental Health",
      image: "/mental-health-support.png",
    },
  }

  const post = blogPosts[id]

  if (!post) {
    return (
      <main className="min-h-screen bg-background">
        <Header />
        <section className="py-20 md:py-32">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="text-3xl font-bold text-foreground mb-4">Post Not Found</h1>
            <p className="text-muted-foreground mb-8">The blog post you're looking for doesn't exist.</p>
            <Link href="/">
              <Button className="bg-primary hover:bg-primary/90 text-primary-foreground">Return Home</Button>
            </Link>
          </div>
        </section>
        <Footer />
      </main>
    )
  }

  return (
    <main className="min-h-screen bg-background">
      <Header />

      {/* Hero Image */}
      <div className="h-96 overflow-hidden bg-muted">
        <img src={post.image || "/placeholder.svg"} alt={post.title} className="w-full h-full object-cover" />
      </div>

      {/* Article Content */}
      <article className="py-20 md:py-32">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Back Button */}
          <Link href="/" className="inline-flex items-center gap-2 text-primary hover:text-primary/80 mb-8">
            <ArrowLeft className="w-4 h-4" />
            Back to Home
          </Link>

          {/* Header */}
          <div className="mb-8">
            <div className="mb-4">
              <span className="inline-block px-3 py-1 bg-accent/10 text-accent text-xs font-semibold rounded-full">
                {post.category}
              </span>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6 text-balance">{post.title}</h1>

            {/* Meta */}
            <div className="flex flex-wrap items-center gap-6 text-sm text-muted-foreground pb-6 border-b border-border">
              <div className="flex items-center gap-2">
                <User className="w-4 h-4" />
                <span>{post.author}</span>
              </div>
              <div className="flex items-center gap-2">
                <Calendar className="w-4 h-4" />
                <span>
                  {new Date(post.date).toLocaleDateString("en-GB", { year: "numeric", month: "long", day: "numeric" })}
                </span>
              </div>
            </div>
          </div>

          {/* Content */}
          <div className="prose prose-lg max-w-none text-foreground">
            {post.content.split("\n\n").map((paragraph, idx) => {
              if (paragraph.startsWith("##")) {
                return (
                  <h2 key={idx} className="text-2xl font-bold text-foreground mt-8 mb-4">
                    {paragraph.replace("## ", "")}
                  </h2>
                )
              }
              if (paragraph.startsWith("-")) {
                return (
                  <ul key={idx} className="list-disc list-inside space-y-2 text-muted-foreground mb-4">
                    {paragraph.split("\n").map((item, i) => (
                      <li key={i}>{item.replace("- ", "")}</li>
                    ))}
                  </ul>
                )
              }
              return (
                <p key={idx} className="text-muted-foreground leading-relaxed mb-4">
                  {paragraph}
                </p>
              )
            })}
          </div>

          {/* Author Card */}
          <Card className="mt-16 p-8 bg-muted/30">
            <h3 className="text-lg font-semibold text-foreground mb-2">About the Author</h3>
            <p className="text-muted-foreground">
              {post.author} is a mental health professional at Mentis Clinic with extensive experience in neurodiversity
              and mental health support.
            </p>
          </Card>
        </div>
      </article>

      <Footer />
    </main>
  )
}
