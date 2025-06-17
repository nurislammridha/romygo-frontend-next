import { useRouter } from 'next/navigation';
import React from 'react'

const AuthFooter = () => {
    const router = useRouter();
    return (
        <>
            {/* <!-- Powered By --> */}
            <div className="powered-by">
                <p className="text-muted">Powered By</p>
                <div className="d-flex align-items-center mt-1">
                    <img src="/images/aws.png" alt="AWS" className="me-2" />
                    <img src="/images/s.png" alt="Stripe" />
                </div>
            </div>

            {/* <!-- Footer --> */}
            <footer className="small">
                <a onClick={() => router.push('/')} >Home</a>
                <a href="#">Privacy Policy</a>
                <a href="#">Terms And Conditions</a>
                <a href="#">Community Guidelines</a>
                <a href="#">Cookie Policy</a>
                <a href="">GDPR</a>
            </footer>
        </>
    )
}

export default AuthFooter