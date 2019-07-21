declare module '*.vue' {
  import Vue from 'vue';
  export default Vue;
}

declare module '*.json' {
  const Json: any;
  export default Json;
}

declare module '*.jpg' {
  const Img: string;
  export default Img;
}

declare module '*.png' {
  const Img: string;
  export default Img;
}
