import Link from 'next/link';
import Head from 'next/head';
import Layout from '../../components/layout';
import Alert from "../../components/alert";

export async function getStaticProps() {
    const res = await fetch('https://jsonplaceholder.typicode.com/posts')
    const posts = await res.json()

    return {
        props: {
            posts
        }
    }
}

export default function FirstPost({ posts }) {
    return (
        <Layout>
            <Head>
                <title>First Post</title>
            </Head>
            <Link href="/">Back to home</Link>
            <ul>
                {posts.map((post) => (
                    <li>{post.title}</li>
                ))}
            </ul>
            <Alert type={"success"}>Success</Alert>
            <Alert type={"error"}>Error</Alert>
        </Layout>
    )
}