<script lang='tsx'>
import { defineComponent } from "@vue/runtime-core";
import { Layout } from "ant-design-vue";
import Header from './Header.vue'
import Content from './Content.vue'
import Footer from './Footer.vue'
import { toRaw } from "vue";

export default defineComponent({
  name: 'Layout',
  setup(_, ctx) {
    return () => (
      <Layout>
        <Header></Header>
        <Content v-slots={toRaw(ctx.slots)}></Content>
        <Footer></Footer>
      </Layout>
    )
  },
})
</script>
