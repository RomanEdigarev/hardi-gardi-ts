<template>
  <div class="footer-card">
    <div class="footer-card__title">
      <span
        >Создание игрушки – это очень<br />
        захватываю&shy;щий процесс</span
      >
      <svg
        width="243"
        height="226"
        viewBox="0 0 243 226"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M12 114.982C23.9402 113.786 210.26 107.686 231.256 111.612"
          stroke="#FFC124"
          stroke-width="16"
          stroke-linecap="round"
        />
      </svg>
    </div>
    <div class="footer-card__text">
      Споры, сомнения, вопросы, решения. Огромная работа команды профессионалов:
      дизайнеров и художников, маркетологов и психологов, менеджеров и
      печатников, но, в первую очередь, мам и пап, бабушек и дедушек. Чтобы
      предложить нашим малышам самое лучшее
      <svg
        width="53"
        height="53"
        viewBox="0 0 53 53"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M15.7619 10.2464C7.04249 15.915 4.63289 27.6198 10.356 36.4231C16.079 45.2263 27.7545 47.7742 36.4739 42.1057C45.2478 36.5209 47.6574 24.8161 41.9343 16.0129C36.2113 7.20966 24.4812 4.57786 15.7619 10.2464Z"
          fill="#EF8094"
        />
      </svg>
      <svg
        width="147"
        height="85"
        viewBox="0 0 147 85"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M73.3 147C62.7 147 52.8 145.2 43.8 141.8C34.6 138.2 26.6 133 20.1 126.2C13.7 119.6 8.69995 111.7 5.19995 102.7C1.69995 93.8 0 83.9 0 73.3C0 62.7 1.79999 52.8 5.29999 43.9C8.79999 34.9 13.9 27 20.3 20.5C26.8 13.9 34.7 8.70001 43.9 5.20001C52.9 1.70001 62.8 0 73.4 0C84 0 93.9 1.80001 102.8 5.20001C111.8 8.70001 119.7 13.9 126.3 20.4C132.9 27 138 34.9 141.5 43.9C145 52.8 146.8 62.7 146.8 73.3C146.8 83.9 145 93.8 141.6 102.7C138.1 111.7 133 119.6 126.5 126.3C119.9 133 112 138.2 102.9 141.7C93.8 145.2 83.9 147 73.3 147ZM73.3 49.2C65.6 49.2 59.8 51.3 55.6 55.6C51.3 60 49.2 65.8 49.2 73.3C49.2 80.9 51.2999 86.8 55.7 91.2C60 95.6 65.6 97.7 73.4 97.7C83.2 97.7 90 95.6 93.6 91.6C97.7 87.1 99.6 81.1 99.6 73.3C99.6 65.5 97.6 59.7 93.4 55.4C89.2 51.3 82.5 49.2 73.3 49.2Z"
          fill="#FFC124"
        />
      </svg>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
export default defineComponent({
  name: "FooterCard",
});
</script>

<style lang="scss" scoped>
.footer-card {
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: $clr-alpha-nu;
  border-radius: 50px;
  padding: 128px 97px;
  overflow: hidden;
  &__title {
    position: relative;
    width: 551px;
    span {
      display: inline-block;
      position: relative;
      font-weight: 600;
      font-size: 45px;
      line-height: 1.09;
      color: $clr-nu;
      z-index: 2;
    }
    svg {
      position: absolute;
      top: -30%;
      left: 43%;
      z-index: 1;
    }
  }
  &__text {
    width: 100%;
    max-width: 432px;
    font-size: 18px;
    line-height: 1.5;
    position: relative;
    svg {
      position: absolute;
    }
    svg:first-child {
      top: 107%;
      left: 54%;
    }
    svg:nth-child(2) {
      bottom: -71%;
      left: 72%;
    }
  }
}

@media screen and (min-width: 738px) and (max-width: 1200px),
  (-webkit-min-device-pixel-ratio: 3) {
  .footer-card {
    padding: 80px 40px;
    &__title {
      max-width: 305px;
      span {
        font-size: 36px;
        line-height: 45px;
      }
      svg {
        top: -3%;
        left: -8%;
      }
    }
    &__text {
      svg:first-child {
        top: 98%;
        left: 41%;
      }
      svg:nth-child(2) {
        bottom: -37%;
        left: 56%;
      }
    }
  }
}
@media screen and (min-width: 320px) and (max-width: 736px),
  (-webkit-min-device-pixel-ratio: 3) {
  .footer-card {
    min-width: 100vw;
    margin-left: -18px;
    padding: 52px 32px;
    flex-direction: column;
    padding-bottom: 130px;
    &__title {
      margin-bottom: 28px;
      width: auto;
      span {
        display: inline-block;
        font-size: 28px;
        line-height: 34px;
      }
      svg {
        width: 44%;
        top: -55%;
        left: 47%;
      }
    }
    &__text {
      font-size: 16px;
      line-height: 1.5;
      svg:first-child {
        top: 105%;
        left: 30%;
      }
      svg:nth-child(2) {
        bottom: -59%;
        left: 52%;
      }
    }
  }
}
</style>