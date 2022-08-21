import { Link } from 'gatsby';
import React, { useEffect, useState } from 'react';
import { Container } from 'styled-bootstrap-grid';
import { Content, Layout, Section } from '../components';
import { SEO } from '../components/base/SEO';


export default () => {
    const [badge, setBadge] = useState('');
    const [ticket, setTicket] = useState<any>(null);
    const [error, setError] = useState<string>('');
    const params = typeof window !== 'undefined' ? new URLSearchParams(window.location.search) : '';
    const reference = params ? params.get('reference') : '';
    const [bookingRef, setBookingRef] = useState(reference);

    useEffect(() => {
        if (typeof window !== 'undefined') {
            getAndGenerateTicket();
        }
    }, [])

    const getAndGenerateTicket = async () => {
        try {
            if (reference) {
                const base = 'https://europe-west3-fluttervikings-2ae70.cloudfunctions.net';
                const ticket = await fetch(`${base}/searchTicket?q=${bookingRef}`, { method: 'POST', })
                const ticketData = await ticket.json();
                if (ticketData.length) {
                    const firstTicket = ticketData[0];
                    setTicket(firstTicket);
                    const badge = await fetch(`${base}/generateBadge`, {
                        method: 'POST',
                        body: JSON.stringify({ ticket: firstTicket })
                    });
                    if (badge) {
                        const badgeRes = await badge.json();
                        if (badgeRes.url) {
                            setBadge(badgeRes.url);
                        }
                    } else {
                        setError('We cannot generate your badge!')
                    }
                } else {
                    setError('We cannot find your ticket!')
                }

            }
        } catch (e) {
            setError('We cannot generate your badge! It is likely that your ticket reference is invalid!')
        }
    }

    return (
        <>
            <Layout>
                <SEO title="FlutterVikings activities - Win a Dash or other prizes" />
                <Section>
                    <Container>
                        <Content>
                            <div style={{ textAlign: 'center', paddingTop: '3rem' }}>
                                {badge && <a href={badge} target="_blank" rel="noopener noreferrer nofollow">Download</a>}
                                {badge && <iframe src={`https://docs.google.com/gview?url=${badge}&embedded=true`} style={{ border: 0, width: '700px', height: "930px" }} ></iframe>}
                                {!badge && !error && <>Generating your badge... wait a moment</>}
                                {error && <>{error}</>}
                            </div>
                            <br />
                            <br />
                            <div className="CTA-actions" style={{ textAlign: 'center' }}>
                                <Link className="Btn Btn--ticket Btn--cta" to="/">
                                    Back to homepage
                                </Link>
                            </div>
                        </Content>
                    </Container>
                </Section>
            </Layout>
        </>
    );
};
