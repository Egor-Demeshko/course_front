/**
 *
 * @param {string} content
 * @returns {string}
 */
export default function cleanFromScripts(content) {
    return content.replace(/<script.*?<\/script>/, "");
}
