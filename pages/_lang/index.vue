<template>

  <div class="main">


    <div class="section" id="sec_1" v-bind:class="{ active: (activeSectionIndex==1) }" ref="sec_1">
      <div class="main-description-holder">


        <div class="background bg-cover " :style="{'background-image': `url(${introBackgroundUrl})`}">
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

    <div class="section" v-bind:class="{ active: (activeSectionIndex==2) }" id="sec_2" ref="sec_2">
      <div class="rooms-background-holder">
        <h2 class="rooms-title section-title">
          {{$store.state.roomGeneral.page_title[$store.state.locale]}}
        </h2>
        <div class="rooms-background-dark">
        </div>
        <div class="rooms-info">
          <div class="rooms-slider-holder">
            slider
            <div class="custom-navigation rooms">
              <a href="#" class="flex-prev"></a>

              <a href="#" class="flex-next"></a>
            </div>
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

    import {mapState} from 'vuex'
    //    import {Argv as process} from "@jest/types/build/Config";


    export default {
        computed: mapState([
            'services', 'gastronomies', 'intro', 'imageLinkPrefix', 'roomGeneral'
        ]),
        data() {
            return {
                introBackgroundUrl: this.$store.state.imageLinkPrefix + this.$store.state.intro.image,
                seemore: require('~/assets/images/seemore.svg'),
                activeSectionIndex: 1,
                sectionCount: 2
            }
        },
        methods: {
            handleMousewheel(e) {

                if (e.deltaY > 0) {
                    if (this.activeSectionIndex < this.sectionCount) {
                        this.activeSectionIndex++;
                    }

                } else {
                    if (this.activeSectionIndex > 1) {
                        this.activeSectionIndex--;
                    }
                }


                /*for (let e in this.$refs) {
                    //console.log(e)
                    //console.log(this.$refs[e])
                    /!*if(this.$refs[e].classList.indexOf('active')){
                        console.log(this.$refs[e]);
                    }*!/

                }*/
            }
        },
        created() {
            if (process.browser) {
                window.addEventListener('mousewheel', this.handleMousewheel);
            }
        },
        destroyed() {
            if (process.browser) {
                window.removeEventListener('scroll', this.handleScroll);
            }
        }





    }

</script>
