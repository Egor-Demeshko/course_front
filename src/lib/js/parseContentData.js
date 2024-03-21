import { courseInfo } from "$lib/components/course/course_stores";

/**
 * @param {{content: string, heading: string}} data
 * @return {void}
 */
export default function parseContentData({ content, heading }) {
    const collectedData = {
        youtubeurl: "",
        slidesurl: "",
        content: "",
        heading,
    };

    let { uLink, parsedContent } = getYoutube(content);
    let { slidesLink, nextParsedContent } = getSlides(parsedContent);

    if (uLink) collectedData.youtubeurl = uLink;
    if (slidesLink) collectedData.slidesurl = slidesLink;
    if (nextParsedContent) collectedData.content = nextParsedContent;

    courseInfo.set(collectedData);
}

/**
 *
 * @param {string} content
 */
function getYoutube(content) {
    const regex = /<iframe.+?youtube.+?<\/iframe>/;
    const nextregex = /<figure.*?>.*?youtube.*?<\/figure>/;

    let parsedContent = "";
    let uLink;

    try {
        // @ts-ignore
        uLink = content
            .match(regex)[0]
            ?.match(/https:\/\/www\.youtube\.com\/embed\/.*oembed/)[0];
    } catch {
        uLink = "";
    }

    parsedContent = content.replace(regex, "");
    parsedContent = parsedContent.replace(nextregex, "");

    return {
        uLink,
        parsedContent,
    };
}

/**
 *
 * @param {string} content
 */
function getSlides(content) {
    const regex = /<iframe.*presentation.*<\/iframe>/;
    let slidesLink = "";

    try {
        // @ts-ignore
        let slidesBlock = content.match(regex);

        if (slidesBlock?.length && slidesBlock?.length > 0) {
            // @ts-ignore
            slidesLink = slidesBlock[0].match(
                /https:\/\/docs\.google\.com\/presentation.*embed[^"]*/
            )[0];
        }
    } catch {
        slidesLink = "";
    }

    return {
        slidesLink,
        nextParsedContent: content.replace(regex, ""),
    };
}
