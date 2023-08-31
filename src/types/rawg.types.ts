export type RawgGameResponse = {
  results: Array<RawgGameType>;
};

type RatingsType = {
  id: number;
  title: string;
  count: number;
  percent: number;
};

type PlatformTypes = {
  platform: {
    id: number;
    name: string;
    slug: string;
    image: null | string;
    year_end: null | string;
    year_start: null | string;
    games_count: number;
    image_background: string;
  };
  released_at: string;
  requirements_en: null | {
    minimum: string;
    recommended: string;
  };
  requirements_ru: null | {
    minimum: string;
    recommended: string;
  };
};

export type RawgGameType = {
  id: number;
  slug: string;
  name: string;
  released: string;
  tba: boolean;
  background_image: string;
  rating: number;
  rating_top: number;
  ratings: Array<RatingsType>;
  ratings_count: number;
  reviews_text_count: number;
  added: number;
  added_by_status: {
    yet: number;
    owned: number;
    beaten: number;
    toplay: number;
    dropped: number;
    playing: number;
  };
  metacritic: number;
  playtime: number;
  suggestions_count: number;
  updated: string;
  user_game: null;
  reviews_count: number;
  saturated_color: string;
  dominant_color: string;
  platforms: Array<PlatformTypes>;
};
