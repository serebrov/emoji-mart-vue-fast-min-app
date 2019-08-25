<template>
  <div>
    <div class="row">
      <h1>Emoji Mart Vue Fast Minimal Demo App 🏬</h1>
    </div>
    <div class="row">
      <emoji :data="index" emoji=":santa::skin-tone-3:" :size="32" />
      <emoji :data="index" emoji="santa" set="messenger" :size="32" />
      <emoji :data="index" :emoji="santaEmojiObject" :size="32" />
    </div>

    <div class="row">
      <picker
        :data="index"
        :set="messenger"
        :native="native"
        :custom="custom"
        :emoji="emoji"
        :emojiTooltip="true"
        :title="title"
      />
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
import data from "emoji-mart-vue-fast/data/messenger.json";
import { Picker, Emoji, EmojiIndex } from "emoji-mart-vue-fast";
import "emoji-mart-vue-fast/css/emoji-mart.css";

let index = new EmojiIndex(data);

export default {
  data() {
    return {
      index: index,
      activeSet: "native",
      emoji: "point_up",
      title: "Pick your emoji…"
    };
  },
  computed: {
    native() {
      return this.activeSet == "native";
    },
    santaEmojiObject() {
      return index.findEmoji(":santa:");
    }
  },
  methods: {
    toggleVisible() {
      this.isVisible = !this.isVisible;
    }
  },
  components: {
    Picker,
    Emoji
  }
};
</script>

<style scoped>
button + button {
  margin-left: 0.5em;
}
button {
  padding: 0.4em 0.6em;
  border-radius: 5px;
  border: 1px solid rgba(0, 0, 0, 0.1);
  background: #fff;
  outline: 0;
  cursor: pointer;
}

button[disabled] {
  border-color: #ae65c5;
  cursor: default;
}

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
