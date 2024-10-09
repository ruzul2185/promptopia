import { useRouter } from "next/navigation";
import Form from '@/components/Form';

const EditPrompt = async ({ params }) => {
    const promptId = params.id;

    // Fetch the prompt data server-side
    const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/prompt/${promptId}`);
    const data = await response.json();

    const [post, setPost] = useState({
        prompt: data.prompt,
        tag: data.tag
    });

    const router = useRouter();

    const updatePrompt = async (e) => {
        e.preventDefault();
        setSubmitting(true);

        if (!promptId) {
            return alert('Prompt ID not found');
        }

        try {
            const response = await fetch(`/api/prompt/${promptId}`, {
                method: 'PATCH',
                body: JSON.stringify({
                    prompt: post.prompt,
                    tag: post.tag,
                })
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
                post={post}
                setPost={setPost}
                submitting={submitting}
                handleSubmit={updatePrompt}
            />
        </div>
    );
};

// Since we're in the `app` directory, the `params` are provided automatically.
// You no longer need `getServerSideProps`.
export default EditPrompt;
