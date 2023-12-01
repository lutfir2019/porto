<template>
  <div class="container animate__animated animate__fadeIn">
    <div class="row">
      <div class="col-md-6">
        <div class="about">
          <h1 class="line-after">About Me</h1>
          <h4 class="mt-4">Hey 👋</h4>
          <p>
            My name is Lutfir Rahman, I am a <b>front-end developer</b>.
            Currently studying Back-End Development and Web Server at
            <u>YouTube</u>.
          </p>
          <p>
            I have <b>{{ currYear - startYear }}+ years experience</b> in web
            development. Plus I am an agile learner, I learn new cool stuffs
            everyday.
          </p>
          <h4 class="mt-5">Tech Stacks</h4>
          <p>
            Below are some of the technologies I use for an extended period :
          </p>
          <div class="row mt-5 animate__animated animate__fadeInUp">
            <div class="col">
              <ul style="list-style-type: circle;">
                <li>HTML & CSS</li>
                <li>Node.js</li>
                <li>MySQL</li>
              </ul>
            </div>
            <div class="col">
              <ul style="list-style-type: circle;">
                <li>JavaScript</li>
                <li>Vue.js</li>
                <li>React.js</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div class="col-md-6">
        <img
          src="@/assets/working.png"
          alt="About Illustration"
          class="abt-img"
        />
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      startYear: 2023,
      currYear: new Date().getFullYear()
    };
  },
  head: {
    title: "About 🕵️‍♂️ - Lutfir Rahman",
    meta: [
      {
        hid: "description",
        name: "description",
        // currYear - startYear
        content: `Hey there 👋 My name is Lutfir Rahman, i am a front-end developer . i have many years of experience in crafting beautiful web. Plus i am an agile learner, i learn new cool stuffs everyday.`
      }
    ]
  }
};
</script>
<style scoped>
.container {
  margin-top: 140px;
  text-align: left;
}
.line-after {
  overflow: hidden;
}
.line-after::after {
  content: "";
  display: inline-block;
  height: 0.5em;
  vertical-align: bottom;
  width: 100%;
  margin-right: -100%;
  margin-left: 10px;
  border-top: 2px solid rgb(211, 46, 46);
}
.abt-img {
  width: inherit;
  height: inherit;
  border-radius: 5px;
}
/* .abt-img:hover {
  animation: swing;
  animation-duration: 2s;
} */
</style>
