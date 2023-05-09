declare module 'pitchfork' {
  export interface ReviewAttributes {
    title: string;
  }

  export interface Review {
    attributes: ReviewAttributes;
  }

  export class Page {
    constructor(pageNum: number);
    on(eventName: string, callback: (results: Review[]) => void): void;
  }
}
