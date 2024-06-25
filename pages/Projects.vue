<template>
  <div class="about page  animate__animated animate__fadeIn">
    <h2>Recent Project</h2>
    <b-spinner variant="primary" v-if="showLoader"></b-spinner>
    <div class="container" v-if="projects.length > 0">
      <div class="row" v-for="(project, index) in projects" :key="index">
        <div :class="`col-md-5`">
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
      projects: [],
      showLoader: true,
    };
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
  },
  mounted() {
    this.projects = [
      {
        title: "Mystic Horror",
        tag: "NextJs, Vercel",
        description:
          "Providing information about the khodam within yourself, including its origins, strengths, and a brief description of the khodam you possess.",
        image_cover: require("https://img.freepik.com/free-vector/esoteric-elements-concept_52683-39412.jpg?t=st=1719289072~exp=1719292672~hmac=959ddbb71724afb382a4baa9065d496ec588a86a580ce9d42aaf4d4720ce2efb&w=740"),
        github_url: "https://github.com/lutfir2019/khodam-checker",
        link: "https://khodam-checker-horror.vercel.app/"
      },
      {
        title: "The Movie",
        tag: "",
        description:
          "The Movie is a simple and clean website dedicated to showcasing movies. It boasts a minimalistic design with a focus on user experience.",
        image_cover: require("@/assets/movie2.png"),
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
    ];
    this.showLoader = false;
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
  mix-blend-mode: normal;
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
.blur {
  filter: blur(5px); /* Ubah nilai blur sesuai kebutuhan Anda */
}
.blur-componen {
  background-color: white;
  width: 100%;
  height: 70%;
  position: absolute;
  transform: translateX(-10px);
}
</style>
