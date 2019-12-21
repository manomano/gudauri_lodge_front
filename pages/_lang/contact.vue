<template>


  <div id="contactus">
    <div class="inputs-background-holder">
      <div class="violet-backgorund">


      </div>
      <h2 class="contactus section-title">
        contact
      </h2>
      <div class="inputs-section">
        <div class="contactus-description description">
          <div class="pretitle">
            contact us
          </div>
          <h1 class="title">
            get in touch
          </h1>
        </div>
        <div class="inputs">
          <form action="">
            <div class="input-holder">
              <input type="text" name="name" id="name" v-model="contact_name" :placeholder="$t('contact.p_name')">
              <div class="input-error email">
                                <span>
                                !
                                </span>
                <span>

                                            incorrect format
                                </span>
              </div>
            </div>
            <div class="input-holder">
              <input type="text" name="surname" id="surname" v-model="contact_surname"
                     :placeholder="$t('contact.p_surname')">
              <div class="input-error email">
                                <span>
                                !
                                </span>
                <span>

                                            incorrect format
                                </span>
              </div>
            </div>
            <div class="input-holder">
              <input type="email" name="email" id="email" v-model="contact_email" :placeholder="$t('contact.p_email')">
              <div class="input-error on">
                                <span>
                                !
                                </span>
                <span>

                                            incorrect format
                                </span>
              </div>
            </div>
            <div class="input-holder">
              <input type="text" name="phone" id="phone" v-model="contact_phone" :placeholder="$t('contact.p_phone')">
              <div class="input-error ">
                                <span>
                                !
                                </span>
                <span>

                                            incorrect format
                                </span>
              </div>
            </div>
            <div class="input-holder">
              <input type="text" name="textarea" id="textarea" v-model="contact_text"
                     :placeholder="$t('contact.p_text')">
              <div class="input-error ">
                                <span>
                                !
                                </span>
                <span>

                                            incorrect format
                                </span>
              </div>
            </div>
            <a class="seemore">

                                <span class="btn-text" v-on:click.prevent="onsubmit">
                                     {{$t('contact.p_submit_text')}}
                                </span>
              <span class="seemore-arrow" :style="{backgroundImage:`url(${seemore})`}">

                                </span>
              <span class="circle">

                                </span>
            </a>

          </form>
        </div>
      </div>
      <div class="map-section" id="map">

      </div>
      <a href="   " class="booking">
                <span>
                    book
                </span>
        <span>
                    now
                </span>
      </a>

    </div>
    <div class="main-info-background-holder">
      <!-- <div class="main-info-holder"> -->

      <div class="contactus-description description">
        <div class="pretitle">
          contact us
        </div>
        <h1 class="title">
          get in touch
        </h1>
      </div>
      <div class="additional-info-holder">
        <div class="info">
          <h3>location</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. In quam sapien </p>

        </div>
        <div class="info">
          <h3>CONTACT</h3>
          <a href="">
            +555 55 44 88 99
          </a>

        </div>
        <div class="info">
          <h3>FOLLOW us</h3>
          <a href="">
            instagram
          </a>
          <a href="">
            facebook
          </a>

        </div>
      </div>
      <!-- </div> -->
    </div>


    <div class="footer">
      <div class="social-networks">
        <a href="">
          instagram
        </a>
        <a href="">
          facebook
        </a>
        <a href="">
          twitter
        </a>
      </div>
      <div class="privacy-and-terms">
        <a href="">
                                <span>
                                    privacy
                                </span>
          <span>
                                    policy
                                </span>
        </a>
        <a href="">
          terms and conditions
        </a>

      </div>
    </div>
  </div>


  <!--////////////////////-->
  <!--<div class="row main">
    <div class="row-cols-6 left"></div>
    <div class=" right">

      <form style="max-height:100%">


        <div class="form-group">

          <input type="text" v-model="contact_name" class="form-control" id="contact_name" required
                 aria-describedby="emailHelp"
                 :placeholder="$t('contact.p_name')">

        </div>

        <div class="form-group">

          <input type="text" class="form-control" id="contact_surname" v-model="contact_surname" required
                 aria-describedby="emailHelp"
                 :placeholder="$t('contact.p_surname')">

        </div>

        <div class="form-group">

          <input type="email" class="form-control" id="contact_email" v-model="contact_email" required
                 aria-describedby="emailHelp"
                 :placeholder="$t('contact.p_email')">

        </div>
        <div class="form-group">

          <input type="text" class="form-control" id="contact_phone" v-model="contact_phone" required
                 :placeholder="$t('contact.p_phone')">
        </div>

        <div class="form-group">

          <textarea class="form-control" :placeholder="$t('contact.p_text')" v-model="contact_text" required></textarea>
        </div>


        &lt;!&ndash;<div id="submit_div">&ndash;&gt;
        <button type="submit" class="btn btn-primary submit" v-on:click.prevent="onsubmit">
          {{$t('contact.p_submit_text')}}
        </button>
        &lt;!&ndash;</div>&ndash;&gt;
      </form>


    </div>
  </div>-->
</template>

<script>
    export default {
        name: "contact",
        data() {
            return {
                contact_name: "",
                contact_surname: "",
                contact_email: "",
                contact_phone: "",
                contact_text: "",
                errors: [],
                seemore: require('~/assets/images/seemore.svg'),
            }
        },
        methods: {
            onsubmit() {
                console.log("submit")
            }
        },
        head() {
            return {
                title: this.$t('contact.title')

            }
        }
    }
</script>

<style lang="scss" scoped>


  #contactus {
    display: block;
    height: auto;
    position: relative;
    z-index: 0;
    padding-bottom: 6.875rem;

    .inputs-background-holder {
      position: relative;
      padding: 5.875rem 6.9% 5.6875rem 5.4%;
      background: $beige;
      @include between;
      // &:after{
      // 	content:'';
      // 	position: absolute;
      // 	bottom:0px;
      // 	left:0px;
      // 	width:100%;
      // 	height:5.6875rem;
      // }
      .violet-backgorund {
        position: absolute;
        @include parentwidth;
        height: calc(100% - 5.6875rem);
        background: $violet;
        left: 0px;
        top: 0px;
        overflow: hidden;

        &:after {
          content: '';
          position: absolute;
          width: 25.83%;
          padding-top: 150%;
          left: 0%;
          top: -4%;
          transform: rotate(deg);
          @include bg-contain;
          //background: url('../images/contactus.svg');
          //background: url('/assets/images/contactus.svg');
          background: url('../../assets/images/contactus.svg');
        }

      }

      .inputs-section {
        width: 33%;
        z-index: 1;
        margin-bottom: 3.5rem;

        .seemore {

          @include seemore;
          margin-top: 1.5rem;

          .btn-text {
            width: 61px;
          }

          .circle {
            left: 88px;
          }
        }

        .contactus-description {
          @include description;
          // margin-bottom:2.6875rem;
          .title {
            margin-bottom: 2.6875rem;
          }
        }

        ::-webkit-input-placeholder { /*!* Chrome/Opera/Safari *!*/
          font-family: $playreg;

          color: $white;
          font-size: 0.825rem;
          opacity: 0.7;
          text-transform: capitalize;

        }

        ::-moz-placeholder { /*!* Firefox 19+ *!*/
          font-family: $playreg;

          color: $white;
          font-size: 0.825rem;
          opacity: 0.7;
          text-transform: capitalize;

        }

        :-ms-input-placeholder { /*!* IE 10+ *!*/
          font-family: $playreg;

          color: $white;
          font-size: 0.825rem;
          opacity: 0.7;
          text-transform: capitalize;

        }

        :-moz-placeholder { /*!* Firefox 18- *!*/
          font-family: $playreg;

          color: $white;
          font-size: 0.825rem;
          opacity: 0.7;
          text-transform: capitalize;
        }

        .input-holder {
          @include column;
          width: 100%;
          margin-bottom: 2rem;

          &:nth-child(5) {
            margin-bottom: 3.5rem;
          }

          input[type],
          textarea {
            padding: 5px 5px 0.825rem 0px;
            box-shadow: 0;
            border: transparent;
            background: transparent;
            border-bottom: 1px solid rgba(255, 255, 255, 0.7);
            width: 100%;
            line-height: 1;
            letter-spacing: 1px;
            resize: none;
            font-family: $playreg;

            color: $white;
            font-size: 0.825rem;
            opacity: 0.7;

          }

          textarea {
            height: 16.5625rem;
            border: none !important;
            margin-bottom: 3.5em;


          }

          .input-error {
            position: relative;
            @include flex;
            font-size: 12px;
            color: white;
            padding-top: 5px;
            opacity: 0;
            -webkit-transition: all 300ms ease-out;
            -moz-transition: all 300ms ease-out;
            -ms-transition: all 300ms ease-out;
            -o-transition: all 300ms ease-out;
            transition: all 300ms ease-out;

            &.on {
              opacity: 1;
            }

            span {
              letter-spacing: 0.5px;
              font-family: $robotoreg;
              color: rgba(255, 255, 255, 0.7);

              &:first-child {
                margin-right: 10px;
              }
            }

          }

        }


      }

      .map-section {
        position: absolute;
        width: 47.34%;
        height: 82%;
        z-index: 1;
        bottom: 0px;
        right: 6.9%;
        border: 1px solid red;

      }

      .booking {
        position: absolute;
        right: 0px;
        bottom: 0px;
        z-index: 1;
      }

      .contactus.section-title {
        position: absolute;
        @include golden;
        z-index: 2;
        right: 19%;
        top: 10%;
        font-size: 6.875rem;
      }

    }

    .main-info-background-holder {
      background: $beige;
      width: 100%;
      padding: 5.875rem 6.9% 5.6875rem 5.4%;
      @include between;

      .contactus-description {
        @include description;
        margin-bottom: 0px;

        .pretitle, .title {
          color: $violet;
        }

        .pretitle {
          &:before {
            background: $violet;
          }
        }
      }

      .additional-info-holder {
        // @include flex-vhcenter;
        @include between;
        width: 47.34%;
        position: absolute;
        right: 6.9%;

        .info {
          min-width: 16.5%;
          @include column;

          h3 {
            font-family: $playbold;
            font-size: $seemore;
            text-transform: uppercase;
            color: $violet;
            margin-bottom: 1.5rem;
          }

          p, a {
            text-decoration: none;
            text-transform: capitalize;
            color: $violet;
            font-size: $smallXS;
            margin-bottom: 14px;
            font-family: $playreg;
            opacity: 0.7;
            letter-spacing: 0.03rem;
          }

          p {
            margin-bottom: 0px;
            line-height: 140%;
          }

          &:nth-child(1) {
            width: 32.44%;
          }

          &:nth-child(2) {
            a {
              font-family: $robotoreg;
            }
          }

          &:nth-child(3) {
            a {
              font-weight: bold;
            }
          }
        }
      }


    }
  }


</style>
