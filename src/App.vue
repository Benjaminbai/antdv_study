<template>
  <div id="app">
    <b-button type="primary">primary</b-button>
    <b-button type="danger">danger</b-button>
    <b-divider />
    <b-card title="Default size card" style="width: 300px">
      <a slot="extra" href="#">more</a>
      <p>card content</p>
      <p>card content</p>
      <p>card content</p>
    </b-card>
    <b-divider />
    <b-row>
      <b-col :span="12">1</b-col>
      <b-col :span="12">2</b-col>
    </b-row>
    <b-divider />
    <b-divider>With Text</b-divider>
    <b-divider />
    <b-empty />
    <b-divider />
    <b-form
      :form="form"
      :label-col="{ span: 5 }"
      :wrapper-col="{ span: 12 }"
      @submit="handleSubmit"
    >
      <b-form-item label="Note">
        <b-input
          v-decorator="[
            'note',
            { rules: [{ required: true, message: 'Please input your note!' }] },
          ]"
        />
      </b-form-item>
      <b-form-item label="Gender">
        <b-select
          v-decorator="[
            'gender',
            {
              rules: [
                { required: true, message: 'Please select your gender!' },
              ],
            },
          ]"
          placeholder="Select a option and change input text above"
          @change="handleSelectChange"
        >
          <b-select-option value="male"> male </b-select-option>
          <b-select-option value="female"> female </b-select-option>
        </b-select>
      </b-form-item>
      <b-form-item :wrapper-col="{ span: 12, offset: 5 }">
        <b-button type="primary" html-type="submit"> Submit </b-button>
      </b-form-item>
    </b-form>
    <b-divider />
    <b-icon type="edit" />
    <b-divider />
    <b-button type="primary" @click="showModal">
      Open Modal with async logic
    </b-button>
    <b-modal
      title="Title"
      :visible="visible"
      :confirm-loading="confirmLoading"
      @ok="handleOk"
      @cancel="handleCancel"
    >
      <p>{{ ModalText }}</p>
    </b-modal>
    <b-divider />
    <b-spin />
    <b-divider />
    <b-tabs default-active-key="1" @change="callback">
      <b-tab-pane key="1" tab="Tab 1"> Content of Tab Pane 1 </b-tab-pane>
      <b-tab-pane key="2" tab="Tab 2" force-render>
        Content of Tab Pane 2
      </b-tab-pane>
      <b-tab-pane key="3" tab="Tab 3"> Content of Tab Pane 3 </b-tab-pane>
    </b-tabs>
    <b-divider></b-divider>
    <b-tag color="pink"> pink </b-tag>
    <b-tag color="#108ee9"> pink </b-tag>

    <b-divider></b-divider>
    <b-title title="2222222"><b-button type="link">11111111</b-button></b-title>
    <b-divider></b-divider>
    <b-grid-card>111</b-grid-card>
    <b-divider></b-divider>
    <b-layout id="components-layout-demo-custom-trigger">
      <!-- <b-layout-sider
        v-model="collapsed"
        :trigger="null"
        collapsible
        theme="light"
      >
        <div class="logo" />
        <b-menu theme="light" mode="inline" :default-selected-keys="['1']">
          <b-menu-item key="1">
            <b-icon type="user" />
            <span>nav 1</span>
          </b-menu-item>
          <b-menu-item key="2">
            <b-icon type="video-camera" />
            <span>nav 2</span>
          </b-menu-item>
          <b-menu-item key="3">
            <b-icon type="upload" />
            <span>nav 3</span>
          </b-menu-item>
        </b-menu>
      </b-layout-sider> -->
      <b-layout>
        <b-layout-header>
          <b-icon
            class="trigger"
            :type="collapsed ? 'menu-unfold' : 'menu-fold'"
            @click="() => (collapsed = !collapsed)"
          />
        </b-layout-header>
        <b-layout-content
          :style="{
            margin: '24px 16px',
            padding: '24px',
            background: '#fff',
            minHeight: '280px',
          }"
        >
          Content
        </b-layout-content>
        <b-footer></b-footer>
        <b-layout-footer style="text-align: center">
          Bui-vue ©2021 Created by IQVIA
        </b-layout-footer>
      </b-layout>
    </b-layout>
    <b-divider></b-divider>
    <b-tooltip placement="topLeft">
      <template slot="title">
        <span>prompt text</span>
      </template>
      <b-button>TL</b-button>
    </b-tooltip>

    <b-divider></b-divider>
    <b-collapse v-model="activeKey">
      <b-collapse-panel key="1" header="This is panel header 1">
        <p>{{ text }}</p>
      </b-collapse-panel>
      <b-collapse-panel
        key="2"
        header="This is panel header 2"
        :disabled="false"
      >
        <p>{{ text }}</p>
      </b-collapse-panel>
      <b-collapse-panel key="3" header="This is panel header 3" disabled>
        <p>{{ text }}</p>
      </b-collapse-panel>
    </b-collapse>

    <b-divider></b-divider>
    <b-breadcrumb>
      <b-breadcrumb-item>Home</b-breadcrumb-item>
      <b-breadcrumb-item><a href="">Application Center</a></b-breadcrumb-item>
      <b-breadcrumb-item><a href="">Application List</a></b-breadcrumb-item>
      <b-breadcrumb-item>An Application</b-breadcrumb-item>
    </b-breadcrumb>
    <b-divider></b-divider>
    <b-dropdown>
      <a class="ant-dropdown-link" @click="(e) => e.preventDefault()">
        Hover me <b-icon type="down" />
      </a>
      <b-menu slot="overlay">
        <b-menu-item>
          <a href="javascript:;">1st menu item</a>
        </b-menu-item>
        <b-menu-item>
          <a href="javascript:;">2nd menu item</a>
        </b-menu-item>
        <b-menu-item>
          <a href="javascript:;">3rd menu item</a>
        </b-menu-item>
      </b-menu>
    </b-dropdown>
    <b-divider></b-divider>
    <b-checkbox> Checkbox </b-checkbox>
    <b-divider></b-divider>
    <b-pagination v-model="current" :total="50" show-less-items />

    <b-divider></b-divider>
    <b-table
      :row-selection="rowSelection"
      :columns="columns"
      :data-source="data"
    />
    <b-divider></b-divider>
    <b-radio>Radio</b-radio>

    <b-divider></b-divider>
    <b-range-picker>
      <b-icon slot="suffixIcon" type="smile" />
    </b-range-picker>

    <b-divider></b-divider>
    <b-time-picker use12-hours />

    <b-divider></b-divider>
    <b-slider range :default-value="[20, 50]" />

    <b-divider></b-divider>
    <b-steps :current="1" size="small">
      <b-step title="Finished" />
      <b-step title="In Progress" />
      <b-step title="Waiting" />
    </b-steps>

    <b-divider></b-divider>
    <b-switch default-checked />

    <b-divider></b-divider>
    <b-menu v-model="currentMenu" mode="horizontal">
      <b-menu-item key="mail"> Navigation One </b-menu-item>
      <b-menu-item key="app" disabled> Navigation Two </b-menu-item>
      <b-sub-menu>
        <span slot="title" class="submenu-title-wrapper"
          >Navigation Three - Submenu</span
        >
        <b-menu-item-group title="Item 1">
          <b-menu-item key="setting:1"> Option 1 </b-menu-item>
          <b-menu-item key="setting:2"> Option 2 </b-menu-item>
        </b-menu-item-group>
        <b-menu-item-group title="Item 2">
          <b-menu-item key="setting:3"> Option 3 </b-menu-item>
          <b-menu-item key="setting:4"> Option 4 </b-menu-item>
        </b-menu-item-group>
      </b-sub-menu>
      <b-menu-item key="alipay">
        <a href="https://antdv.com" target="_blank" rel="noopener noreferrer"
          >Navigation Four - Link</a
        >
      </b-menu-item>
    </b-menu>
    <b-divider></b-divider>
    <b-grid-card
      :hoverable="true"
      :bTitle="1111111"
      :iconType="edit"
      :desc="22222222"
      :hasChildren="true"
    >
    </b-grid-card>
  </div>
</template>

<script>
export default {
  name: "App",
  components: {},
  data() {
    const columns = [
      {
        title: "Name",
        dataIndex: "name",
      },
      {
        title: "Age",
        dataIndex: "age",
      },
      {
        title: "Address",
        dataIndex: "address",
      },
    ];

    const data = [];
    for (let i = 0; i < 46; i++) {
      data.push({
        key: i,
        name: `Edward King ${i}`,
        age: 32,
        address: `London, Park Lane no. ${i}`,
      });
    }
    return {
      formLayout: "horizontal",
      form: this.$form.createForm(this, { name: "coordinated" }),

      ModalText: "Content of the modal",
      visible: false,
      confirmLoading: false,
      collapsed: false,
      text: `A dog is a type of domesticated animal.Known for its loyalty and faithfulness,it can be found as a welcome guest in many households across the world.`,
      activeKey: ["1"],
      current: 2,
      data,
      columns,
      selectedRowKeys: [],
      currentMenu: ["mail"],
    };
  },
  computed: {
    rowSelection() {
      const { selectedRowKeys } = this;
      return {
        selectedRowKeys,
        onChange: this.onSelectChange,
        hideDefaultSelections: true,
        selections: [
          {
            key: "all-data",
            text: "Select All Data",
            onSelect: () => {
              this.selectedRowKeys = [...Array(46).keys()]; // 0...45
            },
          },
          {
            key: "odd",
            text: "Select Odd Row",
            onSelect: (changableRowKeys) => {
              let newSelectedRowKeys = [];
              newSelectedRowKeys = changableRowKeys.filter((key, index) => {
                if (index % 2 !== 0) {
                  return false;
                }
                return true;
              });
              this.selectedRowKeys = newSelectedRowKeys;
            },
          },
          {
            key: "even",
            text: "Select Even Row",
            onSelect: (changableRowKeys) => {
              let newSelectedRowKeys = [];
              newSelectedRowKeys = changableRowKeys.filter((key, index) => {
                if (index % 2 !== 0) {
                  return true;
                }
                return false;
              });
              this.selectedRowKeys = newSelectedRowKeys;
            },
          },
        ],
        onSelection: this.onSelection,
      };
    },
  },
  methods: {
    handleSubmit(e) {
      e.preventDefault();
      this.form.validateFields((err, values) => {
        if (!err) {
          console.log("Received values of form: ", values);
        }
      });
    },
    handleSelectChange(value) {
      console.log(value);
      this.form.setFieldsValue({
        note: `Hi, ${value === "male" ? "man" : "lady"}!`,
      });
    },

    showModal() {
      this.visible = true;
    },
    handleOk(e) {
      this.ModalText = "The modal will be closed after two seconds";
      this.confirmLoading = true;
      setTimeout(() => {
        this.visible = false;
        this.confirmLoading = false;
      }, 2000);
    },
    handleCancel(e) {
      console.log("Clicked cancel button");
      this.visible = false;
    },
    callback(key) {
      console.log(key);
    },
    onSelectChange(selectedRowKeys) {
      console.log("selectedRowKeys changed: ", selectedRowKeys);
      this.selectedRowKeys = selectedRowKeys;
    },
  },
};
</script>

<style>
#components-layout-demo-custom-trigger .trigger {
  font-size: 18px;
  line-height: 64px;
  cursor: pointer;
  transition: color 0.3s;
  color: #fff;
}

#components-layout-demo-custom-trigger .trigger:hover {
  color: #1890ff;
}

#components-layout-demo-custom-trigger .logo {
  height: 32px;
  background: rgba(255, 255, 255, 0.2);
  margin: 16px;
}
</style>
