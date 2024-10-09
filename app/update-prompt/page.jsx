import Form from '@/components/Form';
import { useRouter } from 'next/router';  // This is still needed for redirect

const EditPrompt = ({ post }) => {
    const [submitting, setSubmitting] = useState(false);
    const [currentPost, setCurrentPost] = useState(post);

    const router = useRouter();

    const updatePrompt = async (e) => {
        e.preventDefault();
        setSubmitting(true);

        try {
            const response = await fetch(`/api/prompt/${post.id}`, {
                method: 'PATCH',
                body: JSON.stringify({
                    prompt: currentPost.prompt,
                    tag: currentPost.tag,
                }),
            });
            if (response.ok) {
                router.push('/');
            }
        } catch (error) {
            console.log(error);
        } finally {
            setSubmitting(false);
        }
    };

    return (
        <div>
            <Form
                type='Edit'
                post={currentPost}
                setPost={setCurrentPost}
                submitting={submitting}
                handleSubmit={updatePrompt}
            />
        </div>
    );
};

// Fetch data at build time and statically generate the page
export async function getStaticProps({ params }) {
    const res = await fetch(`https://your-api-url.com/api/prompt/${params.id}`);
    const data = await res.json();

    return {
        props: {
            post: data,
        },
    };
}

// Specify which dynamic routes to pre-render
export async function getStaticPaths() {
    // Fetch all possible IDs (this can be optimized)
    const res = await fetch('https://your-api-url.com/api/prompts');
    const posts = await res.json();

    const paths = posts.map((post) => ({
        params: { id: post._id },  // Match dynamic route
    }));

    return {
        paths,
        fallback: false,  // All paths are statically generated
    };
}

export default EditPrompt;
