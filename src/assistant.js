const { OpenAI } = require('openai');

class AICodeAssistant {
  constructor(apiKey) {
    this.openai = new OpenAI({ apiKey });
  }
  
  async generateCode(prompt, language = 'javascript') {
    const response = await this.openai.chat.completions.create({
      model: 'gpt-4',
      messages: [{
        role: 'system',
        content: `You are an expert ${language} developer. Generate clean, professional code.`
      }, {
        role: 'user',
        content: prompt
      }],
      temperature: 0.7,
      max_tokens: 1000
    });
    
    return response.choices[0].message.content;
  }
  
  async reviewCode(code, language = 'javascript') {
    const response = await this.openai.chat.completions.create({
      model: 'gpt-4',
      messages: [{
        role: 'system',
        content: `Review this ${language} code for bugs, security issues, and best practices.`
      }, {
        role: 'user',
        content: code
      }],
      temperature: 0.3
    });
    
    return response.choices[0].message.content;
  }
  
  async refactorCode(code, language = 'javascript') {
    const response = await this.openai.chat.completions.create({
      model: 'gpt-4',
      messages: [{
        role: 'system',
        content: `Refactor this ${language} code to be more efficient and maintainable.`
      }, {
        role: 'user',
        content: code
      }],
      temperature: 0.5
    });
    
    return response.choices[0].message.content;
  }
}

module.exports = AICodeAssistant;
