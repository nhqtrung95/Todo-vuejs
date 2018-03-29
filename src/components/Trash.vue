<template>
    <div class="trash" v-dropzone>
        <i class="fas fa-trash"></i>
    </div>
</template>

<script>
export default {
  name: 'TodoTrash',
  methods: {
      onDrop: function(item) {
          this.$emit('dropOn', item)
      }
  },
  directives: {
      dropzone: {
          bind: function(el, binding, vnode) {
            el.ondragover = function (event) {
                event.preventDefault()
            }
            el.ondrop = function (event) {
                let item = JSON.parse(event.dataTransfer.getData('item'));
                vnode.context.onDrop(item);
            }
          }
      }
  }
}
</script>

<style scoped>
    .trash{
        position: fixed;
        width: 50px;
        height: 50px;
        border-top-left-radius: 100%;
        right: 0;
        bottom: 0;
        background: rgba(0, 0, 0, 0.3);
        color: white;
        text-align: right;
        padding: 22px 25px;
    }
</style>
