import fs from "fs/promises";
import path from "path";
import styles from "../styles/Home.module.css";
import Link from "next/link";

export async function getStaticProps() {
    const filePath = path.join(process.cwd(), "data", "dummy-data.json");
    const jsonData = await fs.readFile(filePath);
    const data = JSON.parse(jsonData);

    return {
        props: {
            products: data.things,
        },
    };
}

export default function Home(props) {
    return (
        <main className={styles.main}>
            <ul>
                {props.products.map((product) => (
                    <li key={product.id}>
                        <Link href={`/${product.id}`}>{product.title}</Link>
                    </li>
                ))}
            </ul>
        </main>
    );
}
