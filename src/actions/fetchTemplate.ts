export default async function fetchTemplate({
    id,
    setSubject,
    setBody,
    setRecipients
} : {
    id: string,
    setSubject: React.Dispatch<React.SetStateAction<string>>,
    setBody: React.Dispatch<React.SetStateAction<string>>,
    setRecipients: React.Dispatch<React.SetStateAction<string[]>>
}) {
    const response = await fetch(`/api/firebase/get/template?id=${id}`)
    const data = await response.json()
    setSubject(data.data.subject)
    setBody(data.data.body)
    setRecipients(data.data.recipients)
}