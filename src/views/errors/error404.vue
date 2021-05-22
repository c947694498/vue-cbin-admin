<script lang="tsx">
import { defineComponent } from "@vue/runtime-core";
import { Result, Button } from "ant-design-vue";
import { router } from "/@/route";
export default defineComponent({
  name: "Error404",
  setup() {
    /**
     * 返回主页
     */
    const onClickBackHome = () => {
      router.replace("Home");
    };

    return () => (
      <Result
        status="404"
        title="404"
        subTitle="找不到此页面"
        v-slots={{
          extra: (
            <Button type="primary" onClick={onClickBackHome}>
              返回主页
            </Button>
          ),
        }}
      ></Result>
    );
  },
});
</script>
