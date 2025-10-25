import { useState } from 'react';
import { MessageCircle, X, Send, Sparkles } from 'lucide-react';
import { Button } from './ui/button';
import { Textarea } from './ui/textarea';
import { ScrollArea } from './ui/scroll-area';
import { AIMessage } from '../lib/types';

interface AIChatbotProps {
  onApplySuggestion?: (suggestion: any) => void;
}

export function AIChatbot({ onApplySuggestion }: AIChatbotProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<AIMessage[]>([
    {
      role: 'assistant',
      content: "Hi! I'm your AI sustainability assistant. I can help you design eco-friendly products, suggest materials, optimize for recyclability, and more. What would you like to create today?",
      timestamp: new Date().toISOString()
    }
  ]);
  const [input, setInput] = useState('');

  const handleSend = () => {
    if (!input.trim()) return;

    const userMessage: AIMessage = {
      role: 'user',
      content: input,
      timestamp: new Date().toISOString()
    };

    setMessages(prev => [...prev, userMessage]);
    setInput('');

    setTimeout(() => {
      const assistantMessage: AIMessage = {
        role: 'assistant',
        content: generateAIResponse(input),
        timestamp: new Date().toISOString(),
        suggestions: generateSuggestions(input)
      };
      setMessages(prev => [...prev, assistantMessage]);
    }, 1000);
  };

  const generateAIResponse = (input: string): string => {
    const lowerInput = input.toLowerCase();
    
    if (lowerInput.includes('bottle') || lowerInput.includes('water')) {
      return "Great! For a sustainable water bottle, I recommend using rPET (recycled PET plastic) for the main body. Here's what I suggest:\n\n• Material: 85% rPET, 10% stainless steel cap, 5% silicone seal\n• Capacity: 500ml (optimal for daily use)\n• Dimensions: H: 220mm, W: 70mm\n• Wall thickness: 2.5mm for durability\n• Eco-score potential: A (95% recyclable)\n\nWould you like me to generate design mockups?";
    }
    
    if (lowerInput.includes('container') || lowerInput.includes('food')) {
      return "Perfect choice! For food containers, I recommend biodegradable materials:\n\n• Primary material: 60% bamboo fiber\n• Secondary: 35% corn starch polymer\n• Seal: 5% natural rubber\n• Capacity: 750ml\n• Temperature range: -20°C to 120°C\n• Dishwasher safe, microwave safe\n• Eco-score: A (98% recyclable/compostable)\n\nThis design can reduce plastic waste by 95% compared to traditional containers.";
    }
    
    if (lowerInput.includes('cup') || lowerInput.includes('coffee')) {
      return "Excellent! For a reusable coffee cup, here's my recommendation:\n\n• Material: 80% stainless steel 304 (double-wall insulated)\n• Lid: 15% PP plastic (BPA-free)\n• Grip: 5% silicone\n• Capacity: 350ml\n• Insulation: Keeps hot for 6h, cold for 12h\n• Eco-score: B (85% recyclable)\n• Replaces ~500 disposable cups/year\n\nWould you like to adjust the capacity or materials?";
    }

    return "I understand you're interested in creating a sustainable product. Could you tell me more about:\n\n1. What type of product? (bottle, container, cup, packaging)\n2. Primary use case?\n3. Target capacity/size?\n4. Any specific sustainability goals?\n\nThis will help me provide tailored recommendations for materials, dimensions, and eco-optimization.";
  };

  const generateSuggestions = (input: string) => {
    const lowerInput = input.toLowerCase();
    
    if (lowerInput.includes('bottle')) {
      return {
        materials: ['rPET', 'Tritan', 'Stainless Steel'],
        capacity: 500,
        dimensions: { height: 220, width: 70, depth: 70 },
        ecoScore: 'A'
      };
    }
    
    return null;
  };

  if (!isOpen) {
    return (
      <Button
        onClick={() => setIsOpen(true)}
        size="lg"
        className="fixed bottom-6 right-6 z-50 h-14 w-14 rounded-full shadow-lg"
        aria-label="Open AI Assistant"
      >
        <Sparkles className="h-6 w-6" />
      </Button>
    );
  }

  return (
    <div className="fixed bottom-6 right-6 z-50 flex h-[600px] w-[400px] flex-col rounded-lg border bg-card shadow-2xl">
      <div className="flex items-center justify-between border-b bg-gradient-to-r from-[hsl(var(--primary))] to-[hsl(var(--secondary))] p-4 text-white rounded-t-lg">
        <div className="flex items-center gap-2">
          <Sparkles className="h-5 w-5" />
          <div>
            <div className="font-semibold">AI Assistant</div>
            <div className="text-xs opacity-90">Sustainability Expert</div>
          </div>
        </div>
        <Button
          variant="ghost"
          size="icon"
          onClick={() => setIsOpen(false)}
          className="text-white hover:bg-white/20"
        >
          <X className="h-5 w-5" />
        </Button>
      </div>

      <ScrollArea className="flex-1 p-4">
        <div className="space-y-4">
          {messages.map((message, index) => (
            <div
              key={index}
              className={`flex ${message.role === 'user' ? 'justify-end' : 'justify-start'}`}
            >
              <div
                className={`max-w-[80%] rounded-lg p-3 ${
                  message.role === 'user'
                    ? 'bg-[hsl(var(--primary))] text-white'
                    : 'bg-muted'
                }`}
              >
                <p className="whitespace-pre-line text-sm">{message.content}</p>
                {message.suggestions && onApplySuggestion && (
                  <Button
                    size="sm"
                    variant="outline"
                    onClick={() => onApplySuggestion(message.suggestions)}
                    className="mt-2"
                  >
                    Apply Suggestions
                  </Button>
                )}
              </div>
            </div>
          ))}
        </div>
      </ScrollArea>

      <div className="border-t p-4">
        <div className="flex gap-2">
          <Textarea
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={(e) => {
              if (e.key === 'Enter' && !e.shiftKey) {
                e.preventDefault();
                handleSend();
              }
            }}
            placeholder="Ask about materials, sustainability, designs..."
            className="min-h-[60px] resize-none"
          />
          <Button onClick={handleSend} size="icon" className="shrink-0">
            <Send className="h-4 w-4" />
          </Button>
        </div>
      </div>
    </div>
  );
}
