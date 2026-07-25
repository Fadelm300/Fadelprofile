import { useEffect } from "react";
import "./NotFound.css";

function Illustration() {
  return (
    <svg
      className="nf-illustration"
      viewBox="0 0 580 500"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      role="img"
      aria-label="A desk with a computer showing a page not found message"
    >
      <ellipse cx="340" cy="270" rx="230" ry="210" fill="#f1ece4" opacity=".8" />
      <ellipse cx="330" cy="265" rx="195" ry="175" fill="#faf8f3" opacity=".95" />

      <rect x="100" y="330" width="420" height="18" rx="6" fill="#302c28" />
      <rect x="120" y="348" width="380" height="90" rx="4" fill="#4d4842" />
      <rect x="340" y="362" width="120" height="34" rx="4" fill="#302c28" />
      <rect x="348" y="375" width="45" height="8" rx="2" fill="#6f7fa3" />
      <rect x="400" y="375" width="45" height="8" rx="2" fill="#6f7fa3" />
      <rect x="340" y="400" width="120" height="28" rx="4" fill="#1a1715" />
      <rect x="128" y="438" width="24" height="50" rx="4" fill="#302c28" />
      <rect x="468" y="438" width="24" height="50" rx="4" fill="#302c28" />

      <rect x="258" y="310" width="22" height="28" rx="3" fill="#1a1715" />
      <rect x="230" y="334" width="78" height="10" rx="4" fill="#1a1715" />
      <rect x="168" y="180" width="302" height="145" rx="12" fill="#0d0d0d" />
      <rect x="180" y="192" width="278" height="122" rx="8" fill="#faf8f3" />

      <g className="nf-pulse-x">
        <circle cx="319" cy="238" r="34" fill="#6366f1" />
        <line x1="305" y1="224" x2="333" y2="252" stroke="white" strokeWidth="5" strokeLinecap="round" />
        <line x1="333" y1="224" x2="305" y2="252" stroke="white" strokeWidth="5" strokeLinecap="round" />
      </g>
      <text x="319" y="286" textAnchor="middle" fontFamily="DM Sans, sans-serif" fontSize="11" fontWeight="600" fill="#302c28" letterSpacing="1">
        PAGE NOT FOUND
      </text>
      <rect x="275" y="290" width="88" height="3" rx="1.5" fill="#cfc5b9" opacity=".7" />
      <rect x="290" y="297" width="58" height="3" rx="1.5" fill="#cfc5b9" opacity=".5" />

      <rect x="106" y="198" width="72" height="90" rx="6" fill="#f1ece4" stroke="#cfc5b9" strokeWidth="1.5" />
      <rect x="125" y="190" width="34" height="16" rx="3" fill="#cfc5b9" />
      <text x="142" y="225" textAnchor="middle" fontFamily="DM Sans, sans-serif" fontSize="10" fontWeight="700" fill="#302c28">404:</text>
      <text x="142" y="239" textAnchor="middle" fontFamily="DM Sans, sans-serif" fontSize="9" fontWeight="600" fill="#6f7fa3">FILE NOT</text>
      <text x="142" y="252" textAnchor="middle" fontFamily="DM Sans, sans-serif" fontSize="9" fontWeight="600" fill="#6f7fa3">FOUND</text>

      <line x1="310" y1="20" x2="310" y2="90" stroke="#0d0d0d" strokeWidth="3" strokeLinecap="round" />
      <path d="M272 90 Q310 108 348 90 L336 125 Q310 135 284 125 Z" fill="#1a1715" />
      <ellipse cx="310" cy="140" rx="28" ry="20" fill="#e5ddd3" opacity=".55" />
      <ellipse cx="310" cy="138" rx="14" ry="10" fill="#fffdf9" opacity=".95" />
      <line x1="310" y1="155" x2="300" y2="190" stroke="#e5ddd3" strokeWidth="1" opacity=".7" />
      <line x1="310" y1="155" x2="310" y2="195" stroke="#e5ddd3" strokeWidth="1" opacity=".7" />
      <line x1="310" y1="155" x2="320" y2="190" stroke="#e5ddd3" strokeWidth="1" opacity=".7" />

      <rect x="188" y="298" width="40" height="38" rx="6" fill="#1a1715" />
      <path d="M228 308 Q248 308 248 318 Q248 328 228 328" stroke="#1a1715" strokeWidth="5" fill="none" strokeLinecap="round" />
      <line x1="198" y1="314" x2="202" y2="314" stroke="#faf8f3" strokeWidth="2" strokeLinecap="round" />
      <line x1="212" y1="314" x2="216" y2="314" stroke="#faf8f3" strokeWidth="2" strokeLinecap="round" />
      <path d="M202 322 Q207 319 212 322" stroke="#faf8f3" strokeWidth="1.5" fill="none" strokeLinecap="round" />
      <g className="nf-zzz">
        <text x="196" y="288" fontFamily="DM Sans, sans-serif" fontSize="11" fontWeight="700" fill="#0284c7">z</text>
        <text x="206" y="278" fontFamily="DM Sans, sans-serif" fontSize="14" fontWeight="700" fill="#0284c7">z</text>
        <text x="218" y="265" fontFamily="DM Sans, sans-serif" fontSize="17" fontWeight="700" fill="#6366f1">Z</text>
      </g>

      <g className="nf-robot">
        <rect x="418" y="300" width="56" height="40" rx="6" fill="#1a1715" />
        <rect x="426" y="308" width="40" height="16" rx="3" fill="#4d4842" />
        <circle cx="434" cy="316" r="4" fill="#0284c7" />
        <circle cx="448" cy="316" r="4" fill="#cfc5b9" />
        <circle cx="462" cy="316" r="4" fill="#6366f1" />
        <line x1="446" y1="270" x2="446" y2="284" stroke="#302c28" strokeWidth="3" strokeLinecap="round" />
        <circle cx="446" cy="266" r="5" fill="#0284c7" />
        <rect x="422" y="282" width="48" height="36" rx="8" fill="#4d4842" />
        <circle cx="436" cy="296" r="6" fill="#faf8f3" />
        <circle cx="456" cy="296" r="6" fill="#faf8f3" />
        <circle cx="437" cy="297" r="3" fill="#0d0d0d" />
        <circle cx="457" cy="297" r="3" fill="#0d0d0d" />
        <path d="M434 312 Q446 318 458 312" stroke="#cfc5b9" strokeWidth="2" fill="none" strokeLinecap="round" />
        <circle cx="422" cy="300" r="3" fill="#cfc5b9" />
        <circle cx="470" cy="300" r="3" fill="#cfc5b9" />
        <text x="478" y="278" fontFamily="DM Sans, sans-serif" fontSize="16" fontWeight="700" fill="#0284c7" opacity=".8">?</text>
        <text x="494" y="262" fontFamily="DM Sans, sans-serif" fontSize="12" fontWeight="700" fill="#cfc5b9" opacity=".8">?</text>
        <text x="463" y="260" fontFamily="DM Sans, sans-serif" fontSize="10" fontWeight="700" fill="#6366f1" opacity=".7">?</text>
      </g>

      <rect x="312" y="295" width="58" height="44" rx="3" fill="#cfc5b9" transform="rotate(-4 320 300)" />
      <text x="341" y="314" textAnchor="middle" fontFamily="DM Sans, sans-serif" fontSize="8" fontWeight="700" fill="#0d0d0d" transform="rotate(-4 341 314)">I&apos;M</text>
      <text x="341" y="325" textAnchor="middle" fontFamily="DM Sans, sans-serif" fontSize="8" fontWeight="700" fill="#0d0d0d" transform="rotate(-4 341 325)">LOST</text>
      <text x="341" y="336" textAnchor="middle" fontFamily="DM Sans, sans-serif" fontSize="8" fontWeight="700" fill="#0d0d0d" transform="rotate(-4 341 336)">TOO :(</text>

      <circle cx="470" cy="155" r="38" fill="white" stroke="#e5ddd3" strokeWidth="3" />
      <circle cx="470" cy="155" r="34" fill="#faf8f3" />
      <line x1="470" y1="124" x2="470" y2="130" stroke="#6f7fa3" strokeWidth="2" strokeLinecap="round" />
      <line x1="501" y1="155" x2="495" y2="155" stroke="#6f7fa3" strokeWidth="2" strokeLinecap="round" />
      <line x1="470" y1="186" x2="470" y2="180" stroke="#6f7fa3" strokeWidth="2" strokeLinecap="round" />
      <line x1="439" y1="155" x2="445" y2="155" stroke="#6f7fa3" strokeWidth="2" strokeLinecap="round" />
      <g className="nf-clock-hands">
        <line x1="470" y1="155" x2="470" y2="132" stroke="#0d0d0d" strokeWidth="2.5" strokeLinecap="round" />
        <line x1="470" y1="155" x2="490" y2="162" stroke="#6f7fa3" strokeWidth="2" strokeLinecap="round" />
      </g>
      <circle cx="470" cy="155" r="4" fill="#302c28" />

      <ellipse cx="160" cy="468" rx="38" ry="12" fill="#302c28" />
      <rect x="130" y="430" width="60" height="38" rx="8" fill="#1a1715" />
      <rect x="127" y="426" width="66" height="12" rx="4" fill="#302c28" />
      <path d="M158 428 Q130 390 108 360 Q140 380 162 420" fill="#4d4842" />
      <path d="M162 428 Q155 380 170 345 Q188 380 168 428" fill="#6f7fa3" />
      <path d="M162 428 Q188 385 210 358 Q196 390 164 428" fill="#4d4842" />

      <rect x="494" y="180" width="80" height="12" rx="2" fill="#1a1715" />
      <rect x="498" y="130" width="14" height="50" rx="2" fill="#6f7fa3" />
      <rect x="514" y="138" width="12" height="42" rx="2" fill="#302c28" />
      <rect x="528" y="133" width="10" height="47" rx="2" fill="#0284c7" />
      <rect x="540" y="140" width="14" height="40" rx="2" fill="#1a1715" />
      <rect x="556" y="135" width="12" height="45" rx="2" fill="#cfc5b9" />

      <ellipse cx="320" cy="492" rx="18" ry="10" fill="#f1ece4" />
      <ellipse cx="356" cy="494" rx="14" ry="8" fill="#e5ddd3" />
      <rect x="484" y="440" width="50" height="48" rx="4" fill="#1a1715" />
      <rect x="480" y="434" width="58" height="10" rx="3" fill="#302c28" />
      <line x1="496" y1="452" x2="522" y2="452" stroke="#4d4842" strokeWidth="2" />
      <line x1="496" y1="463" x2="522" y2="463" stroke="#4d4842" strokeWidth="2" />
      <line x1="496" y1="474" x2="522" y2="474" stroke="#4d4842" strokeWidth="2" />

      <ellipse cx="320" cy="496" rx="210" ry="8" fill="#cfc5b9" opacity=".25" />
      <circle cx="142" cy="232" r="3" fill="#0284c7" opacity=".45" />
      <circle cx="162" cy="175" r="2" fill="#cfc5b9" opacity=".7" />
      <circle cx="500" cy="240" r="4" fill="#6366f1" opacity=".35" />
      <circle cx="400" cy="155" r="3" fill="#0284c7" opacity=".3" />
    </svg>
  );
}

export default function NotFound() {
  useEffect(() => {
    const oldTitle = document.title;
    document.title = "Page Not Found | Fadel Moussa";
    return () => {
      document.title = oldTitle;
    };
  }, []);

  return (
    <main className="nf-page">
      <span className="nf-blob nf-blob-one" aria-hidden="true" />
      <span className="nf-blob nf-blob-two" aria-hidden="true" />
      <span className="nf-blob nf-blob-three" aria-hidden="true" />

      <div className="nf-layout">
        <section className="nf-content" aria-labelledby="not-found-title">
          <div className="nf-number-wrap">
            <span className="nf-number" aria-hidden="true">404</span>
            <span className="nf-sparks" aria-hidden="true">
              <i />
              <i />
              <i />
            </span>
          </div>

          <h1 id="not-found-title" className="nf-title">
            Oops! This page took
            <br />
            <em>a wrong turn.</em>
          </h1>

          <p className="nf-description">
            Looks like you&apos;ve wandered off the map.
            <br />
            Let&apos;s get you back on track.
          </p>

          <div className="nf-actions">
            <a className="nf-button nf-button-primary" href="/">
              <svg viewBox="0 0 24 24" aria-hidden="true">
                <path d="M3 9.5 12 3l9 6.5V20a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V9.5Z" />
                <path d="M9 21v-9h6v9" />
              </svg>
              <span>Back to Homepage</span>
            </a>

           
          </div>

          <div className="nf-route" aria-hidden="true">
            <svg viewBox="0 0 26 26">
              <circle cx="13" cy="13" r="11" />
              <circle cx="13" cy="13" r="4" />
            </svg>
            <svg className="nf-plane" viewBox="0 0 30 22">
              <path d="m1 1 28 10L1 21v-8l18-2L1 9V1Z" />
            </svg>
            <svg viewBox="0 0 50 14">
              <path d="M0 7Q12 0 25 7t25 0" />
            </svg>
          </div>
        </section>

        <div className="nf-art">
          <Illustration />
        </div>
      </div>
    </main>
  );
}
