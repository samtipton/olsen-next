// https://vimeo.com/876992964
export const extractVimeoIdFromRegularLink = (link: string) => {
  const match = /https?:\/\/(?:www)?.vimeo.com\/(\d+)/.exec(link || "");
  return match?.[1];
};
