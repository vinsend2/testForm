<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png" />
    <div class="home__content-block">
      <h1>Test task Junior FrontDev</h1>
      <span class="home__text-block">      

        <p>
          Тестовое задание включает два подзадания, которые позволят вам
          продемонстрировать ваши навыки.
        </p>

        <ol>
          <li>Сверстать форму создания Клиента</li>
        </ol>

        <p><strong>Используемые технологии:</strong></p>

        <ul>
          <li>Vue.js</li>
          <li>Vuelidate</li>
          <li>Sass</li>
        </ul>

        <p><strong>Атрибуты формы:</strong></p>

        <ul>
          <li>Фамилия*</li>
          <li>Имя*</li>
          <li>Отчество</li>
          <li>Дата рождения*</li>
          <li>Номер телефона* (11 цифр. Начинается с 7)</li>
          <li>Пол</li>
          <li>
            Группа клиентов*. (Мультиселектор). Значения: [VIP, Проблемные, ОМС]
          </li>
          <li>
            Лечащий врач. (Cелектор). Значения: [Иванов, Захаров, Чернышева]
          </li>
          <li>Не отправлять СМС. (Чекбокс)</li>
        </ul>

        <p><strong>Адрес:</strong></p>

        <ul>
          <li>Индекс</li>
          <li>Страна</li>
          <li>Область</li>
          <li>Город*</li>
          <li>Улица</li>
          <li>Дом</li>
        </ul>

        <p><strong>Паспорт:</strong></p>

        <ul>
          <li>
            Тип документа*. (Cелектор). Значения: [Паспорт, Свидетельство о
            рождении, Вод. удостоверение]
          </li>
          <li>Серия</li>
          <li>Номер</li>
          <li>Кем выдан</li>
          <li>Дата выдачи* *<em>Поле обязательное для заполнения.</em></li>
        </ul>

        <p><strong>Описание задания:</strong></p>

        <ul>
          <li>Дизайн и внешний вид формы вы выбираете самостоятельно.</li>
          <li>
            Использовать какие-либо сторонние (CSS/JS/Vue/Etc) библиотеки, кроме
            указанных в задании не разрашается
          </li>
          <li>
            Необходимо осуществлять валидацию данных формы и выводить ошибки
            пользователю при их наличии. Место выведения, формат и текст вы
            определяете самостоятельно.
          </li>
          <li>
            При отсутствии ошибок, необходимо показать сообщение о том, что
            новый клиент успешно создан.
          </li>
          <li>Форма должна быть адаптивной.</li>
          <li>Обратите особое внимание на UI/UX и визуальный вид формы.</li>
        </ul>

        <ol start="2">
          <li>Написать игру Simon The Game</li>
        </ol>

        <p><strong>Используемые технологии:</strong> Vue.js</p>

        <p><strong>Правила игры</strong></p>

        <ul>
          <li>
            Игровое поле состоят из 4 квадратов / кнопок, каждый из которых
            производит определенный тон и &laquo;загорается&raquo; при нажатии.
          </li>
          <li>
            Раунд в игре состоит из устройства, освещающего одну или несколько
            кнопок в случайном порядке. После чего игрок должен воспроизвести
            этот порядок, нажимая кнопки.
          </li>
          <li>
            Если игрок успешно воспроизводит последовательность, то они
            переходят к следующему раунду.
          </li>
          <li>
            Если игрок не воспроизводит последовательность, то игра окончена
            (уведомление должно отображаться для пользователя).
          </li>
          <li>
            С каждым раундом количество кнопок (последовательность)
            увеличивается.
          </li>
        </ul>

        <p>
          <a href="https://en.wikipedia.org/wiki/Simon_(game)"
            >Дополнительная информация об игре</a
          >
          <a href="http://www.kellyking.me/projects/simon/"
            >Пример игры в действии</a
          >
        </p>

        <p><strong>Функциональность</strong></p>

        <ul>
          <li>
            При воспроизведении последовательности кнопки / квадрат должны
            &laquo;загореться&raquo;.
          </li>
          <li>
            Каждая кнопка / квадрат должны издавать уникальный звук во время
            игры - вы можете использовать те же аудиофайлы, которые используются
            для этой версии игры Simon
          </li>
        </ul>

        <p>
          <strong
            >Должно быть 3 уровня сложности - легкий, нормальный и
            сложный</strong
          >
        </p>

        <ul>
          <li>
            Легкий: время между каждой кнопкой в последовательности должно быть
            1,5 сек
          </li>
          <li>
            Средний: время между каждой кнопкой в последовательности должно быть
            1,0 сек.
          </li>
          <li>
            Сложный: время между каждой кнопкой в последовательности должно быть
            0,4 сек.
          </li>
        </ul>

        <p>
          <strong>Дизайн</strong> Время на это задание должно быть потрачено на
          функциональность, а не на дизайн, поэтому, пожалуйста, следуйте
          основному дизайну игры.
        </p>

        <p>Результаты</p>

        <ol>
          <li>
            Два завершенных проекта следует выложить на GitHub и задеплоить на
            GitHub Pages.
          </li>
          <li>
            Результатом выполнения будут четыре ссылки, которые нужно отправить
            нам.
          </li>
          <li>В обоих задачах Vue.config.devtools должен быть равен true.</li>
        </ol>
      </span>
    </div>
  </div>
</template>

<script>
export default {
  name: "Home",
};
</script>

<style lang="scss">
.home {
  text-align: center;
}
.home__content-block {
  text-align: left;
  width: 50%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin: auto;
}
@media (max-width: 768px) {
  .home__content-block {
      width: 80%;
  }
}
</style>
