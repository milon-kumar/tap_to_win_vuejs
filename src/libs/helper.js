export const getUrlEndpoint = (url,isId) => {
    const newUrl = new URL(url);
    const path = newUrl.pathname;
    return path.substring(path.indexOf('/scaned'));
}