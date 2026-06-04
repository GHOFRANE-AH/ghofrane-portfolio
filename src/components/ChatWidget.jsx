import { useState, useRef, useEffect, useCallback } from 'react'
import { useNavigate, useLocation } from 'react-router-dom'
import { FaComments, FaTimes, FaPaperPlane, FaLinkedin, FaGithub, FaFileDownload } from 'react-icons/fa'
import { SiWhatsapp } from 'react-icons/si'
import {
  CHAT_CONFIG,
  WELCOME_MESSAGE,
  QUICK_REPLIES,
  getBotReply,
  getWhatsAppUrl,
} from '../data/chatFaq'
import './ChatWidget.css'

let messageId = 0
function nextId() {
  messageId += 1
  return messageId
}

function ChatWidget() {
  const [isOpen, setIsOpen] = useState(false)
  const [messages, setMessages] = useState([])
  const [input, setInput] = useState('')
  const [welcomed, setWelcomed] = useState(false)
  const messagesEndRef = useRef(null)
  const inputRef = useRef(null)
  const navigate = useNavigate()
  const location = useLocation()

  const scrollToBottom = useCallback(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' })
  }, [])

  useEffect(() => {
    scrollToBottom()
  }, [messages, scrollToBottom])

  useEffect(() => {
    if (isOpen && !welcomed) {
      setMessages([{ id: nextId(), role: 'bot', text: WELCOME_MESSAGE }])
      setWelcomed(true)
    }
  }, [isOpen, welcomed])

  useEffect(() => {
    if (isOpen) {
      const t = setTimeout(() => inputRef.current?.focus(), 200)
      return () => clearTimeout(t)
    }
  }, [isOpen])

  const goToContact = useCallback(() => {
    if (location.pathname !== '/') {
      navigate({ pathname: '/', hash: '#contact' })
    } else {
      document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })
    }
  }, [location.pathname, navigate])

  const appendBotMessage = useCallback((text, isHandoff = false) => {
    const actions = []
    if (isHandoff) {
      actions.push(
        { type: 'link', label: 'LinkedIn', href: CHAT_CONFIG.linkedin, icon: FaLinkedin },
        { type: 'link', label: 'GitHub', href: CHAT_CONFIG.github, icon: FaGithub },
        { type: 'button', label: 'Section Contact', onClick: goToContact },
      )
      const wa = getWhatsAppUrl()
      if (wa) {
        actions.unshift({
          type: 'link',
          label: 'WhatsApp',
          href: wa,
          icon: SiWhatsapp,
          external: true,
        })
      }
    }
    setMessages((prev) => [
      ...prev,
      { id: nextId(), role: 'bot', text, actions: actions.length ? actions : undefined },
    ])
  }, [goToContact])

  const sendUserMessage = useCallback(
    (text) => {
      const trimmed = text.trim()
      if (!trimmed) return

      setMessages((prev) => [...prev, { id: nextId(), role: 'user', text: trimmed }])
      setInput('')

      const { answer, isHandoff } = getBotReply(trimmed)
      setTimeout(() => appendBotMessage(answer, isHandoff), 350)
    },
    [appendBotMessage],
  )

  const handleSubmit = (e) => {
    e.preventDefault()
    sendUserMessage(input)
  }

  const handleQuickReply = (label) => {
    sendUserMessage(label)
  }

  return (
    <>
      {isOpen && (
        <div
          className="chat-widget-panel"
          role="dialog"
          aria-label="Assistant virtuel Ghofrane Hedna"
          aria-modal="false"
        >
          <header className="chat-widget-header">
            <h2>Assistant Ghofrane</h2>
            <p>{CHAT_CONFIG.role} — réponses instantanées</p>
          </header>

          <div className="chat-widget-messages" aria-live="polite">
            {messages.map((msg) => (
              <div key={msg.id}>
                <div
                  className={`chat-widget-msg chat-widget-msg--${msg.role}`}
                  role={msg.role === 'bot' ? 'status' : undefined}
                >
                  {msg.text}
                </div>
                {msg.actions?.length > 0 && (
                  <div className="chat-widget-actions">
                    {msg.actions.map((action) =>
                      action.type === 'link' ? (
                        <a
                          key={action.label}
                          href={action.href}
                          className="chat-widget-action-btn"
                          target={action.external ? '_blank' : undefined}
                          rel={action.external ? 'noopener noreferrer' : undefined}
                        >
                          {action.icon && <action.icon size={14} aria-hidden />}
                          {action.label}
                        </a>
                      ) : (
                        <button
                          key={action.label}
                          type="button"
                          className="chat-widget-action-btn"
                          onClick={action.onClick}
                        >
                          {action.label}
                        </button>
                      ),
                    )}
                    <a
                      href={CHAT_CONFIG.cvUrl}
                      download
                      className="chat-widget-action-btn"
                    >
                      <FaFileDownload size={14} aria-hidden /> CV
                    </a>
                  </div>
                )}
              </div>
            ))}
            <div ref={messagesEndRef} />
          </div>

          <div className="chat-widget-quick" aria-label="Questions suggérées">
            {QUICK_REPLIES.map((label) => (
              <button
                key={label}
                type="button"
                className="chat-widget-quick-btn"
                onClick={() => handleQuickReply(label)}
              >
                {label}
              </button>
            ))}
          </div>

          <form className="chat-widget-form" onSubmit={handleSubmit}>
            <textarea
              ref={inputRef}
              className="chat-widget-input"
              rows={1}
              placeholder="Posez votre question…"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={(e) => {
                if (e.key === 'Enter' && !e.shiftKey) {
                  e.preventDefault()
                  handleSubmit(e)
                }
              }}
              aria-label="Votre message"
            />
            <button
              type="submit"
              className="chat-widget-send"
              disabled={!input.trim()}
              aria-label="Envoyer"
            >
              <FaPaperPlane aria-hidden />
            </button>
          </form>
        </div>
      )}

      <button
        type="button"
        className={`chat-widget-toggle${isOpen ? ' chat-widget-toggle--open' : ''}`}
        onClick={() => setIsOpen((o) => !o)}
        aria-expanded={isOpen}
        aria-controls="chat-widget-panel"
        aria-label={isOpen ? 'Fermer l\'assistant' : 'Ouvrir l\'assistant'}
      >
        {isOpen ? <FaTimes size={20} aria-hidden /> : <FaComments size={20} aria-hidden />}
        {!isOpen && <span className="chat-widget-toggle-label">Assistant</span>}
      </button>
    </>
  )
}

export default ChatWidget
