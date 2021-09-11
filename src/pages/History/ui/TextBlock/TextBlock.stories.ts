import TextBlock from "./TextBlock.vue";

export default {
  title: "pages/history/ui/TextBlock",
  component: TextBlock,
  parameters: {
    backgrounds: {
      default: "dark",
    },
  },
};

export const textBlock = (args) => ({
  components: {
    TextBlock,
  },
  setup() {
    return { args };
  },
  template: `
    <div style="background-color: white;">
     <TextBlock>
       <template v-slot:title>
         <svg width="166" height="55" viewBox="0 0 166 55" fill="none" xmlns="http://www.w3.org/2000/svg">
           <path d="M14.568 24.192C11.56 24.192 9 24.8 6.888 26.016C4.776 27.168 3.176 28.608 2.088 30.336C1 32.064 0.424 33.984 0.36 36.096C0.296 38.144 0.744 40.032 1.704 41.76C2.728 43.488 4.296 44.96 6.408 46.176C8.52 47.328 11.176 47.904 14.376 47.904C17.704 47.904 20.872 47.264 23.88 45.984C26.952 44.704 29.832 43.04 32.52 40.992C35.336 42.656 38.248 44.032 41.256 45.12C44.328 46.144 47.528 46.656 50.856 46.656C52.136 46.656 53.064 46.272 53.64 45.504C54.28 44.672 54.6 43.808 54.6 42.912C54.6 41.952 54.28 41.088 53.64 40.32C53.064 39.488 52.136 39.072 50.856 39.072C48.488 39.072 46.248 38.752 44.136 38.112C42.088 37.408 40.104 36.512 38.184 35.424C40.68 32.352 42.664 29.12 44.136 25.728C45.608 22.336 46.344 19.072 46.344 15.936C46.344 10.496 45.224 6.496 42.984 3.936C40.808 1.312 37.704 0 33.672 0C31.112 0 28.904 0.544 27.048 1.632C25.256 2.72 23.784 4.032 22.632 5.568C21.48 7.104 20.648 8.736 20.136 10.464C19.624 12.192 19.368 13.728 19.368 15.072C19.368 16.352 19.752 17.312 20.52 17.952C21.288 18.528 22.12 18.816 23.016 18.816C23.912 18.816 24.744 18.528 25.512 17.952C26.344 17.312 26.824 16.352 26.952 15.072C27.08 13.152 27.656 11.424 28.68 9.888C29.768 8.352 31.432 7.584 33.672 7.584C35.016 7.584 36.04 7.936 36.744 8.64C37.512 9.28 38.024 10.048 38.28 10.944C38.6 11.84 38.76 12.768 38.76 13.728C38.824 14.688 38.824 15.424 38.76 15.936C38.504 18.56 37.8 21.248 36.648 24C35.496 26.752 33.928 29.28 31.944 31.584C30.536 30.688 29.128 29.792 27.72 28.896C26.376 28 25 27.2 23.592 26.496C22.184 25.792 20.712 25.248 19.176 24.864C17.704 24.416 16.168 24.192 14.568 24.192ZM14.376 40.32C11.944 40.32 10.184 39.872 9.096 38.976C8.072 38.08 7.624 37.12 7.752 36.096C7.88 35.008 8.552 34.016 9.768 33.12C10.984 32.224 12.584 31.776 14.568 31.776C16.424 31.776 18.376 32.32 20.424 33.408C22.472 34.496 24.232 35.584 25.704 36.672C25.832 36.8 25.928 36.864 25.992 36.864C24.328 37.952 22.536 38.816 20.616 39.456C18.696 40.032 16.616 40.32 14.376 40.32ZM56.505 25.728C56.505 22.848 56.889 20.224 57.657 17.856C58.489 15.488 59.609 13.472 61.017 11.808C62.489 10.08 64.217 8.768 66.201 7.872C68.185 6.912 70.393 6.432 72.825 6.432C75.193 6.432 77.369 6.912 79.353 7.872C81.337 8.768 83.033 10.08 84.441 11.808C85.849 13.472 86.937 15.488 87.705 17.856C88.537 20.224 88.953 22.848 88.953 25.728C88.953 28.608 88.537 31.232 87.705 33.6C86.937 35.968 85.849 38.016 84.441 39.744C83.033 41.472 81.337 42.816 79.353 43.776C77.369 44.672 75.193 45.12 72.825 45.12C70.393 45.12 68.185 44.672 66.201 43.776C64.217 42.816 62.489 41.472 61.017 39.744C59.609 38.016 58.489 35.968 57.657 33.6C56.889 31.232 56.505 28.608 56.505 25.728ZM64.185 25.728C64.185 29.184 64.985 32 66.585 34.176C68.185 36.352 70.265 37.44 72.825 37.44C76.089 37.44 78.425 36.352 79.833 34.176C81.241 32 81.945 29.184 81.945 25.728C81.945 22.208 81.145 19.392 79.545 17.28C78.009 15.168 75.769 14.112 72.825 14.112C70.265 14.112 68.185 15.2 66.585 17.376C64.985 19.488 64.185 22.272 64.185 25.728ZM96.099 12.096L113.475 0.863997C114.947 -0.0320005 116.259 -0.192 117.411 0.383998C118.627 0.959998 119.299 2.08 119.427 3.744C120.195 12.448 120.355 20.096 119.907 26.688C119.459 33.28 118.595 39.424 117.315 45.12C117.059 46.336 116.451 47.168 115.491 47.616C114.595 48.064 113.667 48.192 112.707 48C111.747 47.808 110.947 47.296 110.307 46.464C109.731 45.632 109.571 44.608 109.827 43.392C110.211 41.6 110.595 39.424 110.979 36.864C111.427 34.304 111.779 31.552 112.035 28.608C112.291 25.664 112.451 22.656 112.515 19.584C112.579 16.512 112.483 13.6 112.227 10.848L100.323 18.624C99.235 19.328 98.211 19.52 97.251 19.2C96.291 18.816 95.523 18.24 94.947 17.472C94.435 16.64 94.211 15.712 94.275 14.688C94.403 13.664 95.011 12.8 96.099 12.096ZM134.402 12.192C134.402 8.8 135.49 6.112 137.666 4.128C139.906 2.08 142.85 1.056 146.498 1.056C150.146 1.056 153.058 2.08 155.234 4.128C157.41 6.112 158.498 8.8 158.498 12.192C158.498 15.52 157.41 18.208 155.234 20.256C153.058 22.304 150.146 23.328 146.498 23.328C142.85 23.328 139.906 22.304 137.666 20.256C135.49 18.208 134.402 15.52 134.402 12.192ZM142.466 12.192C142.466 13.28 142.818 14.176 143.522 14.88C144.29 15.584 145.314 15.936 146.594 15.936C148.066 15.936 149.122 15.584 149.762 14.88C150.466 14.176 150.818 13.28 150.818 12.192C150.818 11.04 150.466 10.112 149.762 9.408C149.058 8.704 148.002 8.352 146.594 8.352C145.314 8.352 144.29 8.704 143.522 9.408C142.818 10.112 142.466 11.04 142.466 12.192ZM127.298 36C127.298 33.248 127.746 30.752 128.642 28.512C129.602 26.208 130.914 24.256 132.578 22.656C134.242 21.056 136.258 19.808 138.626 18.912C141.058 18.016 143.714 17.568 146.594 17.568C149.474 17.568 152.098 18.016 154.466 18.912C156.834 19.808 158.85 21.056 160.514 22.656C162.242 24.256 163.554 26.208 164.45 28.512C165.41 30.752 165.89 33.248 165.89 36C165.89 38.752 165.41 41.28 164.45 43.584C163.554 45.824 162.242 47.744 160.514 49.344C158.85 51.008 156.834 52.288 154.466 53.184C152.098 54.08 149.474 54.528 146.594 54.528C143.714 54.528 141.058 54.08 138.626 53.184C136.258 52.288 134.242 51.008 132.578 49.344C130.914 47.744 129.602 45.824 128.642 43.584C127.746 41.28 127.298 38.752 127.298 36ZM134.978 36C134.978 39.328 136.034 42.016 138.146 44.064C140.258 46.112 143.074 47.136 146.594 47.136C150.882 47.136 153.986 46.112 155.906 44.064C157.89 42.016 158.882 39.328 158.882 36C158.882 32.608 157.826 29.92 155.714 27.936C153.666 25.888 150.626 24.864 146.594 24.864C143.074 24.864 140.258 25.888 138.146 27.936C136.034 29.984 134.978 32.672 134.978 36Z" fill="#F27F94"/>
         </svg>
       </template>
       <template v-slot:subtitle>
         Первые шаги Харди Гарди
       </template>
       <template v-slot:body>
         Напечатав множество тиражей различных издательств детской литературы, мы решаем создать свой бренд игрушек. Мы печатаем первый пробный тираж игр-бродилок, пазлов и игр с бумагой. Продумываем дальнейшую стратегию развития бренда и создаем Instagram канал.
       </template>
     </TextBlock>
    </div>
  `,
  methods: {},
});