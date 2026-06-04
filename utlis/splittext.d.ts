declare module "@/utlis/splittext" {
  type SplitTextOptions = { [key: string]: any };

  export default class SplitText {
    constructor(element: HTMLElement | Element | any, options?: SplitTextOptions);
    chars: any[];
    words: any[];
    lines: any[];
    split: any;
    animation: any;
    revert(): void;
    static create(element: HTMLElement | Element | any, options?: SplitTextOptions): SplitText;
    static version: string;
  }
}
