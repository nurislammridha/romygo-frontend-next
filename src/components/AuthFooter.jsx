import { useLanguage } from '@/context/LanguageContext';
import { useRouter } from 'next/navigation';
import React from 'react'

const AuthFooter = () => {
    const { language, t } = useLanguage();
    const router = useRouter();
    return (
        <>
            {/* <!-- Powered By --> */}
            <div className="powered-by">
                <p className="text-muted">{t.poweredBy}</p>
                <div className="d-flex align-items-center mt-1">
                    <img src="/images/aws.png" alt="AWS" className="me-2" />
                    <img src="/images/s.png" alt="Stripe" />
                </div>
            </div>

            {/* <!-- Footer --> */}
            <footer className="small">
                <a onClick={() => router.push('/')} href>{t.home}</a>
                <a href="#">{t.privacyPolicy}</a>
                <a href="#">{t.termsAndConditions}</a>
                <a href="#">{t.communityGuidelines}</a>
                <a href="#">{t.cookiePolicy}</a>
                <a href="">{t.gdpr}</a>
            </footer>
        </>
    )
}

export default AuthFooter