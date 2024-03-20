import { courseInfo } from "$lib/components/course/course_stores";

/**
 * @param {{content: string}} data
 * @return {void}
 */
export default function parseContentData({ content }) {
    const collectedData = { youtubeurl: "", slidesurl: "", content: "" };

    let { uLink, parsedContent } = getYoutube(content);
    let { slidesLink, nextParsedContent } = getSlides(parsedContent);

    console.log({ nextParsedContent, slidesLink });

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
    const regex = /<figure.*youtube.*<\/figure>/;

    let uLink;

    try {
        // @ts-ignore
        uLink = content
            .match(regex)[0]
            ?.match(/https:\/\/www\.youtube\.com\/embed\/.*oembed/)[0];
    } catch {
        uLink = "";
    }

    return {
        uLink,
        parsedContent: content.replace(regex, ""),
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
        //https://docs.google.com/presentation/d/e/2PACX-1vRvkiFI9D6kjbCfgKw0PNURFp-kHDvkT_BCi6CiZVS_XsUl-LEzv6mG_dyrmd4gc8B4nsE4px_JRU12/embed?start=false&#038;loop=false&#038;delayms=3000
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
