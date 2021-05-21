<script lang="tsx">
import { Button, Input, Form } from "ant-design-vue";
import { defineComponent } from "vue";

export default defineComponent({
  name: "Login",
  components: {
  },
  setup() {
    return () => (
      <>
        <Form>
          <Form.Item label='账号'>
            <Input type="text" placeholder="请输入账号"/>
          </Form.Item>
          <Form.Item label='密码'>
            <Input type="text" placeholder="请输入密码"/>
          </Form.Item> 
        </Form>
        <Button type="primary">登录</Button>
      </>
    )
  }
});
</script>
<style></style>
