import { generateText } from "ai"

export async function POST(request: Request) {
  try {
    const { message, conversationHistory } = await request.json()

    const systemPrompt = `You are Mentis AI Assistant, a helpful and compassionate AI for Mentis Clinic Asia, a neurodiversity and mental health clinic specializing in ADHD and Autism care. 
    
You provide:
- Information about our services (ADHD assessment, Autism evaluation, therapy, counseling)
- General mental health support and guidance
- Information about our team of experts
- Help with appointment scheduling
- Compassionate support for neurodivergent individuals

Always be empathetic, professional, and encourage users to book appointments or contact us for personalized care. Keep responses concise and helpful.`

    const conversationContext = conversationHistory
      .map((msg: any) => `${msg.sender === "user" ? "User" : "Assistant"}: ${msg.text}`)
      .join("\n")

    const { text } = await generateText({
      model: "openai/gpt-4-turbo",
      system: systemPrompt,
      prompt: `${conversationContext}\nUser: ${message}`,
      temperature: 0.7,
      maxTokens: 500,
    })

    return Response.json({ reply: text })
  } catch (error) {
    console.error("Chat API error:", error)
    return Response.json({ error: "Failed to process your message" }, { status: 500 })
  }
}
