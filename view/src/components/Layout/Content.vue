<script lang='tsx'>
import { defineComponent, toRaw } from "@vue/runtime-core";
import { Layout } from "ant-design-vue";
export default defineComponent({
  name: 'Content',
  setup(_, ctx) {
    return () => (
      <Layout.Content v-slots={toRaw(ctx.slots)}>
      </Layout.Content>
    )
  }
})
</script>
