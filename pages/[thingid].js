import fs from "fs/promises";
import path from "path";
import { Fragment } from "react";

async function getData() {
    const filePath = path.join(process.cwd(), "data", "dummy-data.json");
    const jsonData = await fs.readFile(filePath);
    const data = JSON.parse(jsonData);

    return data;
}

export async function getStaticProps({ params: { thingid } }) {
    const data = await getData();

    const thing = data.things.find((thing) => thing.id === thingid);

    if (!thing) {
        return { notFound: true };
    }

    return {
        props: { loadedThing: thing },
    };
}

export async function getStaticPaths() {
    const data = await getData();

    const paths = data.things.map((thing) => {
        return { params: { thingid: thing.id } };
    });

    return {
        paths,
        fallback: true,
    };
}

export default function ThingDetailPage({ loadedThing }) {
    if (!loadedThing) {
        return <p>Loading...</p>;
    }

    return (
        <Fragment>
            <h1>{loadedThing.title}</h1>
            <p>{loadedThing.detail}</p>
        </Fragment>
    );
}
