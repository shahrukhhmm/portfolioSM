import { Code2, Server, Monitor, Cloud, Database, Brain, Users } from 'lucide-react'

export const skillCategories = [
  {
    title: 'Languages & Core',
    icon: Code2,
    skills: ['PHP', 'JavaScript (ES6+)', 'TypeScript', 'Python', 'HTML5', 'CSS3 / SASS', 'SQL']
  },
  {
    title: 'Backend Frameworks & APIs',
    icon: Server,
    skills: ['Laravel', 'Node.js', 'Express.js', 'CodeIgniter', 'Livewire', 'RESTful APIs', 'WebSockets / Pusher', 'Queue Workers & Background Jobs']
  },
  {
    title: 'Frontend & UI Frameworks',
    icon: Monitor,
    skills: ['React.js', 'Next.js', 'Vue.js', 'Tailwind CSS', 'Bootstrap', 'Material UI', 'Blade', 'AJAX', 'Responsive Web Design']
  },
  {
    title: 'Cloud, DevOps & Servers',
    icon: Cloud,
    skills: ['AWS EC2', 'AWS S3', 'AWS RDS', 'AWS Lambda', 'AWS SES Email', 'Docker', 'Linux Servers', 'VPS Management', 'cPanel', 'Cloudflare DNS & WAF', 'GoDaddy Hosting']
  },
  {
    title: 'Databases & Storage',
    icon: Database,
    skills: ['MySQL', 'MongoDB', 'AWS RDS', 'Firebase', 'Redis Caching', 'Database Schema Design', 'Query Optimization']
  },
  {
    title: 'AI, RAG & Automation',
    icon: Brain,
    skills: ['LLM Integrations (OpenAI / Claude)', 'RAG Pipelines', 'Vector Databases', 'n8n Automation', 'Python AI Workflows', 'Knowledge Retrieval Systems']
  },
  {
    title: 'Leadership & Tooling',
    icon: Users,
    skills: ['Technical Leadership', '200+ Fleet Management', 'Code Reviews & Live Coding Checks', 'Developer Mentoring', 'Git / GitHub', 'Postman', 'npm']
  },
]
