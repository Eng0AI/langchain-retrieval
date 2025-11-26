import { ChatWindow } from "@/components/ChatWindow";
import { GuideInfoBox } from "@/components/guide/GuideInfoBox";

export default function RetrievalPage() {
  const InfoCard = (
    <GuideInfoBox>
      <ul className="space-y-2 text-left">
        <li className="flex items-start gap-2">
          <span className="text-lg">📄</span>
          <span>
            Upload a document and ask questions about its content.
          </span>
        </li>
        <li className="flex items-start gap-2">
          <span className="text-lg">🔍</span>
          <span>
            Uses RAG (Retrieval Augmented Generation) to find relevant passages.
          </span>
        </li>
        <li className="flex items-start gap-2">
          <span className="text-lg">💡</span>
          <span>
            Try: <code className="bg-muted px-1 rounded">What is a document loader?</code>
          </span>
        </li>
      </ul>
    </GuideInfoBox>
  );

  return (
    <main className="h-screen">
      <ChatWindow
        endpoint="api/chat"
        emptyStateComponent={InfoCard}
        showIngestForm={true}
        placeholder="Ask a question about your document..."
        emoji="📚"
      />
    </main>
  );
}
