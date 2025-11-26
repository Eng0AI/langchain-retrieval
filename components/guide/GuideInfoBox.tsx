import { ReactNode } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "../ui/card";

export function GuideInfoBox(props: { children: ReactNode }) {
  return (
    <div className="flex items-center justify-center min-h-[60vh] p-4">
      <Card className="max-w-lg w-full">
        <CardHeader className="text-center pb-2">
          <CardTitle className="text-xl">Document Q&A</CardTitle>
          <CardDescription>
            Powered by RAG and Supabase Vector Store
          </CardDescription>
        </CardHeader>
        <CardContent className="text-sm text-muted-foreground">
          {props.children}
        </CardContent>
      </Card>
    </div>
  );
}
