import * as React from 'npm:react@18.3.1'
import {
  Body,
  Container,
  Head,
  Heading,
  Hr,
  Html,
  Preview,
  Section,
  Text,
} from 'npm:@react-email/components@0.0.22'
import type { TemplateEntry } from './registry.ts'

interface Props {
  name?: string
  email?: string
  message?: string
}

const Email = ({ name, email, message }: Props) => (
  <Html lang="en" dir="ltr">
    <Head />
    <Preview>{`New Pause contact message from ${name || 'a visitor'}`}</Preview>
    <Body style={main}>
      <Container style={container}>
        <Heading style={heading}>New contact message</Heading>
        <Section style={meta}>
          <Text style={metaRow}>
            <strong>Name:</strong> {name || 'Not provided'}
          </Text>
          <Text style={metaRow}>
            <strong>Email:</strong> {email || 'Not provided'}
          </Text>
        </Section>
        <Hr style={hr} />
        <Text style={body}>{message || 'No message provided.'}</Text>
        <Hr style={hr} />
        <Text style={footer}>Sent from the contact form on pauseappblocker.com</Text>
      </Container>
    </Body>
  </Html>
)

export const template = {
  component: Email,
  subject: (data: Record<string, any>) =>
    `Contact: message from ${data?.name || 'a visitor'}`,
  displayName: 'Contact form message',
  previewData: {
    name: 'Alex Rivera',
    email: 'alex@example.com',
    message: 'Hi, when is Pause coming to the App Store?',
  },
  to: 'pauseappblocker@gmail.com',
} satisfies TemplateEntry

const main = {
  backgroundColor: '#ffffff',
  fontFamily: 'Helvetica, Arial, sans-serif',
}

const container = {
  padding: '32px 28px',
  maxWidth: '560px',
}

const heading = {
  fontSize: '22px',
  fontWeight: 700,
  color: '#0d1512',
  margin: '0 0 20px',
}

const meta = { margin: '0 0 8px' }

const metaRow = {
  fontSize: '15px',
  color: '#2f3b37',
  margin: '0 0 6px',
}

const hr = {
  borderColor: '#e2e8e5',
  margin: '20px 0',
}

const body = {
  fontSize: '16px',
  lineHeight: '26px',
  color: '#0d1512',
  whiteSpace: 'pre-wrap' as const,
  margin: '0',
}

const footer = {
  fontSize: '13px',
  color: '#6b7a75',
  margin: '0',
}
