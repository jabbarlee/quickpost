
export default async function submitFormToFirebase({
    id,
    subject,
    body,
    recipients,
    setRecipients,
    setRecipient,
    setBody,
    setSubject,
    router
}: {
    id: string
    subject: string
    body: string
    recipients: string[]
    setRecipients: React.Dispatch<React.SetStateAction<string[]>>
    setRecipient: React.Dispatch<React.SetStateAction<string>>
    setBody: React.Dispatch<React.SetStateAction<string>>
    setSubject: React.Dispatch<React.SetStateAction<string>>
    router: any
}) {
    try {
        //firebase
        const response = await fetch('/api/firebase/update/template', {
            method: 'POST',
            headers: {
            'Content-Type': 'application/json',
            },
            body: JSON.stringify({ id, subject, body, recipients }),
        });

        if (!response.ok) {
            throw new Error('Error creating post');
        }

        const result = await response.json();

        //redirect if success
        console.log('Success:', result);
        setRecipients([]);
        setRecipient('');
        setBody('');
        setSubject('');

        router.push(`/create/final/${id}`)
    } catch (error) {
        console.error('Error:', error);
    }
}