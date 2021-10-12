<template>
  <main class="main">
    <div class="container">
      <div class="employee-wrapper">
        <div class="employee">
          <picture ref="employeeImgWrap" class="employee__img-wrapper">
            <!--        <source class="employee__img" srcset="~/static/profile/img/ashot.webp" type="image/webp">-->
            <!--        <source class="employee__img" srcset="~/static/profile/img/ashot.jpg" type="image/jpeg">-->
            <img ref="employeeImg" class="employee__img" :src="photoUser" alt="Ашотик">
          </picture>
          <div class="employee-info">
          <span class="employee-text">
            <b class="employee-name">Philip</b>
            <span class="employee-work">was your waiter</span>
          </span>
          </div>
          <span class="employee-info--substrate" />
        </div>
      </div>

      <form class="form" @submit.prevent="submitHandler">
        <section class="form-total">
          Total amount: <b class="form-total__amount">$250</b>
        </section>

        <section class="form-tips form-tips--curve">
          <div class="form-tips__appeal">
            Say <i>Thanks</i> with a tip
          </div>
          <input type="number" placeholder="Tip amount" class="form-tips__input">
          <div class="form-tips__options">
            <input type="button" value="5%" class="form-tips__options-btn">
            <input type="button" value="10%" class="form-tips__options-btn active">
            <input type="button" value="15%" class="form-tips__options-btn">
          </div>
        </section>

        <section class="form-tips form-tips--decor">
          <div class="form-tips__appeal form-tips__appeal--decor">
            How was your experience today?
          </div>

          <div class="form-tips__rating-wrapper">
            <div ref="ratingList" class="form-tips__rating">
              <font-awesome-icon
                v-for="n of 5"
                :key="n"
                :icon="['fas', 'star']"
                class="form-tips__star"
                @click="() => serviceEvaluation(n)"
              />
            </div>
          </div>

          <div v-if="serviceEvaluationData.stars" class="form-tips__service">
            <div class="form-tips__appeal form-tips__appeal--decor">
              How can we improve your experience?
            </div>
            <section class="form-service__wrapper-options">
              <div v-for="(option, i) of serviceEvaluationData.upgrade" :key="option.criteria" class="form-service__option">
                <input :id="option.criteria" v-model="option.state" type="checkbox" hidden>
                <span
                  class="form-tips__conditions-cb"
                  :class="{active: option.state}"
                  @click="serviceEvaluationData.upgrade[i].state = !serviceEvaluationData.upgrade[i].state"
                />
                <label :for="option.criteria" class="form-service__text">{{ option.criteria }}</label>
              </div>
            </section>
            <input v-model="serviceEvaluationData.feedback" type="text" class="form-service__feedback" placeholder="Leave feedback (optional)">
          </div>
        </section>

        <section class="form-tips">
          <div class="form-tips__full-sum">
            <label class="form-tips__agreement" for="checkboxPay">
              <span class="form-tips__notice">Send the full amount</span>
              You compensate service commission, and $2 will be debited from your card.
            </label>
            <input id="checkboxPay" v-model="giveAllTheMoney" type="checkbox" hidden>
            <div
              class="form-tips__agreement-btn"
              :class="{active: giveAllTheMoney}"
              @click="giveAllTheMoney = !giveAllTheMoney"
            />
          </div>
          <input
            type="submit"
            class="form-tips__payment form-tips__payment--service"
            value=""
            :style="{backgroundImage: `url(../img-base/payment/${applePay ? 'applePay' : 'googlePay'}.svg)`}"
          >
          <input value="Pay by card" type="submit" class="form-tips__payment">

          <div class="form-tips__conditions">
            <input id="formTipsConditions" v-model="formTipsConditions" hidden type="checkbox">
            <span
              class="form-tips__conditions-cb"
              :class="{active: formTipsConditions}"
              @click="formTipsConditions = !formTipsConditions"
            />
            <label for="formTipsConditions" class="form-tips__conditions-text">I agree with <span>Terms&Conditions</span>
              and <span>Privacy policy</span></label>
          </div>
        </section>
      </form>
    </div>
  </main>
</template>

<script>
export default {
  name: 'IndexGuest',
  data: () => ({
    giveAllTheMoney: false,
    applePay: true,
    formTipsConditions: true,
    serviceEvaluationData: {
      stars: null,
      upgrade: [
        {
          criteria: 'Service',
          state: false
        },
        {
          criteria: 'Cleanliness',
          state: false
        },
        {
          criteria: 'Atmosphere',
          state: false
        },
        {
          criteria: 'Food quality',
          state: false
        }
      ],
      feedback: ''
    },
    userName: 'anna'
  }),
  computed: {
    photoUser () {
      return `./profile/img/${this.userName}.jpg`
    }
  },
  mounted () {
    this.changeEmployeeImg()

    let counter = 1
    const photoUsers = ['anna', 'artur', 'ashot', 'jill', 'johnny', 'marina', 'milena']
    setInterval(() => {
      if (counter < photoUsers.length) {
        this.userName = photoUsers[counter]
        counter++
      } else {
        counter = 1
      }
    }, 2000)
  },
  methods: {
    changeEmployeeImg () {
      const employeeImgWrap = this.$refs.employeeImgWrap
      const imgEmployee = this.$refs.employeeImg

      employeeImgWrap.style.height = employeeImgWrap.getBoundingClientRect().width * 1.211 + 'px'
      imgEmployee.style.height = employeeImgWrap.getBoundingClientRect().height * 0.95 + 'px'
      imgEmployee.style.width = employeeImgWrap.getBoundingClientRect().width * 0.95 + 'px'
    },
    serviceEvaluation (order) {
      const ratingList = this.$refs.ratingList
      const stars = ratingList.querySelectorAll('.form-tips__star')
      stars.forEach((item) => {
        item.classList.remove('active')
      })
      stars.forEach((item, i) => {
        if (i < order) {
          item.classList.add('active')
        }
      })
      this.serviceEvaluationData.stars = order
    },
    submitHandler () {
      console.log('На этом этапе сохарняем данные!')
    }
  }
}
</script>

<style lang="scss" scoped>
@import "static/styles/assembly.scss";
$employeeSubBottom: 35;

@media (min-width: 375px) {
  $employeeSubBottom: 43;
}

@mixin employeeInfo {
  position: absolute;
  transform: rotate(-5deg);
  border-radius: 8px;
  width: 255px;
  height: 84px;
  left: -66px;
  bottom: $employeeSubBottom + px;

  @media (min-width: 375px) {
    bottom: $employeeSubBottom + 8 + px;
  }
}

.main {
  background-color: $main-color;
  padding: 46px 10px 54px;
}

.container {
  max-width: 356px;
}

.employee {
  position: relative;
  z-index: 3;
  margin-bottom: 26px;

  &-wrapper {
    @media (min-width: 385px) {
      padding: 0 10px;
      width: calc(100% + 20px);
      transform: translateX(-10px);
      overflow: hidden;
    }
  }

  &__img-wrapper {
    position: relative;
    max-width: 355px;
    max-height: 430px;
    width: 100%;
    display: block;
    height: 390px;

    &:after {
      content: '';
      position: absolute;
      height: 149px;
      left: 34px;

      background: $shadow;
      filter: blur(70px);
      border-radius: 52px;
      transform: rotate(-4deg);
    }

    @media (min-width: 375px) {
      height: 430px;
    }
  }

  &__img {
    position: absolute;
    top: 0;
    right: 0;
    width: 94%;
    height: 94%;
    border-radius: 30px;
    transform-origin: 100% 0;
    transform: perspective(500px) rotateY(5deg);
  }

  &-info {
    @include employeeInfo;

    display: flex;
    justify-content: center;
    align-items: center;

    z-index: 1;
    overflow: hidden;
  }

  &:after {
    @include employeeInfo;

    content: '';
    background-color: $blue-name;
    backdrop-filter: blur(10px);
    z-index: 0;
  }

  &:before {
    content: '';
    position: absolute;
    left: -56px;
    bottom: $employeeSubBottom - 16 + px;
    background-color: $blue-name--sub;
    width: 122px;
    height: 83px;
    z-index: 0;
    border-radius: 6px;
    transform: rotate(18deg);

    @media (min-width: 375px) {
      bottom: $employeeSubBottom - 6 + px;
    }
  }

  &-info--substrate {
    position: absolute;
    width: 80%;
    height: 149px;
    left: 9%;
    bottom: -5px;
    z-index: -1;

    background: $shadow;
    //filter: blur(35px);
    filter: blur(27px);
    border-radius: 52px;
    transform: rotate(-4deg);
  }

  &-text {
    color: $white;
    transform: translateX(25px) rotate(5deg);
    display: block;
  }

  &-name {
    @include defineFont(600, 24px, 29px);
    display: block;
  }

  &-work {
    @include defineFont(600, 13px, 16px);
  }
}

.form {
  position: relative;

  &-total {
    position: absolute;
    top: -123px;
    right: 2%;
    z-index: 4;

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    height: 110px;
    width: 110px;
    padding: 10px;
    border-radius: 50%;
    text-align: center;

    background-size: contain;
    background-position: center;
    background-image: url('./static/img-base/guest/totalAmount.png');

    @media (min-width: 375px) {
      right: 4%;
      background-size: auto;
    }
  }

  &-total__amount {
    @include defineFont(700, 20px, 24px)
  }

  &-tips {
    padding: 30px 23px;
    background-color: $white;
    border-radius: 28px;
    z-index: 3;

    &--decor {
      position: relative;

      &:after, &:before {
        content: '........................';
        position: absolute;
        width: calc(100% - 60px);
        left: 30px;
        margin: 0 auto;

        line-height: 0;
        color: $accent;
        font-size: 38px;
        letter-spacing: 8.4px;
        height: 14px;
        overflow: hidden;
      }

      &:after {
        bottom: -4px;
      }

      &:before {
        top: -10px;
      }
    }

    &--curve {
      position: relative;
      &:before {
        content: '';
        position: absolute;
        transform-origin: 0 100%;
        transform: perspective(500px) rotateY(-8deg);
        width: 78%;
        height: 188px;
        background: $white;
        padding: 30px 23px;
        border-radius: 28px;
        left: 0;
        top: 0;
        z-index: -1;

        @media (min-width: 350px) {
          width: 79%;
        }
      }
    }
  }

  &-tips__appeal {
    color: $white;
    background-color: $accent;
    padding: 6px 15px 8px;
    @include defineFont(600, 20px, 1.3);
    @include roundedRectangle(8px);
    display: inline;
    box-decoration-break: clone;

    &--decor {
      position: relative;

      &:before {
        content: '';
        display: none;
        position: absolute;
        bottom: 18px;
        background-color: $accent;
        width: 17px;
        height: 17px;
        right: -8px;
        transform: rotate(45deg);
      }

      &:after {
        content: '';
        display: none;
        position: absolute;
        bottom: 9px;
        background-color: $white;
        width: 17px;
        height: 17px;
        border-radius: 50%;
        right: -17px;
      }

      &:after, &:before {
        @media (min-width:350px) {
          display: block;
        }
      }
    }

    i {
      margin: 0 3px 0 -3px;
    }

    @media (min-width: 375px) {
      font-size: 21px;
    }
  }

  &-tips__input {
    outline: none;
    width: 100%;
    caret-color: $accent-placeholder;
    color: $accent-placeholder;
    margin: 16px 0;
    background: $white;
    border: 2px solid $accent;
    padding: 16px 0;
    text-align: center;
    box-sizing: border-box;
    @include roundedRectangle(15px);
    @include defineFont(600, 20px, 24px);
    transition: 0.3s ease-in;

    &::placeholder {
      color: $accent-placeholder;
    }

    &:focus {
      outline: none;
      border: 2px solid $blue-name;
      box-shadow: 0 0 0 0;
    }
  }

  &-tips__options {
    display: flex;
    justify-content: space-between;

    &-btn {
      padding: 14px 0;
      flex: 1;
      background: rgba(176, 176, 176, 0.15);
      color: $black;
      outline: none;
      border: none;
      max-width: 94px;
      @include defineFont(600, 21px, 30px);
      @include roundedRectangle(20px);

      &.active {
        background-color: $blue-name;
        color: $white;
      }

      &:nth-child(2) {
        margin: 0 14px;
      }

      @media (min-width: 375px) {
        margin: 0;
        font-size: 24px;
      }
    }
  }

  &-tips__rating-wrapper {
    text-align: center;
  }

  &-tips__rating {
    display: inline-flex;
    flex-wrap: nowrap;
    margin: 20px auto 0;
    color: #EEE9FC;
  }

  &-tips__star {
    color: #EEE9FC;
    font-size: 38px;
    height: 50px;
    line-height: 1;

    &:not(:last-child) {
      margin-right: 10px;
    }

    &:hover, &.active {
      color: $star;
    }
  }

  &-tips__full-sum {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  &-tips__agreement {
    text-align: left;
    color: $grey;
    @include defineFont(500, 12px, 15px);
    margin-right: 10px;
  }

  &-tips__notice {
    color: $black;
    display: block;
    @include defineFont(600, 13px, 16px);
  }

  &-tips__agreement-btn {
    position: relative;
    min-width: 54px;
    height: 30px;

    background: $green-checkbox;
    border-radius: 22px;
    transition: 0.3s ease-in;

    &:after {
      content: '';
      position: absolute;
      width: 24px;
      height: 24px;
      background: $white;
      box-shadow: 0 4px 4px rgba(0, 0, 0, 0.2);
      border-radius: 50%;
      top: 3px;
      left: 3px;
      transition: 0.3s ease-in;
    }

    &.active {
      background: $green-btn;

      &:after {
        left: 27px;
      }
    }
  }

  &-tips__payment {
    @include roundedRectangle(22px);
    @include defineFont(600, 18px, 22px);
    background: $green-btn;
    color: #3A414A;
    display: block;
    margin: 13px 0 25px;
    width: 100%;
    height: 60px;
    border: none;
    outline: none;
    padding: 0;
  }

  &-tips__payment--service {
    border: 1.5px solid #DDE3F1;
    margin: 20px 0 13px;
    width: calc(100% - 3px);
    height: calc(60px - 3px);
    background-size: 59px;
    background-color: $white;
    background-position: center;
    background-repeat: no-repeat;
  }

  &-tips__conditions {
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 0 auto;

    &-cb {
      position: relative;
      @include roundedRectangle(8px);
      min-width: 24px;
      width: 24px;
      height: 24px;
      margin: 0;
      background-color: $green-checkbox;

      &.active {
        background-color: $green;
      }
      &.active:after {
        border: 3px solid #fcfff4;
        border-top: none;
        border-right: none;
        background: transparent;
      }

      &:after {
        content: '';
        width: 9px;
        height: 5px;
        position: absolute;
        top: 6px;
        left: 6px;
        border: 3px solid rgba(252, 255, 244, 0.58);
        border-top: none;
        border-right: none;
        background: transparent;
        transform: rotate(-45deg);
      }
    }

    &-text {
      @include defineFont(500, 12px, 15px);
      color: $grey;
      max-width: 188px;
      margin-left: 14px;

      span {
        position: relative;
        &:after {
          content: '';
          position: absolute;
          width: 100%;
          height: 1px;
          background-color: $grey;
          bottom: 0;
          right: 0;
        }
      }
    }
  }

  &-tips__service {
    margin-top: 30px;
  }

  &-service__wrapper-options {
    margin: 24px 0 20px;
    background: rgba(239, 242, 249, 0.7);
    padding: 16px;
    border-radius: 10px;
  }

  &-service__option {
    position: relative;
    display: flex;
    align-items: center;
    padding: 8px 0;
    &:not(:last-child) {
      &:after {
        content: '';
        position: absolute;
        bottom: 0;
        right: 0;
        height: 1px;
        background: $grey-lighten;
        width: calc(100% - 40px);
      }
    }
  }

  &-service__text {
    display: block;
    margin-left: 16px;
    @include defineFont(600, 14px, 17px);
    color: $black;
    width: 100%;
    padding: 4px 0;
  }

  &-service__feedback {
    @include defineFont(500, 14px, 17px);
    @include roundedRectangle(10px);
    background: #F1F0FD;
    width: calc(100% - 34px);
    padding: 17px;
    text-align: left;
    justify-content: left;
    outline: none;
    border: none;
  }
}
</style>
