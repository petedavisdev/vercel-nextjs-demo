import fs from "fs/promises";
import path from "path";
import styles from "../styles/Home.module.css";
import Link from "next/link";
import { InputText } from "../components/InputText";
import { useState } from "react";

export async function getStaticProps() {
  const filePath = path.join(process.cwd(), "data", "dummy-data.json");
  const jsonData = await fs.readFile(filePath);
  const data = JSON.parse(jsonData.toString());

  return {
    props: {
      products: data.things,
    },
  };
}

export default function Home({ products }) {
  const [firstName, setFirstName] = useState();
  const [middleName, setMiddleName] = useState();
  const [lastName, setLastName] = useState();

  return (
    <main className={styles.main}>
      <form>
        <InputText id="first-name" required={true} onChange={setFirstName}>
          First name
        </InputText>

        <InputText id="middle-name" required={false} onChange={setMiddleName}>
          Middle name
        </InputText>

        <InputText id="last-name" required={true} onChange={setLastName}>
          Last name
        </InputText>

        <p>
          So your name is: {firstName} {middleName} {lastName}
        </p>

        <button type="submit">Submit</button>
      </form>

      <ul>
        {products.map((product) => (
          <li key={product.id}>
            <Link href={`/${product.id}`}>{product.title}</Link>
          </li>
        ))}
      </ul>
    </main>
  );
}
