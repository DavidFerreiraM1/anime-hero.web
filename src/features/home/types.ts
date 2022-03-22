export interface HomePageProps {
  username: string;
  data: {
    offset: number;
    list: Array<AnimeDataType>;
  };
}

export interface AnimeDataType {
  id: string;
  type: 'anime';
  links: {
    self: 'string';
  };
  attributes: {
    createdAt: Date;
    updatedAt: Date;
    slug: string;
    synopsis: string;
    description: string;
    coverImageTopOffset: number;
    ageRattingGuide: string;
    titles: {
      en: string;
      en_jp: string;
      ja_jp: string;
    };
    posterImage: {
      tiny: string;
      large: string;
      small: string;
      medium: string;
      original: string;
      meta: {
        dimensions: {
          tiny: {
            width: number;
            height: number;
          };
          large: {
            width: number;
            height: number;
          };
          small: {
            width: number;
            height: number;
          };
          medium: {
            width: number;
            height: number;
          };
        };
      };
    };
    coverImage?: {
      tiny: string;
      large: string;
      small: string;
      original: string;
      meta: {
        dimensions: {
          tiny: {
            width: number;
            height: number;
          };
          large: {
            width: number;
            height: number;
          };
          small: {
            width: number;
            height: number;
          };
        };
      };
    };
  };
}

export interface AnimeItemProps {
  data: AnimeDataType;
  onClick: (id: string) => void;
}
