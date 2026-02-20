'use client';

import { useState, useRef, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover';
import { MessageSquare, Send, Bot, User } from 'lucide-react';
import { Input } from '@/components/ui/input';
import { Card, CardHeader, CardTitle, CardContent, CardFooter } from '@/components/ui/card';
import { ScrollArea } from '@/components/ui/scroll-area';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { cn } from '@/lib/utils';
import { Skeleton } from '@/components/ui/skeleton';

type Message = {
  role: 'user' | 'assistant';
  content: string;
};

export function ChatbotWidget() {
  const [isOpen, setIsOpen] = useState(false);
  const [input, setInput] = useState('');
  const [messages, setMessages] = useState<Message[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const scrollAreaRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (scrollAreaRef.current) {
        // A bit of a hack to scroll to the bottom.
        setTimeout(() => {
             if(scrollAreaRef.current) {
                const viewport = scrollAreaRef.current.querySelector('div');
                if(viewport) {
                     viewport.scrollTop = viewport.scrollHeight;
                }
             }
        }, 100);
    }
  }, [messages]);
  
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInput(e.target.value);
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!input.trim()) return;

    const userMessage: Message = { role: 'user', content: input };
    setMessages((prev) => [...prev, userMessage]);
    setInput('');
    setIsLoading(true);

    try {
      const res = await fetch('/api/chat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ query: input }),
      });

      if (!res.ok) {
        throw new Error('Failed to get response from server');
      }

      const data = await res.json();
      const assistantMessage: Message = { role: 'assistant', content: data.answer };
      setMessages((prev) => [...prev, assistantMessage]);
    } catch (error) {
      console.error(error);
      const errorMessage: Message = { role: 'assistant', content: "Sorry, I'm having trouble connecting. Please try again later." };
      setMessages((prev) => [...prev, errorMessage]);
    } finally {
      setIsLoading(false);
    }
  };
  
  useEffect(() => {
    if(isOpen && messages.length === 0) {
      const timer = setTimeout(() => {
        setMessages([{ role: 'assistant', content: "Hello! How can I help you learn about INSPIRE MANIT today?" }]);
      }, 500);
      return () => clearTimeout(timer);
    }
  }, [isOpen, messages.length]);

  return (
    <Popover open={isOpen} onOpenChange={setIsOpen}>
      <PopoverTrigger asChild>
        <Button
          variant="default"
          size="icon"
          className="fixed bottom-6 right-6 h-14 w-14 rounded-full shadow-lg"
        >
          <MessageSquare className="h-7 w-7" />
          <span className="sr-only">Open Chatbot</span>
        </Button>
      </PopoverTrigger>
      <PopoverContent
        side="top"
        align="end"
        className="w-[350px] sm:w-[400px] p-0 border-none rounded-2xl shadow-2xl mr-2 mb-2"
        sideOffset={12}
      >
        <Card className="h-[500px] flex flex-col rounded-2xl">
          <CardHeader className="flex flex-row items-center gap-3">
             <Avatar>
                <AvatarImage src="https://res.cloudinary.com/dauf7v7uz/image/upload/v1771601447/InspireLogo_tuwl3m.jpg" alt="Inspire Logo"/>
                <AvatarFallback>IM</AvatarFallback>
            </Avatar>
            <CardTitle>Ask INSPIRE</CardTitle>
          </CardHeader>
          <CardContent className="flex-1 overflow-hidden">
            <ScrollArea className="h-full pr-4" ref={scrollAreaRef}>
              <div className="space-y-4">
                {messages.map((message, index) => (
                  <div
                    key={index}
                    className={cn(
                      "flex items-start gap-3",
                      message.role === 'user' ? 'justify-end' : 'justify-start'
                    )}
                  >
                    {message.role === 'assistant' && (
                       <Avatar className="w-8 h-8">
                         <AvatarFallback><Bot className="w-5 h-5"/></AvatarFallback>
                       </Avatar>
                    )}
                    <div
                      className={cn(
                        "rounded-lg px-3 py-2 max-w-[80%]",
                        message.role === 'user'
                          ? 'bg-primary text-primary-foreground'
                          : 'bg-muted'
                      )}
                    >
                      <p className="text-sm">{message.content}</p>
                    </div>
                     {message.role === 'user' && (
                       <Avatar className="w-8 h-8">
                         <AvatarFallback><User className="w-5 h-5"/></AvatarFallback>
                       </Avatar>
                    )}
                  </div>
                ))}
                 {isLoading && (
                  <div className="flex items-start gap-3 justify-start">
                    <Avatar className="w-8 h-8">
                      <AvatarFallback><Bot className="w-5 h-5"/></AvatarFallback>
                    </Avatar>
                    <div className="rounded-lg px-3 py-2 bg-muted">
                        <Skeleton className="w-16 h-4" />
                    </div>
                  </div>
                )}
              </div>
            </ScrollArea>
          </CardContent>
          <CardFooter>
            <form onSubmit={handleSubmit} className="flex w-full items-center space-x-2">
              <Input
                id="message"
                placeholder="Type your question..."
                className="flex-1"
                autoComplete="off"
                value={input}
                onChange={handleInputChange}
                disabled={isLoading}
              />
              <Button type="submit" size="icon" disabled={isLoading}>
                <Send className="h-4 w-4" />
                <span className="sr-only">Send</span>
              </Button>
            </form>
          </CardFooter>
        </Card>
      </PopoverContent>
    </Popover>
  );
}
