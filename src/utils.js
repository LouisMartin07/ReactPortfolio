//automatically takes a path puts /assets infront of it before the path

export const getImageUrl = (path) => {
    return new URL(`/assets/${path}`, import.meta.url).href;
  };
  