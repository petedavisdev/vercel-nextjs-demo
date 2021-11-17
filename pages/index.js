import fs from "fs/promises";
import path from "path";
import styles from "../styles/Home.module.css";

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
                    <li key={product.id}>{product.title}</li>
                ))}
            </ul>
        </main>
    );
}
