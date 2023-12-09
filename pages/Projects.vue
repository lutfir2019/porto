<template>
  <div class="about page  animate__animated animate__fadeIn">
    <h2>Recent Project</h2>
    <div class="container">
      <div class="row" v-for="(project, index) in projects" :key="index">
        <div class="col-md-5">
          <img
            :src="project.image_cover"
            :alt="project.title"
            class="project-cover"
          />
        </div>
        <div class="col-md-5">
          <h2 class="mt-3" style="text-align: left;">
            {{ project.title }}
            <hr class="dope" />
          </h2>
          <b-card class="mt-3 mb-3 text-left text-dark">
            <p>{{ project.description }}</p>
            <b-link :href="project.link"
              >Check it out! <LinkIcon style="color: #000;"
            /></b-link>
            <hr />
            <b-link :href="project.github_url"
              >View source code <GithubIcon style="color: #000;"
            /></b-link>
          </b-card>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import LinkIcon from "vue-ionicons/dist/md-link.vue";
import GithubIcon from "vue-ionicons/dist/logo-github.vue";

export default {
  components: {
    GithubIcon,
    LinkIcon
  },
  data() {
    return {
      projects: [
        {
          title: "The Movie",
          tag: "",
          description:
            "The Movie is a simple and clean website dedicated to showcasing movies. It boasts a minimalistic design with a focus on user experience.",
          image_cover: require("@/assets/movie2.jpg"),
          github_url: "https://github.com/lutfir2019/the-movie",
          link: "https://the-movie-red.vercel.app/"
        },
        {
          title: "MeMo",
          tag: "JavaScript, NextJs, Vercel",
          description:
            "MeMo is a personal memory assistant that helps users to remember and recall information.",
          image_cover: require("@/assets/reminder2.jpg"),
          github_url: "https://github.com/lutfir2019/MeMo",
          link: "https://me-mo.vercel.app/"
        }
      ]
    };
  },
  methods: {
    isEven(n) {
      if (n % 2 == 0) {
        return true;
      } else {
        return false;
      }
    }
  },
  head: {
    title: "Recent Projects 💻 - Lutfir Rahman",
    meta: [
      {
        hid: "description",
        name: "description",
        content:
          "View all the recents open-sourced projects built with ♥ by Lutfir Rahman, open-sourced means this project source code are publicly available for everyone to use or modify."
      },
      {
        hid: "og:title",
        name: "og:title",
        content: "Recent Projects 💻 - Lutfir Rahman"
      },
      {
        property: "og:description",
        content:
          "View all the recents open-sourced projects built with ♥ by Lutfir Rahman, open-sourced means this project source code are publicly available for everyone to use or modify."
      },
      {
        hid: "og:image",
        name: "og:image",
        content: require("@/assets/man-computer.png")
      }
    ]
  }
};
</script>
<style scoped>
.row {
  margin-top: 70px;
}
.project-cover {
  width: inherit;
  border-radius: 3px;
  mix-blend-mode: multiply;
}
hr.dope {
  border: 0;
  width: 90px;
  border-top: 2px solid #dc3545;
  text-align: left;
  margin: initial;
  margin-top: 7px;
  margin-left: 5px;
}
</style>
