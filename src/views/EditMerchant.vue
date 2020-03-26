<template>
  <d-container fluid class="main-content-container px-4 pb-4">
    <d-row>
      <d-col lg="12" class="mx-auto mt-4">
        <d-card class="card-small edit-user-details mb-4">
          <d-card-body class="p-0">
            <d-form class="py-4">
              <d-form-row class="mx-4">
                <d-col lg="8">
                  <d-form-row>

                    <d-col md="6" class="form-group">
                      <label>Name</label>
                      <d-input type="text" id="name" v-model="input.name" />
                    </d-col>

                    <d-col md="6" class="form-group">
                      <label>Category</label>
                      <d-input type="text" v-model="input.category_id" />
                    </d-col>
                  </d-form-row>
                </d-col>
              </d-form-row>
            </d-form>
          </d-card-body>
          <!-- Save Changes -->
          <d-card-footer class="border-top">
            <d-button size="sm" @click="editMerchant" class="btn-accent ml-auto d-table mr-3">
              Submit
            </d-button>
          </d-card-footer>

        </d-card>
      </d-col>
    </d-row>
  </d-container>
</template>

<script>
import address from '@/address';
import headers from '@/headers';

export default {
  data() {
    return {
      input: {
        name: "",
        category_id: "",
      }
    };
  },

  created: function()
  {
    this.getOneMerchant();
  },

  methods: {
    getOneMerchant() {
      var id = this.$route.params.id;
      this.axios.get(address + ":3000/get-one-merchant", {params: {id: id}, headers: headers.headers}).then((response) => {
        this.input.name = response.data[0].name;
        this.input.category_id = response.data[0].category_id;
      });
    },
    editMerchant() {
      let postObj = {
        id: this.$route.params.id,
        name: this.input.name,
        category_id: this.input.category_id,
      };
      this.axios.post(address + ':3000/edit-merchant', postObj, headers)
      .then((response) => {
        if(response.status == 200) {
          this.$router.push('/merchant');
        }
      });
    }
  }
};
</script>
