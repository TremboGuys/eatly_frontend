export function createURL(file) {
    if (file == null) return;
    return URL.createObjectURL(file);
}