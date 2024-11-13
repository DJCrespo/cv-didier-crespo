<template>
  <ActiveSection :section-name="'blog'">
    <div class="content blog">
      <!-- title -->
      <div class="title">Blog</div>

      <!-- content -->
      <div class="row border-line-v">
        <!-- blog item -->
        <div
          class="col col-d-12 col-t-12 col-m-12 border-line-h"
          v-for="blog in blogs"
        >
          <div class="box-item">
            <div class="image">
              <a href="#" @click="activeBlogPost(blog)">
                <img :src="blog.img" :alt="blog.title" />
                <span class="info">
                  <span class="ion ion-document-text"></span>
                </span>
                <span class="date"
                  ><strong>{{
                    blog.date.split(" ")[1].replace(",", "")
                  }}</strong
                  >{{ blog.date.split(" ")[0] }}</span
                >
              </a>
            </div>
            <div class="desc">
              <a href="#" class="name" @click="activeBlogPost(blog)">{{
                blog.title
              }}</a>
              <div class="category">{{ blog.category }}</div>
            </div>
          </div>
        </div>
        <div class="clear"></div>
      </div></div
  ></ActiveSection>
  <BlogDetailsClassic />
</template>

<script>
import { navFunction } from "../utils/navFunction";
import { blogs } from "../utils/data";
export default {
  data() {
    return {
      activeData: null,
    };
  },
  methods: {
    activeBlogPost(value) {
      console.log(value);
      navFunction.activeSection("blog-post");
      this.activeData = value;
    },
  },
};
</script>
