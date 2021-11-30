export default function Account({ username }) {
    return <h1>Username: {username}</h1>;
}

export async function getServerSideProps({ params, req, res }) {
    // console.log({ params, req, res });

    return {
        props: {
            username: "Pete",
        },
    };
}
