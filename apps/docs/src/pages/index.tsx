import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import Layout from "@theme/Layout";

function HomepageHeader() {
    const { siteConfig } = useDocusaurusContext();
    return (
        <div style={{ display: "flex", flex: 1, flexDirection: "column", alignItems: "center" }}>
            <div
                style={{
                    width: "100%",
                    display: "flex",
                    flex: 1,
                    backgroundImage: `url("img/mad-platform.png")`,
                    backgroundRepeat: "no-repeat",
                    backgroundSize: "contain",
                    backgroundPosition: "center",
                }}
            />
            <h1 style={{ fontWeight: 700 }}>{siteConfig.title}</h1>
        </div>
    );
}

export default function Home(): JSX.Element {
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
