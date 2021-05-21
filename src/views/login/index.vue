<script lang="tsx">
import { Button, Form, Input, message, Typography } from "ant-design-vue";
import { defineComponent, reactive, ref } from "vue";
import ERR from "/@/apis/err";
import login from "/@/apis/modules/login";

export default defineComponent({
  name: "Login",
  components: {},
  setup() {
    const formRef = ref();

    const form = reactive({
      account: "",
      password: "",
    });

    const loading = reactive({
      form: false,
    });

    const rules = {
      account: [{ required: true, trigger: "blur" }],
      password: [{ required: true, trigger: "blur" }],
    };

    const dispatchLogin = async () => {
      await formRef.value.validate();
      try {
        loading.form = true;
        const response = await login(form);
        if (response.data.err === ERR.SUCCUESS) {
          message.error("登录成功");
        } else {
          message.success(response.data.msg);
        }
      } finally {
        loading.form = false;
      }
    };

    return () => (
      <div class='login'>
        <Typography.Title level={2}>登录页面</Typography.Title>
        <Form ref={formRef} model={form} rules={rules} scrollToFirstError>
          <Form.Item label="账号" name="account">
            <Input
              v-model={[form.account, "value"]}
              type="text"
              placeholder="请输入账号"
            />
          </Form.Item>
          <Form.Item label="密码" name="password">
            <Input
              v-model={[form.password, "value"]}
              type="text"
              placeholder="请输入密码"
            />
          </Form.Item>
        </Form>
        <Button type="primary" onClick={dispatchLogin} loading={loading.form}>
          登录
        </Button>
      </div>
    );
  },
});
</script>
<style lang="scss">
.login {
  width: 400px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  margin: 30vh auto;
}
</style>
