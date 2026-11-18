import { useState } from 'react'
import {
  GithubIcon, LinkedinIcon, InstaIcon, FbIcon, YtIcon,
  PhoneIcon, WaIcon, EmailIcon, CopyIcon, SmsIcon,
} from './icons'

const socials = [
  {
    href: 'https://github.com/sufiyanfaisal008',
    icon: <GithubIcon />,
    bg: '#161b22',
    color: '#e6edf3',
    name: 'GitHub',
    handle: 'sufiyanfaisal008',
  },
  {
    href: 'https://www.linkedin.com/in/sufiyan-faisal-949836293/',
    icon: <LinkedinIcon />,
    bg: '#0a66c2',
    color: '#fff',
    name: 'LinkedIn',
    handle: 'sufiyan-faisal',
  },
  {
    href: 'https://www.instagram.com/webdev.sufi/',
    icon: <InstaIcon />,
    bg: 'linear-gradient(45deg,#f09433,#e6683c,#dc2743,#cc2366,#bc1888)',
    color: '#fff',
    name: 'Instagram',
    handle: 'webdev.sufi',
  },
  {
    href: 'https://www.facebook.com/profile.php?id=61590878784154',
    icon: <FbIcon />,
    bg: '#1877f2',
    color: '#fff',
    name: 'Facebook',
    handle: 'Sufiyan Faisal',
  },
  {
    href: 'https://www.youtube.com/@WhosCode',
    icon: <YtIcon />,
    bg: '#ff0000',
    color: '#fff',
    name: 'YouTube',
    handle: '@WhosCode',
  },
]

export default function Contact() {
  const [phoneOpen, setPhoneOpen] = useState(false)
  const [emailCopied, setEmailCopied] = useState(false)
  const [phoneCopied, setPhoneCopied] = useState(false)

  const copy = (text, set) => {
    if (navigator.clipboard) {
      navigator.clipboard.writeText(text)
        .then(() => { set(true); setTimeout(() => set(false), 2000) })
        .catch(() => {})
    }
  }

  return (
    <section className="sec contact-bg" id="contact">
      <div className="sec-in">
        <div className="sec-label fi">Get In Touch</div>
        <h2 className="sec-title fi fi-2">Let's Connect</h2>
        <p className="sec-sub fi fi-3">
          Open to full-time roles, freelance projects, and collaborations.
        </p>

        {/* Social Links */}
        <div className="social-grid fi fi-3">
          {socials.map(s => (
            <a key={s.name} href={s.href} target="_blank" rel="noopener noreferrer" className="sc">
              <div className="sc-icon" style={{ background: s.bg, color: s.color }}>
                {s.icon}
              </div>
              <div>
                <div className="sc-name">{s.name}</div>
                <div className="sc-handle">{s.handle}</div>
              </div>
            </a>
          ))}
        </div>

        {/* Email */}
        <div className="cinfo-row fi fi-4">
          <div className="cinfo-card">
            <div className="ci-icon" style={{ background: 'rgba(0,212,255,.1)', color: 'var(--accent)' }}>
              <EmailIcon />
            </div>
            <div>
              <div className="ci-label">Email</div>
              <div className="ci-val">sufiyanfaisal90@gmail.com</div>
            </div>
            <button className="copy-btn" onClick={() => copy('sufiyanfaisal90@gmail.com', setEmailCopied)}>
              {emailCopied ? 'Copied!' : 'Copy'}
            </button>
          </div>
        </div>

        {/* Phone */}
        <div className="phone-wrap fi fi-5">
          <div className="phone-card" onClick={() => setPhoneOpen(o => !o)}>
            <div className="p-icon"><PhoneIcon /></div>
            <div>
              <div className="p-lbl">Phone / WhatsApp</div>
              <div className="p-num">0336 342 8714</div>
            </div>
            <div className={`p-arr${phoneOpen ? ' open' : ''}`}>›</div>
          </div>
          <div className="p-opts" style={{ maxHeight: phoneOpen ? '200px' : '0' }}>
            <div className="p-opts-inner">
              <a href="tel:+923363428714" className="popt po-call">
                <PhoneIcon s={15} /> Call
              </a>
              <a href="https://wa.me/923363428714" target="_blank" rel="noopener noreferrer" className="popt po-wa">
                <WaIcon /> WhatsApp
              </a>
              <a href="sms:+923363428714" className="popt po-sms">
                <SmsIcon /> SMS
              </a>
              <button className="popt po-copy" onClick={() => copy('03363428714', setPhoneCopied)}>
                <CopyIcon /> {phoneCopied ? 'Copied!' : 'Copy Number'}
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
