
export interface Message {
  id: string;
  text: string;
  sender: 'user' | 'bot';
  timestamp: Date;
  isTyping?: boolean;
}

export interface ChatFlow {
  step: 'greeting' | 'collecting_name' | 'collecting_phone' | 'finalizing' | 'completed';
  userName?: string;
  userPhone?: string;
}
