<template>
  <ActiveSection :section-name="'works'">
    <div class="content works">
      <!-- title -->
      <div class="title">Recent Works</div>

      <!-- filters -->
      <div class="filter-menu filter-button-group">
        <div class="f_btn active">
          <label
            ><input type="radio" name="fl_radio" value="grid-item" />All</label
          >
        </div>
        <div class="f_btn">
          <label
            ><input type="radio" name="fl_radio" value="photo" />Image</label
          >
        </div>
        <div class="f_btn">
          <label
            ><input
              type="radio"
              name="fl_radio"
              value="gallery"
            />Gallery</label
          >
        </div>
        <div class="f_btn">
          <label
            ><input type="radio" name="fl_radio" value="video" />Video</label
          >
        </div>
        <div class="f_btn">
          <label
            ><input type="radio" name="fl_radio" value="music" />Music</label
          >
        </div>
        <div class="f_btn">
          <label
            ><input type="radio" name="fl_radio" value="design" />Content</label
          >
        </div>
      </div>

      <!-- content -->
      <div class="row grid-items border-line-v">
        <!-- work item photo -->
        <div class="col col-d-6 col-t-6 col-m-12 grid-item photo border-line-h">
          <div class="box-item">
            <div class="image">
              <a href="/images/lwork1.jpg" class="has-popup-image">
                <img src="/images/lwork1.jpg" alt="" />
                <span class="info">
                  <span class="ion ion-image"></span>
                </span>
              </a>
            </div>
            <div class="desc">
              <a href="/images/lwork1.jpg" class="name has-popup-image"
                >Privacy Law Firm</a
              >
              <div class="category">Image</div>
            </div>
          </div>
        </div>

        <!-- work item video -->
        <div class="col col-d-6 col-t-6 col-m-12 grid-item video border-line-h">
          <div class="box-item">
            <div class="image">
              <a href="https://vimeo.com/97102654" class="has-popup-video">
                <img src="/images/lwork2.jpg" alt="" />
                <span class="info">
                  <span class="ion ion-videocamera"></span>
                </span>
              </a>
            </div>
            <div class="desc">
              <a href="https://vimeo.com/97102654" class="name has-popup-video"
                >Tax-related court</a
              >
              <div class="category">Video</div>
            </div>
          </div>
        </div>

        <!-- work item music -->
        <div class="col col-d-6 col-t-6 col-m-12 grid-item music border-line-h">
          <div class="box-item">
            <div class="image">
              <a
                href="https://w.soundcloud.com/player/?visual=true&url=http%3A%2F%2Fapi.soundcloud.com%2Ftracks%2F221650664&show_artwork=true"
                class="has-popup-music"
              >
                <img src="/images/lwork3.jpg" alt="" />
                <span class="info">
                  <span class="ion ion-music-note"></span>
                </span>
              </a>
            </div>
            <div class="desc">
              <a href="#" class="name has-popup">Practical Law Finance</a>
              <div class="category">Music</div>
            </div>
          </div>
        </div>

        <!-- work item design -->
        <div
          class="col col-d-6 col-t-6 col-m-12 grid-item design border-line-h"
        >
          <div class="box-item">
            <div class="image">
              <a href="#popup-1" class="has-popup-media">
                <img src="/images/lwork4.jpg" alt="" />
                <span class="info">
                  <span class="ion ion-images"></span>
                </span>
              </a>
            </div>
            <div class="desc">
              <a href="#popup-1" class="name has-popup-media"
                >Banking and Finance</a
              >
              <div class="category">Content</div>
            </div>
            <div id="popup-1" class="popup-box mfp-fade mfp-hide">
              <div class="content">
                <div class="image">
                  <img src="/images/lwork4.jpg" alt="" />
                </div>
                <div class="desc">
                  <div class="post-box">
                    <h1>Banking and Finance</h1>
                    <div class="blog-detail">Design</div>
                    <div class="blog-content">
                      <p>
                        So striking at of to welcomed resolved. Northward by
                        described up household therefore attention. Excellence
                        decisively nay man yet impression for contrasted
                        remarkably.
                      </p>
                      <p>
                        Forfeited you engrossed but gay sometimes explained.
                        Another as studied it to evident. Merry sense given he
                        be arise. Conduct at an replied removal an amongst.
                        Remaining determine few her two cordially admitting old.
                      </p>
                      <blockquote>
                        Vestibulum ante ipsum primis in faucibus orci luctus et
                        ultrices posuere cubilia Curae; Pellentesque suscipit.
                      </blockquote>
                      <p>
                        Tiled say decay spoil now walls meant house. My mr
                        interest thoughts screened of outweigh removing. Evening
                        society musical besides inhabit ye my. Lose hill well up
                        will he over on. Increasing sufficient everything men
                        him admiration unpleasing sex.
                      </p>
                      <ul class="list-style">
                        <li>Greatest properly off ham exercise all.</li>
                        <li>Unsatiable invitation its possession nor off.</li>
                        <li>
                          All difficulty estimating unreserved increasing the
                          solicitude.
                        </li>
                      </ul>
                      <p>
                        Unpleasant astonished an diminution up partiality. Noisy
                        an their of meant. Death means up civil do an offer
                        wound of.
                      </p>
                    </div>
                    <a href="#" class="button">
                      <span class="text">View Project</span>
                      <span class="arrow"></span>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- work item photo -->
        <div
          class="col col-d-6 col-t-6 col-m-12 grid-item gallery border-line-h"
        >
          <div class="box-item">
            <div class="image">
              <a href="#gallery-1" class="has-popup-gallery">
                <img src="/images/lwork5.jpg" alt="" />
                <span class="info">
                  <span class="ion ion-images"></span>
                </span>
              </a>
              <div id="gallery-1" class="mfp-hide">
                <a href="/images/lwork6.jpg"></a>
                <a href="/images/lwork1.jpg"></a>
                <a href="/images/lork5.jpg"></a>
              </div>
            </div>
            <div class="desc">
              <a href="/images/lwork5.jpg" class="name has-popup-image"
                >List of Criminal Charges</a
              >
              <div class="category">Gallery</div>
            </div>
          </div>
        </div>

        <!-- work item music -->
        <div class="col col-d-6 col-t-6 col-m-12 grid-item music border-line-h">
          <div class="box-item">
            <div class="image">
              <a
                href="https://w.soundcloud.com/player/?visual=true&url=http%3A%2F%2Fapi.soundcloud.com%2Ftracks%2F221650664&show_artwork=true"
                class="has-popup-music"
              >
                <img src="/images/lwork6.jpg" alt="" />
                <span class="info">
                  <span class="ion ion-music-note"></span>
                </span>
              </a>
            </div>
            <div class="desc">
              <a href="#" class="name has-popup">Self Help Legal Forms</a>
              <div class="category">Music</div>
            </div>
          </div>
        </div>

        <div class="clear"></div>
      </div>
    </div>
  </ActiveSection>
</template>

<script setup>
useHead({
  script: [
    {
      hid: "stripe",
      src: "https://unpkg.com/isotope-layout@3/dist/isotope.pkgd.js",
      defer: true,
    },
  ],
});
</script>

<script>
export default {
  name: `Isotope`,
  mounted() {
    setTimeout(() => {
      // init Isotope
      var iso = new Isotope(".grid-items", {
        itemSelector: ".grid-item",
      });
      // bind filter button click
      var filtersElem = document.querySelector(".filter-button-group");
      filtersElem.addEventListener("click", function (event) {
        // console.log(event.target.closest(".f_btn"));
        if (event.target.value !== undefined) {
          var filterValue = event.target.getAttribute("value");
          iso.arrange({ filter: `.${filterValue}` });
        }
      });

      // change is-checked class on buttons
      var buttonGroups = document.querySelectorAll(".filter-menu");
      for (var i = 0, len = buttonGroups.length; i < len; i++) {
        var buttonGroup = buttonGroups[i];
        radioButtonGroup(buttonGroup);
      }

      function radioButtonGroup(buttonGroup) {
        buttonGroup.addEventListener("click", function (event) {
          if (!event.target.classList.contains("filter-menu")) {
            buttonGroup.querySelector(".active").classList.remove("active");
            event.target.closest(".f_btn").classList.add("active");
          }
        });
      }
    }, 2000);
  },
};
</script>
