const Item = Vue.component("Item", {
  props: ["base", "exp"],
  template: "<li>{{base}}<sup>{{exp}}</sup> = {{base**exp}}</li>",
});

new Vue({
  el: "#vue-app",
  data: {
    exps: 2,
    arr: [],
  },

  methods: {
    change: function () {
      this.exps = this.$refs.input.value;
      this.arr = Array.from({ length: this.exps }, (v, i) => 10 + i);
    },

    inc: function () {
      this.exps++;
      this.arr = Array.from({ length: this.exps }, (v, i) => 10 + i);
    },
  },

  components: {
    Item: Item,
  },

  created: function () {
    this.arr = Array.from({ length: this.exps }, (v, i) => 10 + i);
  },
});
