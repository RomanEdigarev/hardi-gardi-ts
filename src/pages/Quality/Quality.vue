<template>
  <div class="quality">
    <main class="page-main">
      <div class="page-main__header">
        <BreadCrumbs />
        <PageTitle>
          <template v-slot:text>
            <span class="quality__title">Продукция и качество</span>
          </template>
        </PageTitle>
      </div>
      <div class="quality__header">
        <div class="quality__header__title">
          Каждый день мы используем наш опыт для создания игрушек Харди Гарди.
        </div>
        <div class="quality__header__img-container">
          <img :src="require('./assets/01.png')" alt="" />
          <img src="./assets/mask.svg" alt="" />
          <svg
            width="33"
            height="33"
            viewBox="0 0 33 33"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M16.3636 33C25.3957 33 32.7273 25.6111 32.7273 16.5C32.7273 7.38889 25.405 0 16.3636 0C7.32229 0 0 7.37963 0 16.4907C0 25.6111 7.32229 33 16.3636 33Z"
              fill="#5F73AA"
            />
          </svg>
        </div>
        <div class="quality__header__subtitle">
          <div>Как мы создаем игры? Делимся этапами создания бестселлера</div>
          <svg
            width="31"
            height="22"
            viewBox="0 0 31 22"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M23.8017 1.52254C24.4204 0.727058 25.1275 0.22623 25.8935 0.0789185C26.6595 -0.0683925 27.4255 -0.00947523 28.1326 0.255685C28.8397 0.520845 29.4289 0.992218 29.9003 1.66985C30.3717 2.31802 30.6074 3.02514 30.6074 3.76169C30.6074 4.49825 30.3423 5.26426 29.7825 6.00082L18.852 20.3784C18.0565 21.439 17.0843 21.9693 15.9647 21.9988C14.8452 22.0282 13.8434 21.5274 12.989 20.4668L1.88177 6.85523C1.26306 6.17759 0.938991 5.38211 0.938991 4.5277C0.938991 3.79115 1.17468 3.08406 1.64607 2.43589C2.11747 1.78773 2.67726 1.31632 3.38435 1.02169C4.06198 0.727072 4.79853 0.668155 5.56454 0.844928C6.33056 0.992239 7.03766 1.46363 7.65637 2.20018L15.7585 12.0995L23.8017 1.52254Z"
              fill="#FFD880"
            />
          </svg>
        </div>
        <div class="quality__header__bg">
          <svg
            width="1151"
            height="832"
            viewBox="0 0 1151 832"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M32.3367 434.952C135.636 586.219 277.218 919.736 515.415 810.386C622.968 761.179 706.215 639.679 786.424 555.845C890.332 447.102 994.847 338.36 1098.75 229.618C1262.82 58.3037 1002.75 -202.313 838.074 -30.9986C747.535 63.1636 657.604 157.326 567.064 251.488C525.137 295.228 483.817 338.36 441.89 382.1C421.23 403.97 399.962 425.84 379.302 447.102C327.045 495.702 322.791 503.6 365.934 470.795C413.33 476.87 460.727 482.945 507.515 489.627C458.904 461.682 382.948 298.265 348.92 249.058C217.061 54.6587 -101.953 238.731 32.3367 434.952Z"
              fill="#FFC124"
              fill-opacity="0.04"
            />
          </svg>
        </div>
      </div>
      <div class="quality__body">
        <div class="quality__body__item pl-87">
          <div class="quality__body__item__text-block mw-408">
            <TextBlock title="Идея">
              <template v-slot:number>
                <svg
                  width="131"
                  height="76"
                  viewBox="0 0 131 76"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M32 44C49 44 86 39 99 32"
                    stroke="#FFF8E5"
                    stroke-width="63"
                    stroke-linecap="round"
                  />
                  <path
                    d="M51.816 31.064L63.4 23.576C64.3813 22.9787 65.256 22.872 66.024 23.256C66.8347 23.64 67.2827 24.3867 67.368 25.496C67.88 31.2987 67.9867 36.3973 67.688 40.792C67.3893 45.1867 66.8133 49.2827 65.96 53.08C65.7893 53.8907 65.384 54.4453 64.744 54.744C64.1467 55.0427 63.528 55.128 62.888 55C62.248 54.872 61.7147 54.5307 61.288 53.976C60.904 53.4213 60.7973 52.7387 60.968 51.928C61.224 50.7333 61.48 49.2827 61.736 47.576C62.0347 45.8693 62.2693 44.0347 62.44 42.072C62.6107 40.1093 62.7173 38.104 62.76 36.056C62.8027 34.008 62.7387 32.0667 62.568 30.232L54.632 35.416C53.9067 35.8853 53.224 36.0133 52.584 35.8C51.944 35.544 51.432 35.16 51.048 34.648C50.7067 34.0933 50.5573 33.4747 50.6 32.792C50.6853 32.1093 51.0907 31.5333 51.816 31.064Z"
                    fill="#FFC124"
                  />
                </svg>
              </template>
              <template v-slot:text>
                Продукт должен соответствовать актуальным требованиям рынка, но
                творческие аспекты очень быстро выходят на первый план. Мы
                представляем ребенка, который будет играть в Харди Гарди. Думаем
                о возрасте малыша, где и как он сможет играть, чем игра будет
                для него интересна и полезна, и какие навыки и знания ребёнок
                приобретёт.
              </template>
            </TextBlock>
          </div>
          <div class="quality__body__item__img-container img-h">
            <img :src="require('/public/images/pages/2019.jpg')" alt="" />
          </div>
        </div>
        <div class="quality__body__item">
          <div class="quality__body__item__img-container img-v">
            <img :src="require('/public/images/pages/2019.jpg')" alt="" />
          </div>
          <div class="quality__body__item__text-block mw-580">
            <TextBlock title="Первые эскизы обретают форму">
              <template v-slot:number>
                <svg
                  width="142"
                  height="91"
                  viewBox="0 0 142 91"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M32 34.9994C49 34.9994 82 33.9995 110 59.4997"
                    stroke="#FFF8E5"
                    stroke-width="63"
                    stroke-linecap="round"
                  />
                  <path
                    d="M54.712 35.128C52.7067 35.128 51 35.5333 49.592 36.344C48.184 37.112 47.1173 38.072 46.392 39.224C45.6667 40.376 45.2827 41.656 45.24 43.064C45.1973 44.4293 45.496 45.688 46.136 46.84C46.8187 47.992 47.864 48.9733 49.272 49.784C50.68 50.552 52.4507 50.936 54.584 50.936C56.8027 50.936 58.9147 50.5093 60.92 49.656C62.968 48.8027 64.888 47.6933 66.68 46.328C68.5573 47.4373 70.4987 48.3547 72.504 49.08C74.552 49.7627 76.6853 50.104 78.904 50.104C79.7573 50.104 80.376 49.848 80.76 49.336C81.1867 48.7813 81.4 48.2053 81.4 47.608C81.4 46.968 81.1867 46.392 80.76 45.88C80.376 45.3253 79.7573 45.048 78.904 45.048C77.3253 45.048 75.832 44.8347 74.424 44.408C73.0587 43.9387 71.736 43.3413 70.456 42.616C72.12 40.568 73.4427 38.4133 74.424 36.152C75.4053 33.8907 75.896 31.7147 75.896 29.624C75.896 25.9973 75.1493 23.3307 73.656 21.624C72.2053 19.8747 70.136 19 67.448 19C65.7413 19 64.2693 19.3627 63.032 20.088C61.8373 20.8133 60.856 21.688 60.088 22.712C59.32 23.736 58.7653 24.824 58.424 25.976C58.0827 27.128 57.912 28.152 57.912 29.048C57.912 29.9013 58.168 30.5413 58.68 30.968C59.192 31.352 59.7467 31.544 60.344 31.544C60.9413 31.544 61.496 31.352 62.008 30.968C62.5627 30.5413 62.8827 29.9013 62.968 29.048C63.0533 27.768 63.4373 26.616 64.12 25.592C64.8453 24.568 65.9547 24.056 67.448 24.056C68.344 24.056 69.0267 24.2907 69.496 24.76C70.008 25.1867 70.3493 25.6987 70.52 26.296C70.7333 26.8933 70.84 27.512 70.84 28.152C70.8827 28.792 70.8827 29.2827 70.84 29.624C70.6693 31.3733 70.2 33.1653 69.432 35C68.664 36.8347 67.6187 38.52 66.296 40.056C65.3573 39.4587 64.4187 38.8613 63.48 38.264C62.584 37.6667 61.6667 37.1333 60.728 36.664C59.7893 36.1947 58.808 35.832 57.784 35.576C56.8027 35.2773 55.7787 35.128 54.712 35.128ZM54.584 45.88C52.9627 45.88 51.7893 45.5813 51.064 44.984C50.3813 44.3867 50.0827 43.7467 50.168 43.064C50.2533 42.3387 50.7013 41.6773 51.512 41.08C52.3227 40.4827 53.3893 40.184 54.712 40.184C55.9493 40.184 57.2507 40.5467 58.616 41.272C59.9813 41.9973 61.1547 42.7227 62.136 43.448C62.2213 43.5333 62.2853 43.576 62.328 43.576C61.2187 44.3013 60.024 44.8773 58.744 45.304C57.464 45.688 56.0773 45.88 54.584 45.88Z"
                    fill="#FFC124"
                  />
                </svg>
              </template>
              <template v-slot:text>
                Идеи очень быстро приобретают форму на бумаге в виде первых
                эскизов. Мы выбираем материалы, подбираем цвета, уточняем
                размеры и прочие нюансы. Все должно отвечать высоким требованиям
                безопасности, быть «в тренде» и соответствовать стилю Харди
                Гарди.
              </template>
            </TextBlock>
          </div>
        </div>
        <div class="quality__body__item pl-87 mb-30">
          <div class="quality__body__item__text-block mw-408">
            <TextBlock title="Моделирование">
              <template v-slot:number>
                <svg
                  width="136"
                  height="72"
                  viewBox="0 0 136 72"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M32 39.5C44 39.5 72 40.5 103.5 32"
                    stroke="#FFF8E5"
                    stroke-width="63"
                    stroke-linecap="round"
                  />
                  <path
                    d="M62.008 28.448C62.6053 27.3387 63.288 26.5707 64.056 26.144C64.824 25.7173 65.528 25.504 66.168 25.504C66.6373 25.504 67.0427 25.5893 67.384 25.76C67.7253 25.888 67.9813 26.0587 68.152 26.272C68.664 26.912 68.92 27.5733 68.92 28.256C68.92 28.9387 68.664 29.6213 68.152 30.304C67.6827 30.944 66.936 31.5413 65.912 32.096C64.9307 32.6507 63.672 33.0987 62.136 33.44C61.2827 33.6107 60.6427 33.9733 60.216 34.528C59.832 35.0827 59.6613 35.6587 59.704 36.256C59.7467 36.8107 59.9813 37.3227 60.408 37.792C60.8773 38.2187 61.5173 38.432 62.328 38.432C62.712 38.432 63.0107 38.4107 63.224 38.368C64.6747 38.0693 66.0613 37.92 67.384 37.92C69.8587 37.92 71.6933 38.496 72.888 39.648C74.0827 40.7573 74.68 42.3573 74.68 44.448C74.68 45.2587 74.4667 46.0693 74.04 46.88C73.6133 47.6907 72.9947 48.416 72.184 49.056C71.416 49.696 70.4773 50.2293 69.368 50.656C68.2587 51.04 67 51.232 65.592 51.232C64.5253 51.232 63.5653 51.0613 62.712 50.72C61.8587 50.3787 61.1333 49.9733 60.536 49.504C59.9387 48.992 59.448 48.48 59.064 47.968C58.68 47.4133 58.3813 46.944 58.168 46.56C57.912 46.048 57.5707 45.6853 57.144 45.472C56.76 45.216 56.3547 45.088 55.928 45.088C55.0747 45.088 54.3493 45.4507 53.752 46.176C53.1547 46.9013 53.0907 47.776 53.56 48.8C54.0293 49.824 54.6693 50.784 55.48 51.68C56.2907 52.576 57.208 53.3653 58.232 54.048C59.2987 54.7733 60.4507 55.328 61.688 55.712C62.968 56.1387 64.2693 56.352 65.592 56.352C67.384 56.352 69.1333 56.0533 70.84 55.456C72.5467 54.9013 74.0613 54.0907 75.384 53.024C76.7067 52 77.7733 50.7627 78.584 49.312C79.3947 47.8187 79.8 46.1973 79.8 44.448C79.8 42.9547 79.5653 41.6107 79.096 40.416C78.6267 39.1787 78.008 38.112 77.24 37.216C76.472 36.2773 75.576 35.5093 74.552 34.912C73.528 34.3147 72.4613 33.9093 71.352 33.696C71.864 33.184 72.3333 32.5653 72.76 31.84C73.1867 31.1147 73.4853 30.3253 73.656 29.472C73.8267 28.6187 73.8267 27.7013 73.656 26.72C73.528 25.696 73.144 24.6507 72.504 23.584C71.9067 22.6027 71.0747 21.8773 70.008 21.408C68.984 20.9387 67.8533 20.704 66.616 20.704C65.7627 20.704 64.888 20.8107 63.992 21.024C63.096 21.2373 62.2427 21.5787 61.432 22.048C60.6213 22.4747 59.8747 23.0293 59.192 23.712C58.552 24.352 57.9973 25.12 57.528 26.016C57.272 26.528 57.1653 27.0187 57.208 27.488C57.2507 27.9573 57.3787 28.3627 57.592 28.704C57.848 29.0453 58.168 29.3227 58.552 29.536C58.9787 29.7493 59.4053 29.856 59.832 29.856C60.7707 29.856 61.496 29.3867 62.008 28.448Z"
                    fill="#FFC124"
                  />
                </svg>
              </template>
              <template v-slot:text>
                Как только эскизы утверждены, в дело вступают технологи.
                Специалисты создают макет игры в натуральную величину,
                продумывают толщину упаковки, проверяют все размеры и
                технические отступы. На основе этого подготавливают файлы в
                печать
              </template>
            </TextBlock>
          </div>
          <div class="quality__body__item__img-container img-h">
            <img :src="require('/public/images/pages/2019.jpg')" alt="" />
          </div>
        </div>
        <div class="quality__body__item pl-87">
          <div class="quality__body__item__text-block mw-408">
            <TextBlock title="Производство">
              <template v-slot:number>
                <svg
                  width="113"
                  height="83"
                  viewBox="0 0 113 83"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M32 31.5C44 31.5 73 45.5 81 51"
                    stroke="#FFF8E5"
                    stroke-width="63"
                    stroke-linecap="round"
                  />
                  <path
                    d="M69.008 49.4C69.7333 49.1867 70.224 48.8027 70.48 48.248C70.7787 47.6933 70.8853 47.1387 70.8 46.584C70.7147 45.9867 70.4587 45.4747 70.032 45.048C69.6053 44.6213 69.0507 44.408 68.368 44.408C68.1973 44.408 68.048 44.4293 67.92 44.472C67.792 44.472 67.6427 44.4933 67.472 44.536C66.832 44.7493 66.192 44.9413 65.552 45.112C64.912 45.24 64.2933 45.3467 63.696 45.432C63.696 42.7867 63.824 40.2267 64.08 37.752C64.336 35.2347 64.6987 32.632 65.168 29.944C65.3387 28.9627 65.1253 28.216 64.528 27.704C63.9733 27.192 63.3333 26.936 62.608 26.936C62.0533 26.936 61.5413 27.1067 61.072 27.448C60.6027 27.7893 60.304 28.3227 60.176 29.048C59.664 31.9493 59.2587 34.7653 58.96 37.496C58.704 40.184 58.576 43 58.576 45.944C57.0827 45.944 55.6107 45.8587 54.16 45.688C52.7093 45.5173 51.2373 45.2827 49.744 44.984L52.56 29.944C52.7733 28.9627 52.5813 28.216 51.984 27.704C51.3867 27.192 50.7253 26.936 50 26.936C49.4453 26.936 48.9333 27.1067 48.464 27.448C47.9947 27.7893 47.696 28.3227 47.568 29.048L44.304 46.52C44.176 47.1173 44.304 47.7147 44.688 48.312C45.072 48.9093 45.584 49.2933 46.224 49.464C48.3147 49.9333 50.384 50.3173 52.432 50.616C54.48 50.9147 56.592 51.064 58.768 51.064C58.896 52.8987 59.088 54.7973 59.344 56.76C59.4293 57.528 59.728 58.104 60.24 58.488C60.752 58.8293 61.3067 59 61.904 59C62.6293 59 63.2693 58.7653 63.824 58.296C64.3787 57.784 64.592 57.0587 64.464 56.12C64.208 54.2427 64.016 52.408 63.888 50.616C64.7413 50.4453 65.5733 50.2747 66.384 50.104C67.2373 49.8907 68.112 49.656 69.008 49.4Z"
                    fill="#FFC124"
                  />
                </svg>
              </template>
              <template v-slot:text>
                Файлы готовы к печати. Последняя проверка в отделе препресс и
                будущая игрушка Харди Гарди уходит в производство. Сперва
                печать, затем постпечатная обработка, и далее комплектовка и
                упаковка игры. Каждая деталь в производстве очень важна: от
                настройки печатной машины до контроля сборки готовой продукции.
                После упаковки тираж поступает на склад, игра готова к продаже.
              </template>
            </TextBlock>
          </div>
          <div class="quality__body__item__img-container img-h">
            <img :src="require('/public/images/pages/2019.jpg')" alt="" style="margin-bottom: 12px" />
          </div>
          <div class="quality__body__item__img-container img-h">
            <img :src="require('/public/images/pages/2019.jpg')" alt="" />
          </div>
        </div>
        <div class="quality__body__item">
          <div class="quality__body__item__img-container img-v">
            <img :src="require('/public/images/pages/2019.jpg')" alt="" />
          </div>
          <div class="quality__body__item__text-block mw-580">
            <TextBlock title="Выход в продажу">
              <template v-slot:number>
                <svg
                  width="131"
                  height="76"
                  viewBox="0 0 131 76"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M32 44C49 44 86 39 99 32"
                    stroke="#FFF8E5"
                    stroke-width="63"
                    stroke-linecap="round"
                  />
                  <path
                    d="M76.288 22.32C75.3067 22.7893 74.2613 23.1093 73.152 23.28C72.0427 23.4507 70.9333 23.536 69.824 23.536C68.544 23.536 67.3067 23.4293 66.112 23.216C64.9173 23.0027 63.8293 22.6827 62.848 22.256C62.6347 22.1707 62.4427 22.1067 62.272 22.064C62.144 22.0213 61.9733 22 61.76 22C61.2053 22 60.7147 22.192 60.288 22.576C59.8613 22.9173 59.5627 23.408 59.392 24.048L56.448 37.168C56.3627 37.6373 56.3413 37.9573 56.384 38.128C56.384 38.8533 56.64 39.4293 57.152 39.856C57.664 40.2827 58.2827 40.496 59.008 40.496C59.1787 40.496 59.328 40.496 59.456 40.496C59.584 40.4533 59.7333 40.4107 59.904 40.368C61.184 40.112 62.4 39.984 63.552 39.984C66.0267 39.984 67.9467 40.56 69.312 41.712C70.6773 42.864 71.36 44.4427 71.36 46.448C71.36 47.2587 71.1467 48.0693 70.72 48.88C70.2933 49.6907 69.6747 50.416 68.864 51.056C68.096 51.696 67.1573 52.2293 66.048 52.656C64.9387 53.04 63.68 53.232 62.272 53.232C61.2053 53.232 60.2453 53.0613 59.392 52.72C58.5387 52.3787 57.8133 51.9733 57.216 51.504C56.6187 50.992 56.128 50.48 55.744 49.968C55.36 49.4133 55.0613 48.944 54.848 48.56C54.592 48.048 54.2507 47.6853 53.824 47.472C53.44 47.216 53.0347 47.088 52.608 47.088C51.7547 47.088 51.0293 47.4507 50.432 48.176C49.8347 48.9013 49.7707 49.776 50.24 50.8C50.7093 51.824 51.3493 52.784 52.16 53.68C52.9707 54.576 53.888 55.3653 54.912 56.048C55.9787 56.7733 57.1307 57.328 58.368 57.712C59.648 58.1387 60.9493 58.352 62.272 58.352C64.064 58.352 65.8133 58.0533 67.52 57.456C69.2267 56.9013 70.7413 56.0907 72.064 55.024C73.3867 54 74.4533 52.7627 75.264 51.312C76.0747 49.8187 76.48 48.1973 76.48 46.448C76.48 44.144 76.1173 42.2453 75.392 40.752C74.6667 39.216 73.664 38.0213 72.384 37.168C71.1467 36.272 69.6533 35.6533 67.904 35.312C66.1973 34.928 64.32 34.736 62.272 34.736L63.808 27.952C64.7893 28.1653 65.792 28.3573 66.816 28.528C67.8827 28.656 68.9493 28.72 70.016 28.72C71.424 28.72 72.8107 28.592 74.176 28.336C75.584 28.08 76.9707 27.6533 78.336 27.056C79.0187 26.7573 79.4667 26.3307 79.68 25.776C79.8933 25.2213 79.936 24.6667 79.808 24.112C79.68 23.5573 79.4027 23.088 78.976 22.704C78.5493 22.2773 78.016 22.064 77.376 22.064C76.992 22.064 76.6293 22.1493 76.288 22.32Z"
                    fill="#FFC124"
                  />
                </svg>
              </template>
              <template v-slot:text>
                Игры поступили на склад и наконец готовы к встрече с маленькими
                потребителями. Каждую посылку мы упаковываем в специальную
                транспортировочную коробку и отправляем маленьким исследователям
                окружающего мира по всей стране.
              </template>
            </TextBlock>
          </div>
        </div>
      </div>
      <div class="quality__footer">
        <div class="quality__footer__card">
          <FooterCard />
        </div>
        <div class="quality__footer__docs">
          <div class="quality__footer__docs__text">
            Чтобы наши дети могли безопасно играть, вся продукция Харди Гарди
            изготавливается в соответствии с ГОСТ, а также имеет все необходимые
            сертификаты качества. Игры проходят все установленные в технических
            регламентах Таможенного союза и Евразийского экономического союза
            процедуры оценки и подтверждения. Для вашего удобства мы сохранили
            все сертификаты на игры Харди Гарди ниже.
          </div>
          <div class="quality__footer__docs__items">
            <div class="quality__footer__docs__items__item"><DocsCard /></div>
            <div class="quality__footer__docs__items__item"><DocsCard /></div>
            <div class="quality__footer__docs__items__item"><DocsCard /></div>
            <div class="quality__footer__docs__items__item"><DocsCard /></div>
          </div>
          <svg
            width="68"
            height="96"
            viewBox="0 0 68 96"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            style="top: 14%; left: 6%"
          >
            <path
              d="M51.4042 0.615515C16.2042 11.0919 -4.90098 47.283 0.97797 84.4999C3.83135 102.547 30.2006 98.0532 27.3472 80.0553C23.928 58.3944 38.195 34.096 58.1932 28.1618C75.0922 23.1556 68.4015 -4.43952 51.4042 0.615515Z"
              fill="#5F73AA"
            />
          </svg>
          <svg
            width="57"
            height="57"
            viewBox="0 0 57 57"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            style="top: 28%; left: 12%"
          >
            <path
              d="M28.5 57C44.2308 57 57 44.2374 57 28.5C57 12.7626 44.247 0 28.5 0C12.753 0 0 12.7466 0 28.484C0 44.2374 12.753 57 28.5 57Z"
              fill="#FCEEF4"
            />
          </svg>
          <svg
            width="244"
            height="147"
            viewBox="0 0 244 147"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            style="bottom: -6%; right: 8%"
          >
            <path
              d="M41 106.7L203.3 41"
              stroke="#FCEEF4"
              stroke-width="80"
              stroke-miterlimit="10"
              stroke-linecap="round"
            />
          </svg>
        </div>
      </div>
    </main>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { PageTitle } from "@/shared/ui";
import { BreadCrumbs } from "@/widgets";
import { TextBlock, FooterCard, DocsCard } from "./ui";
export default defineComponent({
  name: "Quality",
  components: { PageTitle, BreadCrumbs, TextBlock, FooterCard, DocsCard },
});
</script>

<style lang="scss" scoped>
.quality {
  position: relative;
  color: $clr-phi;
  &__title {
    color: $clr-alpha-theta;
  }

  // *** Header *** //
  &__header {
    position: relative;
    margin-bottom: 68px;
    &__bg {
      position: absolute;
      top: -50%;
      left: 20%;
    }
    &__title {
      font-size: 18px;
      line-height: 1.5;
      max-width: 400px;
      margin-bottom: 432px;
    }
    &__subtitle {
      font-weight: $bold;
      font-size: 28px;
      line-height: 34px;
      text-align: center;
      max-width: 443px;
      margin: 0 auto;
      svg {
        margin-top: 20px;
      }
    }
    &__img-container {
      width: 450px;
      height: 374px;
      position: absolute;
      top: 0;
      left: 43%;
      img {
        width: 100%;
        height: 100%;
        object-fit: cover;
      }
      img:nth-child(2) {
        width: 354px;
        height: 292px;
        position: absolute;
        top: -13%;
        left: 16%;
        z-index: -1;
      }
      svg {
        position: absolute;
        top: -10%;
        right: -25%;
      }
    }
  }
  // *** Header END *** //

  // *** Body *** //
  &__body {
    &__item {
      display: flex;
      justify-content: space-between;
      align-items: center;
      margin-bottom: 110px;
      &__text-block {
        width: 100%;
      }
      &__img-container {
        img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          border-radius: 30px;
        }
      }
    }
  }
  // *** Body END *** //

  // *** Footer *** //
  &__footer {
    &__card {
      margin-bottom: 62px;
    }
    &__docs {
      width: 100%;
      border: 1px solid $clr-upsilon;
      padding: 102px 0;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      box-sizing: border-box;
      border-radius: 50px;
      position: relative;
      &__text {
        max-width: 786px;
        font-size: 18px;
        line-height: 1.5;
        text-align: center;
        margin-bottom: 55px;
      }
      &__items {
        display: grid;
        grid-template-columns: 1fr 1fr;
        gap: 30px;
      }
      svg {
        position: absolute;
      }
    }
  }
  // *** Footer END *** //

  // *** Other *** //
  .img-h {
    width: 100%;
    max-width: 644px;
    max-height: 382px;
  }

  .img-v {
    width: 408px;
    height: 511px;
  }

  .mw-408 {
    max-width: 408px;
  }
  .mw-580 {
    max-width: 580px;
  }
  .mb-30 {
    margin-bottom: 30px;
  }

  .pl-87 {
    padding-left: 87px;
  }

  // *** Other END *** //
}
@media screen and (min-width: 738px) and (max-width: 1200px),
  (-webkit-min-device-pixel-ratio: 3) {
  .quality {
    // *** Header *** //
    &__header {
      &__bg {
        top: -88%;
        left: -4%;
      }
      &__title {
        max-width: 336px;
        font-size: 16px;
        line-height: 24px;
      }
      &__img-container {
        width: 331px;
        height: 274px;
        top: 10%;
        left: 46%;
        img:nth-child(2) {
          width: 250px;
          height: 204px;
          top: -13%;
        }
      }
    }
    // *** Header END *** //

    // *** Body *** //
    &__body {
      &__item {
        &__text-block {
          max-width: 345px !important;
        }
      }
      &__item:first-child {
        padding-left: 0;
        .quality__body__item__img-container {
          max-width: 339px;
          max-height: 201px;
        }
      }

      &__item:nth-child(2) {
        .quality__body__item__img-container {
          max-width: 248px;
          max-height: 311px;
        }
      }

      &__item:nth-child(3),
      &__item:nth-child(4) {
        padding-left: 0;
        .quality__body__item__img-container {
          max-width: 339px;
          max-height: 201px;
        }
      }

      &__item:nth-child(5) {
        padding-left: 0;
        .quality__body__item__img-container {
          max-width: 248px;
          max-height: 311px;
        }
      }
    }
    // *** Body END *** //

    // *** Footer *** //
    &__footer {
      &__docs {
        padding-right: 125px;
        padding-left: 125px;
        &__text {
          font-size: 14px;
          line-height: 21px;
        }
        svg:nth-child(3) {
          top: 7% !important;
          left: 4% !important;
        }
        svg:nth-child(4) {
          top: 18% !important;
          left: 9% !important;
        }
        svg:nth-child(5) {
          top: 85% !important;
          left: 63% !important;
        }
      }
    }
    // *** Footer END *** //
  }
}

@include phone {
  .quality {
    // *** Header *** //
    :deep .page-main__header {
      margin-bottom: 36px;
    }
    &__title {
      display: inline-block;
      max-width: 80vw;
      font-size: 28px;
      line-height: 34px;
      margin-bottom: 0;
    }
    &__header {
      margin-bottom: 18px;
      &__title {
        margin-bottom: 329px;
        font-size: 16px;
      }
      &__subtitle div {
        font-size: 20px;
        line-height: 24px;
        max-width: 70vw;
        margin: 0 auto;
      }
      &__img-container {
        width: 252px;
        height: 209px;
        top: 28%;
        left: 16%;
        img:nth-child(2) {
          width: 197px;
          height: 163px;
        }
      }
    }
    // *** Header END *** //

    // *** Body *** //
    &__body {
      &__item {
        flex-direction: column;
        margin-bottom: 60px;
        .quality__body__item__text-block {
          margin-bottom: 30px;
        }
        &__img-container {
          img {
            border-radius: 15px;
          }
        }
      }
      &__item:first-child {
        padding-left: 0;
        .quality__body__item__img-container {
          max-width: 339px;
          max-height: 201px;
        }
      }

      &__item:nth-child(2) {
        flex-direction: column-reverse;
      }

      &__item:nth-child(3),
      &__item:nth-child(4) {
        padding-left: 0;
        .quality__body__item__img-container {
          max-width: 339px;
          max-height: 201px;
        }
      }

      &__item:nth-child(5) {
        flex-direction: column-reverse;
      }
    }
    // *** Body END *** //

    // *** Footer *** //
    &__footer {
      &__docs {
        min-width: 100vw;
        margin-left: -10px;
        padding: 52px 32px;
        svg {
          display: none !important;
        }
        &__text {
          font-size: 14px;
          font-weight: 400;
          line-height: 21px;
          margin-bottom: 40px;
        }
        &__items {
          gap: 13px;
        }
      }
    }
    // *** Footer END *** //
    .img-v {
      margin-left: auto;
      width: 100vw;
      max-width: 248px;
      height: 311px;
    }
  }

}
</style>
<style lang="scss">
.quality {
  .page-main__header {
    margin-bottom: 55px;
  }
}
</style>
