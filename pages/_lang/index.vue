<template>

  <div class="main">


    <div class="section" id="sec_1"
         v-bind:class="{ active: (activeSectionIndex==1),  upPosition:(activeSectionIndex>1)}" ref="sec_1">
      <div class="main-description-holder">


        <div class="background bg-cover " :style="{'background-image': `url(${imageLinkPrefix+introBackgroundUrl})`}">
        </div>
        <div class="main-description description">
          <h1 class="title">
            {{$store.state.intro.page_title[$store.state.locale]}}

          </h1>
          <div class="text">
            {{$store.state.intro.page_description[$store.state.locale]}}
          </div>
          <div class="seemore">
            <div class="seemore">
              <a href="" class="">
                see more
              </a>
              <span class="seemore-arrow" :style="{backgroundImage:`url(${seemore})`}">

                                </span>
              <span class="circle">

                                </span>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="section" v-bind:class="{ active: (activeSectionIndex==2),  upPosition:(activeSectionIndex>2) }"
         id="sec_2" ref="sec_2">
      <div class="rooms-background-holder">
        <h2 class="rooms-title section-title">
          {{$store.state.roomGeneral.page_title[$store.state.locale]}}
        </h2>
        <div class="rooms-background-dark">
        </div>
        <div class="rooms-info">
          <div class="rooms-slider-holder">

            <!--<carousel>
              <slide :key="'room_'+index" v-for="(image, index) in $store.state.roomGeneral.photos.map(x=>{
                x.url = this.imageLinkPrefix + x.image;
                return x;
              } )">
                <div


                     :style="{'background-image': `url(${image.url})`}"
                >{{index}}</div>
              </slide>

            </carousel>-->


            <my-carousel :images="$store.state.roomGeneral.photos.map(x=>{
                x.url = this.imageLinkPrefix + x.image;
                return x;
              } )" :navigationClasses="{navContainer:'custom-navigation rooms',
              'prev':'flex-prev',
               'next':'flex-next',
               navContainerIndexed: 'indexed-navigation',
               selectedIndex:'selected', notSelected:'not-selected'

                }">

            </my-carousel>


            <!--  <div class="custom-navigation rooms">
              <a href="#" class="flex-prev"></a>

              <a href="#" class="flex-next"></a>
            </div>-->
          </div>
          <div class="rooms-description-holder">
            <div class="rooms-description description">
              <div class="pretitle">
                {{$store.state.roomGeneral.page_title[$store.state.locale]}}
              </div>
              <h1 class="title">
                STAY WITH US
              </h1>
              <div class="text">
                {{$store.state.roomGeneral.page_description[$store.state.locale]}}
              </div>
              <div class="seemore">
                <a href="" class="">
                  see more
                </a>
                <span class="seemore-arrow" :style="{backgroundImage:`url(${seemore})`}">

                                </span>
                <span class="circle"></span>
              </div>

            </div>
          </div>

        </div>
      </div>
    </div>

    <div class="section" id="gastronomy"
         v-bind:class="{ active: (activeSectionIndex==3),  upPosition:(activeSectionIndex>3) }">
      <div class="gastronomy-background-holder">
        <h2 class="gastronomy-title section-title">
          gastronomy
        </h2>
        <div class="gastronomy-slider-holder">
          <div class="custom-navigation gastronomy">
            <a href="#" class="flex-prev"></a>

            <a href="#" class="flex-next"></a>
          </div>
          <div class="custom-controls-container">

          </div>

        </div>
        <div class="gastronomy-description-holder">
          <div class="gastronomy-description description">
            <div class="pretitle">
              we offer
            </div>
            <h1 class="title">
              {{$store.state.khasheria.title[$store.state.locale]}}
            </h1>
            <div class="text">
              {{$store.state.khasheria.description[$store.state.locale]}}
            </div>
            <!--  <a href="" class="seemore">
                      see more
                     <span style="background-image:url(./images/seemore.svg)"></span>
                 </a> -->

          </div>
        </div>
      </div>
    </div>


  </div>


  <!--  <div v-for="service in $store.state.services">
      {{service.title[$store.state.locale]}}
    </div>

    <div v-for="el in $store.state.gastronomies">
      {{el.title[$store.state.locale]}}
    </div>-->


</template>

<style lang="scss">
  .main {
    overflow: hidden;
    height: 100vh;
    position: relative;

  }


</style>

<script>

    import {mapState} from 'vuex';
    import MyCarousel from "~/components/MyCarousel.vue";
    // import { Carousel, Slide } from "~/plugins/vue_carousel.vue";


    export default {
        components: {
            MyCarousel,
            /*  Carousel,
              Slide*/
        },
        computed: mapState([
            'services', 'intro', 'roomGeneral', 'spa_gym', 'khasheria'
        ]),
        mounted() {
            //this.imageLinkPrefix = process.env.imageLinkPrefix;
            //this.introBackgroundUrl = process.env.imageLinkPrefix + this.introBackgroundUrl;
        },
        data() {
            return {
                introBackgroundUrl: this.$store.state.intro.image,
                seemore: require('~/assets/images/seemore.svg'),
                activeSectionIndex: 1,
                sectionCount: 3,
                slides: [
                    '<div class="example-slide">Slide 1</div>',
                    '<div class="example-slide">Slide 2</div>',
                    '<div class="example-slide">Slide 3</div>',
                ],
                wheelEventDateTime: null,
                imageLinkPrefix: process.env.imageLinkPrefix
            }
        },
        methods: {
            handleMousewheel(e) {
                console.log("wheel", this.activeSectionIndex);
                const self = this;

                setTimeout(function () {
                    if (self.wheelEventDateTime) {
                        let diff = Math.floor((new Date() - self.wheelEventDateTime) / 1000);
                        console.log("diff", diff);
                        if (diff < 3) {
                            return;
                        }
                    }

                    if (e.deltaY > 0) {
                        if (self.activeSectionIndex < self.sectionCount) {
                            self.activeSectionIndex++;
                        }

                    } else {
                        if (self.activeSectionIndex > 1) {
                            self.activeSectionIndex--;
                        }
                    }
                    self.wheelEventDateTime = new Date()
                }, 200);


            },
            handleKeyEvent(e) {
                if (e.keyCode == 40) {

                    if (this.activeSectionIndex < this.sectionCount) {
                        this.activeSectionIndex++;
                    }
                }

                if (e.keyCode == 38) {
                    if (this.activeSectionIndex > 1) {
                        this.activeSectionIndex--;

                    }
                }
            }
        },
        created() {
            if (process.browser) {
                window.addEventListener('mousewheel', this.handleMousewheel);
                window.addEventListener('keydown', this.handleKeyEvent);
            }
        },
        destroyed() {
            if (process.browser) {
                window.removeEventListener('mousewheel', this.handleMousewheel);
                window.removeEventListener('keydown', this.handleKeyEvent);
            }
        }


    }

</script>
