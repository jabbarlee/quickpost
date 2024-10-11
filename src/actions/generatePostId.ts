export function generatePostId(): string {
    return 'id-' + Date.now().toString(36) + '-' + Math.random().toString(36);
}