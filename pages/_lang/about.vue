<template>
  <div>
    <div id="aboutus">
      <div class="aboutus-background-holder">
        <h2 class="aboutus-title section-title">
          about us
        </h2>

        <div class="aboutus-info">


          <div class="aboutus-main-image"
               :style="{'background-image': `url(${imageLinkPrefix+about.image})`}">

          </div>
          <div class="aboutus-description-holder">
            <div class="aboutus-description description">
              <div class="pretitle">
                WHO WE ARE
              </div>
              <h1 class="title">
                ABOUT US
              </h1>
              <div class="text subhead">
                <!--{{$store.state.about.page_description}}-->
                orem ipsum dolor sit amet, consectetur adipiscing elit. In quam sapien elit lectus eu iaculis dolor.
                Praesent senectus Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an
                unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not
                only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It
                was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages,
              </div>

            </div>
          </div>

        </div>
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
</template>

<style lang="scss">
  @import 'variables';

  #aboutus {
    width: 100%;
    height: calc(100% - 14.375rem);
    top: 7.5rem;
    overflow: hidden;
    position: absolute;

    .booking {
      position: absolute;
    }

    .custom-navigation.rooms {
      @include align-hcenter;
      right: auto;
      bottom: 2.125rem;
    }

    .aboutus-background-holder {
      background: $beige;
      @include parentwidth;
      position: relative;

      &:after {
        content: '';
        position: absolute;
        position: absolute;
        height: 120%;
        width: 44%;
        right: -0.31%;
        top: -10.04%;
        @include bg-contain;
        /*background: url('../images/aboutus.svg');*/
        -webkit-transform: rotate(15deg);
        -ms-transform: rotate(15deg);
        transform: rotate(1deg);

      }

      .aboutus-title {
        @include golden;
        writing-mode: vertical-rl;
        text-orientation: mixed;
        position: absolute;
        z-index: 1;
        color: rgba(156, 142, 104, 0.8);
        text-transform: uppercase;

        font-size: 5.8475rem;
        bottom: 7.6%;
        left: 3.8%;
        z-index: 4;
        -webkit-transform: rotate(180deg);
        -ms-transform: rotate(180deg);
        transform: rotate(180deg);

      }

      .aboutus-info {
        position: absolute;
        @include flex;
        @include align-vcenter;
        align-items: center;
        right: 6.9%;
        width: 85.83%;
        height: 88%;
        z-index: 3;

        .aboutus-main-image {
          @include bg-cover;
          /* background-image:url('../images/khasheria_slide_1.png');*/
          width: 55%;
          height: 100%;
          position: relative;
        }

        .aboutus-description-holder {
          height: 79%;
          width: 45%;
          margin-top: 0;
          background: $violet;
          @include flex-vhcenter;
          // @include align-vcenter;
          .aboutus-description {
            @include description;
            width: 62%;

            .title {
              font-size: 3.75rem;
            }

            .text {
              line-height: 190%;
            }
          }
        }

      }
    }
  }


</style>
<script>

    import {mapGetters, mapActions, mapState} from 'vuex'

    export default {
        computed: {
            ...mapGetters({
                about: 'about/getAbout'
            })
        },
        mounted() {
            this.fetchContent();
        },
        methods: {
            ...mapActions({fetchContent: 'about/fetchContent'})
        },
        data() {
            return {
                imageLinkPrefix: process.env.imageLinkPrefix
            }
        }

    }

</script>
