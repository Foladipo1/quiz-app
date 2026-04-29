/*
 * src/components/PageLayout.tsx
 * Mofolaoluwarera Oladipo (foladipo@bu.edu)
 *
 * Client component that provides a shared flex layout for quiz pages.
 * Marked "use client" because styled-components requires a browser
 * environment to generate CSS class names at runtime.
 */

"use client";

import styled from "styled-components";

const Layout = styled.div`
    display: flex;
    align-items: flex-start;
    gap: 2rem;
    padding: 2rem 4rem;
    max-width: 1600px;
    margin: 0 auto;
`;

export default function PageLayout({ children }: { children: React.ReactNode }) {
    return <Layout>{children}</Layout>;
}