<template>
  <div class="container">
    <div class="employee">
      <picture class="employee__img-wrapper" ref="employeeImgWrap">
<!--        <source class="employee__img" srcset="~/static/profile/img/ashot.webp" type="image/webp">-->
<!--        <source class="employee__img" srcset="~/static/profile/img/ashot.jpg" type="image/jpeg">-->
        <img class="employee__img" ref="employeeImg" src="~/static/profile/img/ashot.jpg" alt="Ашотик">
      </picture>
      <div class="employee-info">
        <span class="employee-text">
          <b class="employee-name">Philip</b>
          <span class="employee-work">was your waiter</span>
        </span>
      </div>
      <span class="employee-info--substrate"></span>
    </div>

    <form @submit.prevent="submitHandler" ref="form">
      <h1>hello</h1>
      <input type="submit" value="алоо">
    </form>

    <div class="rating-stars">
      <font-awesome-icon class="star" :icon="['fas', 'star']" />
    </div>
  </div>
</template>

<script>
export default {
  name: 'IndexGuest',
  layout: 'GuestLayout',
  mounted () {
    this.changeEmployeeImg()
  },
  methods: {
    changeEmployeeImg () {
      const employeeImgWrap = this.$refs.employeeImgWrap
      const imgEmployee = this.$refs.employeeImg

      employeeImgWrap.style.height = employeeImgWrap.getBoundingClientRect().width * 1.211 + 'px'
      imgEmployee.style.height = employeeImgWrap.getBoundingClientRect().height * 0.95 + 'px'
      imgEmployee.style.width = employeeImgWrap.getBoundingClientRect().width * 0.95 + 'px'
    },
    submitHandler () {
      console.log('На этом этапе сохарняем данные!')
    }
  }
}
</script>

<style lang="scss">
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

.employee {
  position: relative;
  z-index: 3;

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

    padding-left: 25px;
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
    filter: blur(35px);
    border-radius: 52px;
    transform: rotate(-4deg);
  }

  &-text {
    color: $white;
    transform: rotate(5deg);
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
</style>
