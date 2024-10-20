import PromptCardList from "@/components/PromptCard";
import Input from '@/components/Input';

const Feed = async() => {
    try {
        const response = await fetch('https://ganeshtechnologysolutions.com/api/prompt', { cache: 'no-store' });

        // Log the response to see what's being returned
        console.log('Response:', response);

        if (!response.ok) {
            throw new Error('Failed to fetch data');
        }

        const data = await response.json();
        
        // Log data to verify it's valid JSON
        console.log('Data:', data);

        return (
            <section className='feed'>
                <Input />
                <PromptCardList data={data} />
            </section>
        );
    } catch (error) {
        console.error('Error fetching data:', error);

        return (
            <section className='feed'>
                <p>Error fetching data. Please try again later.</p>
            </section>
        );
    }
};

export default Feed;
