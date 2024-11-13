<template>
  <div class="content testimonials">
    <!-- title -->
    <div class="title">Testimonials</div>

    <!-- content -->
    <div class="row testimonials-items">
      <!-- client item -->
      <div class="col col-d-12 col-t-12 col-m-12 border-line-v">
        <div class="revs-carousel default-revs">
          <div class="owl-carousel">
            <Swiper
              :modules="[SwiperAutoplay, SwiperNavigation, SwiperPagination]"
              :slides-per-view="1"
              :loop="true"
              :autoplay="{
                delay: 8000,
              }"
              :pagination="{
                el: '.swiper-pagination-bullets',
                type: 'bullets',
                clickable: true,
              }"
            >
              <SwiperSlide class="item">
                <div class="revs-item">
                  <div class="text">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  </div>
                  <div class="user">
                    <div class="img">
                      <img src="/images/man1.jpg" alt="" />
                    </div>
                    <div class="info">
                      <div class="name">Helen Floyd</div>
                      <div class="company">Art Director</div>
                    </div>
                    <div class="clear"></div>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide class="item">
                <div class="revs-item">
                  <div class="text">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  </div>
                  <div class="user">
                    <div class="img">
                      <img src="/images/man1.jpg" alt="" />
                    </div>
                    <div class="info">
                      <div class="name">Robert Chase</div>
                      <div class="company">CEO</div>
                    </div>
                    <div class="clear"></div>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide class="item">
                <div class="revs-item">
                  <div class="text">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  </div>
                  <div class="user">
                    <div class="img">
                      <img src="/images/man1.jpg" alt="" />
                    </div>
                    <div class="info">
                      <div class="name">Helen Floyd</div>
                      <div class="company">Art Director</div>
                    </div>
                    <div class="clear"></div>
                  </div>
                </div>
              </SwiperSlide>
            </Swiper>

            <div class="swiper-pagination-bullets"></div>
          </div>
        </div>
      </div>

      <div class="clear"></div>
    </div>
  </div>
</template>

<style>
.swiper-pagination-bullet {
  background: none;
  opacity: 1 !important;
}
.owl-carousel {
  opacity: 1;
  display: block;
}
.owl-carousel .swiper-pagination-bullets {
  bottom: -25px;
}
</style>
