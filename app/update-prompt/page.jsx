// app/update-prompt/page.js

import React, { Suspense } from 'react';
import EditPrompt from './EditPrompt';

export default function UpdatePromptPage() {
    return (
        <Suspense fallback={<div>Loading...</div>}>
            <EditPrompt />
        </Suspense>
    );
}
