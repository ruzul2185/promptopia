// app/update-prompt/page.jsx

import Form from '@/components/Form';
import { useRouter } from 'next/navigation'; // Only use in Client Components

// Fetch prompt details server-side
const getPromptDetails = async (promptId) => {
  const res = await fetch(`/api/prompt/${promptId}`, {
    cache: 'force-cache', // Ensures data is fetched at build time
  });
  if (!res.ok) {
    throw new Error('Failed to fetch prompt details');
  }
  return res.json();
};

const EditPrompt = async ({ params }) => {
  const promptId = params.id;
  let post;

  try {
    post = await getPromptDetails(promptId);
  } catch (error) {
    return <p>Error loading prompt details.</p>;
  }

  return (
    <div>
      <EditPromptForm initialPost={post} promptId={promptId} />
    </div>
  );
};

// This function generates the static paths at build time
export async function generateStaticParams() {
  const res = await fetch(`/api/prompts`, {
    cache: 'force-cache',
  });
  const prompts = await res.json();

  // Limit the number of static pages if there are too many
  const limitedPrompts = prompts.slice(0, 100); // Example: statically generate first 100 prompts

  return limitedPrompts.map((prompt) => ({
    id: prompt._id.toString(),
  }));
}


export default EditPrompt;
