import clsx from "clsx";
import Link from "@docusaurus/Link";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import Layout from "@theme/Layout";
import HomepageFeatures from "@site/src/components/HomepageFeatures";
import Heading from "@theme/Heading";

import styles from "./index.module.css";

function HomepageHeader() {
    const { siteConfig } = useDocusaurusContext();
    return (
        <header style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
            <div style={{ width: "100%", height: 800, backgroundColor: "lightgray" }} />
            <h1 style={{ fontWeight: 700 }}>{siteConfig.title}</h1>
        </header>
    );
}

export default function Home(): JSX.Element {
    const { siteConfig } = useDocusaurusContext();
    return (
        <Layout
            noFooter
            title={`The Equinor mobile platform`}
            description="All things related to the mobile application delivery team's platform"
        >
            <HomepageHeader />
        </Layout>
    );
}
