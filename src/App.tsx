import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import Layout from './components/Layout'
import Dashboard from './pages/Dashboard'
import Placeholder from './pages/Placeholder'

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Navigate to="/dashboard" replace />} />
          <Route path="dashboard" element={<Dashboard />} />
          <Route path="legal/ask" element={<Placeholder title="Legal Ask" description="AI-powered legal Q&A — ask any legal question and get expert-level answers." />} />
          <Route path="legal/interact" element={<Placeholder title="Document Interact" description="Upload legal documents and query them with natural language." />} />
          <Route path="legal/draft" element={<Placeholder title="Legal Draft" description="AI-assisted contract drafting and legal document generation." />} />
          <Route path="legal/negotiation" element={<Placeholder title="Negotiation Workspace" description="Collaborative negotiation workspace for legal agreements." />} />
          <Route path="cookie-scanning/detection" element={<Placeholder title="Cookie Detection" description="3-stage website scanning to detect and categorize all cookies." />} />
          <Route path="cookie-scanning/vulnerability" element={<Placeholder title="Vulnerability Detection" description="Scan for cookie-related security vulnerabilities and compliance gaps." />} />
          <Route path="assessment/psq" element={<Placeholder title="PSQ Assessment" description="Privacy Security Questionnaire automation and management." />} />
          <Route path="assessment/pbd" element={<Placeholder title="PbD Assessment" description="Privacy by Design assessment framework." />} />
          <Route path="assessment/sbd" element={<Placeholder title="SbD Assessment" description="Security by Design assessment and evaluation." />} />
          <Route path="assessment/ai" element={<Placeholder title="AI Assessment" description="AI system impact and risk assessment." />} />
          <Route path="assessment/sra" element={<Placeholder title="SRA Assessment" description="Security Risk Assessment tooling." />} />
          <Route path="assessment/upload" element={<Placeholder title="Upload & Auto-Fill" description="Upload documents for AI-powered assessment auto-fill with human-in-the-loop review." />} />
          <Route path="library" element={<Placeholder title="Library" description="Centralized repository of legal templates, policies, and compliance documents." />} />
          <Route path="queue" element={<Placeholder title="Queue" description="Task queue and workflow management for ongoing legal and compliance work." />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}
