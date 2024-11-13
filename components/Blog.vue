<template>
  <ActiveSection :section-name="'blog'">
    <div class="content blog">
      <!-- title -->
      <div class="title">Blog</div>

      <!-- content -->
      <div class="row border-line-v">
        <!-- blog item -->
        <div class="col col-d-6 col-t-6 col-m-12" v-for="blog in blogs">
          <div class="box-item">
            <div class="image">
              <a href="#" @click="activeBlogPost(blog)">
                <img :src="blog.img" :alt="blog.title" />
                <span class="info">
                  <span class="ion ion-document-text"></span>
                </span>
              </a>
            </div>
            <div class="desc">
              <a href="#" @click="activeBlogPost(blog)">
                <span class="date">{{ blog.date }}</span>
              </a>
              <a href="#" @click="activeBlogPost(blog)" class="name">{{
                blog.title
              }}</a>
              <div class="text">
                <p>
                  Ex audire suavitate has, ei quodsi tacimates sapientem sed,
                  pri zril ubique ut. Te cule tation munere noluisse. Enim
                  torquatos&#8230;
                </p>
              </div>
            </div>
          </div>
        </div>
        <div class="clear"></div>
      </div>

      <div class="pager">
        <nav class="navigation pagination">
          <div class="nav-links">
            <span class="page-numbers current">1</span>
            <a class="page-numbers" href="#">2</a>
            <a class="next page-numbers" href="#">Next</a>
          </div>
        </nav>
      </div>
    </div></ActiveSection
  >
  <BlogDetails />
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
