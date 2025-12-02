import React from 'react';
import {
  FooterContainer,
  FooterContent,
  FooterGrid,
  FooterSection,
  FooterLogo,
  CompanyInfo,
  FooterSectionTitle,
  LinkList,
  LinkItem,
  FooterLink,
  ContactCard,
  ContactItem,
  ContactLabel,
  ContactValue,
  FooterBottom
} from '../styles/Footer.styles';

const Footer: React.FC = () => {
  const companyName = process.env.REACT_APP_COMPANY_NAME || 'Goldleaf Goods LLC';
  const brandName = process.env.REACT_APP_BRAND_NAME || 'Renvalis';
  const companyAddress = process.env.REACT_APP_COMPANY_ADDRESS || 'Tumbleweed Way 1350 Sacramento CA USA 95834';
  const companyPhone = process.env.REACT_APP_PHONE_DISPLAY || '+17087264549';
  const supportEmail = process.env.REACT_APP_EMAIL_SUPPORT || 'support@goldleafretaildiscounts.com';

  const handleScrollTo = (id: string) => {
    // Check if we're on the home page
    if (window.location.pathname === '/') {
      const element = document.querySelector(id);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    } else {
      // Navigate to home page with hash
      window.location.href = `/${id}`;
    }
  };

  return (
    <FooterContainer id="contact">
      <FooterContent>
        <FooterGrid>
          <FooterSection>
            <FooterLogo>
              <svg viewBox="0 0 24 24" fill="currentColor">
                <path d="M21.41 11.58l-9-9C12.05 2.22 11.55 2 11 2H4c-1.1 0-2 .9-2 2v7c0 .55.22 1.05.59 1.42l9 9c.36.36.86.58 1.41.58.55 0 1.05-.22 1.41-.59l7-7c.37-.36.59-.86.59-1.41 0-.55-.23-1.06-.59-1.42zM5.5 7C4.67 7 4 6.33 4 5.5S4.67 4 5.5 4 7 4.67 7 5.5 6.33 7 5.5 7z"/>
                <text x="10" y="16" fontSize="8" fontWeight="bold" fill="currentColor">%</text>
              </svg>
              {brandName}
            </FooterLogo>
            <CompanyInfo>
              <p>{companyName}</p>
              <p>{companyAddress}</p>
              <p>Established {process.env.REACT_APP_COMPANY_BIRTH || 'March 2025'}</p>
            </CompanyInfo>
          </FooterSection>

          <FooterSection>
            <FooterSectionTitle>Quick Links</FooterSectionTitle>
            <LinkList>
              <LinkItem>
                <FooterLink as="button" onClick={() => handleScrollTo('#features')}>Features</FooterLink>
              </LinkItem>
              <LinkItem>
                <FooterLink as="button" onClick={() => handleScrollTo('#stats')}>Industry Stats</FooterLink>
              </LinkItem>
              <LinkItem>
                <FooterLink as="button" onClick={() => handleScrollTo('#how-it-works')}>How It Works</FooterLink>
              </LinkItem>
              <LinkItem>
                <FooterLink as="button" onClick={() => handleScrollTo('#faq')}>FAQ</FooterLink>
              </LinkItem>
            </LinkList>
          </FooterSection>

          <FooterSection>
            <FooterSectionTitle>Legal</FooterSectionTitle>
            <LinkList>
              <LinkItem>
                <FooterLink href="/terms">Terms & Conditions</FooterLink>
              </LinkItem>
              <LinkItem>
                <FooterLink href="/privacy">Privacy Policy</FooterLink>
              </LinkItem>
              <LinkItem>
                <FooterLink href="/refund">Refund Policy</FooterLink>
              </LinkItem>
              <LinkItem>
                <FooterLink href="/digital-products">Digital Products Policy</FooterLink>
              </LinkItem>
              <LinkItem>
                <FooterLink href="/ccpa-notice">CCPA Notice</FooterLink>
              </LinkItem>
              <LinkItem>
                <FooterLink href="/data-processing">Data Processing Agreement</FooterLink>
              </LinkItem>
              <LinkItem>
                <FooterLink href="/data-subject-request">Data Subject Request Form</FooterLink>
              </LinkItem>
              <LinkItem>
                <FooterLink href="/e-signature">E-Signature Disclosure Agreement</FooterLink>
              </LinkItem>
              <LinkItem>
                <FooterLink href="/end-user-terms">End-User Terms of Service</FooterLink>
              </LinkItem>
              <LinkItem>
                <FooterLink href="/merchant-disclosure">Merchant Disclosure</FooterLink>
              </LinkItem>
            </LinkList>
          </FooterSection>

          <FooterSection>
            <FooterSectionTitle>Contact Us</FooterSectionTitle>
            <ContactCard>
              <ContactItem>
                <ContactLabel>Email Support</ContactLabel>
                <ContactValue as="div" style={{ pointerEvents: 'none', userSelect: 'none' }}>
                  <svg viewBox="0 0 24 24" fill="currentColor">
                    <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/>
                  </svg>
                  {supportEmail}
                </ContactValue>
              </ContactItem>
              <ContactItem>
                <ContactLabel>Customer Service</ContactLabel>
                <ContactValue href={`tel:${companyPhone.replace(/\s+/g, '')}`}>
                  <svg viewBox="0 0 24 24" fill="currentColor">
                    <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z"/>
                  </svg>
                  {companyPhone}
                </ContactValue>
              </ContactItem>
            </ContactCard>
          </FooterSection>
        </FooterGrid>

        <FooterBottom>
          <p>&copy; {new Date().getFullYear()} {companyName}. All rights reserved.</p>
          <p>Do you not recognize a charge on your bank statement? We can help to resolve your query quickly and efficiently.</p>
        </FooterBottom>
      </FooterContent>
    </FooterContainer>
  );
};

export default Footer;
