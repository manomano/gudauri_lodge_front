<template>
  <div class="carousel_container">

    <div v-if="images.length===1" class="active" :style="{'background-image': `url(${images[0].url})`}"></div>


    <div v-if="images.length==2" :class="[a_class, {active: (initial===true)}]"
         :style="{'background-image': `url(${images[0].url})`}"></div>
    <div v-if="images.length==2" :class="[b_class]" :style="{'background-image': `url(${images[1].url})`}"></div>


    <div v-if="images.length>2"
         v-for="(image, index) in images"
         :class="{ active: (index===activeElementIndex),
      left:(index===prevIndex),
      right:(index===nextIndex),
      inactive:([nextIndex, prevIndex, activeElementIndex].indexOf(index)<0)  }"
         :key="index"
         :style="{'background-image': `url(${image.url})`}"
    >{{index}}
    </div>


    <div v-if="images.length>1" :class="[navigationClasses.navContainer]">
      <div v-on:click="prev" :class="[navigationClasses.prev]"></div>
      <div v-on:click="next" :class="[navigationClasses.next]"></div>
    </div>

    <div :class="[navigationClasses.navContainerIndexed]">
      <div v-on:click="getPhoto(index)"
           :class="[(index===activeElementIndex)?navigationClasses.selectedIndex:navigationClasses.notSelected]"
           v-for="(image, index) in images">
        0{{index+1}}

      </div>
    </div>


  </div>
</template>


<script>
    export default {
        props: {
            images: {
                type: Array,
                required: true
            },
            navigationClasses: {
                type: Object,
                required: true,
                default() {
                    return {
                        navContainer: '',
                        navContainerIndexed: 'indexed-navigation',
                        prev: '',
                        next: '',
                        selectedIndex: 'selected',
                        notSelected: 'not-selected'
                    }
                }
            }
        },
        data() {
            return {
                activeElementIndex: 0,
                prevIndex: 2,
                nextIndex: 1,
                initial: true,
                a_class: '',
                b_class: 'inactive'
            };
        },
        mounted() {
            this.prevIndex = this.images.length - 1;

        },
        methods: {
            next() {

                const self = this;

                //setTimeout(nextClassChange, 800)
                function nextClassChange() {
                    let maxIndex = self.images.length - 1;

                    if (maxIndex === 1) {
                        self.activeElementIndex = 1 - self.activeElementIndex;

                        if (self.activeElementIndex == 1) {
                            self.b_class = 'from_right'
                            self.a_class = 'left'
                        } else {

                            self.a_class = 'from_right'
                            self.b_class = 'left'
                        }

                        self.initial = false;

                        return;
                    }

                    if (self.activeElementIndex < maxIndex) {
                        self.activeElementIndex++;
                    } else {
                        self.activeElementIndex = 0;
                    }

                    self.nextIndex =
                        self.activeElementIndex === maxIndex ? 0 : self.activeElementIndex + 1;
                    self.prevIndex =
                        self.activeElementIndex === 0 ? maxIndex : self.activeElementIndex - 1;
                }

                nextClassChange();

            },
            prev() {
                let maxIndex = this.images.length - 1;

                if (maxIndex === 1) {
                    this.activeElementIndex = 1 - this.activeElementIndex;
                    if (this.activeElementIndex == 1) {
                        this.b_class = 'from_left'
                        this.a_class = 'right'
                    } else {
                        this.a_class = 'from_left'
                        this.b_class = 'right'
                    }
                    this.initial = false;
                    return;
                }


                if (this.activeElementIndex > 0) {
                    this.activeElementIndex--;
                } else {
                    this.activeElementIndex = this.images.length - 1;
                }

                this.nextIndex =
                    this.activeElementIndex === maxIndex ? 0 : this.activeElementIndex + 1;
                this.prevIndex =
                    this.activeElementIndex === 0 ? maxIndex : this.activeElementIndex - 1;
            },
            async getPhoto(index) {


                let maxIndex = this.images.length - 1;

                function prom(f) {
                    return new Promise(resolve => setTimeout(f(), 100))
                }

                while (this.activeElementIndex !== index) {
                    if (index < this.activeElementIndex) {
                        await prom(this.prev);
                    } else {
                        await prom(this.next);
                    }
                }

            }
        }
    };
</script>

<style scoped>
  .carousel_container {
    border: 0px solid green;
    background: black;
    width: 100%;
    height: 100%;
    overflow: hidden;
    position: relative;
  }

  .carousel_container div {
    background-repeat: no-repeat;
    background-position: center;
    background-size: cover;

  }

  .left {
    position: absolute;
    top: 0;
    left: -100%;
    width: inherit;
    height: inherit;
    transition: all 0.8s;
  }

  .right {
    position: absolute;
    top: 0;
    left: 100%;
    width: inherit;
    height: inherit;
    transition: all 0.8s;
  }

  .active {
    position: absolute;
    left: 0;
    top: 0;
    transition: all 0.8s;
    z-index: 5;
    width: inherit;
    height: inherit;
  }

  .inactive {
    display: none;
  }

  .arrow_left {
    position: absolute;
    left: 100px;
    top: 100px;
    z-index: 10;
    color: white;
    cursor: pointer;
    border: 1px solid white;
    width: 200px;
  }

  .arrow_right {
    position: absolute;
    left: 300px;
    top: 100px;
    z-index: 10;
    color: white;
    cursor: pointer;
    border: 1px solid white;
    width: 200px;
  }


  .from_right {
    position: absolute;
    top: 0;
    left: 0;
    width: inherit;
    height: inherit;
    animation-duration: 0.8s;
    animation-name: slideFromRight;
  }

  @keyframes slideFromRight {
    from {
      left: 100%;
    }

    to {
      left: 0;
    }
  }


  .from_left {
    position: absolute;
    top: 0;
    left: 0;
    width: inherit;
    height: inherit;
    animation-duration: 0.8s;
    animation-name: slideFromLeft;
  }

  @keyframes slideFromLeft {
    from {
      left: -100%;
    }

    to {
      left: 0;
    }
  }


  .indexed-navigation {
    position: absolute;
    top: 62%;
    left: 5%;
    z-index: 6;
    width: 20%;
    height: 100%;
    color: white;
    font-size: 30px;
  }

  .not-selected {
    color: white;
    margin: 5%;
    z-index: 7;
    height: 50px;
    width: 50px;
    cursor: pointer;
    margin: 5px;
    border: 1px solid lawngreen;

  }

  .not-selected:hover {
    font-size: 35px;
    font-weight: bold;
    transition: all 1s;
  }

  .selected {
    color: white;
    margin: 5%;
    z-index: 7;
    height: 50px;
    width: 50px;
    cursor: pointer;
    margin: 5px;
    border: 1px solid lawngreen;
    font-size: 35px;
    font-weight: bold;
  }


</style>
