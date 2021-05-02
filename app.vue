<template>
  <div>
    <div class="row">
      <h1>Emoji Mart Vue Fast Minimal Demo App 🏬</h1>
    </div>

    <div class="row">
      <picker :data="index" set="google" :native="false" />
    </div>

    <div class="row-small">
      <iframe
        src="https://ghbtns.com/github-btn.html?user=serebrov&repo=emoji-mart-vue&type=star&count=true"
        frameBorder="0"
        scrolling="0"
        width="90px"
        height="20px"
      ></iframe>
    </div>
  </div>
</template>

<script>
import data from "emoji-mart-vue-fast/data/google.json";
import { Picker, EmojiIndex } from "emoji-mart-vue-fast";
import "emoji-mart-vue-fast/css/emoji-mart.css";

let index = new EmojiIndex(data);

export default {
  data() {
    return {
      index: index
    };
  },
  components: {
    Picker
  }
};
</script>

<style scoped>
h1 {
  font-family: Courier;
}

.row + .row {
  margin-top: 2em;
}

.row-small {
  margin-top: 1em;
}

.emoji-mart {
  margin: 0 auto;
  text-align: left;
}

.emoji-mart-title-label {
  font-size: 21px;
}
</style>
